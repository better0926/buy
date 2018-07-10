$(function(){
 
  Route.getcategorytitle(function(res){
    //console.log(res);
    $(".ct_tlt").html(template("cateTpl",res));

    /* var $list = $(".list");
    console.log($list);
    $list.each(function(i,e){
      var dataId = $(e).data("title-id");
      console.log(dataId); */
      
    //});
    

    //点击显示隐藏二级菜单
    var titleId 
    $(".one_list").on("click",function(){
      $(this).siblings().toggleClass("hide");
      titleId = $(this).parent().data("title-id");
      var that = $(this)

      //当前one_list下的元素渲染模板
      Route.getcategory(titleId, function (info) {
        console.log(info);
        that.next().html(template("subTpl", info));
      });
    });
    //console.log(titleId);
  });
});