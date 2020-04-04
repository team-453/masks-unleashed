using AutoMapper;
using MasksUnleashed.Core.Models;

namespace MasksUnleashed.Core
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<User, RecyclerUser>();
            CreateMap<User, CollectorUser>();
            CreateMap<RecyclerUser, User>();
            CreateMap<CollectorUser, User>();
        }
    }
}