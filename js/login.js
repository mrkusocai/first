/**
 * Created by Administrator on 2016/8/5.
 */
$(function(){
    var vert= document.getElementsByClassName('login_form_j_strong')[0];
    var vertC = document.getElementsByClassName('login_form_j')[0].getElementsByTagName('input')[0];
    var right_tag2 = document.getElementsByClassName('login_form_j')[0].getElementsByTagName('em')[0];
    var logP2=document.getElementsByClassName('login_form_1_j')[0];
    var arrMessage=[];

    $("#username").blur(function(){
        $(".login_form_1_p1").html('');
        $(".login_form_1_p1").css('visibility','hidden');
         var reg_l1 =/^1[34578]\d{9}$/;
        var str_l1=$("#username").prop("value");
        if(str_l1.match(reg_l1)||str_l1.match(/^\w{5,25}$/)||str_l1.match(/^\w+@\w+\.([a-zA-Z]{2,4})$/)){
        }
        else{
            $(".login_form_1_p1").html('请输入正确的用户名/手机号/邮箱')
            $(".login_form_1_p1").css('visibility','visible');
            $(".login_form_j").css('display','block');
            $(".login_form_j input").prop('value','');
            //第二个模块短信验证码以及随机产生数字数组
        }
    })
    $("username").change(function () {
        if(getCookie("registname")==$('#username').prop('value')){
            $("pwd").prop("value",'');
            $("#pwd").prop('value',getCookie('registpwd'));
        }
    })

//验证码生成
    for(var i=48;i<=122&&i>=30;i++){
        arrMessage.push(i);
        if(i==57){i=64;}
        if(i==90){i=96;}}
    vert.onclick=function(){
        str2='';
        //alert(arrMessage.length)
        for(var j=1;j<=4;j++){
            str2+=String.fromCharCode(arrMessage[Math.floor(Math.random()*arrMessage.length)]);
        }
        vert.innerHTML=str2;
    };
    //验证码判断
    vertC.addEventListener('blur',function(){
        //alert(str2);
        // alert(vertC.value)
        if(vertC.value==str2){
            right_tag2.style.display='block';
            logP2.innerHTML='';
            logP2.style.visibility='hidden';
        }else{
            logP2.innerHTML='验证码错误';
            logP2.style.visibility='visible';
            right_tag2.style.display='none';

        }
        if(vertC.value==''){
            right_tag2.style.display='none';
            logP2.innerHTML='请输入验证码';
        }
    })
})
//cookie封装函数
//写cookie操作,调用方法setCookie(name,value);
function setCookie(name, value, hours, path, domain, secure) {
    var cdata = name + "=" + value;
    if (hours) {
        var d = new Date();
        d.setHours(d.getHours() + hours);
        cdata += "; expires=" + d.toGMTString();
    }
    cdata += path ? ("; path=" + path) : "";
    cdata += domain ? ("; domain=" + domain) : "";
    cdata += secure ? ("; secure=" + secure) : "";
    document.cookie = cdata;
}

//读cookie操作
function getCookie(name) {
    var reg = eval("/(?:^|;\\s*)" + name + "=([^=]+)(?:;|$)/");
    return reg.test(document.cookie) ? RegExp.$1 : "";
}
//删除cookie操作
function removeCookie(name) {
    this.setCookie(name, 1, -1);
}

function clearCookie(){
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
    }
}

