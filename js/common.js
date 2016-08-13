/**
 * Created by Administrator on 2016/7/29.
 */
/*header*/
$(function () {
    $('.bigbang').animate({"height":"553px"},1000,function(){
        $(".top_smallad").hide();
        setTimeout(function(){
            $('.bigbang').animate({"height":"0"},1000,function(){
                $(".top_smallad").show();
            })
        },2000)

    })
    

//左右轮换模块
    var count1= 0;
    $(".bd_brand_wall_pre,.bd_brand_wall_next").click(
        function(){
            if(count1%2==0){
            $(".bd_brandBox").animate({"left":"-1100px"},800);
        }
            else if(count1%2==1){
                $(".bd_brandBox").stop(true).animate({"left":"0"},800);
            }
            count1++;
        })

    //最下方切换
  var count2=0;
    $(".brand_list_lefttip,.brand_list_righttip").click(
        function(){
            if(count2%2==0){
                $(".brand_list_main_1").animate({"left":"-1081px"},800);
            }
            else if(count2%2==1){
                $(".brand_list_main_1").stop(true).animate({"left":"0"},800);
            }
            count2++;
        })


    var $z=$('.cat_ul_li_1');
    var li_i=$z.find('i');
    var str;
    //设置每一个li的移入移出
    $z.hover(function () {
        //背景切换
        $z.eq($(this).index()).css({'background':"#666"}).siblings().css({"background":"#f5f5f5"});
        //文字字体切换
        $z.find("span").eq($(this).index()).css({"color":"white"}).siblings("span");
        //对里面标签的字体文字进行切换
        $z.find("p").eq($(this).index()).find("a").css({"color":"white"});
        //废弃代码，为所有增加事件，由于遇到干扰，不能正常切换
        $z.find("i").eq($(this).index()).find('i').addClass("curr_i");
        $z.find("i").eq($(this).index()).siblings().find('i').removeClass('curr_i');

          //控制二级菜单的的切换，这里还需要通过再对二级菜单单独进行事件处理
        $('.secondlist_1').eq($(this).index()).show().siblings().hide();

        //控制其他li的文字效果
        $z.eq($(this).index()).siblings().find("span").css({"color":"#000"});
        $z.eq($(this).index()).siblings().find("p").find("a").css({"color":"#666"});

//控制图片背景位置的移动
        str = li_i.css("background-position");
        li_i.css("background-position",str);
//利用字符串来进行。slice切掉前面的数字，然后通过字符串拼接来达到控制背景的目的
        str = -52 + str.slice(str.indexOf("px"));
        //alert(str);
        li_i.eq($(this).index()).css({"background-position":str});
        //这里存在着部分bug，他的前一个位置不会被消除
        str=0+str.slice(str.indexOf("px"));
        $(this).siblings().find('i').css({"background-position":str});
    },function () {
        //还原所有移动动画的效果。

        //li_i.eq($(this).index()).css({"background-position":str});
        //鼠标移出所有的二级菜单隐藏，对于移动到二级菜单上的情况，在经过二级菜单的时候判断
        $('.secondlist_1').hide();
        //移出的时候取消所有效果，这个会存在bug，采取在进入前就将所有的都取消
        $(this).siblings().find('i').css({"background-position":str});
    })

    $('.secondlist_1').hover(function () {
        //控制图片背景位置的移动

      var  str1 = li_i.css("background-position");
//利用字符串来进行
        str1 = -52 + str1.slice(str1.indexOf("px"));
        //alert(str);
        li_i.eq($(this).index()).css({"background-position":str1});
        $(this).show();
    },function () {
        $(this).hide();
    })



    var $y=$('.secondlist_1_cat1 img');
    $y.hover(function(){

        $(this).stop(true).animate({"left":"25px"});
    },function(){
        $(this).stop(true).animate({"left":"15px"});
    })
    //设置大边框隐藏
    var _index=0;
$(".banner_show_trg span").mouseover(function() {
    $('.banner_show_trg span').eq($(this).index()).css({"background-image": "url(images/trg_h.png)"}).siblings().css({"background-image": "url(images/trg.png)"});
    _index=$(this).index();
    $('.yg_banner_show a').eq($(this).index()).css({"display":"block"}).siblings("a").css("display","none");
})
    var timer;
    $(".yg_banner_show").hover(function () {
        clearInterval(timer);
        },
    function(){
         timer=setInterval(function () {
            if(_index==5){
                _index=0;
            }
           $('.yg_banner_show a').eq(_index).css({"display":"block"}).siblings("a").css("display","none");
             $('.banner_show_trg span').eq(_index).css({"background-image": "url(images/trg_h.png)"}).siblings().css({"background-image": "url(images/trg.png)"});
            _index++;
    },1800)
    })
})

$(function() {
    $(".shop_right_banner li").mouseover(function () {
        $(this).css({"background": "black"}).siblings().css({"background": "white"});
        $(this).find("span").show();
        $(this).siblings().find('span').hide();
        $(this).find("a").css({"color": "white"});
        $(this).siblings().find('a').css({"color": "#666"})
        //alert($(this).index())
        $(".shop_sale_list").eq($(this).index()).show().siblings(".shop_sale_list").hide();
    })
//地步左右切换（存在着切换问题）
    $(".brand_list_lefttip").click(function () {
        var $h = $("brand_list_main_1").eq(0);
        $("brand_list_maintotal").append($h);
    })
    $(".brand_list_righttip").click(function () {
        var $h = $("brand_list_main_1").eq(0);
        $("brand_list_maintotal").append($h);
    })
})
//close
$(function () {


    $(".close_fixed").click(function() {
        $("#bottom_fixed").hide();
    })

    //控制购物车
//控制移入时间

    $(".mycart").mouseover(function(){
        var str="";
        $(".yg_cart_shade").show();
        // alert(getCookie("shopname"))
        if(getCookie("shopname")){
            $('.yg_cart_shadespan').hide();
            var $mycartpic=getCookie("shop_pic");
            var $mycartname=getCookie("shopname");
            var $mycartnum=getCookie("shop_num");
            var $mycartprice=getCookie("shop_price");
            var $mycartsize=getCookie("shop_size");
            var $mycartcolor=getCookie("shop_color");
            // alert($mycartsize)
      str+='<div  class="mycartshopdiv"><dl class="mycartshoplist fixClear"><dd class="fixClear"><div class="mycart_img"><img src="'+$mycartpic+'" alt="" title=""/></div><div class="mycartshopname"><p class="mycartshopname1">'+$mycartname+'</p><p class="mycartshopsize">颜色：<b>'+$mycartcolor+'</b>尺码：<strong>'+$mycartsize+'</strong></p></div><div class="mycartshopprice"><b>'+$mycartprice*$mycartnum+'</b><i></i></div><div class="mycartshopnum"><p><span><a class="maycartshop_number_cut">-</a></span><input type="text" class="mycartgoods_num" value="'+$mycartnum+'" /><span ><a class="marcartshop_number_add">+</a></span></p><p class="mycart_del_total"><a class="mycart_shou">收藏  |</a>   <a class="mycart_del">删除</a></p></div></dd></dl></div><p class="mycart_goodsum">共<span></span>件商品<b><a href="gwc.html"></a></b></p>';

              $(".yg_cart_shade").html(str);
             $(".mycartshopdiv").show();
            $(".mycart_goodsum").show();
            $(".mycart_goodsum").find('span').html($mycartnum);
            if($mycartnum){$(".mycart_count").html(0);}else{
            $(".mycart_count").html($mycartnum);}
            //给按钮添加增加商品和减少商品数量按钮
            var m_value=0;
            $(".maycartshop_number_cut").click(function(){
                m_value=$(".mycartgoods_num").prop('value');
                if(m_value<=1){
                   var r=confirm("你确定要将此商品删除")
                    while(r==true){
                        var d=new Date();
                        d.setDate(d.getDate()-1);
                        setCookie('shopname',"",d)
                        // removeCookie('shopname');
                        // clearCookie();
                        // $('.yg_cart_shade').remove(".mycartshopdiv");
                        $(".mycart_count").html($mycartnum);
                        $(".mycart_goodsum span").html($mycartnum);
                        // $(".mycartshopdiv").hide();
                        // console.log(getCookie("shopname"))
                    }
                }else{
                    $(".mycartgoods_num").prop("value",--m_value)
                    setCookie("shop_num",m_value);
                    $(".mycart_goodsum").find('span').html(m_value);
                }
            })
            $(".marcartshop_number_add").click(function(){

                m_value=$(".mycartgoods_num").prop('value');
                $(".mycartgoods_num").prop("value",++m_value);
                setCookie("shop_num",m_value);
                $(".mycart_goodsum").find('span').html(m_value);
            })
            //设置数量小于零的请款归一
            $(".mycartgoods_num").change(function(){
                m_value=$(".mycartgoods_num").prop('value');
                if(m_value<=0){
                    m_value=1;
                    $(".mycartgoods_num").prop('value',m_value)}
            })
            $(".mycart_del").click(function () {
                $(".mycart_count").html($(".mycartshopdiv").length-1);
                $(".mycart_goodsum").find('span').html($(".mycartshopdiv").length-1);

                var d=new Date();
                d.setDate(d.getDate()-1);
                setCookie('shopname',"",d);
                setCookie('shop_num',"",d);
                $(".mycartshopdiv").hide();
                // $(".mycartshoplist").animate({"height":"0"},1500,function () {
                //     $(".mycartshopdiv").hide();
                // })
            })

        }
        $(".mycart_count").html(getCookie("shop_num"))
    })
    
})
$(function(){
    if(getCookie("shopname")){
        // alert(getCookie("shopname"))
    $(".mycart_count").html(getCookie("shop_num"))
    }
    //获取cookie

    var strlogin1='';
    var strrecover='';
    if(getCookie("usernamel")) {
        strlogin1+='<div id="usernamelogin"><p>用户'+getCookie("usernamel")+'<a>退出</a></p></div>';
        $('.user_login').html(strlogin1);
    }
    $("#usernamelogin a").click(function () {
        $("#usernamelogin").hide();
        strrecover+='<div class="user_login"><a href="login.html" class="top_login">登陆</a><a href="register.html" class="top_reg">注册</a></div>';
        $('.user_login').html(strrecover);

        $("#usernamelogin").show();
        removeCookie("usernamel");
    })
    $('.my_yg_down').mouseover(function () {
        $('.my_yg').css('color',"#666");
    })
})
$(function () {
    $.ajax({
        url:"json/tsconfig.json",
        dataType:'json',
            success:function (data) {
                var str_bd_brandBox='';
                var sty_bottom_brand='';
                var bd_brandBox=data.bannerlist;
                var nav_brandBox='';
                // alert(bd_brandBox.length)
                for(var i=0;i<2;i++){
                    str_bd_brandBox='';
                    sty_bottom_brand='';
                    //将图标放入顶部图标
                    for(var j=0;j<20;j++){
                        var z=Math.floor(Math.random()*bd_brandBox.length);
                        str_bd_brandBox+='<a href="#"><img class="bd_brandBox_a" src="'+bd_brandBox[z].img+'"></a>';
                    }
                    //将图标放入底部
                    for(var x=0;x<96;x++){
                        var y=Math.floor(Math.random()*bd_brandBox.length);
                        sty_bottom_brand+='<a href="#" class="sty_bottom_brand_a"><img src="'+bd_brandBox[y].img+'" title="" alt="'+bd_brandBox[y].name+'"/>'+bd_brandBox[y].name+'</a>';

                    }
                    //将图标放入分页图标
                    var nxclass='';
                    for(var y=0;y<7;y++){
                        nxclass='';
                        nav_brandBox='';
                        for(var k=0;k<10;k++){
                            var nx=Math.floor(Math.random()*bd_brandBox.length);
                             nxclass="shopList_left_bottom_li"+y;
                            nav_brandBox+='<li class="'+nxclass+'"><a href="#"><img src="'+bd_brandBox[nx].img+'" alt="'+bd_brandBox[nx].name+'"/></a></li>';
                        }
                        // alert(nav_brandBox)
                        if(y==0){$('.shopList_left_bottom_1').html(nav_brandBox)}
                        if(y==1){$('.shopList_left_bottom_2').html(nav_brandBox)}
                        if(y==2){$('.shopList_left_bottom_3').html(nav_brandBox)}
                        if(y==3){$('.shopList_left_bottom_4').html(nav_brandBox)}
                        if(y==4){$('.shopList_left_bottom_5').html(nav_brandBox)}
                        if(y==5){$('.shopList_left_bottom_6').html(nav_brandBox)}
                        if(y==6){$('.shopList_left_bottom_7').html(nav_brandBox)}
                    }
                    // alert(j)
                    if(i==0){
                        $('.bd_brandBox_1').html(str_bd_brandBox)

                    }
                    if(i==1){
                        $('.bd_brandBox_2').html(str_bd_brandBox)
                    }
                }
                $('.brand_list_main_1').html(sty_bottom_brand)
                $('.bd_brandBox_a').hover(function () {
                    $(this).stop(true).animate({'opacity':'0.4'}).siblings('a').css({"opacity":"1"})
                },function () {
                    $(this).stop(true).animate({'opacity':'1'}).siblings('a').css({"opacity":"1"})
                })
                $('.shopList_right_pic img').mouseover(function () {
                    $(this).stop(true).animate({"margin-left":"20px"},300,function () {
                        $('.shopList_right_pic img').stop(true).animate({"margin-left":"0"},300)
                    })
                })
                $('.shopList_right_lab img').hover(function () {
                    $(this).stop(true).animate({"width":"400px","height":"470px","left":"-30px","top":"-30px"},600)
                },function () {
                    $(this).stop(true).animate({"width":"360px","height":"430px","left":"0","top":"0"},600)
                })

            }
    })
})






