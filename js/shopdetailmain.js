/**
 * Created by Administrator on 2016/8/7.
 */
$(function(){
    $.ajax({
        url:"json/dlist.json",
        dataType:'json',
        success:function (data) {
            var main_detail='';
            var detaillist=data.addlist;
        }
    })
    var str1='';
    var _this=0;
  $(".goods_clist li").mousemove(function(){
      $(this).find('img').css({"border":"1px solid red"});
          $(this).siblings("li").find('img').css({"border":"1px solid #ccc"});
      str1=$(this).css('background-position');
      //alert(str1);
      str1=30+str1.slice(str1.indexOf('px'));
      $(this).css('background-position',str1);
      $(this).siblings('li').css('background-position',-30+str1.slice(str1.indexOf('px')))
      //alert(str1);
    $('.goods_pic img').eq($(this).index()).addClass('goods_show')
      //alert($(this).index())
      $('.goods_pic img').eq($(this).index()).siblings('img').removeClass('goods_show')
      _this=$(this).index();
  })


    //增加放大镜功能
    $b=$('.show_big_pic');
    $blg=$('.show_big_pic img');
    $fl=$('.float_showBig');
    $gp=$('.goods_pic');
    $gmg=$('.goods_pic img');
    //设置移入移出
    var _x=$gp.offset().left;
    var _y=0;
    $gp.hover(function(){
        $b.show();
        $fl.show();
        $blg.eq(_this).show().siblings().hide();
        _y=$gp.offset().top;

    },function(){
        $b.hide();
        $fl.hide();
        $blg.hide();
    })
    //划坐标轴位置为相对div的位置,鼠标跟随效果
    $gp.mousemove(function(e){

        var l= e.pageX-_x-$fl.width()/2;
        var t= e.pageY-_y-$fl.height()/2;
        //alert(e.);
        if(l<0){
            l=0;
        }else if(l>($gp.width()-$fl.width())){
            l=$gp.width()-$fl.width();
        }
//相对位置最好不要用变量来代替
        if(t<0){
            t=0;
        }
        else if(t>($gp.height()-$fl.height())){
            t=$gp.height()-$fl.height();
        }
        // console.log("t  :"+t,"   l  :"+l);
        // console.log("_x:"+_x+"  _y:"+_y);
        // console.log("$gp.offset().top:"+$gp.offset().top+" $fl.offset().top:"+$fl.offset().top);
        $fl.css({"left":l+"px"},{"top":t+"px"});
        //return false;
        //var percentX=l/($gp.offset().left-$fl.offset().left);
        //var percentY=t/($gp.offset().top-$fl.offset().top)
        //$blg.css({"left":-percentX*($blg.width()-$b.width()),"top":-percentY*($blg.height()-$b.height())})
    })



//倒计时
  var time1=document.getElementById('time1');
    var time2=document.getElementById('time2');
    var time3=document.getElementById('time3');
    //建立一个目标值，例如抢购活动需要多久
    var timer_target=24*3600*1000;
    var  myTime=new Date();
    //获取总共的毫秒数
    var pre_haomiao=myTime.getTime();
    //获取当前小时
    var ihour=myTime.getHours();
    //获取当前分钟
    var iminutes=myTime.getMinutes();
    //获取当前秒数
    var iseconds=myTime.getSeconds();
    var now_time,now_haomiao,time_plus,now_ihour,now_iminutes,now_iseconde;
    var timerfore=setInterval(function(){
        now_time=new Date();
        now_haomiao=now_time.getTime();
        time_plus=timer_target-(now_haomiao-pre_haomiao);
        now_ihour=(parseInt(time_plus/3600000))%24;
        now_iminutes=(parseInt(time_plus/60000))%60;
        now_iseconde=(parseInt(time_plus/1000))%60;
        time1.innerHTML=two(now_ihour);
        time2.innerHTML=two(now_iminutes);
        time3.innerHTML=two(now_iseconde);
        if(time_plus==0){
            clearInterval(timerfore);
        }

    },1000)
    function two(obj){
       return  obj<10?"0"+obj:obj;
    }
//选中的判断函数
    var flag1=false;
    var flag2=false;
    var flag3=false;
    var flag4=false;
    var colorremenber="";

    //设置图片选择
    $(".shop_color a").mouseover(function(){
        $(".shop_color a").css({"border":"1px solid red"});
        $(this).siblings('a').css({"border":"1px solid #ccc"});
        $(this).find('i').show();
        $(this).siblings('a').find('i').hide();
        $(this).find(".shop_color_a").show()
        $(this).siblings('a').find(".shop_color_a").hide();
        flag1=true;
        colorremenber=$(this).attr('name');
        $('.shop_number').find('b').html(colorremenber)
    })
    $(".shop_color a").mouseout(function(){
        $(".shop_color_a").hide();
    })
var thissize=0;

    //设置尺码
   $(".shop_size span").click(function(){
       $(this).css({"border":"1px solid red"}).siblings().css("border-color","#ccc");
       $(this).find("i").show();
       $(this).siblings().find("i").hide();
       $('.shop_size_compare').find('b').html()
       flag2=true;
       thissize= parseInt($(this).html());
       // alert(thissize);
   })
    $(".shop_size span").mouseover(function(){
        $(this).css({"border":"1px solid red"}).siblings().css("border-color","#ccc");
    })

    //打开尺码对照表
    $(".shop_size_compare a").click(function(){
        $(".diva").fadeIn(300);
    })
    $(".diva").click(function(){
        $(this).fadeOut(300);

    })

    //购物车的制作
    //给按钮添加增加商品和减少商品数量按钮
    var g_value=0;
$(".shop_number_cut").click(function(){

    g_value=$(".goods_num").prop('value');
    $(".goods_num").prop("value",--g_value)
    if(g_value<=0){
        g_value=1;
        $(".goods_num").prop('value',g_value)

    }

})

    $(".shop_number_add").click(function(){
        g_value=$(".goods_num").prop('value');
        $(".goods_num").prop("value",++g_value)
    })
    //设置数量小于零的请款归一
    $(".goods_num").change(function(){
        g_value=$(".goods_num").prop('value');
        if(g_value<=0){
            g_value=1;
            $(".goods_num").prop('value',g_value)}
    })


    //将获取到的数据存入到cookie
   var $addcart=$(".goods_addtocart")
    //首先需要判断几个选项是否有选中
    $addcart.click(function(){
        var $priceshop=$("#price_goods1").html();
        var $shopname=$('h1').html();
        var $shop_size=thissize;
        var $shop_color=colorremenber;
        var $shop_num=$('.goods_num').prop('value');
        var $shop_pic=$(".shop_color_as").prop("src");
        var d=new Date();
        var str="";
        d.setDate(d.getDate()+7);
        if(flag1&&flag2){
            setCookie("shop_num",$shop_num,d);
            setCookie('shopname',$shopname,d);
         setCookie("shop_price",$priceshop,d);
            setCookie("shop_size",$shop_size,d);
            setCookie("shop_color",$shop_color,d);
            setCookie("shop_pic",$shop_pic,d);
            // alert($shopname);
            var z=Number($(".mycart_count").html());
            $(".mycart_count").html(1+z);
            var s=1+z;
            //增加购物车
            // str+='<div  class="mycartshopdiv"><dl class="mycartshoplist"><dt><img src="'+$shop_pic+'" /></dt><dd><p class="mycartshopname">'+$shopname+'</p><p>颜色：<span>'+$shop_color+'</span>尺码：<strong>'+$shop_size+'</strong></p></dd></dl><div class="mycartdlprice">￥'+$priceshop+'</div><dl class="shop_number"><span><a class="shop_number_cut">-</a></span><input type="text" value="'+$shop_num+'" class="goods_num" /><span ><a class="shop_number_add">+</a></span><a class="mycartdelete">删除</a></dl></div>';
            $('.yg_cart_shade').html(str)
        }else{
          $('.shop_size_compare').find('b').html("请输入尺码")
        }
    })
//运用ajax插入图片
    $.ajax({
        url:"json/package.json",
        dateType:'json',
        success:function(data){
            var str="";
            var str2=""
            var det=data.goodsLook;
            for(var i in det ){
                str+='<li slic="'+det[i].id+'"><a href="#"><img src="'+det[i].img+'"/></a> <p>'+det[i].name+'<span>'+det[i].price+'</span></p></li>';
                str2+='<li class="shop_lunbo_shop" dea="'+det[i].id+'"><dl><dt><a href="#"><img src="'+det[i].img+'"/></a></dt>';
                str2+='<dd><p class="shop_lunbo_shop_p1">'+det[i].name+'</p><p class="shop_lunbo_shop_p2"><b>'+det[i].price+'</b><del>'+det[i].preprice+'</del></p></dd></dl></li>';
            }
            $(".goods_look_ul").html(str);
            $(".shop_lunbo_main1").html(str2);
        }
    })
    $(".goods_look_bottom_1").click(function () {

        for(var i=0;i<3;i++){
            // $(".goods_look_ul").animate({"top":"-=174"},500);
          $(".goods_look_ul li").first().clone().appendTo('.goods_look_ul')
            $(".goods_look_ul li").first().remove();
         }
    })
   var  x=parseInt($(".goods_look_ul").height());
    $(".goods_look_bottom_2").click(function () {
        for(var i=0;i<3;i++){
            // $(".goods_look_ul").animate({"top":"-=174"},500);
            $(".goods_look_ul li").last().clone().prependTo('.goods_look_ul')
            $(".goods_look_ul li").last().remove();
        }
        // var z;
        // for(var i=0;i<3;i++){
        //    $(".goods_look_ul li").last().clone().prependTo(".goods_look_ul");
        //     z= $(".goods_look_ul").children().length*174;
        //     $(".goods_look_ul").css("height",z);
        // }
        // // alert(z)
        // $(".goods_look_ul").animate({"top":"-522px"},1000);
        // for(var i=2;i>=0;i++){
        //     $(".goods_look_ul li").last().remove();
        //     z= $(".goods_look_ul").children().length*174;
        //     $(".goods_look_ul").css({"height":z,"top":"-1044px"});
        // }
    })
//下方轮播以及数据生成
    var num_shop=6,wle;
    $(".shop_lunbo_left").click(function () {
           for(var i=0;i<num_shop;i++){
               $(".shop_lunbo_main1 li").eq(i).clone().appendTo(".shop_lunbo_main1");
               wle=$(".shop_lunbo_main1").css("width")
               $(".shop_lunbo_main1").css("width","+=184");
           }
        //animate会存在这异步加载，因此你要在他值执行完之后在执行其他代码
        $(".shop_lunbo_main1").stop(true).animate({"left":"-2200"},2000,function () {
            for(var i=0;i<num_shop;i++){
                $(".shop_lunbo_main1 li").first().remove();
                $(".shop_lunbo_main1").css({"width":"-=184","left":"+=184"});
            }
        });

    })
    // 右边滚动
    var num_s;
    $(".shop_lunbo_right").click(function () {
        var i=1;
        num_s=$(".shop_lunbo_main1").children('li').length;
        for(;i<=6;i++){
          $(".shop_lunbo_main1 li").eq(23).clone().prependTo(".shop_lunbo_main1")
            // $(".shop_lunbo_main1").css("width","+=186");
            // alert($(".shop_lunbo_main1").children('li').length)
         }
        if(i>6){
        $(".shop_lunbo_main1").stop(true).animate({"left":"0"},2000,function () {
            for(var j=24;j>18;j--){

                $(".shop_lunbo_main1 li").last().remove();
                $(".shop_lunbo_main1").css({"left":"-=184"});
                // alert($(".shop_lunbo_main1").children('li').length)
            }
        });
            i=1;
        }

    })

    //设置三个绝对定位模块
    //返回顶部模块
    var goods_nav=$('.goods_nav_lc').offset().top;
    var csum=0;
    $(window).scroll(function () {
        // alert($('#shop_bottom').offset().top)
        console.log($(window).scrollTop()+'    '+($('#shop_bottom').offset().top+300))
        if($(window).scrollTop()>20){  $(".return_top").show();}
        if($(window).scrollTop()<20){
            $(".return_top").hide();
        }
        if($(window).scrollTop()>($('#shop_bottom').offset().top+300)){
            $(".return_top").css('bottom',"120px")
        }
        if($(window).scrollTop()>400){$(".bootom_buy_now").show()}
        if($(window).scrollTop()<400){$(".bootom_buy_now").hide()}
        if($(window).scrollTop()>=goods_nav){
            $(".goods_nav_lc").css({"position":"fixed","top":"0"})
            $(".goods_nav_lc").show();
        }
        if($(window).scrollTop()<goods_nav){
            // alert(goods_nav)
            $(".goods_nav_lc").css({"bottom":"-500px"})
            $(".goods_nav_lc").hide();
        }
    })
    $('.nav_lc_p a').click(function(){
       $(this).addClass('nav_lc_red').siblings('a').removeClass();
    })

})