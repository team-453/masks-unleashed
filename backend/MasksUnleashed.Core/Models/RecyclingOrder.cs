using System;
using System.Collections.ObjectModel;
using Microsoft.EntityFrameworkCore;

namespace MasksUnleashed.Core.Models
{
    [Owned]
    public class RecyclingOrder
    {
        public Guid Id { get; set; }
        public Guid Recycler { get; set; }
        public int MaskRecyclingCapacity { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndDate { get; set; }
        public Collection<AcceptedRecyclingOrder> AcceptedOrders { get; set; } = new Collection<AcceptedRecyclingOrder>();

        [Owned]
        public class AcceptedRecyclingOrder
        {
            public Guid Id { get; set; }
            public Guid CollectorId { get; set; }
            public string CollectorName { get; set; }
            public int MasksToDeliver { get; set; }
        }
    }
}