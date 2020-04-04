using System;
using Microsoft.EntityFrameworkCore;

namespace MasksUnleashed.Core.Models
{
    [Owned]
    public class DirtyMaskReception
    {
        public DateTime ReceptionDate { get; set; }
        public int AmountOfMasks { get; set; }
    }
}