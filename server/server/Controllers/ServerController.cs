using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace server.Controllers
{
    public class ServerController : Controller
    {
        // GET: Server -> Login
        public ActionResult Login()
        {
            return View();
        }

        // GET: Server
        public ActionResult Index()
        {
            return View();
        }

        // GET: Server Information
        public ActionResult Info()
        {
            return View();
        }

        // GET: Server Admin Manager
        public ActionResult Users()
        {
            return View();
        }

        // GET: Timeline
        public ActionResult Timeline()
        {
            return View();
        }

        // GET: Profile
        public ActionResult Profile()
        {
            return View();
        }
    }
}