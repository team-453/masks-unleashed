using System;
using Newtonsoft.Json;

namespace MasksUnleashed.Core.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
    }
}