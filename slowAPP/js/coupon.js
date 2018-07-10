
//优惠券 商家 
$(function(){
  Route.getcoupon(function(info){
    console.log(info);
    $(".coupon_list").html(template("coupon",info));
  });
});