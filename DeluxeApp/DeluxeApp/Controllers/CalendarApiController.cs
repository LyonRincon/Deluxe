using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeluxeApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeluxeApp.Controllers
{
    [Produces("application/json")]
    [Route("api/CalendarApi")]
    public class CalendarApiController : Controller
    {
        // GET api/CalendarApi
        [HttpGet]
        public Calendar Get()
        {
            var calendar = new Calendar
            {
                TasksList = new List<TaskItem>()
            };

            calendar.TasksList.Add(new TaskItem { Date = "2018-01-1", Description = "Task 1 of 2018-1-1" });
            calendar.TasksList.Add(new TaskItem { Date = "2018-01-1", Description = "Task 2 of 2018-1-1" });
            calendar.TasksList.Add(new TaskItem { Date = "2018-01-3", Description = "Task 1 of 2018-1-3" });
            calendar.TasksList.Add(new TaskItem { Date = "2018-01-5", Description = "Task 1 of 2018-1-5" });
            calendar.TasksList.Add(new TaskItem { Date = "2018-01-5", Description = "Task 2 of 2018-1-5" });
            calendar.TasksList.Add(new TaskItem { Date = "2018-01-5", Description = "Task 3 of 2018-1-5" });
            calendar.TasksList.Add(new TaskItem { Date = "2018-01-10", Description = "Task 1 of 2018-1-10" });

            return calendar;
        }
    }
}