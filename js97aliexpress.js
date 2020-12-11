navigator = {
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = global, window.navigator = navigator;

function enc (e, t, n) {

    function a(e, t, n) {
        null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
    }
    function o() {
        return new a(null)
    }
    "Microsoft Internet Explorer" == navigator.appName ? (a.prototype.am = function(e, t, n, r, a, o) {
        for (var i = 32767 & t, u = t >> 15; --o >= 0; ) {
            var s = 32767 & this[e]
                , c = this[e++] >> 15
                , l = u * s + c * i;
            a = ((s = i * s + ((32767 & l) << 15) + n[r] + (1073741823 & a)) >>> 30) + (l >>> 15) + u * c + (a >>> 30),
                n[r++] = 1073741823 & s
        }
        return a
    }
        ,
        r = 30) : "Netscape" != navigator.appName ? (a.prototype.am = function(e, t, n, r, a, o) {
        for (; --o >= 0; ) {
            var i = t * this[e++] + n[r] + a;
            a = Math.floor(i / 67108864),
                n[r++] = 67108863 & i
        }
        return a
    }
        ,
        r = 26) : (a.prototype.am = function(e, t, n, r, a, o) {
        for (var i = 16383 & t, u = t >> 14; --o >= 0; ) {
            var s = 16383 & this[e]
                , c = this[e++] >> 14
                , l = u * s + c * i;
            a = ((s = i * s + ((16383 & l) << 14) + n[r] + a) >> 28) + (l >> 14) + u * c,
                n[r++] = 268435455 & s
        }
        return a
    }
        ,
        r = 28),
        a.prototype.DB = r,
        a.prototype.DM = (1 << r) - 1,
        a.prototype.DV = 1 << r;
    a.prototype.FV = Math.pow(2, 52),
        a.prototype.F1 = 52 - r,
        a.prototype.F2 = 2 * r - 52;
    var i, u, s = new Array;
    for (i = "0".charCodeAt(0),
             u = 0; u <= 9; ++u)
        s[i++] = u;
    for (i = "a".charCodeAt(0),
             u = 10; u < 36; ++u)
        s[i++] = u;
    for (i = "A".charCodeAt(0),
             u = 10; u < 36; ++u)
        s[i++] = u;
    function c(e) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
    }
    function l(e, t) {
        var n = s[e.charCodeAt(t)];
        return null == n ? -1 : n
    }
    function f(e) {
        var t = o();
        return t.fromInt(e),
            t
    }
    function d(e) {
        var t, n = 1;
        return 0 != (t = e >>> 16) && (e = t,
            n += 16),
        0 != (t = e >> 8) && (e = t,
            n += 8),
        0 != (t = e >> 4) && (e = t,
            n += 4),
        0 != (t = e >> 2) && (e = t,
            n += 2),
        0 != (t = e >> 1) && (e = t,
            n += 1),
            n
    }
    function p(e) {
        this.m = e
    }
    function m(e) {
        this.m = e,
            this.mp = e.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << e.DB - 15) - 1,
            this.mt2 = 2 * e.t
    }
    function h() {
        this.i = 0,
            this.j = 0,
            this.S = new Array
    }
    p.prototype.convert = function(e) {
        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
    }
        ,
        p.prototype.revert = function(e) {
            return e
        }
        ,
        p.prototype.reduce = function(e) {
            e.divRemTo(this.m, null, e)
        }
        ,
        p.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n),
                this.reduce(n)
        }
        ,
        p.prototype.sqrTo = function(e, t) {
            e.squareTo(t),
                this.reduce(t)
        }
        ,
        m.prototype.convert = function(e) {
            var t = o();
            return e.abs().dlShiftTo(this.m.t, t),
                t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(a.ZERO) > 0 && this.m.subTo(t, t),
                t
        }
        ,
        m.prototype.revert = function(e) {
            var t = o();
            return e.copyTo(t),
                this.reduce(t),
                t
        }
        ,
        m.prototype.reduce = function(e) {
            for (; e.t <= this.mt2; )
                e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t]
                    , r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV; )
                    e[n] -= e.DV,
                        e[++n]++
            }
            e.clamp(),
                e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }
        ,
        m.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n),
                this.reduce(n)
        }
        ,
        m.prototype.sqrTo = function(e, t) {
            e.squareTo(t),
                this.reduce(t)
        }
        ,
        a.prototype.copyTo = function(e) {
            for (var t = this.t - 1; t >= 0; --t)
                e[t] = this[t];
            e.t = this.t,
                e.s = this.s
        }
        ,
        a.prototype.fromInt = function(e) {
            this.t = 1,
                this.s = e < 0 ? -1 : 0,
                e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
        }
        ,
        a.prototype.fromString = function(e, t) {
            var n;
            if (16 == t)
                n = 4;
            else if (8 == t)
                n = 3;
            else if (256 == t)
                n = 8;
            else if (2 == t)
                n = 1;
            else if (32 == t)
                n = 5;
            else {
                if (4 != t)
                    return void this.fromRadix(e, t);
                n = 2
            }
            this.t = 0,
                this.s = 0;
            for (var r = e.length, o = !1, i = 0; --r >= 0; ) {
                var u = 8 == n ? 255 & e[r] : l(e, r);
                u < 0 ? "-" == e.charAt(r) && (o = !0) : (o = !1,
                    0 == i ? this[this.t++] = u : i + n > this.DB ? (this[this.t - 1] |= (u & (1 << this.DB - i) - 1) << i,
                        this[this.t++] = u >> this.DB - i) : this[this.t - 1] |= u << i,
                (i += n) >= this.DB && (i -= this.DB))
            }
            8 == n && 0 != (128 & e[0]) && (this.s = -1,
            i > 0 && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)),
                this.clamp(),
            o && a.ZERO.subTo(this, this)
        }
        ,
        a.prototype.clamp = function() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
                --this.t
        }
        ,
        a.prototype.dlShiftTo = function(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n)
                t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n)
                t[n] = 0;
            t.t = this.t + e,
                t.s = this.s
        }
        ,
        a.prototype.drShiftTo = function(e, t) {
            for (var n = e; n < this.t; ++n)
                t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0),
                t.s = this.s
        }
        ,
        a.prototype.lShiftTo = function(e, t) {
            var n, r = e % this.DB, a = this.DB - r, o = (1 << a) - 1, i = Math.floor(e / this.DB), u = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n)
                t[n + i + 1] = this[n] >> a | u,
                    u = (this[n] & o) << r;
            for (n = i - 1; n >= 0; --n)
                t[n] = 0;
            t[i] = u,
                t.t = this.t + i + 1,
                t.s = this.s,
                t.clamp()
        }
        ,
        a.prototype.rShiftTo = function(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t)
                t.t = 0;
            else {
                var r = e % this.DB
                    , a = this.DB - r
                    , o = (1 << r) - 1;
                t[0] = this[n] >> r;
                for (var i = n + 1; i < this.t; ++i)
                    t[i - n - 1] |= (this[i] & o) << a,
                        t[i - n] = this[i] >> r;
                r > 0 && (t[this.t - n - 1] |= (this.s & o) << a),
                    t.t = this.t - n,
                    t.clamp()
            }
        }
        ,
        a.prototype.subTo = function(e, t) {
            for (var n = 0, r = 0, a = Math.min(e.t, this.t); n < a; )
                r += this[n] - e[n],
                    t[n++] = r & this.DM,
                    r >>= this.DB;
            if (e.t < this.t) {
                for (r -= e.s; n < this.t; )
                    r += this[n],
                        t[n++] = r & this.DM,
                        r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; n < e.t; )
                    r -= e[n],
                        t[n++] = r & this.DM,
                        r >>= this.DB;
                r -= e.s
            }
            t.s = r < 0 ? -1 : 0,
                r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r),
                t.t = n,
                t.clamp()
        }
        ,
        a.prototype.multiplyTo = function(e, t) {
            var n = this.abs()
                , r = e.abs()
                , o = n.t;
            for (t.t = o + r.t; --o >= 0; )
                t[o] = 0;
            for (o = 0; o < r.t; ++o)
                t[o + n.t] = n.am(0, r[o], t, o, 0, n.t);
            t.s = 0,
                t.clamp(),
            this.s != e.s && a.ZERO.subTo(t, t)
        }
        ,
        a.prototype.squareTo = function(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
                e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var r = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV,
                    e[n + t.t + 1] = 1)
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
                e.s = 0,
                e.clamp()
        }
        ,
        a.prototype.divRemTo = function(e, t, n) {
            var r = e.abs();
            if (!(r.t <= 0)) {
                var i = this.abs();
                if (i.t < r.t)
                    return null != t && t.fromInt(0),
                        void (null != n && this.copyTo(n));
                null == n && (n = o());
                var u = o()
                    , s = this.s
                    , c = e.s
                    , l = this.DB - d(r[r.t - 1]);
                l > 0 ? (r.lShiftTo(l, u),
                    i.lShiftTo(l, n)) : (r.copyTo(u),
                    i.copyTo(n));
                var f = u.t
                    , p = u[f - 1];
                if (0 != p) {
                    var m = p * (1 << this.F1) + (f > 1 ? u[f - 2] >> this.F2 : 0)
                        , h = this.FV / m
                        , v = (1 << this.F1) / m
                        , g = 1 << this.F2
                        , _ = n.t
                        , y = _ - f
                        , w = null == t ? o() : t;
                    for (u.dlShiftTo(y, w),
                         n.compareTo(w) >= 0 && (n[n.t++] = 1,
                             n.subTo(w, n)),
                             a.ONE.dlShiftTo(f, w),
                             w.subTo(u, u); u.t < f; )
                        u[u.t++] = 0;
                    for (; --y >= 0; ) {
                        var b = n[--_] == p ? this.DM : Math.floor(n[_] * h + (n[_ - 1] + g) * v);
                        if ((n[_] += u.am(0, b, n, y, 0, f)) < b)
                            for (u.dlShiftTo(y, w),
                                     n.subTo(w, n); n[_] < --b; )
                                n.subTo(w, n)
                    }
                    null != t && (n.drShiftTo(f, t),
                    s != c && a.ZERO.subTo(t, t)),
                        n.t = f,
                        n.clamp(),
                    l > 0 && n.rShiftTo(l, n),
                    s < 0 && a.ZERO.subTo(n, n)
                }
            }
        }
        ,
        a.prototype.invDigit = function() {
            if (this.t < 1)
                return 0;
            var e = this[0];
            if (0 == (1 & e))
                return 0;
            var t = 3 & e;
            return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
        }
        ,
        a.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        ,
        a.prototype.exp = function(e, t) {
            if (e > 4294967295 || e < 1)
                return a.ONE;
            var n = o()
                , r = o()
                , i = t.convert(this)
                , u = d(e) - 1;
            for (i.copyTo(n); --u >= 0; )
                if (t.sqrTo(n, r),
                (e & 1 << u) > 0)
                    t.mulTo(r, i, n);
                else {
                    var s = n;
                    n = r,
                        r = s
                }
            return t.revert(n)
        }
        ,
        a.prototype.toString = function(e) {
            if (this.s < 0)
                return "-" + this.negate().toString(e);
            var t;
            if (16 == e)
                t = 4;
            else if (8 == e)
                t = 3;
            else if (2 == e)
                t = 1;
            else if (32 == e)
                t = 5;
            else {
                if (4 != e)
                    return this.toRadix(e);
                t = 2
            }
            var n, r = (1 << t) - 1, a = !1, o = "", i = this.t, u = this.DB - i * this.DB % t;
            if (i-- > 0)
                for (u < this.DB && (n = this[i] >> u) > 0 && (a = !0,
                    o = c(n)); i >= 0; )
                    u < t ? (n = (this[i] & (1 << u) - 1) << t - u,
                        n |= this[--i] >> (u += this.DB - t)) : (n = this[i] >> (u -= t) & r,
                    u <= 0 && (u += this.DB,
                        --i)),
                    n > 0 && (a = !0),
                    a && (o += c(n));
            return a ? o : "0"
        }
        ,
        a.prototype.negate = function() {
            var e = o();
            return a.ZERO.subTo(this, e),
                e
        }
        ,
        a.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this
        }
        ,
        a.prototype.compareTo = function(e) {
            var t = this.s - e.s;
            if (0 != t)
                return t;
            var n = this.t;
            if (0 != (t = n - e.t))
                return this.s < 0 ? -t : t;
            for (; --n >= 0; )
                if (0 != (t = this[n] - e[n]))
                    return t;
            return 0
        }
        ,
        a.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM)
        }
        ,
        a.prototype.mod = function(e) {
            var t = o();
            return this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(a.ZERO) > 0 && e.subTo(t, t),
                t
        }
        ,
        a.prototype.modPowInt = function(e, t) {
            var n;
            return n = e < 256 || t.isEven() ? new p(t) : new m(t),
                this.exp(e, n)
        }
        ,
        a.ZERO = f(0),
        a.ONE = f(1),
        h.prototype.init = function(e) {
            var t, n, r;
            for (t = 0; t < 256; ++t)
                this.S[t] = t;
            for (n = 0,
                     t = 0; t < 256; ++t)
                n = n + this.S[t] + e[t % e.length] & 255,
                    r = this.S[t],
                    this.S[t] = this.S[n],
                    this.S[n] = r;
            this.i = 0,
                this.j = 0
        }
        ,
        h.prototype.next = function() {
            var e;
            return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                e = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = e,
                this.S[e + this.S[this.i] & 255]
        }
    ;
    var v, g, _;
    function y() {
        var e;
        e = (new Date).getTime(),
            g[_++] ^= 255 & e,
            g[_++] ^= e >> 8 & 255,
            g[_++] ^= e >> 16 & 255,
            g[_++] ^= e >> 24 & 255,
        _ >= 256 && (_ -= 256)
    }
    if (null == g) {
        var w;
        if (g = new Array,
            _ = 0,
        window.crypto && window.crypto.getRandomValues) {
            var b = new Uint8Array(32);
            for (window.crypto.getRandomValues(b),
                     w = 0; w < 32; ++w)
                g[_++] = b[w]
        }
        if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random) {
            var k = window.crypto.random(32);
            for (w = 0; w < k.length; ++w)
                g[_++] = 255 & k.charCodeAt(w)
        }
        for (; _ < 256; )
            w = Math.floor(65536 * Math.random()),
                g[_++] = w >>> 8,
                g[_++] = 255 & w;
        _ = 0,
            y()
    }
    function x() {
        if (null == v) {
            for (y(),
                     (v = new h).init(g),
                     _ = 0; _ < g.length; ++_)
                g[_] = 0;
            _ = 0
        }
        return v.next()
    }
    function E() {}
    function C() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
    }
    E.prototype.nextBytes = function(e) {
        var t;
        for (t = 0; t < e.length; ++t)
            e[t] = x()
    }
        ,
        C.prototype.doPublic = function(e) {
            return e.modPowInt(this.e, this.n)
        }
        ,
        C.prototype.setPublic = function(e, t) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = new a(e,16),
                this.e = parseInt(t, 16)) : alert("Invalid RSA public key")
        }
        ,
        C.prototype.encrypt = function(e) {
            var t = function(e, t) {
                if (t < e.length + 11)
                    return alert("Message too long for RSA"),
                        null;
                for (var n = new Array, r = e.length - 1; r >= 0 && t > 0; ) {
                    var o = e.charCodeAt(r--);
                    o < 128 ? n[--t] = o : o > 127 && o < 2048 ? (n[--t] = 63 & o | 128,
                        n[--t] = o >> 6 | 192) : (n[--t] = 63 & o | 128,
                        n[--t] = o >> 6 & 63 | 128,
                        n[--t] = o >> 12 | 224)
                }
                n[--t] = 0;
                for (var i = new E, u = new Array; t > 2; ) {
                    for (u[0] = 0; 0 == u[0]; )
                        i.nextBytes(u);
                    n[--t] = u[0]
                }
                return n[--t] = 2,
                    n[--t] = 0,
                    new a(n)
            }(e, this.n.bitLength() + 7 >> 3);
            if (null == t)
                return null;
            var n = this.doPublic(t);
            if (null == n)
                return null;
            var r = n.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r
        }
    ;
    // var S = C;
    // t.default = S
    return new C;
}


rsaPassword = function(t) {
    var e = new enc;
    key = "d3bcef1f00424f3261c89323fa8cdfa12bbac400d9fe8bb627e8d27a44bd5d59dce559135d678a8143beb5b8d7056c4e1f89c4e1f152470625b7b41944a97f02da6f605a49a93ec6eb9cbaf2e7ac2b26a354ce69eb265953d2c29e395d6d8c1cdb688978551aa0f7521f290035fad381178da0bea8f9e6adce39020f513133fb"

    return e.setPublic(key, "10001"),
        e.encrypt(t)
}

console.log(rsaPassword("123456"))
