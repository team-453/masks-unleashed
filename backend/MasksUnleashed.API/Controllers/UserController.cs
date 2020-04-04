using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core;
using MasksUnleashed.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace MasksUnleashed.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController :  ControllerBase
    {
        private readonly UserService userService;

        public UserController(UserService userService)
        {
            this.userService = userService;
        }
        
        /// <summary>
        /// Returns all the users registered.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public Task<IList<User>> Get()
        {
            return userService.GetAll();
        }

        /// <summary>
        /// Registers a new user in the database.
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public Task Register(User user)
        {
            return userService.Register(user);
        }
    }
}