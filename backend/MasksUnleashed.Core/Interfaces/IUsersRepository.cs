using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core.Interfaces
{
    public interface IUsersRepository
    {
        Task<IList<User>> GetAll();
        Task<Guid> Insert(User user);
        Task<IList<CollectorUser>> GetCollectors();
        Task<User> GetUserById(Guid userId);
    }
}