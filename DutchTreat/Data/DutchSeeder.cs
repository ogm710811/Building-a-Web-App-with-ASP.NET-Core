using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
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

        public DutchSeeder(DutchContext ctx, IHostingEnvironment hostingEnviroment)
        {
            this._ctx = ctx;
            this._hostingEnviroment = hostingEnviroment;
        }

        public void Seed()
        {
            _ctx.Database.EnsureCreated();
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
