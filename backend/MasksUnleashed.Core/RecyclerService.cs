using System;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core
{
    public class RecyclerService
    {
        private readonly IRecyclerRepository recyclerRepository;

        public RecyclerService(IRecyclerRepository recyclerRepository)
        {
            this.recyclerRepository = recyclerRepository;
        }
        
        public Task AddOrder(Guid recyclerId, RecyclingOrder recyclingOrder)
        {
            return recyclerRepository.AddRecyclingOrder(recyclerId, recyclingOrder);
        }
    }
}