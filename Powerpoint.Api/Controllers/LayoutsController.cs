using Powerpoint.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Powerpoint.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LayoutsController : ApiController
    {
        private readonly string path = Path.Combine(HostingEnvironment.ApplicationPhysicalPath, @"App_Data\layouts.json");

        public IEnumerable<Powerpoint.Api.Models.Layout> Get()
        {
            System.Threading.Thread.Sleep(5000);

            var file = File.ReadAllText(path);
            var layouts = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Layout>>(file);
            return layouts;
        }


        public void Post([FromBody]Slide value)
        {
            var x = "";
        }

        // PUT api/slides/5
        public void Put(string id, [FromBody]Slide value)
        {
            var x = "";
        }

    }
}
