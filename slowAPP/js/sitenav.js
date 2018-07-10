$(function(){
  Route.getsitenav(function(info){
    console.log(info);
    $(".wrap").html(template("sitTpl",info));
  });
});