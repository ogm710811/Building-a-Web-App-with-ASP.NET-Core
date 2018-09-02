using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchSeeder
    {
        private readonly DutchContext _ctx;
        private readonly IHostingEnvironment _hostingEnviroment;
        private readonly UserManager<StoreUser> _userManager;

        public DutchSeeder(DutchContext ctx, IHostingEnvironment hostingEnviroment, UserManager<StoreUser> userManager)
        {
            this._ctx = ctx;
            this._hostingEnviroment = hostingEnviroment;
            this._userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();

            StoreUser user = await this._userManager.FindByEmailAsync("shawn@dutchtreat.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Orestes",
                    LastName = "Garcia",
                    Email = "orestes.garcia@gmail.com",
                    UserName = "orestes.garcia@gmail.com"
                };

                var result = await this._userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in seeder");
                }
            }

            if (!_ctx.Products.Any())
            {
                // need to create sample data
                var filePath = Path.Combine(_hostingEnviroment.ContentRootPath, "Data/art.json");
                var jasonData = File.ReadAllText(filePath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(jasonData);

                // adding products to the DB
                _ctx.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
                    User = user,
                    Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    }

                };

                // adding order to the DB
                _ctx.Orders.Add(order);

                _ctx.SaveChanges();
            }
        }
    }
}
