using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebText1.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Account()
        {
            return View();
        }
        public ActionResult MenuShopping()
        {
            return View();
        }
        public ActionResult Total()
        {
            return View();
        }
        public ActionResult menu()
        {
            return View();
        }
        public ActionResult CaPhe()
        {
            return View();
        }
        public ActionResult AME()
        {
            return View();
        }
        public ActionResult TraTraiCay(){ return View();}
        public ActionResult TraSua(){ return View();}
        public ActionResult Matcha(){ return View();}
        public ActionResult Chocolate() {
            return View(); 
        }
        public ActionResult ThucUongDaXay()
        {
            return View();
        }
        public ActionResult LocalProduct()
        {
            return View();
        }
    }
}