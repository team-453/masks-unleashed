using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;

namespace MasksUnleached.Infrastructure
{
    public class UsersRepository : IUsersRepository
    {
        public Task<IList<User>> GetAll()
        {
            IList<User> list = new List<User> {new User {Username = "maxmuster"}};
            return Task.FromResult(list);
        }
    }
}