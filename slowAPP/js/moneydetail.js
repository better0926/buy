$(function(){
  var productid = getSearch().productid;
  console.log(productid);
  
  Route.getmoneyctrlproduct(productid,function(info){
    console.log(info);
    $(".cu").html(template("showTpl",info));
  });
  
});