using Newtonsoft.Json;
using Powerpoint.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace Powerpoint.Api
{
    public class DBcontext
    {
        private string _path { get; set; }

        private List<Slide> Slides { get; set; }

        public DBcontext(string path)
        {
            this._path = path;
        }

        public List<Slide> GetSlides()
        {
            var file = File.ReadAllText(_path);
            this.Slides = JsonConvert.DeserializeObject<List<Slide>>(file);
            
            return this.Slides;
        }

        public void SaveSlides(List<Slide> slideList)
        {
            var fileContent = JsonConvert.SerializeObject(slideList);
            File.WriteAllText(_path, fileContent); 
        }
    }
}
