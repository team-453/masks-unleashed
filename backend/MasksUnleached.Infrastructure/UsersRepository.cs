using System;
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
            await using var context = new MasksUnleachedContext();
            var list = await context.CollectorUsers.ToListAsync();
            IList<User> users = await context.User.ToListAsync();
            return users;
        }

        public async Task<Guid> Insert(User user)
        {
            await using var context = new MasksUnleachedContext();
            context.User.Add(user);
            await context.SaveChangesAsync();
            return user.Id;
        }

        public async Task<IList<CollectorUser>> GetCollectors()
        {
            await using var context = new MasksUnleachedContext();
            IList<CollectorUser> users = await context.CollectorUsers.ToListAsync();
            return users;
        }
    }
}