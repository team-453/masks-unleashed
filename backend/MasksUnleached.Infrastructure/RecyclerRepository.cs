using System;
using System.Collections.ObjectModel;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;

namespace MasksUnleached.Infrastructure
{
    public class RecyclerRepository : IRecyclerRepository
    {
        public async Task AddRecyclingOrder(Guid recyclerId, [NotNull]RecyclingOrder recyclingOrder)
        {
            await using var context = new MasksUnleachedContext();
            var recycler = await context.RecyclerUsers.FindAsync(recyclerId);
            if (recycler.RecyclingOrders == null)
            {
                recycler.RecyclingOrders = new Collection<RecyclingOrder>();
            }
            recycler.RecyclingOrders.Add(recyclingOrder);

            context.Update(recycler);
            await context.SaveChangesAsync();
        }
    }
}