using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace MasksUnleached.Infrastructure
{
    public class UsersRepository : IUsersRepository
    {
        public async Task<IList<User>> GetAll()
        {
            using (var context = new MasksUnleachedContext())
            {
                IList<User> users = await context.User.ToListAsync();
                return users;
            }
        }
    }
}