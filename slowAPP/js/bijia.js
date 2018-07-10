$(function(){
  var productId = getSearch().productId;
  
  //渲染商品
  Route.getproduct(productId,function(info){
    //console.log(info);
    var temp = info.result[0].productName;
    
    temp = temp.split(" ");
    temp = temp[0] + ">";
    $(".list_tlt2").text(temp);
    //console.log(temp);
    
    $(".bj_show").html(template("showTpl",info));
  });


  //去购买
  Route.getproduct(productId,function(info){
    console.log(info);
    $(".bj_go").html(template("shop",info));
  });

  // 网友评价
  Route.getproductcom(productId,function(info){
    //console.log(info);
    $(".estimate_content").html(template("contentTpl",info));

  });
});