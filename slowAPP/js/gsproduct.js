$(function(){
 
  Route.getgsshop(function(info){
    console.log(info);
    //渲染下拉菜单中的店铺
    $(".popsort .pop_list").html(template("sortTpl",info));
    
  });
  Route.getgsshoparea(function(info){
    console.log(info);
    // 区域渲染
    $(".popadd .pop_list").html(template("addTpl",info));
  });

  //给每一个 nav li注册事件
  $(".nav .list").on("click",function(){

    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    $(".pop").eq(index).toggleClass("hide");
    //此处有个问题没有解决
    //console.log(index);
  });

  //商品列表

  var shopid = $(".pop_list li").data("shopid") || 0;//初始值 店铺
  var areaid = $(".pop_list li").data("areaid") || 0;//处置值 区域
  //console.log(shopid, areaid);
  

  //var areaid = 0;

  function render(shopid, areaid){
    Route.getgsproduct(shopid, areaid,function (info) {
      console.log(info);
      $(".wrap").html(template("gsTpl", info));
    });
  }
 render(0,0)
  

  //筛选
  //var shopid 
  $(".popsort").on("click",".one",function(){
    //获取店铺id
    shopid = $(this).data("shopid");
    var txt1 = $(this).children().text();

    console.log(shopid,txt1);
    $(".name1").text(txt1);

    $(this).parent().parent().addClass("hide");//点击后隐盒子
  });


  //二级筛选事件
  $(".popadd").on("click", ".two", function () {

    //获取区域id 和 区域文本
    areaid = $(this).data("areaid");
    var txt = $(this).children().text();
    var arr = [];
    arr = txt.split("（");
    txt = arr[0];
    $(".name2").text(txt);
    console.log(areaid, arr);

    $(this).parent().parent().addClass("hide"); //点击后隐盒子
    render(shopid, areaid);
    console.log(shopid, areaid);
    
  });

});