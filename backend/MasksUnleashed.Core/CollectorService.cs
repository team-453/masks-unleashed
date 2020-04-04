using System;
using System.Threading.Tasks;

namespace MasksUnleashed.Core
{
    public class CollectorService
    {
        public Task<int> GetCollectorMaskCapacity(Guid collectorId)
        {
            return Task.FromResult(1);
        }
    }
}