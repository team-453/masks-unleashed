using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace MasksUnleached.Infrastructure
{
    public class CollectorRepository : ICollectorRepository
    {
        public async Task<int> GetCollectorMaskCapacity(Guid collectorId)
        {
            using (var context = new MasksUnleachedContext())
            {
                var capacity = await context.CollectorUsers.Where(user => user.Id.Equals(collectorId))
                    .Select(collector => collector.MaskStorageCapacity)
                    .FirstAsync();
                return capacity;
            }
        }

        public async Task SetCollectorMaskCapacity(Guid collectorId, int newCapacity)
        {
            using (var context = new MasksUnleachedContext())
            {
                var collector = await context.CollectorUsers.FindAsync(collectorId);
                collector.MaskStorageCapacity = newCapacity;
                context.Update(collector);

                await context.SaveChangesAsync();
            }
        }

        public async Task AddMaskReception(Guid collectorId, DirtyMaskReception dirtyMaskReception)
        {
            using (var context = new MasksUnleachedContext())
            {
                var collector = await context.CollectorUsers.FindAsync(collectorId);
                if (collector.DirtyMasksReceptions == null)
                {
                    collector.DirtyMasksReceptions= new List<DirtyMaskReception>(1);
                }
                collector.DirtyMasksReceptions.Add(dirtyMaskReception);
                context.Update(collector);

                await context.SaveChangesAsync();
            }
        }

        public async Task<List<DirtyMaskReception>> GetMaskReceptions(Guid collectorId)
        {
            using (var context = new MasksUnleachedContext())
            {
                var receptions = await context.CollectorUsers
                    .Where(user => user.Id.Equals(collectorId))
                    .FirstAsync();
                return receptions.DirtyMasksReceptions;
            }
        }
    }
}