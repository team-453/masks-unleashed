using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MasksUnleashed.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecyclerController : ControllerBase
    {
        /// <summary>
        /// Returns the amount of masks the recycler is able to recycle.
        /// </summary>
        /// <param name="recyclerId">ID of the Recycler (GUID)</param>
        /// <returns>Returns the amount of masks the recycler is able to recycle.</returns>
        [HttpGet("capacity/{recyclerId}")]
        public Task<int> GetCapacity([FromRoute]Guid recyclerId)
        {
            throw new NotImplementedException();
        }
        
        /// <summary>
        /// Sets the amount of masks the recycler is able to recycle.
        /// </summary>
        /// <param name="recyclerId">ID of the Recycler (GUID)</param>
        /// <param name="amountOfMasks">Amount of infected masks</param>
        /// <returns>Sets the amount of masks the recycler is able to recycle.</returns>
        [HttpPost("capacity/{recyclerId}")]
        public Task<int> SetCapacity(Guid recyclerId, int amountOfMasks)
        {
            throw new NotImplementedException();
        }
    }
}