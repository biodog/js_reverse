window = global
navigator = {}
const CryptoJS = require('crypto-js');

function t(e, n) {
    var a = !1
        , t = "错误的证件类型"
        , o = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
    if (11 == e || 12 == e)
        o = /^[a-zA-Z0-9]{5,21}$/,
            a = o.test(n),
        a || (t = 11 == e ? "请输入正确的台湾居民来往大陆通行证号码" : "请输入正确的港澳居民来往大陆通行证号码");
    else if (13 == e) {
        o = /^[a-zA-Z0-9]{3,21}$/;
        var i = /^(P\d{7})|(G\d{8})$/;
        a = o.test(n) || i.test(n),
        a || (t = "请输入正确的外籍护照号码")
    } else
        a = o.test(n),
        a || (t = "请输入正确的身份证/驾驶证号码");
    return a && (t = ""),
        {
            success: a,
            errorMessage: t
        }
}

function o(e, n) {
    var a = !1
        , t = "请输入正确的姓名"
        , o = /\s/
        , i = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
        , r = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im
        , l = /[0-9]/;
    return e ? i.test(e) || r.test(e) || l.test(e) ? a || (t = "姓名不能含有数字或者特殊符号") : o.test(e) ? a || (t = "姓名不能含有空格") : a = !0 : a || (t = "姓名不能为空"),
    a && (t = ""),
        {
            success: a,
            errorMessage: t
        }
}

function i(e, n) {
    var a = !1
        , t = "请输入正确的邮箱地址"
        , o = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return a = e ? o.test(e) : 1 == n,
    a && (t = ""),
        {
            success: a,
            errorMessage: t
        }
}

function r(e, n) {
    var a = !1
        , t = "请输入正确的生日，格式：YYYY-MM-DD"
        , o = /^(\d{4})(-)(\d{2})(-)(\d{2})$/;
    return a = e ? o.test(e) : 1 == n,
    a && (t = ""),
        {
            success: a,
            errorMessage: t
        }
}

function l(e) {
    var n = CryptoJS.enc.Latin1.parse("h5LoginKey123456")
        , a = CryptoJS.enc.Latin1.parse("h5LoginIv1234567")
        , t = e
        , o = CryptoJS.AES.encrypt(t, n, {
        iv: a,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return o.toString()
}

console.log(l("123456"))
