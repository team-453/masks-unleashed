using System;
using System.Collections.Generic;

namespace MasksUnleashed.Core.Models
{
    public class RecyclingOrder
    {
        public Guid Id { get; set; }
        public Guid Recycler { get; set; }
        public int MaskRecyclingCapacity { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndDate { get; set; }
        public List<AcceptedRecyclingOrder> AcceptedOrders { get; set; } = new List<AcceptedRecyclingOrder>();

        public class AcceptedRecyclingOrder
        {
            public Guid CollectorId { get; set; }
            public string CollectorName { get; set; }
            public int MasksToDeliver { get; set; }
        }
    }
}