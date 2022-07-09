using Microsoft.AspNetCore.Mvc;
namespace angularjs_webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    [HttpGet(Name = "GetRules")]
    public IEnumerable<string> Get()
    {
        return new string[] {
            "Rule 03"
            };
    }
}
