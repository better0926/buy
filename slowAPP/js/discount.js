$(function(){
  var productid = getSearch().productid;
  console.log(productid);
  Route.getdiscountproduct(productid,function(info){
    
    console.log(info);
    $(".cu").html(template("discountTpl",info));
  })
});