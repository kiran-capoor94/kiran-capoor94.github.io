(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Brf":function(t,e,a){"use strict";var o=a("I+eb"),i=a("g6v/"),s=a("2oRo"),n=a("UTVS"),r=a("hh1v"),c=a("m/L8").f,l=a("6JNq"),f=s.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(u[e]=!0),e};l(p,f);var d=p.prototype=f.prototype;d.constructor=p;var g=d.toString,h="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=g.call(t);if(n(u,t))return"";var a=h?e.slice(7,-1):e.replace(m,"$1");return""===a?void 0:a}}),o({global:!0,forced:!0},{Symbol:p})}},"5Tg+":function(t,e,a){var o=a("tiKp");e.f=o},A6W1:function(t,e,a){"use strict";var o={props:["showTitle"]},i=(a("ArLL"),a("KHd+")),s=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-vcentered is-desktop"},[e("div",{staticClass:"column is-3"},[e("div",{staticClass:"author-desktop is-hidden-mobile"},[e("g-image",{staticClass:"author__image base_shadow animate__animated animate__fadeIn",attrs:{alt:"Author image",src:a("p+HC"),width:"200",height:"200",blur:"5"}})],1),e("div",{staticClass:"author has-text-centered-mobile is-hidden-desktop"},[e("g-image",{staticClass:"author__image base_shadow animate__animated animate__fadeIn",attrs:{alt:"Author image",src:a("p+HC"),width:"200",height:"200",blur:"5"}})],1)]),e("div",{staticClass:"column is-vcentered has-text-centered-mobile"},[e("div",{staticClass:"is-inline-block has-text-centered-mobile"},[this._m(0),e("span",{staticClass:"py-2 is-vcentered animate__animated animate__bounce animate__delay-1s"},[e("g-image",{attrs:{src:"https://img.icons8.com/color/96/000000/pray.png",width:"75",height:"75"}})],1)]),e("hr",{staticStyle:{"background-color":"#000"}}),this._m(1),e("hr",{staticStyle:{"background-color":"#000"}}),this._m(2),e("hr",{staticStyle:{"background-color":"#000"}}),e("b-button",{staticClass:"mx-1",attrs:{tag:"a",href:"mailto:kiran.capoor94@gmail.com",type:"is-dark"}},[this._v("Hire Me?")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("h1",{staticClass:"is-family-monospace is-size-1"},[this._v("Namaste")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-flex has-background-black"},[e("h2",{staticClass:"is-family-monospace is-size-1 has-text-white",staticStyle:{margin:"auto auto auto 0px"}},[this._v("I'm Kiran Capoor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{staticClass:"is-family-monospace is-size-3"},[this._v("Full Stack Developer")])])}],!1,null,null,null);e.a=s.exports},AO8t:function(t,e,a){},ArLL:function(t,e,a){"use strict";var o=a("AO8t");a.n(o).a},"BX/b":function(t,e,a){var o=a("/GqU"),i=a("JBy8").f,s={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return n&&"[object Window]"==s.call(t)?function(t){try{return i(t)}catch(t){return n.slice()}}(t):i(o(t))}},PpWc:function(t,e,a){"use strict";var o={props:["post"]},i=a("KHd+"),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.post.tags,(function(e){return a("g-link",{key:e.id,staticClass:"tag",attrs:{to:e.path}},[a("span",[t._v("#")]),t._v("\n    "+t._s(e.title)+"\n  ")])})),1)}),[],!1,null,null,null);e.a=s.exports},SHZv:function(t,e,a){"use strict";a.r(e);a("pNMO"),a("4Brf");var o=a("n6yM"),i=a("PpWc"),s={name:"SinglePost",data:function(){return{networks:[{network:"email",name:"Email",icon:"fas fa-lg fa-envelope",color:"#333333"},{network:"facebook",name:"Facebook",icon:"fab fah fa-lg fa-facebook-f",color:"#1877f2"},{network:"linkedin",name:"LinkedIn",icon:"fab fah fa-lg fa-linkedin",color:"#007bb5"},{network:"pinterest",name:"Pinterest",icon:"fab fah fa-lg fa-pinterest",color:"#bd081c"},{network:"quora",name:"Quora",icon:"fab fah fa-lg fa-quora",color:"#a82400"},{network:"reddit",name:"Reddit",icon:"fab fah fa-lg fa-reddit-alien",color:"#ff4500"},{network:"sms",name:"SMS",icon:"far fah fa-lg fa-comment-dots",color:"#333333"},{network:"telegram",name:"Telegram",icon:"fab fah fa-lg fa-telegram-plane",color:"#0088cc"},{network:"whatsapp",name:"Whatsapp",icon:"fab fah fa-lg fa-whatsapp",color:"#25d366"}]}},components:{Author:a("A6W1").a,PostMeta:o.a,PostTags:i.a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.description}]}}},n=a("KHd+"),r=null,c=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("section",[a("section",{staticClass:"hero is-link is-fullheight-with-navbar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns pt-3"},[a("div",{staticClass:"column is-vcentered has-text-centered-mobile"},[a("div",{staticClass:"is-flex has-background-black"},[a("h2",{staticClass:"is-family-monospace is-size-1 has-text-white",staticStyle:{margin:"auto auto auto 0px"}},[t._v(t._s(t.$page.post.title))])]),a("hr",{staticStyle:{"background-color":"#000"}}),a("div",[a("h3",{staticClass:"is-family-monospace is-size-4"},[a("PostMeta",{attrs:{post:t.$page.post}})],1)]),a("hr",{staticStyle:{"background-color":"#000"}}),a("div",{staticClass:"buttons"},t._l(t.networks,(function(e){return a("ShareNetwork",{key:e.network,style:{backgroundColor:e.color},attrs:{network:e.network,url:"https://kiran-capoor94@github.io"+t.$page.post.path,title:t.$page.post.title,description:t.$page.post.description,hashtags:"vuejs,vite"}},[a("div",{staticClass:"button is-transparent",staticStyle:{margin:"auto"}},[a("span",{staticClass:"mr-3"},[a("i",{class:e.icon})]),a("span",[t._v(t._s(e.name))])])])})),1),a("hr",{staticStyle:{"background-color":"#000"}})])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),a("div",{staticClass:"post content-box"},[a("div",{staticClass:"post__header has-text-centered"},[t.$page.post.cover_image?a("g-image",{attrs:{alt:"Cover image",src:t.$page.post.cover_image}}):t._e()],1),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content has-text-justified px-5 py-5 mt-3 has-background-white-bis",domProps:{innerHTML:t._s(t.$page.post.content)}}),a("div",{staticClass:"post__footer"},[a("PostTags",{attrs:{post:t.$page.post}})],1)])])])])])])])}),[],!1,null,null,null);"function"==typeof r&&r(c);e.default=c.exports},YIUa:function(t,e,a){"use strict";var o=a("hpwU");a.n(o).a},"dG/n":function(t,e,a){var o=a("Qo9l"),i=a("UTVS"),s=a("5Tg+"),n=a("m/L8").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});i(e,t)||n(e,t,{value:s.f(t)})}},hpwU:function(t,e,a){},n6yM:function(t,e,a){"use strict";var o={props:["post"]},i=(a("YIUa"),a("KHd+")),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-meta"},[t._v("\n  Posted "+t._s(t.post.date)+".\n  "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);e.a=s.exports},"p+HC":function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/author.5eb61c7.dc935ae1b48cc4e86c4e20c43401af2f.jpg",size:{width:200,height:200},sizes:"(max-width: 200px) 100vw, 200px",srcset:["/assets/static/author.5eb61c7.dc935ae1b48cc4e86c4e20c43401af2f.jpg 200w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-595e62d469ff269846d5e1568018d95d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-595e62d469ff269846d5e1568018d95d)' width='200' height='200' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABwgEBQADBgEC/8QANRAAAgEDAwIDBQcDBQAAAAAAAQIDBAURAAYhEjEHE2EUIkFRcQgjMoGRoeEVFlIXQmKxwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBW9SaCcwTqeplBIz099RtSKCllratIIFZpGBICjJwASePoDoHE%2byhSwvs2SoES9ZqZPvD3PI0fQgI50pu0JdxU2ybFFZrmlhtyxGNVCtJJUzAktJhUJwc8DnjXQ2HxT3Xt24UX9x1FLeLDPMsTVkETiaMscKekDJyeO3OgZExJjkDQ18cbJQ1fh7enmhXqSBnVgOQRznXEbm8Xtw3iomXZMFNSWmNjC9fXwv5hkX8YVO/HxyNUlZft2U9prqm9XRb5aBSP7ZAq%2bW4V1IVlDKvGSDx8BoFkv08U9aTAuFHHHbsNVutlTGYp5I2zlTjkY1r0Gas9tXP%2bjbgt9xKeYlNMsjp/mufeX8xkarNZoHy8K2t48PLVTzUk1RQmPzIJlhaUMhORnpBIYZwQfiNdBQWGguO4KKpp6CeKlt8hqPNmjKCWbpKoArc4UMzZx36dBr7Jm%2b6cWCr25cZemWhLT0%2beS0R5IH0OePXRQXcEV5uFNWUdPV2%2bRVdJJZIpjIqZyMqilRng86C1qLJSWu9XV6uikmoLhMKxJIoS/lTdIWRSBzg9KsDjuW1QeJNRQR7GucMNI8VG0ZeomeJo1EY5b8WCScdIHrq2tm4KGyB46inr5JqqoyziGYk5wOtg44HzI/TQO%2b1f4gJLNBtezVIKj7ytaM/HPupn9zoFplcyyNIxJLEsc%2buvnWazQeqpZgqglj2A1uFHUFeoRPj6a7%2b0Waht7lunrkHSwZ%2bSRwCP31BDLJIFY4SQFM/DqB7/APR0Ffsf%2bpW7ddsmtcywVzSqkTMMrljjDD5fPTT3PxRtNTb4qTc8902/fIMCUQN0BsfFHwQyHHGljqoZaaWmqIm6JoyCrD/awOQf1GmR2dVweItgEkMEElbEAKiCRQ3Q/wAe/YHuPr6aDaviUt2tS2DYRrLjeKgdEtfV%2b9FCP83b4nB4A0FPGzZ9HYdwUtBDLJLWRUUclXUuctPM7MSxHwzkcfLGmdtdjpNo2eouN3kpqCjpvvHIwq/oO7HsB3Olg3neX3Vu2uu8yssdQ5kVG7pGowin9tAPX25W%2b0eVEFfnGc4xxnnUOutdVRH76PK4B6l5HIyP20Sqcg0oqe7PT9Jx36tRaGZWEvnqGRZCoBHdRH/P76CGKh3ngTuVcqT8%2bRqviRvKZVGWViyj1BP86kWCF7hfqGiiz5tVURwrn5swX/3TTeIPhNttoIZ7fTPBXVE9LRQ%2bzsETPUFZ2XsT0hiT6aBWHcToOrIVh217bbldtv13tdnrqqiqPwmWnkKEj1x3H10d5PAhKy7XejoLq0cFLURRo8sPUSHjDluCO2R9fTVLTeDF4ams0yVtDILiD09RZTF7jOA3B4IQ49dAMrjetw7iaJr/AHesrI0OVWonLhT6DsD668cCFGyc5Xk%2bny0Uv9IKqGC5zVlzt8S0VJFVsfewwkDFVBOOcrj6ka6Sm8Mtq267x2u81NXcLhLQPUezx5iVJEXqIP8AxI7c9wdAG7fRymnhVUZi2G6VGSfy1Bqk9lOSpUmfBBHyH8abTbklrpa7atTbordRxXe3mKOOKILIJAofq9QMMv56Af2maFbXumSrpugU1zUVkRUY5x0tkfPqBP56D//Z' /%3e%3c/svg%3e"}},pNMO:function(t,e,a){"use strict";var o=a("I+eb"),i=a("2oRo"),s=a("0GbY"),n=a("xDBR"),r=a("g6v/"),c=a("STAE"),l=a("/b8u"),f=a("0Dky"),u=a("UTVS"),p=a("6LWA"),d=a("hh1v"),g=a("glrk"),h=a("ewvW"),m=a("/GqU"),b=a("wE6v"),v=a("XGwC"),A=a("fHMY"),y=a("33Wh"),w=a("JBy8"),C=a("BX/b"),k=a("dBg+"),S=a("Bs8V"),_=a("m/L8"),x=a("0eef"),B=a("kRJp"),I=a("busE"),P=a("VpIT"),K=a("93I0"),j=a("0BK2"),O=a("kOOl"),E=a("tiKp"),R=a("5Tg+"),T=a("dG/n"),H=a("1E5z"),U=a("afO8"),Q=a("tycR").forEach,V=K("hidden"),q=E("toPrimitive"),D=U.set,G=U.getterFor("Symbol"),J=Object.prototype,M=i.Symbol,F=s("JSON","stringify"),W=S.f,L=_.f,N=C.f,X=x.f,z=P("symbols"),Z=P("op-symbols"),Y=P("string-to-symbol-registry"),$=P("symbol-to-string-registry"),tt=P("wks"),et=i.QObject,at=!et||!et.prototype||!et.prototype.findChild,ot=r&&f((function(){return 7!=A(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,a){var o=W(J,e);o&&delete J[e],L(t,e,a),o&&t!==J&&L(J,e,o)}:L,it=function(t,e){var a=z[t]=A(M.prototype);return D(a,{type:"Symbol",tag:t,description:e}),r||(a.description=e),a},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof M},nt=function(t,e,a){t===J&&nt(Z,e,a),g(t);var o=b(e,!0);return g(a),u(z,o)?(a.enumerable?(u(t,V)&&t[V][o]&&(t[V][o]=!1),a=A(a,{enumerable:v(0,!1)})):(u(t,V)||L(t,V,v(1,{})),t[V][o]=!0),ot(t,o,a)):L(t,o,a)},rt=function(t,e){g(t);var a=m(e),o=y(a).concat(ut(a));return Q(o,(function(e){r&&!ct.call(a,e)||nt(t,e,a[e])})),t},ct=function(t){var e=b(t,!0),a=X.call(this,e);return!(this===J&&u(z,e)&&!u(Z,e))&&(!(a||!u(this,e)||!u(z,e)||u(this,V)&&this[V][e])||a)},lt=function(t,e){var a=m(t),o=b(e,!0);if(a!==J||!u(z,o)||u(Z,o)){var i=W(a,o);return!i||!u(z,o)||u(a,V)&&a[V][o]||(i.enumerable=!0),i}},ft=function(t){var e=N(m(t)),a=[];return Q(e,(function(t){u(z,t)||u(j,t)||a.push(t)})),a},ut=function(t){var e=t===J,a=N(e?Z:m(t)),o=[];return Q(a,(function(t){!u(z,t)||e&&!u(J,t)||o.push(z[t])})),o};(c||(I((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=O(t),a=function(t){this===J&&a.call(Z,t),u(this,V)&&u(this[V],e)&&(this[V][e]=!1),ot(this,e,v(1,t))};return r&&at&&ot(J,e,{configurable:!0,set:a}),it(e,t)}).prototype,"toString",(function(){return G(this).tag})),I(M,"withoutSetter",(function(t){return it(O(t),t)})),x.f=ct,_.f=nt,S.f=lt,w.f=C.f=ft,k.f=ut,R.f=function(t){return it(E(t),t)},r&&(L(M.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),n||I(J,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:M}),Q(y(tt),(function(t){T(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(Y,e))return Y[e];var a=M(e);return Y[e]=a,$[a]=e,a},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(u($,t))return $[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!r},{create:function(t,e){return void 0===e?A(t):rt(A(t),e)},defineProperty:nt,defineProperties:rt,getOwnPropertyDescriptor:lt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:ut}),o({target:"Object",stat:!0,forced:f((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(h(t))}}),F)&&o({target:"JSON",stat:!0,forced:!c||f((function(){var t=M();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,a){for(var o,i=[t],s=1;arguments.length>s;)i.push(arguments[s++]);if(o=e,(d(e)||void 0!==t)&&!st(t))return p(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!st(e))return e}),i[1]=e,F.apply(null,i)}});M.prototype[q]||B(M.prototype,q,M.prototype.valueOf),H(M,"Symbol"),j[V]=!0}}]);