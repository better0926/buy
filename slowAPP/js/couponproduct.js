$(function(){
  var couponid = getSearch().couponid;
  Route.getcouponproduct(couponid,function(info){
    console.log(info);
    $(".coupon_list").html(template("couproTpl",info));
  })
});