using DutchTreat.Data;
using DutchTreat.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    public class AppController: Controller
    {
        private readonly IMailService _mailService;
        private readonly DutchContext _context;

        public AppController(IMailService mailService, DutchContext context)
        {
            this._mailService = mailService;
            this._context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us";
            //throw new InvalidOperationException("bad things happen");
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(Models.Contact model)
        {
            ViewBag.Title = "Contact Us";
            if (ModelState.IsValid)
            {
                // send email
                _mailService.SendMessage("ogm710811@gmail.com", model.Subject, $"From: {model.Name} -{model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear(); // clear the form
            }
            return View();
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }

        public IActionResult Shop()
        {
            //var result = _context.Products
            //    .OrderBy(p => p.Category)
            //    .ToList();

            // same query using Linq Query
            var result = from p in _context.Products
                         orderby p.Category
                         select p;

            return View(result.ToList());
        }
    }
}
