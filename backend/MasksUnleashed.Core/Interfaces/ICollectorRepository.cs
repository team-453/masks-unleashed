using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core.Interfaces
{
    public interface ICollectorRepository
    {
        Task<int> GetCollectorMaskCapacity(Guid collectorId);
        Task SetCollectorMaskCapacity(Guid collectorId, int newCapacity);
        Task AddMaskReception(Guid collectorId, DirtyMaskReception dirtyMaskReception);
        Task<List<DirtyMaskReception>> GetMaskReceptions(Guid collectorId);
    }
}