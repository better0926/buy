$(function () {
  var globalPageSize,
      flag = true;

  $('#selectPage').on('change', function(){
    var $this = $(this),
      val = $this.val();
      //console.log(val);
      render(val);
  })

  render();

  $('.page-change').on('click', function(){
    var $this = $(this),
        type = $this.attr('data-pageType');

    var pageValue = $('#selectPage').val();

    if(type==='prev'){
      pageValue = ( pageValue - 0 );
      pageValue--

    }else{
      pageValue = (pageValue - 0)
      pageValue++
    }
    
    if(pageValue<1 || pageValue>15){
        return
    }
    $('#selectPage').val(pageValue);
    render(pageValue);
  });

  function render(pageid){
    //pageid = pageid || 1;

    Route.getmoneyctrl(pageid, function (info) {
      console.log(info);
      //模板渲染
      $(".pro_wrap").html(template("proTpl",info));
      if (!flag){
        return
      }
      var size = globalPageSize = Math.ceil(info.totalCount / info.pagesize);
      var  temp = [];
          temp.length = size;
          
      flag = false;
      $.each(temp,function(i){
        i = i + 1;

        var htmlStr = '<option value="'+i+'">'+i+'/'+size+'</option>';

        $('.selectPage').append(htmlStr);
      });
    }); 
  }

  //点击分页

});