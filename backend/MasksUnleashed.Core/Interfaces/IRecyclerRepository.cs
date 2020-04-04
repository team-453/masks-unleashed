using System;
using System.Threading.Tasks;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core.Interfaces
{
    public interface IRecyclerRepository
    {
        Task AddRecyclingOrder(Guid recyclerId, RecyclingOrder recyclingOrder);
    }
}