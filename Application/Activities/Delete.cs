using System.Net;
using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Application.Errors;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
           public Guid Id { get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null)
                    // throw new Exception("Could not find activity");
                    throw new RestException(HttpStatusCode.NotFound, new {activity = "Not found"});

                _context.Remove(activity);

                // handler logic
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem deleting activity");
            }
        }
    }
}