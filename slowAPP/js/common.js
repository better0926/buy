//用于获取地址栏中的参数  
function getSearch() {
  var search = location.search;
  //console.log(search);
  //对参数进行转码
  search = decodeURI(search);
  //去掉获取到的参数的问号
  search = search.slice(1);
  //将search按照&切割成数组
  var arr = search.split("&");
  //console.log(arr);
  var obj = {};
  arr.forEach(function (e, i) {
    var k = e.split("=")[0];//把数组中每个元素等号前的值最为obj的键

    var value = e.split("=")[1]; //把数组中每个元素等号后面的值最为obj的值
    //console.log(value);
    obj[k] = value;
    //console.log(obj);
  });
  return obj;
}
  //getSearch();