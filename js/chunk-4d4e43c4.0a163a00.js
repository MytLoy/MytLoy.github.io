(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d4e43c4"],{"1bbd":function(t,e,a){"use strict";var n=a("9f67"),r=a("d910"),i=a("38b9");t.exports=function(t,e,a){var o=n(e);o in t?r.f(t,o,i(0,a)):t[o]=a}},"1ca1":function(t,e,a){var n=a("a719"),r=a("74e7"),i=a("90fb"),o=i("species");t.exports=function(t,e){var a;return r(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"1ea7":function(t,e,a){var n=a("efe2"),r=a("90fb"),i=a("f594"),o=r("species");t.exports=function(t){return i>=51||!n((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3473:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-box"},[a("ContentTitle",{attrs:{title:"卡片："}}),a("div",{staticClass:"card-all"},[a("div",[a("div",[t._v("文字：")]),a("a-textarea",{staticClass:"card-input",attrs:{placeholder:"请输入正文","auto-size":{minRows:3,maxRows:5}},model:{value:t.contentTxt,callback:function(e){t.contentTxt=e},expression:"contentTxt"}}),a("div",[t._v("引用：")]),a("a-textarea",{staticClass:"card-input",attrs:{placeholder:"请输入引用","auto-size":""},model:{value:t.quoteTxt,callback:function(e){t.quoteTxt=e},expression:"quoteTxt"}}),a("div",{staticClass:"change-img"},[a("div",[t._v("换图：")]),a("a-button",{attrs:{type:"link",icon:"redo"},on:{click:function(e){return t.refreshImg()}}}),t._l(t.imgList,(function(e,n){return a("img",{key:n,staticClass:"all-img",attrs:{src:"/static/images/"+e+".jpg"},on:{click:function(a){return t.refreshImg(e)}}})}))],2),a("div",{staticStyle:{"margin-top":"10px"}},[t._v("效果: "),a("a-button",{attrs:{type:"primary"},on:{click:t.downLoadImg}},[t._v("下载")])],1)],1),a("div",{ref:"mycard",staticClass:"card-content",attrs:{id:"card"}},[a("div",{staticClass:"bg",style:t.bgImg},[a("div",{staticClass:"bg-mask"})]),a("div",{staticClass:"day",attrs:{"data-key":t.day}},[t._v(t._s(t.day))]),a("div",{staticClass:"y-m-w"},[a("span",[t._v(t._s(t.year)+"."+t._s(t.month)+" ")]),a("span",[t._v(t._s(t.weekDay))])]),a("div",{staticClass:"card-txt"},[a("div",{staticClass:"content-txt",domProps:{innerHTML:t._s(t.contentTxt)}}),a("div",{staticClass:"quote-txt"},[t._v(t._s(t.quoteTxt))])])])])],1)},r=[],i=(a("b4fb"),a("e35a"),a("f4e3"),a("5e9f"),{mounted:function(){},computed:{weekDay:function(){var t=null,e=this.$moment().format("d");switch(e){case"0":t="星期日";break;case"1":t="星期一";break;case"2":t="星期二";break;case"3":t="星期三";break;case"4":t="星期四";break;case"5":t="星期五";break;case"6":t="星期六";break;default:break}return t}},data:function(){return{downId:"card",year:this.$moment().format("YYYY"),month:this.$moment().format("MM"),day:this.$moment().format("DD"),contentTxt:"毁掉我们的不是我们所憎恨的东西，而恰恰是我们所热爱的东西。",quoteTxt:"尼尔·波兹曼",bgImg:null,imgList:9}},methods:{refreshImg:function(t){if(t)this.bgImg='background-image: url("/static/images/'.concat(t,'.jpg")');else{var e=Math.floor(9*Math.random())+1;this.bgImg='background-image: url("/static/images/'.concat(e,'.jpg")')}console.log(this.bgImg)},fixType:function(t){var e=t.toLowerCase().replace(/jpg/i,"jpeg"),a=e.match(/png|jpeg|bmp|gif/)[0];return"image/".concat(a)},saveFile:function(t,e){var a=document.createElementNS("http://www.w3.org/1999/xhtml","a");a.href=t,a.download=e;var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(n)},downLoadImg:function(){var t=this,e=this,a=this.$refs.mycard.offsetWidth||375,n=this.$refs.mycard.offsetHeight||683,r={logging:!1,width:a,height:n,scale:2};setTimeout((function(){e.html2canvas(document.getElementById(e.downId),r).then((function(a){var n="png",r=a.toDataURL("image/png").replace(e.fixType(n),"image/octet-stream"),i="卡片_".concat(t.$moment().format(),".").concat(n);e.saveFile(r,i)}),{useCORS:!0})}),0)}}}),o=i,c=(a("981c"),a("9ca4")),s=Object(c["a"])(o,n,r,!1,null,"72cb9f6a",null);e["default"]=s.exports},"74e7":function(t,e,a){var n=a("2118");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"981c":function(t,e,a){"use strict";var n=a("c8b8"),r=a.n(n);r.a},b4fb:function(t,e,a){"use strict";var n=a("1c8b"),r=a("efe2"),i=a("74e7"),o=a("a719"),c=a("3553"),s=a("d88d"),u=a("1bbd"),d=a("1ca1"),l=a("1ea7"),f=a("90fb"),m=a("f594"),v=f("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",h=m>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),x=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},y=!h||!b;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,n,r,i,o=c(this),l=d(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],x(i)){if(r=s(i.length),f+r>g)throw TypeError(p);for(a=0;a<r;a++,f++)a in i&&u(l,f,i[a])}else{if(f>=g)throw TypeError(p);u(l,f++,i)}return l.length=f,l}})},c8b8:function(t,e,a){},f4e3:function(t,e,a){"use strict";var n=a("b2a2"),r=a("857c"),i=a("d88d"),o=a("2732"),c=a("38eb"),s=a("59da");n("match",1,(function(t,e,a){return[function(e){var a=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var o=r(t),u=String(this);if(!o.global)return s(o,u);var d=o.unicode;o.lastIndex=0;var l,f=[],m=0;while(null!==(l=s(o,u))){var v=String(l[0]);f[m]=v,""===v&&(o.lastIndex=c(u,i(o.lastIndex),d)),m++}return 0===m?null:f}]}))}}]);