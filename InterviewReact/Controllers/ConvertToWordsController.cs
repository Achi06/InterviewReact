using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConvertToWordsController : ControllerBase
    {
        
        [HttpGet]
        public IEnumerable<ConverToWords> Get()
        {
            var words = new ConverToWords { Words = "One" };
            return (IEnumerable<ConverToWords>)words;
        }
    }
}
