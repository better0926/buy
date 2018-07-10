$(function(){
  Route.getbrandtitle(function(info){
    console.log(info);
    $(".ct_tlt").html(template("brandTpl",info));
  });
});