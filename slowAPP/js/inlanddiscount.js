$(function(){
  Route.getinlanddiscount(function(info){
    console.log(info);
    $(".wrap").html(template("pro",info));
  }); 
});