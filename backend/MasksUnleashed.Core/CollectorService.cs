using System;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;

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
    }
}