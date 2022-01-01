using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest {
            public Activity Activity { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            public DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                activity.Title = request.Activity.Title ?? activity.Title;
                activity.Category = request.Activity.Category ?? activity.Category;
                activity.City = request.Activity.City ?? activity.City;
                activity.Description = request.Activity.Description ?? activity.Description;
                activity.Venue = request.Activity.Venue ?? activity.Venue;
                return Unit.Value;

            }
        }
    }
}
