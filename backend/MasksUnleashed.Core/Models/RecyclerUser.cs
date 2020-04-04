using System.Collections.ObjectModel;

namespace MasksUnleashed.Core.Models
{
    public class RecyclerUser : User
    {
        public Collection<RecyclingOrder> RecyclingOrders { get; set; }
    }
}