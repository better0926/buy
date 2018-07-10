$(function(){
  var globalPageSize,
      flag = true;
  
  //面包屑导航
  var categoryid = getSearch().categoryid;
  //console.log(categoryid);
  Route.getcategorybyid(categoryid,function(info){
    console.log(info);   
    $(".pro_nav").html(template("proNavTpl",info));      
  });


  $(".selectPage").on("change", function () {
    var val = $(this).val();
    //console.log(pageVal);
    render(val);
  });

  //点击分页
  $('.page-change').on('click', function () {
    var $this = $(this),
      type = $this.attr('data-pageType');

    var pageValue = $('#selectPage').val();
    console.log(pageValue);
    
    if (type === 'prev') {
      pageValue = (pageValue - 0);
      pageValue--

    } else {
      pageValue = (pageValue - 0)
      pageValue++
    }

    if (pageValue < 1 || pageValue > 3) {
      return;
    }
    $('.selectPage').val(pageValue);
    render(pageValue);
  });

  render();
  function render(pageid){

    Route.getproductlist(categoryid, pageid, function (info) {
      console.log(info);

      //渲染模板
      $(".pro_wrap").html(template("proWrapTpl", info));

      if (!flag) {
        return;
      }
      var size = globalPageSize = Math.ceil(info.totalCount / info.pagesize);
      //console.log(size);
      
      var temp = [];
          temp.length = size;
      //console.log(temp);

      flag = false;
      $.each(temp,function(i){
        i = i + 1;
        var htmlStr = '<option value="' + i + '">' + i + '/' + size +'</option>';
        $(".selectPage").append(htmlStr);
      });



    /*   if (!flag) {
        return
      }
      var size = globalPageSize = Math.ceil(info.totalCount / info.pagesize);
      var temp = [];
      temp.length = size;

      flag = false;
      $.each(temp, function (i) {
        i = i + 1;

        var htmlStr = '<option value="' + i + '">' + i + '/' + size + '</option>';

        $('.selectPage').append(htmlStr);
      }); */
    
    });
  };
});