using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleached.Infrastructure;
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
        private readonly CollectorService collectorService;

        public CollectorController(UserService userService, CollectorService collectorService)
        {
            this.userService = userService;
            this.collectorService = collectorService;
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
            return collectorService.GetCollectorMaskCapacity(collectorId);
        }

        /// <summary>
        /// Sets the storage capacity for the desired collector.
        /// </summary>
        /// <param name="collectorId">The ID of the collector (GUID)</param>
        /// <param name="amountOfMasks">Amount of infected masks that the collector is able to store *in total*.</param>
        /// <returns></returns>
        [HttpPut("{collectorId}/capacity")]
        public Task SetStorageCapacity(Guid collectorId, [FromBody] int amountOfMasks)
        {
            return collectorService.SetCollectorMaskCapacity(collectorId, amountOfMasks);
        }

        [HttpPost("{collectorId}/reception")]
        public Task AddMaskReception(Guid collectorId, DirtyMaskReception dirtyMaskReception)
        {
            return collectorService.AddMaskReception(collectorId, dirtyMaskReception);
        }

        [HttpGet("{collectorId}/reception")]
        public Task<List<DirtyMaskReception>> GetMaskReceptions(Guid collectorId)
        {
            return collectorService.GetMaskReceptions(collectorId);
        }
    }
}