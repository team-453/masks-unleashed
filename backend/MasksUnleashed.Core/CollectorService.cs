using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core
{
    public class CollectorService
    {
        private readonly ICollectorRepository collectorRepository;

        public CollectorService(ICollectorRepository collectorRepository)
        {
            this.collectorRepository = collectorRepository;
        }
        
        public Task<int> GetCollectorMaskCapacity(Guid collectorId)
        {
            return collectorRepository.GetCollectorMaskCapacity(collectorId);
        }

        public Task SetCollectorMaskCapacity(Guid collectorId, int newCapacity)
        {
            return collectorRepository.SetCollectorMaskCapacity(collectorId, newCapacity);
        }

        public Task AddMaskReception(Guid collectorId, DirtyMaskReception dirtyMaskReception)
        {
            return collectorRepository.AddMaskReception(collectorId, dirtyMaskReception);
        }

        public Task<List<DirtyMaskReception>> GetMaskReceptions(Guid collectorId)
        {
            return collectorRepository.GetMaskReceptions(collectorId);
        }
    }
}