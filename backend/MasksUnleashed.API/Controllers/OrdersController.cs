using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace MasksUnleashed.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {
        /// <summary>
        /// Returns all recycling orders.
        /// </summary>
        /// <returns></returns>
        [HttpGet("recycling")]
        public Task<List<RecyclingOrder>> GetAllRecyclingOrders()
        {
            throw new NotImplementedException();
        }
    }
}