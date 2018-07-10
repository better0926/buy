$(function(){
  //动态设置 nav的宽度
  Route.getbaicaijiatitle(function(info){
    //console.log(info);
    $(".wrap_nav").html(template("navTpl",info));
    var wrap = document.querySelector(".wrap_nav"),
        width   = 0,
        $li = $(".nav");

    $li.each(function(el){
      //console.log(el);
      width += $($li[el]).outerWidth(true);
    });

    //动态计算nav ul的宽度
    wrap.style.width = (width)/75+"rem";

    //传的是父元素的选择器
    new IScroll(".mm_nav", {
      scrollY: false,//禁用垂直滚动
      scrollX: true//启动水平滚动
    });

    //设置导航的点击状态
    var $lis = $('.wrap_nav').children('li');
    var ulrParam = getSearch().titleid || 0;
    $lis.eq(ulrParam).addClass('now');


    //渲染商品列表
    function render(){
      Route.getbaicaijiaproduct(ulrParam, function (info) {
        console.log(info);
        $(".pro_wrap").html(template("proTpl", info));
      });
    }
     render()
    
  });
});