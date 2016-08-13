/**
 * Created by Administrator on 2016/8/6.
 */
/*header*/

$(function(){
    $('.yg_cat_top').mouseover(function(){
       $('.yg_cat_bottom').css('display','block')
    })
    $(".yg_cat_bottom").hover(function(){
        $('.yg_cat_bottom').css('display','block');
    },function(){
        $('.yg_cat_bottom').css('display','none');
    })


$('.secondlist_1').hover(function () {
    //控制图片背景位置的移动
    $('.yg_cat_bottom').css('display','block');
},function () {
    $('.yg_cat_bottom').css('display','none');
})
})
