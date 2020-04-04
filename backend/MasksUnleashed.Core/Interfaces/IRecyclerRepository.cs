using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core.Interfaces
{
    public interface IRecyclerRepository
    {
        Task AddRecyclingOrder(Guid recyclerId, RecyclingOrder recyclingOrder);
        Task<List<RecyclingOrder>> GetOrders(Guid recyclerId);
    }
}