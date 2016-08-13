/**
 * Created by Administrator on 2016/8/11.
 */
$(function () {
    $.ajax({
        url:"json/dlist.json",
        dataType:"json",
        success:function (data) {
            var str_list="";

            var list_str=data.addlist;
           /* for(var i in list_str){
                // alert(1)
                // alert(list_str[i].img)
             str_list+='<li class="scroll_wrap"><dl><dt><img tid="'+list_str[i].id+'"  src="'+list_str[i].img+'" alt="'+list_str[i].name+'"  tag="'+list_str[i].tag+'"/></dt><dd><p class="tag_list"></p><p class="list_goods_name">'+list_str[i].name+'</p><p class="list_price_tag"><b>'+list_str[i].price+'</b><del>'+list_str[i].preprice+'</del></p></dd></dl></li>';
// alert(list_str[i].price.slice(1))
            }*/

            str_list=scli(list_str,str_list);
            $('#filter_result_list_ul').html(str_list);
            //冒泡排序

            var arrprice=new Array(list_str.length-1);
            var arrtag=[];
            var str_min=0;
            var str_min1=0;
            var temptag='';
            //tempimg=tempid=tempname=tempprice=temppreprice
            // alert(typeof temppreprice)
            for(var i=0;i<list_str.length;i++){
                for(var j=0;j<list_str.length-i-1;j++){
                 // compare(list_str[i],list_str[i+1])
                    str_min=parseInt(list_str[j].price.slice(1));
                    str_min1=parseInt(list_str[j+1].price.slice(1))
                     // alert(list_str[j].price+"str   "+list_str[j+1].price)
                    //获取最小值,然后将所有的属性值都进行调换
                    if(str_min<str_min1){
                        //交换tag
                        // alert("str   "+list_str[j+1].tag+"str1   "+list_str[j].tag)
                        temptag=list_str[j].tag;
                        list_str[j].tag=list_str[j+1].tag;
                        list_str[j+1].tag=temptag;
                        // alert("str   "+list_str[j+1].tag+"str1   "+list_str[j].tag)
                        //交换preprice
                        temptag=list_str[j].preprice;
                        list_str[j].preprice=list_str[j+1].preprice;
                        list_str[j+1].preprice=temptag;
                        //交换img
                        temptag=list_str[j].img;
                        list_str[j].img=list_str[j+1].img;
                        list_str[j+1].img=temptag;
                        //交换price
                        // alert("str   "+list_str[j].price+"str1   "+list_str[j+1].price)
                        temptag=list_str[j].price;
                        list_str[j].price=list_str[j+1].price;
                        list_str[j+1].price=temptag;
                        // alert("str   "+list_str[j].price+"str1   "+list_str[j+1].price)
                        //交换name
                        temptag=list_str[j].name;
                        list_str[j].name=list_str[j+1].name;
                        list_str[j+1].name=temptag;
                    }
                    // alert(str_min1+"str   "+str_min)
                    // alert(list_str.length)
                    if(j>=list_str.length-i-2){
                        arrprice[i]=list_str[list_str.length-i-1];
                        // alert(1)
                    }

                }
                 // console.log(arrprice[i])

            }
            // console.log(list_str[29])
          //按照价格排序,通过价格点击实现排序
            var count=2;

            $('.new_list').click(function () {
                // alert(count)
                if(count%2==0){
                var strprice="" ;
                strprice=scli(arrprice,strprice);
                $('#filter_result_list_ul').html(strprice);
                    count++;
                    // alert(strprice)
                    $('.new_list').css({'background-position':'0 -46px','color':"white"})
                }

               else if(count%2==1) {
                    var strpriceup="";
                    for(var i=arrprice.length-1;i>=0;i--){
                        var py="shopdetail.html"+'?'+arrprice[i].id;
                        strpriceup+='<li class="scroll_wrap"><dl><dt><a href="'+py+'"><img tid="'+arrprice[i].id+'"  src="'+arrprice[i].img+'" alt="'+arrprice[i].name+'"  tag="'+arrprice[i].tag+'"/></a></dt><dd><p class="tag_list">';
                            if(arrprice[i].tag){
                                strpriceup+=arrprice[i].tag;
                            }
                        strpriceup+='</p><p class="list_goods_name">'+arrprice[i].name+'</p><p class="list_price_tag"><b>'+arrprice[i].price+'</b><del>'+arrprice[i].preprice+'</del></p></dd></dl></li>';
                        $('#filter_result_list_ul').html(strpriceup);
                        count++;
                        $('.new_list').css({'background-position':'0 0','color':"white"}).siblings('a').remove('bd_bar_red');
                    }
                }
            })
//新品筛选
            var arrta=new Array(list_str.length-1);
            var jy=0;
//             选出想要的新品数组new Array(list_str.length-1);
//             console.log(list_str[30])
            for(var i=0;i<list_str.length;i++){
                var strl=list_str[i].tag;
                //获取通过test来匹配
                //  alert(strl.match('新款'))
                // console.log(i)
                if(strl.match('新款')){

                    arrta[jy]=list_str[i];
                    jy++;

                }
            }

            var strnews="";
            $('.newshopcon').click(function () {
                var px=0;
                $(this).addClass('bd_bar_red').siblings('a').removeClass('bd_bar_red');
                for(var i in arrta){
                    if(arrta[i].tag){
                        var py="shopdetail.html"+'?'+arrta[i].id;
                    strnews+='<li class="scroll_wrap"><dl><dt><a href="'+py+'"><img tid="'+arrta[i].id+'"  src="'+arrta[i].img+'" alt="'+arrta[i].name+'"  tag="'+arrta[i].tag+'"/></a></dt><dd><p class="tag_list">';
                    if(arrta[i].tag){
                        strnews+=arrta[i].tag;
                    }
                    strnews+='</p><p class="list_goods_name">'+arrta[i].name+'</p><p class="list_price_tag"><b>'+arrta[i].price+'</b><del>'+arrta[i].preprice+'</del></p></dd></dl></li>';
                }}

                $('#filter_result_list_ul').html(strnews);
            })

            //设置滑动切换效果

//比较函数
            function compare(a,b){
                var temp;
                if(a<b){
                    temp=a;
                    a=b;
                    b=a;
                }
            }
            function  scli(arr,str) {
                for(var i in arr){
                    var py="shopdetail.html"+'?'+arr[i].id;
                    str+='<li class="scroll_wrap"><dl><dt><a href="'+py+'"><img tid="'+arr[i].id+'"  src="'+arr[i].img+'" alt="'+arr[i].name+'"  tag="'+arr[i].tag+'"/></a></dt><dd><p class="tag_list">';
                    if(arr[i].tag){
                        str+=arr[i].tag;
                    }
                    str+='</p><p class="list_goods_name">'+arr[i].name+'</p><p class="list_price_tag"><b>'+arr[i].price+'</b><del>'+arr[i].preprice+'</del></p></dd></dl></li>';
                }
                return str;
            }
        }
    })
})