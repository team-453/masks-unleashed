using MasksUnleashed.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace MasksUnleached.Infrastructure
{
    public class MasksUnleachedContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseCosmos(
            "https://masks-unleashed-db.documents.azure.com:443/",
            "3weO1DNjuePq8Hoo1znVXHocL5oxDfjmnmXHKry3DGRG2aHijYD22cY1OfojchpW7qklfE1gk384nEi2uuVsoA==",
            databaseName: "masks-unleashed");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultContainer("User");
            modelBuilder.Entity<User>().ToContainer("User");

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> User { get; set; }
    }
}