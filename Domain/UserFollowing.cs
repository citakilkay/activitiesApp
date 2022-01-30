using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class UserFollowing
    {
        public string ObserverId { get; set; }
        public string Observer { get; set; }
        public string TargetId { get; set; }
        public User Targer { get; set; }
        
    }
}
