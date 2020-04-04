using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Models;
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
        [HttpGet("{recyclerId}/capacity")]
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
        [HttpPut("{recyclerId}/capacity")]
        public Task<int> SetCapacity([FromRoute]Guid recyclerId, int amountOfMasks)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Gets all the orders of the recycler.
        /// </summary>
        /// <param name="recyclerId">The GUID ID of the recycler.</param>
        /// <returns>Returns all orders of the recycler</returns>
        [HttpGet("{recyclerId}/orders")]
        public Task<List<RecyclingOrder>> GetOrders([FromRoute]Guid recyclerId)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Adds a new order to the recycler.
        /// </summary>
        /// <param name="recyclerId">The GUID ID of the recycler.</param>
        /// <param name="recyclingOrder">The new recycling order</param>
        /// <returns>Returns all orders of the recycler</returns>
        [HttpPost("{recyclerId}/orders")]
        public Task AddOrder([FromRoute]Guid recyclerId, RecyclingOrder recyclingOrder)
        {
            throw new NotImplementedException();
        }
    }
}