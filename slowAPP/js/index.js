$(function(){

  //首页菜单栏渲染
  Route.getindexmenu(function(info){
    //console.log(info);
    $(".nav").html(template("navTpl",info));

    //获取nav中最后四个元素
    var lastFour = $(".nav").children('.nav_list').eq(7).nextAll().addClass("hide");
    //lastFour.addClass("hide");
    //console.log(lastFour);

    //获取到加载更多这个 元素
    //var $more = $(".nav_list:nth-child(8) > a");
    var $more = $(".nav_list").eq(7);
    //console.log($more);
    $more.on("click",function(){
      lastFour.toggleClass("hide");
    });
  });


  //首页商品折扣列表
  Route.getmoneyctrl(function(info){
    console.log(info);
    $(".pro_wrap").html(template("proTpl",info));
  })
 
});