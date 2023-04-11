/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var n={434:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var r=e(537),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n","",{version:3,sources:["webpack://./src/styles/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,YAAY;AAChB;AACA;;;;IAII,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"],sourceRoot:""}]);const s=a},890:(n,t,e)=>{"use strict";e.d(t,{Z:()=>u});var r=e(537),o=e.n(r),i=e(645),a=e.n(i),s=e(434),c=a()(o());c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;700&display=swap);"]),c.i(s.Z),c.push([n.id,":root {\n    /* SYSTEM FONTS */\n    --system-ui: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n        'Segoe UI Emoji', 'Segoe UI Symbol';\n\n    /* COLORS */\n    --white: #e6e6e6;\n    --gray: #d5d5d5;\n    --yellow-lt: #eed9c3;\n    --yellow: #e3b261;\n    --green: #a78347;\n    --green-dk: #353535;\n    --blue: #111827;\n\n    --blue-tr: #111827dd;\n    --white-tr: #ffffff44;\n    --hightlight-off: #ffffff00;\n    --hightlight-on: #ffffff88;\n\n    /* SIZING */\n    --sidebar-w: 320px;\n    --icons-w: 95px;\n}\n\nbody {\n    background-color: var(--blue);\n    font-family: 'Roboto Slab';\n    width: 100%;\n    height: 100vh;\n}\n\na {\n    text-decoration: none;\n    color: var(--yellow);\n}\n\na:hover {\n    color: var(--yellow-lt);\n}\n\n.bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    /* background: red; */\n}\n\n.date {\n    font-weight: 400;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2rem;\n    padding-right: 108px;\n}\n\n.weather {\n    z-index: 100;\n    position: absolute;\n    top: 100px;\n    right: 60px;\n    bottom: 100px;\n    color: var(--yellow-lt);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    text-align: right;\n}\n\n.main {\n    display: flex;\n    flex: 1;\n    gap: 16px;\n    justify-content: right;\n}\n\n.main .temp {\n    font-size: 8rem;\n    font-weight: 100;\n    margin-right: 0px;\n}\n\n.main .icon {\n    width: var(--icons-w);\n    height: 200px;\n    margin-top: 16px;\n    text-align: left;\n    font-size: 3rem;\n    font-weight: 100;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.main .icon img {\n    width: 64px;\n    height: 64px;\n}\n\n.main .icon em:hover {\n    color: var(--yellow);\n    cursor: pointer;\n}\n\n.city {\n    margin-top: 32px;\n}\n\n.main .name {\n    font-size: 3rem;\n    font-weight: 400;\n}\n\n.cities .city {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 16px;\n}\n\n.cities .icon {\n    /* background: blue; */\n    width: var(--icons-w);\n    height: 55px;\n    font-size: 1.4rem;\n    font-weight: 100;\n    /* margin-top: 12px; */\n    text-align: left;\n}\n\n.name {\n    color: var(--yellow);\n    font-size: 1.8rem;\n    font-weight: 400;\n    margin: 12px 0;\n}\n\n.details {\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n}\n\nfooter {\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    font-size: 0.8rem;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    position: sticky;\n    top: 100vh;\n    padding: 16px 32px;\n}\n\nfooter img {\n    margin: 0 8px;\n}\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAGA;IACI,iBAAiB;IACjB;2CACuC;;IAEvC,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;;IAEf,oBAAoB;IACpB,qBAAqB;IACrB,2BAA2B;IAC3B,0BAA0B;;IAE1B,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,0BAA0B;IAC1B,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;700&display=swap');\n@import url('reset.css');\n\n:root {\n    /* SYSTEM FONTS */\n    --system-ui: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n        'Segoe UI Emoji', 'Segoe UI Symbol';\n\n    /* COLORS */\n    --white: #e6e6e6;\n    --gray: #d5d5d5;\n    --yellow-lt: #eed9c3;\n    --yellow: #e3b261;\n    --green: #a78347;\n    --green-dk: #353535;\n    --blue: #111827;\n\n    --blue-tr: #111827dd;\n    --white-tr: #ffffff44;\n    --hightlight-off: #ffffff00;\n    --hightlight-on: #ffffff88;\n\n    /* SIZING */\n    --sidebar-w: 320px;\n    --icons-w: 95px;\n}\n\nbody {\n    background-color: var(--blue);\n    font-family: 'Roboto Slab';\n    width: 100%;\n    height: 100vh;\n}\n\na {\n    text-decoration: none;\n    color: var(--yellow);\n}\n\na:hover {\n    color: var(--yellow-lt);\n}\n\n.bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    /* background: red; */\n}\n\n.date {\n    font-weight: 400;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2rem;\n    padding-right: 108px;\n}\n\n.weather {\n    z-index: 100;\n    position: absolute;\n    top: 100px;\n    right: 60px;\n    bottom: 100px;\n    color: var(--yellow-lt);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    text-align: right;\n}\n\n.main {\n    display: flex;\n    flex: 1;\n    gap: 16px;\n    justify-content: right;\n}\n\n.main .temp {\n    font-size: 8rem;\n    font-weight: 100;\n    margin-right: 0px;\n}\n\n.main .icon {\n    width: var(--icons-w);\n    height: 200px;\n    margin-top: 16px;\n    text-align: left;\n    font-size: 3rem;\n    font-weight: 100;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.main .icon img {\n    width: 64px;\n    height: 64px;\n}\n\n.main .icon em:hover {\n    color: var(--yellow);\n    cursor: pointer;\n}\n\n.city {\n    margin-top: 32px;\n}\n\n.main .name {\n    font-size: 3rem;\n    font-weight: 400;\n}\n\n.cities .city {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 16px;\n}\n\n.cities .icon {\n    /* background: blue; */\n    width: var(--icons-w);\n    height: 55px;\n    font-size: 1.4rem;\n    font-weight: 100;\n    /* margin-top: 12px; */\n    text-align: left;\n}\n\n.name {\n    color: var(--yellow);\n    font-size: 1.8rem;\n    font-weight: 400;\n    margin: 12px 0;\n}\n\n.details {\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n}\n\nfooter {\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    font-size: 0.8rem;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    position: sticky;\n    top: 100vh;\n    padding: 16px 32px;\n}\n\nfooter img {\n    margin: 0 8px;\n}\n"],sourceRoot:""}]);const u=c},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},484:function(n){n.exports=function(){"use strict";var n=6e4,t=36e5,e="millisecond",r="second",o="minute",i="hour",a="day",s="week",c="month",u="quarter",l="year",f="date",A="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var t=["th","st","nd","rd"],e=n%100;return"["+n+(t[(e-20)%10]||t[e]||t[0])+"]"}},m=function(n,t,e){var r=String(n);return!r||r.length>=t?n:""+Array(t+1-r.length).join(e)+n},g={s:m,z:function(n){var t=-n.utcOffset(),e=Math.abs(t),r=Math.floor(e/60),o=e%60;return(t<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function n(t,e){if(t.date()<e.date())return-n(e,t);var r=12*(e.year()-t.year())+(e.month()-t.month()),o=t.clone().add(r,c),i=e-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(e-o)/(i?o-a:a-o))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:c,y:l,w:s,d:a,D:f,h:i,m:o,s:r,ms:e,Q:u}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return void 0===n}},y="en",v={};v[y]=p;var B=function(n){return n instanceof I},b=function n(t,e,r){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();v[i]&&(o=i),e&&(v[i]=e,o=i);var a=t.split("-");if(!o&&a.length>1)return n(a[0])}else{var s=t.name;v[s]=t,o=s}return!r&&o&&(y=o),o||!r&&y},C=function(n,t){if(B(n))return n.clone();var e="object"==typeof t?t:{};return e.date=n,e.args=arguments,new I(e)},w=g;w.l=b,w.i=B,w.w=function(n,t){return C(n,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var I=function(){function p(n){this.$L=b(n.locale,null,!0),this.parse(n)}var m=p.prototype;return m.parse=function(n){this.$d=function(n){var t=n.date,e=n.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(n),this.$x=n.x||{},this.init()},m.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===A)},m.isSame=function(n,t){var e=C(n);return this.startOf(t)<=e&&e<=this.endOf(t)},m.isAfter=function(n,t){return C(n)<this.startOf(t)},m.isBefore=function(n,t){return this.endOf(t)<C(n)},m.$g=function(n,t,e){return w.u(n)?this[t]:this.set(e,n)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(n,t){var e=this,u=!!w.u(t)||t,A=w.p(n),h=function(n,t){var r=w.w(e.$u?Date.UTC(e.$y,t,n):new Date(e.$y,t,n),e);return u?r:r.endOf(a)},d=function(n,t){return w.w(e.toDate()[n].apply(e.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),e)},p=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(A){case l:return u?h(1,0):h(31,11);case c:return u?h(1,m):h(0,m+1);case s:var v=this.$locale().weekStart||0,B=(p<v?p+7:p)-v;return h(u?g-B:g+(6-B),m);case a:case f:return d(y+"Hours",0);case i:return d(y+"Minutes",1);case o:return d(y+"Seconds",2);case r:return d(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(n){return this.startOf(n,!1)},m.$set=function(n,t){var s,u=w.p(n),A="set"+(this.$u?"UTC":""),h=(s={},s[a]=A+"Date",s[f]=A+"Date",s[c]=A+"Month",s[l]=A+"FullYear",s[i]=A+"Hours",s[o]=A+"Minutes",s[r]=A+"Seconds",s[e]=A+"Milliseconds",s)[u],d=u===a?this.$D+(t-this.$W):t;if(u===c||u===l){var p=this.clone().set(f,1);p.$d[h](d),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](d);return this.init(),this},m.set=function(n,t){return this.clone().$set(n,t)},m.get=function(n){return this[w.p(n)]()},m.add=function(e,u){var f,A=this;e=Number(e);var h=w.p(u),d=function(n){var t=C(A);return w.w(t.date(t.date()+Math.round(n*e)),A)};if(h===c)return this.set(c,this.$M+e);if(h===l)return this.set(l,this.$y+e);if(h===a)return d(1);if(h===s)return d(7);var p=(f={},f[o]=n,f[i]=t,f[r]=1e3,f)[h]||1,m=this.$d.getTime()+e*p;return w.w(m,this)},m.subtract=function(n,t){return this.add(-1*n,t)},m.format=function(n){var t=this,e=this.$locale();if(!this.isValid())return e.invalidDate||A;var r=n||"YYYY-MM-DDTHH:mm:ssZ",o=w.z(this),i=this.$H,a=this.$m,s=this.$M,c=e.weekdays,u=e.months,l=function(n,e,o,i){return n&&(n[e]||n(t,r))||o[e].slice(0,i)},f=function(n){return w.s(i%12||12,n,"0")},h=e.meridiem||function(n,t,e){var r=n<12?"AM":"PM";return e?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:l(e.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(e.weekdaysMin,this.$W,c,2),ddd:l(e.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:w.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:o};return r.replace(d,(function(n,t){return t||p[n]||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(e,f,A){var h,d=w.p(f),p=C(e),m=(p.utcOffset()-this.utcOffset())*n,g=this-p,y=w.m(this,p);return y=(h={},h[l]=y/12,h[c]=y,h[u]=y/3,h[s]=(g-m)/6048e5,h[a]=(g-m)/864e5,h[i]=g/t,h[o]=g/n,h[r]=g/1e3,h)[d]||g,A?y:w.a(y)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return v[this.$L]},m.locale=function(n,t){if(!n)return this.$L;var e=this.clone(),r=b(n,t,!0);return r&&(e.$L=r),e},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},p}(),x=I.prototype;return C.prototype=x,[["$ms",e],["$s",r],["$m",o],["$H",i],["$W",a],["$M",c],["$y",l],["$D",f]].forEach((function(n){x[n[1]]=function(t){return this.$g(t,n[0],n[1])}})),C.extend=function(n,t){return n.$i||(n(t,I,C),n.$i=!0),C},C.locale=b,C.isDayjs=B,C.unix=function(n){return C(1e3*n)},C.en=v[y],C.Ls=v,C.p={},C}()},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var A=e(f),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==A)t[A].references++,t[A].updater(h);else{var d=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),s=e(565),c=e.n(s),u=e(216),l=e.n(u),f=e(589),A=e.n(f),h=e(890),d={};d.styleTagTransform=A(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=l(),t()(h.Z,d),h.Z&&h.Z.locals&&h.Z.locals;var p=function(n){return document.querySelector(n)};function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function g(){g=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,r=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{c({},"")}catch(n){c=function(n,t,e){return n[t]=e}}function u(n,t,e,o){var i=t&&t.prototype instanceof A?t:A,a=Object.create(i.prototype),s=new $(o||[]);return r(a,"_invoke",{value:w(n,e,s)}),a}function l(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var f={};function A(){}function h(){}function d(){}var p={};c(p,i,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==t&&e.call(v,i)&&(p=v);var B=d.prototype=A.prototype=Object.create(p);function b(n){["next","throw","return"].forEach((function(t){c(n,t,(function(n){return this._invoke(t,n)}))}))}function C(n,t){function o(r,i,a,s){var c=l(n[r],n,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==m(f)&&e.call(f,"__await")?t.resolve(f.__await).then((function(n){o("next",n,a,s)}),(function(n){o("throw",n,a,s)})):t.resolve(f).then((function(n){u.value=n,a(u)}),(function(n){return o("throw",n,a,s)}))}s(c.arg)}var i;r(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){o(n,e,t,r)}))}return i=i?i.then(r,r):r()}})}function w(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=I(a,e);if(s){if(s===f)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=l(n,t,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function I(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,I(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function S(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function $(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function E(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return h.prototype=d,r(B,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=c(d,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,d):(n.__proto__=d,c(n,s,"GeneratorFunction")),n.prototype=Object.create(B),n},n.awrap=function(n){return{__await:n}},b(C.prototype),c(C.prototype,a,(function(){return this})),n.AsyncIterator=C,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new C(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(B),c(B,s,"Generator"),c(B,i,(function(){return this})),c(B,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=E,$.prototype={constructor:$,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),f},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),S(e),f}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:E(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}function y(n,t,e,r,o,i,a){try{var s=n[i](a),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,o)}function v(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){y(i,r,o,a,s,"next",n)}function s(n){y(i,r,o,a,s,"throw",n)}a(void 0)}))}}function B(n,t){return b.apply(this,arguments)}function b(){return(b=v(g().mark((function n(t,e){var r,o,i;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.weatherapi.com/v1/current.json?key=".concat(t,"&q=").concat(e),n.prev=1,n.next=4,fetch(r);case 4:if((o=n.sent).ok){n.next=7;break}throw new Error("HTTP error! status: ".concat(o.status));case 7:return n.next=9,o.json();case 9:return i=n.sent,n.abrupt("return",i);case 13:throw n.prev=13,n.t0=n.catch(1),console.error("Error fetching weather data:",n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}function C(){return C=v(g().mark((function n(t,e){var r,o;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.map((function(n){return B(t,n)})),n.next=3,Promise.all(r);case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)}))),C.apply(this,arguments)}var w=e(484),I=e.n(w),x=[],S=!1;function $(){var n;(n=".city",document.querySelectorAll(n)).forEach((function(n,t){n.querySelector(".name").textContent=x[t].loc,n.querySelector(".details").textContent=S?x[t].condition+" ○ "+x[t].temp_f+" °f":x[t].condition+" ○ "+x[t].temp_c+" °c";var e=x[t].icon.substr(-7),r="https://github.com/hello-damiro/weather/blob/main/src/assets/images/icons/"+(x[t].is_day?"day":"night")+"/"+e+"?raw=true",o=n.querySelector("img");o&&o.setAttribute("src",r)})),p(".date").textContent=I()().format("DD MMM YYYY"),p(".main .temp").textContent=S?x[0].temp_f:x[0].temp_c,p(".main .icon em").textContent=S?" °f":" °c",p(".main .details").textContent=x[0].condition}p(".main .icon em").addEventListener("click",(function(){S=!S,$()})),function(n,t){return C.apply(this,arguments)}("efb404dff353451dbe840459231104",["Manila","Perth","London","Oslo"]).then((function(n){console.log(n),n.forEach((function(n){var t={loc:n.location.name,country:n.location.country,condition:n.current.condition.text,icon:n.current.condition.icon,is_day:n.current.is_day,temp_c:n.current.temp_c,temp_f:n.current.temp_f,humid:n.current.humidity,wind_degree:n.current.wind_degree,wind_dir:n.current.wind_dir,wind_kph:n.current.wind_kph,wind_mph:n.current.wind_mph};x.push(t)})),$()})).catch((function(n){return console.error("Error fetching weather data:",n)}))})()})();
//# sourceMappingURL=bundle.js.map