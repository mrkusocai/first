/**
 * Created by Administrator on 2016/8/5.
 */

onload=function(){
    var form4 =document.getElementsByClassName('login_form_4');
    var logP4 =document.getElementsByClassName('login_form_1_p4')[0];
    var input4 =document.getElementsByClassName('login_form_4')[0].getElementsByTagName('input')[0];
    var str5;
    var re_span1=document.getElementsByClassName('re_span1')[0];
    var re_span2=document.getElementsByClassName('re_span2')[0];
    var re_span3=document.getElementsByClassName('re_span3')[0];
    var  phonetest = document.getElementsByClassName("login_form_1");
    var usernamePhone = document.getElementById('userPhone');
    var usernameEmail = document.getElementById('username2');
    var tangle = document.getElementById('name_down');
    var tangle1 = document.getElementById('name_down1');
    var shadow=document.getElementsByClassName('shadow_form1')[0];
    var show2 = document.getElementById('show_2');
    var show1 = document.getElementById('show_1');
    var shadow1=document.getElementsByClassName('shadow_f2')[0];
    var logoP1=document.getElementsByClassName('login_form_1_p1')[0];
    var right_tag = document.getElementsByClassName("right_tag");//需要自己设置1，2，3，4
    var count=0;
    var count1=0;
    var vert= document.getElementsByClassName('login_form_2_strong')[0];
    var form5=document.getElementsByClassName('login_form_5')[0];
    var input5=form5.getElementsByTagName("input")[0];
    var logP5=document.getElementsByClassName('login_form_1_p5')[0];
    var right_tag5=form5.getElementsByTagName("em")[0];
    var vertC = document.getElementsByClassName('login_form_2')[0].getElementsByTagName('input')[0];
    var right_tag2 = document.getElementsByClassName('login_form_2')[0].getElementsByTagName('em')[0];
    var str2='';
    var logP2=document.getElementsByClassName('login_form_1_p2')[0];
    var logP3=document.getElementsByClassName('login_form_1_p3')[0];
    var form3 = document.getElementsByClassName('login_form_3')[0];
    var input3=form3.getElementsByTagName('input')[0];
    var arrMessage=[];
    var flag1=false,flag2=false,flag3=false,flag4=false,flag5=false,flage=false;
   tangle.onclick=function(){
       //alert(count)
       if(count%2==0){
         shadow.style.display="block";
       }
       else if(count%2==1){
           shadow.style.display='none';
       }
       count++;
   };
    tangle1.onclick=function(){
        if(count1%2==0){
            shadow1.style.display="block";
        }
        else if(count1%2==1){
            shadow1.style.display='none';
        }
        count1++;
    };
    //检测手机号
    show1.onclick=function(){
           phonetest[1].style.display='none';
        phonetest[0].style.display='block';
        shadow.style.display='none';
        shadow1.style.display='none';
        logoP1.style.visibility='hidden';
        form3.style.display='block';
        logP3.style.display='block';
        vertC.value='';
        usernamePhone.value='';
        input4.value='';
        re_span1.style.visibility='hidden';
        re_span2.style.visibility='hidden';
        re_span3.style.visibility='hidden';
      logP3.style.visibility='hidden';
        input3.value='';
        logP5.style.visibility='hidden';
        input5.value='';
    };
    show2.onclick=function(){
        phonetest[0].style.display='none';
        phonetest[1].style.display='block';
        shadow.style.display='none';
        shadow1.style.display='none';
        logoP1.style.visibility='hidden';
        form3.style.display='none';
        logP3.style.display='none';
        vertC.value='';
        usernameEmail.value='';
        input4.value='';
        re_span1.style.visibility='hidden';
        re_span2.style.visibility='hidden';
        re_span3.style.visibility='hidden';
        logP3.style.visibility='hidden';
        input3.value='';
        logP5.style.visibility='hidden';
        input5.value='';
    };
//验证输入手机栏失焦
    usernamePhone.addEventListener("blur",function(){
        var reg_p=/^1[34578]\d{9}$/;
        if(usernamePhone.value.match(reg_p)){
            right_tag[0].style.display='block';
            logoP1.style.visibility='hidden';
            flag1=true;
        }else{
            logoP1.innerHTML='格式错误';
            logoP1.style.visibility='visible';
            right_tag[0].style.display='none';
        }
    })
    usernameEmail.addEventListener("blur",function(){
        var reg_p=/^\w+@\w+\.([a-zA-Z]{2,4})$/;
        //alert(1);
        if(usernameEmail.value.match(reg_p)){
            right_tag[1].style.display='block';
            logoP1.style.visibility='hidden';
            flage=true;
        }else{
            logoP1.innerHTML='格式错误';
            logoP1.style.visibility='visible';
            right_tag[1].style.display='none';
        }
    })

    //第二个模块短信验证码以及随机产生数字数组

    for(var i=48;i<=122&&i>=30;i++){arrMessage.push(i);
        if(i==57){i=64;}
        if(i==90){i=96;}}
//验证码生成
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
            flag2=true;
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

    //form3必须位数字
    form3.addEventListener('blur',function(){
        alert(1);
        logP3.innerHTML='';
        var regs=/^\d{4}$/;
        var str_form3=input3.value;
        if(str_form3.match(regs)){
            right_tag[3].style.display='block';
            flag3=true;

        }else{ right_tag[3].style.display='none';
        logP3.innerHTML='验证码错误';
        }
    })

    //密码动态判断


    //给密码验证添加监听
    logP5.style.visibility='hidden';
  input4.addEventListener("keyup",function() {
      //
      logP5.style.innerHTML='';
      str5 = input4.value;
      //alert(str5)
      var reg1 = /\d+/ig;
      var reg2 = /[a-z]+/ig;
      var reg3 = /[A-Z]+/ig;
      var reg4 = /\W+/ig;
      var reg11=/\_+/ig;
      var reg12=/\$+/ig;
      var reg13=/(\+)+/ig;
      var reg14=/\w+/ig;
      //密码等级低判断
      var reg5 = /^\d{1,10}$/;
      var reg6 = /^[a-z]{1,10}$/;
      var reg7 = /^[A-Z]{1,10}$]/;
      var reg8 = /^\_{1,10}$/;

      //密码等级中判断
      var reg51 = /^\d{11,25}$/;
      var reg61 = /^[a-z]{11,25}$/;
      var reg71 = /^[A-Z]{11,25}$]/;
      var reg81 = /^\_{11,25}$/;
      var reg9 = /^.{10,25}$/;
      var reg10=/^\w{10,25}$/ig;
      if (str5.match(reg5) || str5.match(reg6) || str5.match(reg7) || str5.match(reg8)) {
          re_span1.style.visibility='visible';
          re_span2.style.visibility='visible';
          re_span3.style.visibility='visible';
          re_span1.style.backgroundColor = "red";
          re_span2.style.backgroundColor = "#f3f3f3";
          re_span3.style.backgroundColor = "#f3f3f3";
      }
      if(str5.match(reg51) || str5.match(reg61) || str5.match(reg71) || str5.match(reg81)||str5.match(reg9)||str5.match(reg10)&&str5.match(reg1)&&str5.match(reg2)||str5.match(reg10)&&str5.match(reg1)&&str5.match(reg3)||str5.match(reg10)&&str5.match(reg2)&&str5.match(reg3)||str5.match(reg10)&&str5.match(reg4)||str5.match(reg9)&&str5.match(reg1)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg1)&&str5.match(reg12)||str5.match(reg9)&&str5.match(reg1)&&str5.match(reg13)||str5.match(reg9)&&str5.match(reg2)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg2)&&str5.match(reg12)||
          str5.match(reg9)&&str5.match(reg2)&&str5.match(reg13)||str5.match(reg9)&&str5.match(reg11)&&str5.match(reg12)||str5.match(reg9)&&str5.match(reg13)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg3)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg3)&&str5.match(reg13)||str5.match(reg9)&&str5.match(reg3)&&str5.match(reg12)){

          re_span2.style.backgroundColor = "yellow";
          re_span1.style.backgroundColor = "#f3f3f3";
          re_span3.style.backgroundColor = "#f3f3f3";
      }
      if(str5.match(reg9)&&str5.match(reg4)&&str5.match(reg1)&&str5.match(reg2)||str5.match(reg9)&&str5.match(reg4)&&str5.match(reg1)&&str5.match(reg3)||str5.match(reg9)&&str5.match(reg2)&&str5.match(reg1)&&str5.match(reg3)||str5.match(reg9)&&str5.match(reg4)&&str5.match(reg3)&&str5.match(reg2)||str5.match(reg9)&&str5.match(reg4)&&str5.match(reg1)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg4)&&str5.match(reg2)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg4)&&str5.match(reg3)&&str5.match(reg11)||str5.match(reg9)&&str5.match(reg14)&&str5.match(reg12)&&str5.match(reg13)){
          re_span2.style.backgroundColor = "#f3f3f3";
          re_span1.style.backgroundColor = "#f3f3f3";
          re_span3.style.backgroundColor = "green";
      }
  })
    //出来的时候判断位数
    input4.addEventListener('blur',function(){
       //alert(str5.length)
        logP5.innerHTML='';
        logP4.style.visibility='hidden';
        logP5.style.visibility='hidden';
        right_tag5.style.display='none';
        if(str5.length<6){
            logP4.style.visibility='visible';
            logP4.innerHTML='密码应6-25位之间';
            flag4=true;
        }else{
            logP4.style.visibility='hidden';
            logP4.innerHTML="";
            right_tag[4].style.display='block';
        }
    });

    //判断两个是否一致

    input5.addEventListener('blur',function(){
        right_tag5.style.display='none';
        logP5.innerHTML='';
        logP4.style.visibility='hidden';
        if(input4.value==input5.value){
            right_tag5.style.display='block';
            logP5.style.visibility="hidden";
            flag5=true;
        }else{
            right_tag5.style.display='none';
        logP5.style.visibility="visible";
            logP5.innerHTML='两次密码不一致';
        }
    })
    var checked1=document.getElementById('checked1');
    var re_submit=document.getElementById('re_submit');
    checked1.addEventListener('click',function(){

        re_submit.disabled=true;
        if(checked1.checked==true){
            re_submit.disabled=false;
        }
    })
    re_submit.addEventListener('click',function(){
     // alert(usernamePhone.value)
     //    alert(input5.value)
        if(flag1&&flag2||flage&&flag2){
            setCookie("registname",usernamePhone.value);
            setCookie("registpwd",input5.value);

            open("login.html");
        }
    })

}
