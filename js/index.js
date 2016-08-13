/**
 * Created by Administrator on 2016/8/8.
 */
//Y右侧滑动栏  随高度变化而变化
$(function(){
    $(window).scroll(function(){
        var $ygb=$('#yg_banner_show').offset().top;
        //console.log("$(window).scrollTop():   "+$(window).scrollTop());

        //console.log("$('#yg_banner_show').offset().top"+ $ygb);
        if($(window).scrollTop()>$ygb){
            $(".floatCtro").css({"display":"block"});
            $(".floatCtro").css({"top":"60px"})
        }
        else if($(window).scrollTop()<=255){

            $(".floatCtro").css({"top":$ygb+10})
            //console.log("$(floatCtro).css"+ $(".floatCtro").css("top"));
        }

    })
})
