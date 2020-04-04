using System;

namespace MasksUnleashed.Core.Models
{
    public abstract class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Fullname { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Postal { get; set; }
        /// <summary>
        /// The type of the user. Should be one of: CUSTOMER, COLLECTOR, RECYCLER
        /// </summary>
        public virtual string UserType { get; set; }
    }
}