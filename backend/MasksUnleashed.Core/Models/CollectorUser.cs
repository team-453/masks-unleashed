using System.Collections.Generic;

namespace MasksUnleashed.Core.Models
{
    public class CollectorUser : User
    {
        public int MaskStorageCapacity { get; set; }
        public List<DirtyMaskReception> DirtyMasksReceptions { get; set; }
    }
}