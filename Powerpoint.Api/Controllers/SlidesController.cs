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
    public class SlidesController : ApiController
    {
        private const int TIMEOUT = 1000;
        private DBcontext _dbContext { get; set; }

        public SlidesController()
        {
            this._dbContext = new DBcontext(Path.Combine(HostingEnvironment.ApplicationPhysicalPath, @"App_Data\db.json"));
        }

        // GET api/slides
        public IEnumerable<Slide> Get()
        {
            System.Threading.Thread.Sleep(TIMEOUT);
            //var seed = Seed();
            return _dbContext.GetSlides();
        }

        private void Seed()
        {
            var list = new List<Slide>();
            list.Add(new Slide()
            {
                Id = "1",
                Content = "content",
                ImageUrl = "urlImage",
                SlideType = SlideType.TitleOnly,
                Title = "title"
            });
            list.Add(new Slide()
            {
                Id = "2",
                Content = "content,",
                ImageUrl = "urlImage",
                SlideType = SlideType.TitleOnly,
                Title = "title"
            });
            _dbContext.SaveSlides(list);
        }

        // GET api/slides/5
        public Slide Get(string id)
        {
            System.Threading.Thread.Sleep(TIMEOUT);

            var slideList = _dbContext.GetSlides();
            var slide = slideList.Single(s => s.Id == id);

            return slide;
        }

        // POST api/slides
        public Slide Post([FromBody]Slide value)
        {
            var slideList = _dbContext.GetSlides();
            value.Id = GetId();
            slideList.Add(value);
            _dbContext.SaveSlides(slideList);
            return value;
        }

        // PUT api/slides/5
        public Slide Put(string id, [FromBody]Slide value)
        {
            var slideList = _dbContext.GetSlides();
            var slide = slideList.Single(s => s.Id == id);
            var indexSlide = slideList.IndexOf(slide);
            slideList[indexSlide] = value;

            _dbContext.SaveSlides(slideList);

            return value;
        }

        // DELETE api/slides/5
        public void Delete(string id)
        {
            var slideList = _dbContext.GetSlides();

            slideList.Remove(slideList.Single(s => s.Id == id));
            _dbContext.SaveSlides(slideList);
        }

        //Generate uique Id for slide
        private string GetId()
        {
            return Guid.NewGuid().ToString();
        }
    }
}
