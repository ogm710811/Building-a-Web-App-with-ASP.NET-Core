#pragma checksum "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\App\Shop.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "dfe8c9a93ff601983161d32220f5a204c14b7383"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_App_Shop), @"mvc.1.0.view", @"/Views/App/Shop.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/App/Shop.cshtml", typeof(AspNetCore.Views_App_Shop))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\_ViewImports.cshtml"
using DutchTreat.Controllers;

#line default
#line hidden
#line 2 "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\_ViewImports.cshtml"
using DutchTreat.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dfe8c9a93ff601983161d32220f5a204c14b7383", @"/Views/App/Shop.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"900ef91106ef2fe66a8a4bf21dcdb44a96f82a2e", @"/Views/_ViewImports.cshtml")]
    public class Views_App_Shop : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<DutchTreat.Data.Entities.Product>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(54, 25, true);
            WriteLiteral("<h1>Shop</h1>\r\n<p>Count: ");
            EndContext();
            BeginContext(80, 13, false);
#line 3 "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
     Write(Model.Count());

#line default
#line hidden
            EndContext();
            BeginContext(93, 6, true);
            WriteLiteral("</p>\r\n");
            EndContext();
#line 4 "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
 foreach (var p in Model)
{

#line default
#line hidden
            BeginContext(129, 8, true);
            WriteLiteral("    <li>");
            EndContext();
            BeginContext(138, 7, false);
#line 6 "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
   Write(p.Title);

#line default
#line hidden
            EndContext();
            BeginContext(145, 7, true);
            WriteLiteral("</li>\r\n");
            EndContext();
#line 7 "D:\ASP.NET Core\Building a Web App with ASP.NET Core - PLURALSIGHT\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
}

#line default
#line hidden
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<DutchTreat.Data.Entities.Product>> Html { get; private set; }
    }
}
#pragma warning restore 1591
