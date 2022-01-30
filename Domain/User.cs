using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Domain
{
    public class User //: IdentityUser
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string? ProfileImgPath { get; set; }
        //public ICollection<ActivityAttendee> AttendingActivities { get; set; }
        public ICollection<Activity> CreatedActivities { get; set; }
        public ICollection<UserFollowing> Followings { get; set; }
        public List<string> MyProperty { get; set; }
        public ICollection<UserFollowing> Followers { get; set; }
        //public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    }
}
