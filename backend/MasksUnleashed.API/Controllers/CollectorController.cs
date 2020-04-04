using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core;
using MasksUnleashed.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace MasksUnleashed.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CollectorController : ControllerBase
    {
        private readonly UserService userService;

        public CollectorController(UserService userService)
        {
            this.userService = userService;
        }
        
        [HttpGet]
        public Task<IList<CollectorUser>> GetUsers()
        {
            return userService.GetAllCollectors();
        }
        
        /// <summary>
        /// Returns the storage capacity of the desired collector.
        /// </summary>
        /// <param name="collectorId">The ID of the collector (GUID)</param>
        /// <returns>Returns the storage capacity of the collector</returns>
        [HttpGet("{collectorId}/capacity")]
        public Task<int> GetStorageCapacity(Guid collectorId)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Sets the storage capacity for the desired collector.
        /// </summary>
        /// <param name="collectorId">The ID of the collector (GUID)</param>
        /// <param name="amountOfMasks">Amount of infected masks that the collector is able to store *in total*.</param>
        /// <returns></returns>
        [HttpPut("{collectorId}/capacity")]
        public Task SetStorageCapacity(Guid collectorId, int amountOfMasks)
        {
            throw new NotImplementedException();
        }
    }
}