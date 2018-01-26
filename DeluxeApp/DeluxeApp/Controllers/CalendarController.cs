using Microsoft.AspNetCore.Mvc;

namespace DeluxeApp.Controllers
{
    public class CalendarController : Controller
    {
        [Route("calendar")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
