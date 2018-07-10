$(function(){
  
  //getSearch().brandtitleid 获取地址栏参数方法 定义在common.js中
  setBrand($(".bd_list"), getSearch().brandtitleid);

  function setBrand(el, brandtitleid){
    Route.getbrand(brandtitleid,function(info){
      //console.log(info);
      $(el).html(template("good", info));

      //这里调用setbrandproductlist 方法，目的是拿到返回数据中的 brandtitleid
      //console.log(info.result[0].brandTitleId);
      
      //获取到getbrand中返回的品牌brandTitleId 
      setbrandproductlist(".sell", info.result[0].brandTitleId);
    });
  };

  //销量
  function setbrandproductlist(el, brandtitleid){
    var pagesize = 4;
    Route.getbrandproductlist(brandtitleid, pagesize,function(info){
      //console.log(info);
      
      $(el).html(template("sellTpl", info));

      //调用getproductcom方法，显然评论区com
      //console.log(info.result);
      
      getproductcom($(".com"),info.result);
    });
  };

  //评论
  function getproductcom(el, productlist){
    var arr = [];
    //console.log(productlist);//返回的是销量中返回的数据
    //遍历返回的参数数组将 productId存到数组中
    for (var i = 0; i < productlist.length; i++){
      arr.push(productlist[i].productId);
    };
    //console.log(arr[0]);

    //提取数组result返回的数组中的第0个元素中的 productid

    Route.getproduct(arr[0],function(info){
      //console.log(info);
      var data = info.result;//返回的评论
      console.log(data);
      for(var i = 0; i < data.length; i++){
        Route.getproductcom(arr[0],function(info){
          console.log(info);
          var res = info.result;
          console.log(res);
          var resArr = [];

          for(var i = 0; i < res.length; i++){
            resArr.push({
              "productImg": data[0].productImg,
              "productName": data[0].productName,
              "comName": res[i].comName,
              "comTime": res[i].comTime,
              "comContent": res[i].comContent
            });
          }
          console.log(resArr);
          $(el).html(template("dis",{result:resArr}));
          
        });
      };
    })

    /* Route.getproductcom(productid,function(info){
      console.log(info);
      $(el).html(template("dis",info));
    }); */
  }


});

/* $(function(){
  var brandtitleid = getSearch().brandtitleid;
 //console.log(brandtitleid);
  
  var pagesize = 4;
  //console.log(brandtitleid);

  // 选品牌
  Route.getbrand(brandtitleid,function(info){
    //console.log(info);
    $(".bd_list").html(template("good",info));
    
  });

  // 销量

  Route.getbrandproductlist(brandtitleid, pagesize,function(info){
    console.log(info);
    $(".sell").html(template("sellTpl",info));
    var productId = info.result[0].productId;
    console.log(productId);
    
    var arr = info.result[0].productImg;
    console.log(arr);
    
    
    
    //评论
    Route.getproductcom(productId, function (info) {
      console.log(info);

    });
  });

}); */