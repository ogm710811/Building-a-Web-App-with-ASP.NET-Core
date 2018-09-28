using DutchTreat.Data;
using DutchTreat.Services;
using Microsoft.AspNetCore.Authorization;
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
        private readonly IDutchRepository _repository;

        //private readonly DutchContext _context;

        //public AppController(IMailService mailService, DutchContext context)
        public AppController(IMailService mailService, IDutchRepository repository)
        {
            this._mailService = mailService;
            this._repository = repository;
            //this._context = context;
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
        public IActionResult Contact(Models.ContactViewModel model)
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

        [Authorize]
        public IActionResult Shop()
        {
            //var result = _context.Products
            //    .OrderBy(p => p.Category)
            //    .ToList();

            // same query using Linq Query
            //var result = from p in _context.Products
            //             orderby p.Category
            //             select p;

            // getting rid of this line ones we implement angular 
            //var result = _repository.GetAllProducts();

            return View();
        }
    }
}
