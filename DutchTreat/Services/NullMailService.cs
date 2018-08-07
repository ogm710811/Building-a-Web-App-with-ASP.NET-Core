using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Services
{
    public class NullMailService : IMailService
    {
        private readonly ILogger<NullMailService> _log;

        public NullMailService(ILogger<NullMailService> log)
        {
            this._log = log;
        }

        public void SendMessage(string to, string subject, string body)
        {
            // log messaage
            this._log.LogInformation($"To: {to} Subject: {subject} Body: {body}");
        }
    }
}
