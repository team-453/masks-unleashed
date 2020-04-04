using System.Collections.Generic;
using System.Threading.Tasks;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core
{
    public class UserService
    {
        private readonly IUsersRepository usersRepository;

        public UserService(IUsersRepository usersRepository)
        {
            this.usersRepository = usersRepository;
        }
        
        public Task<IList<User>> GetAll()
        {
            return usersRepository.GetAll();
        }

        public Task<IList<CollectorUser>> GetAllCollectors()
        {
            return usersRepository.GetCollectors();
        }

        public Task Register(User user)
        {
            return usersRepository.Insert(user);
        }
    }
}