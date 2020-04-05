using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MasksUnleashed.Core.Interfaces;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core
{
    public class UserService
    {
        private readonly IUsersRepository usersRepository;
        private readonly IMapper mapper;

        public UserService(IUsersRepository usersRepository, IMapper mapper)
        {
            this.usersRepository = usersRepository;
            this.mapper = mapper;
        }
        
        public async Task<IList<User>> GetAll()
        {
            var typedUsers = await usersRepository.GetAll();
            return mapper.Map<List<User>>(typedUsers);
        }

        public Task<IList<CollectorUser>> GetAllCollectors()
        {
            return usersRepository.GetCollectors();
        }

        public Task<Guid> Register(User user)
        {
            switch (user.UserType)
            {
                case "RecyclerUser":
                    user = mapper.Map<RecyclerUser>(user);
                    break;
                case "CollectorUser":
                    user = mapper.Map<CollectorUser>(user);
                    break;
            }
            
            return usersRepository.Insert(user);
        }

        public async Task<User> GetUserById(Guid userId)
        {
            var typedUser = await usersRepository.GetUserById(userId);
            return mapper.Map<User>(typedUser);
        }
    }
}