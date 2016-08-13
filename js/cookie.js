/**
 * Created by Administrator on 2016/8/11.
 */
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
