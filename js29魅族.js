window = global
navigator = {}
$ = function (){}

var cryPP = {};
    cryPP.excutePP = function(r, e) {
        for (var n = "", t = 0; t < r.length; t++) {
            var o = e ^ r.charCodeAt(t);
            n += String.fromCharCode(o)
        }
        return encodeURIComponent(n)
    }
        ,
        cryPP.generateMix = function(r) {
            return Math.ceil(1e3 * Math.random())
        };

data = {
    password:"123456"
}
var kk = cryPP.generateMix();

console.log(kk)

data['password'] = cryPP.excutePP(data['password'], kk);

console.log(data.password)