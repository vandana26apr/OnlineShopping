var request =require("request");
const https =require("http");
var expect =require("expect");


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
          var count_curr=0;
        for (var each_ele in resbody.products){
              //console.log(json_body.products[each_ele].availableSizes[each_av]);
              if(resbody.products[each_ele].currencyId == "USD"){
                 count_curr=count_curr+1;
              }
        }
       }
      else 
      console.log("this is not a valid url");
       done();
   });


   })
   
})   
