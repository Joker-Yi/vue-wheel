(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{307:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(172);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},311:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},313:function(t,e,n){var o=n(22),s="["+n(311)+"]",i=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),a=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},314:function(t,e,n){var o=n(5),s=n(99);t.exports=function(t,e,n){var i,r;return s&&"function"==typeof(i=e.constructor)&&i!==n&&o(r=i.prototype)&&r!==n.prototype&&s(t,r),t}},315:function(t,e,n){"use strict";var o=n(7),s=n(4),i=n(98),r=n(11),a=n(8),c=n(18),u=n(314),l=n(46),f=n(2),p=n(30),d=n(67).f,h=n(27).f,v=n(9).f,b=n(313).trim,m=s.Number,N=m.prototype,C="Number"==c(p(N)),I=function(t){var e,n,o,s,i,r,a,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=b(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+u}for(r=(i=u.slice(2)).length,a=0;a<r;a++)if((c=i.charCodeAt(a))<48||c>s)return NaN;return parseInt(i,o)}return+u};if(i("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var g,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(C?f((function(){N.valueOf.call(n)})):"Number"!=c(n))?u(new m(I(e)),n,y):I(e)},_=o?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;_.length>E;E++)a(m,g=_[E])&&!a(y,g)&&v(y,g,h(m,g));y.prototype=N,N.constructor=y,r(s,"Number",y)}},320:function(t,e,n){},348:function(t,e,n){"use strict";var o=n(320);n.n(o).a},356:function(t,e,n){"use strict";n.r(e);n(173),n(315),n(176);var o=n(307),s={name:"VwToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","bottom","middle"].indexOf(t)>=0}}},computed:{toastClasses:function(){return Object(o.a)({},"position-".concat(this.position),!0)}},created:function(){},mounted:function(){this.updateStyles(),this.execAutoClose()},methods:{updateStyles:function(){var t=this;this.$nextTick((function(){t.$refs.line.style.height="".concat(t.$refs.toast.getBoundingClientRect().height,"px")}))},execAutoClose:function(){var t=this;this.autoClose&&setTimeout((function(){t.close()}),1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback(this)}}},i=(n(348),n(26)),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:t.toastClasses},[n("div",{ref:"toast",staticClass:"toast"},[n("div",{staticClass:"message"},[t.enableHtml?n("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),n("div",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?n("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n      "+t._s(t.closeButton.text)+"\n    ")]):t._e()])])}),[],!1,null,"e656643a",null);e.default=r.exports}}]);