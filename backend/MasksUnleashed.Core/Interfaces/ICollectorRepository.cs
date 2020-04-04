using System;
using System.Threading.Tasks;

namespace MasksUnleashed.Core.Interfaces
{
    public interface ICollectorRepository
    {
        Task<int> GetCollectorMaskCapacity(Guid collectorId);
    }
}