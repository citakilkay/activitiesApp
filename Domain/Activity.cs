using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime LastModificationDateTime { get; set; }
        //public List<Modification> Modifications { get; set; } // hepsini joinlemek daha mantıklı olabilir.
        public List<string> Comments { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }
        public string Description { get; set; }
        //public Category Category { get; set; } // enum olacak
        public string City { get; set; } 
        public string Venue { get; set; }
        public string? Latitude { get; set; }
        public string? Longitude { get; set; }
        //public List<User> AttendingUsers { get; set; }
        //public User CreatorUser { get; set; }
        public string? ImagePath { get; set; }
        //public List<React> Reactivities { get; set; }
    }
}
