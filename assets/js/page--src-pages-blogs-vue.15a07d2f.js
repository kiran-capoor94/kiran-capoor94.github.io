(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7qvl":function(t,s,a){},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a("ArLL"),a("KHd+")),o=a("Kw5r"),n=o.a.config.optionMergeStrategies.computed,c={metadata:{siteName:"Full Stack Engineer Portfolio"}},r=function(t){var s=t.options;s.__staticData?s.__staticData.data=c:(s.__staticData=o.a.observable({data:c}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(i.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"columns is-vcentered is-desktop"},[s("div",{staticClass:"column is-3"},[s("div",{staticClass:"author-desktop is-hidden-mobile"},[s("g-image",{staticClass:"author__image base_shadow animate__animated animate__fadeIn",attrs:{alt:"Author image",src:a("p+HC"),width:"200",height:"200",blur:"5"}})],1),s("div",{staticClass:"author has-text-centered-mobile is-hidden-desktop"},[s("g-image",{staticClass:"author__image base_shadow animate__animated animate__fadeIn",attrs:{alt:"Author image",src:a("p+HC"),width:"200",height:"200",blur:"5"}})],1)]),s("div",{staticClass:"column is-vcentered has-text-centered-mobile"},[s("div",{staticClass:"is-family-monospace is-size-1 is-inline-block has-text-centered-mobile"},[this._m(0),s("span",{staticClass:"mx-5 py-2 is-vcentered animate__animated animate__bounce animate__delay-1s"},[s("g-image",{attrs:{src:"https://img.icons8.com/color/48/000000/pray.png"}})],1)]),s("div",{staticClass:"is-flex"},[s("vue-typed-js",{attrs:{strings:["UI/UX Designer","Full Stack Dev"],startDelay:50,typeSpeed:100,fadeOut:!0,loop:!0,showCursor:!1}},[s("h2",{staticClass:"is-family-monospace is-size-1"},[this._v("\n          I'm Kiran Capoor |\n          "),s("span",{staticClass:"typing"})])])],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("h1",[this._v("Namaste")])])}],!1,null,null,null);"function"==typeof r&&r(l);s.a=l.exports},AO8t:function(t,s,a){},ArLL:function(t,s,a){"use strict";var e=a("AO8t");a.n(e).a},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),i=a("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=a("KHd+"),c=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[t.post.cover_image?a("div",{class:{"card-image":t.post.poster}},[a("figure",{staticClass:"image is-4by3"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image,width:"250",height:"250",fit:"contain"}}):t._e()],1)]):t._e(),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[t._m(0),a("div",{staticClass:"media-content"},[a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title is-4",domProps:{innerHTML:t._s(t.post.title)}}),a("PostMeta",{staticClass:"subtitle is-6",attrs:{post:t.post}}),a("PostTags",{staticClass:"subtitle is-6",attrs:{post:t.post}})],1)]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.post.description)}}),a("p",{staticClass:"card-footer-item"},[a("span",[a("g-link",{attrs:{to:t.post.path}},[t._v("Link")])],1)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],!1,null,null,null);s.a=c.exports},GsXb:function(t,s,a){"use strict";var e=a("7qvl");a.n(e).a},PpWc:function(t,s,a){"use strict";var e={props:["post"]},i=(a("GsXb"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},YIUa:function(t,s,a){"use strict";var e=a("hpwU");a.n(e).a},hpwU:function(t,s,a){},n6yM:function(t,s,a){"use strict";var e={props:["post"]},i=(a("YIUa"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports},"p+HC":function(t,s){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/author.5eb61c7.dc935ae1b48cc4e86c4e20c43401af2f.jpg",size:{width:200,height:200},sizes:"(max-width: 200px) 100vw, 200px",srcset:["/assets/static/author.5eb61c7.dc935ae1b48cc4e86c4e20c43401af2f.jpg 200w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-595e62d469ff269846d5e1568018d95d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-595e62d469ff269846d5e1568018d95d)' width='200' height='200' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABwgEBQADBgEC/8QANRAAAgEDAwIDBQcDBQAAAAAAAQIDBAURAAYhEjEHE2EUIkFRcQgjMoGRoeEVFlIXQmKxwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBW9SaCcwTqeplBIz099RtSKCllratIIFZpGBICjJwASePoDoHE%2byhSwvs2SoES9ZqZPvD3PI0fQgI50pu0JdxU2ybFFZrmlhtyxGNVCtJJUzAktJhUJwc8DnjXQ2HxT3Xt24UX9x1FLeLDPMsTVkETiaMscKekDJyeO3OgZExJjkDQ18cbJQ1fh7enmhXqSBnVgOQRznXEbm8Xtw3iomXZMFNSWmNjC9fXwv5hkX8YVO/HxyNUlZft2U9prqm9XRb5aBSP7ZAq%2bW4V1IVlDKvGSDx8BoFkv08U9aTAuFHHHbsNVutlTGYp5I2zlTjkY1r0Gas9tXP%2bjbgt9xKeYlNMsjp/mufeX8xkarNZoHy8K2t48PLVTzUk1RQmPzIJlhaUMhORnpBIYZwQfiNdBQWGguO4KKpp6CeKlt8hqPNmjKCWbpKoArc4UMzZx36dBr7Jm%2b6cWCr25cZemWhLT0%2beS0R5IH0OePXRQXcEV5uFNWUdPV2%2bRVdJJZIpjIqZyMqilRng86C1qLJSWu9XV6uikmoLhMKxJIoS/lTdIWRSBzg9KsDjuW1QeJNRQR7GucMNI8VG0ZeomeJo1EY5b8WCScdIHrq2tm4KGyB46inr5JqqoyziGYk5wOtg44HzI/TQO%2b1f4gJLNBtezVIKj7ytaM/HPupn9zoFplcyyNIxJLEsc%2buvnWazQeqpZgqglj2A1uFHUFeoRPj6a7%2b0Waht7lunrkHSwZ%2bSRwCP31BDLJIFY4SQFM/DqB7/APR0Ffsf%2bpW7ddsmtcywVzSqkTMMrljjDD5fPTT3PxRtNTb4qTc8902/fIMCUQN0BsfFHwQyHHGljqoZaaWmqIm6JoyCrD/awOQf1GmR2dVweItgEkMEElbEAKiCRQ3Q/wAe/YHuPr6aDaviUt2tS2DYRrLjeKgdEtfV%2b9FCP83b4nB4A0FPGzZ9HYdwUtBDLJLWRUUclXUuctPM7MSxHwzkcfLGmdtdjpNo2eouN3kpqCjpvvHIwq/oO7HsB3Olg3neX3Vu2uu8yssdQ5kVG7pGowin9tAPX25W%2b0eVEFfnGc4xxnnUOutdVRH76PK4B6l5HIyP20Sqcg0oqe7PT9Jx36tRaGZWEvnqGRZCoBHdRH/P76CGKh3ngTuVcqT8%2bRqviRvKZVGWViyj1BP86kWCF7hfqGiiz5tVURwrn5swX/3TTeIPhNttoIZ7fTPBXVE9LRQ%2bzsETPUFZ2XsT0hiT6aBWHcToOrIVh217bbldtv13tdnrqqiqPwmWnkKEj1x3H10d5PAhKy7XejoLq0cFLURRo8sPUSHjDluCO2R9fTVLTeDF4ams0yVtDILiD09RZTF7jOA3B4IQ49dAMrjetw7iaJr/AHesrI0OVWonLhT6DsD668cCFGyc5Xk%2bny0Uv9IKqGC5zVlzt8S0VJFVsfewwkDFVBOOcrj6ka6Sm8Mtq267x2u81NXcLhLQPUezx5iVJEXqIP8AxI7c9wdAG7fRymnhVUZi2G6VGSfy1Bqk9lOSpUmfBBHyH8abTbklrpa7atTbordRxXe3mKOOKILIJAofq9QMMv56Af2maFbXumSrpugU1zUVkRUY5x0tkfPqBP56D//Z' /%3e%3c/svg%3e"}},wJor:function(t,s,a){"use strict";a.r(s);var e=a("A6W1"),i=a("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hi! I'm Kiran Capoor"}},n=a("KHd+"),c=null,r=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",{attrs:{"show-logo":!1}},[s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},this._l(this.$page.posts.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])])])}),[],!1,null,null,null);"function"==typeof c&&c(r);s.default=r.exports}}]);