var request =require("request");
const https =require("http");


describe('Cart details', function()
{

   
it('status of cart api', function(done)
{
    const url1 = `http://localhost:8001/api/products`;
    console.log(url1);
    request.get({ url:url1},function(error,response,body)
   {
 
       if( response.statusCode==200)
       {
          console.log(body);
          var resbody=JSON.parse(body);

       }
      else 
      console.log("this is not a valid url");
       done();
   });


   })
})   