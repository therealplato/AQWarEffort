(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery;return r||o&&(void 0!==a&&a)}},"7W2i":function(t,e,r){var n=r("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"8Kt/":function(t,e,r){"use strict";e.__esModule=!0,e.defaultHead=l,e.default=void 0;var n=c(r("q1tI")),o=c(r("Xuae")),a=r("lwAK"),i=r("FYa8"),s=r("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[n.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===n.default.Fragment?t.concat(n.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var r=n.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(u,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var u=o.props[l],f=n[l]||new Set;f.has(u)?a=!1:(f.add(u),n[l]=f)}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return n.default.cloneElement(t,{key:r})}))}var h=(0,o.default)();function d(t){var e=t.children;return(n.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return n.default.createElement(i.HeadManagerContext.Consumer,null,(function(r){return n.default.createElement(h,{reduceComponentsToState:f,handleStateChange:r,inAmpMode:(0,s.isInAmpMode)(t)},e)}))})))}d.rewind=h.rewind;var m=d;e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},RNiq:function(t,e,r){"use strict";r.r(e),r.d(e,"__N_SSG",(function(){return O})),r.d(e,"default",(function(){return E}));var n=r("q1tI"),o=r.n(n);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=r("8Kt/"),d=r.n(h),m=o.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var y=function(t){l(r,t);var e=b(r);function r(t){return a(this,r),e.call(this,t)}return s(r,[{key:"render",value:function(){return m(n.Fragment,null,m(d.a,null,m("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),m("title",null,"AQ War Effort"),m("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"}),m("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;700&display=swap",rel:"stylesheet"}),m("link",{rel:"stylesheet",type:"text/css",href:"css/reset.css"}),m("link",{rel:"stylesheet",type:"text/css",href:"css/styles.css"})),this.props.children,m("script",{src:"https://wow.zamimg.com/widgets/power.js",async:!0}))}}]),r}(n.Component),v=function t(e){a(this,t),this.sumTotal=parseInt(e.Total),this.copperBar=parseInt(e["Copper Bar"]),this.tinBar=parseInt(e["Tin Bar"]),this.ironBar=parseInt(e["Iron Bar"]),this.thoriumBar=parseInt(e["Thorium Bar"]),this.mithrilBar=parseInt(e["Mithril Bar"]),this.lightLeather=parseInt(e["Light Leather"]),this.mediumLeather=parseInt(e["Medium Leather"]),this.heavyLeather=parseInt(e["Heavy Leather"]),this.thickLeather=parseInt(e["Thick Leather"]),this.ruggedLeather=parseInt(e["Rugged Leather"]),this.linenBandage=parseInt(e["Linen Bandages"]),this.woolBandage=parseInt(e["Wool Bandages"]),this.silkBandage=parseInt(e["Silk Bandages"]),this.mageBandage=parseInt(e["Mageweave Bandages"]),this.runeclothBandage=parseInt(e["Runecloth Bandages"]),this.peacebloom=parseInt(e.Peacebloom),this.stranglekelp=parseInt(e.Stranglekelp),this.purpleLotus=parseInt(e["Purple Lotus"]),this.firebloom=parseInt(e.Firebloom),this.arthasTear=parseInt(e["Arthas' Tears"]),this.roastRaptor=parseInt(e["Roast Raptor"]),this.leanWolf=parseInt(e["Lean Wolf Steak"]),this.rainbowFin=parseInt(e["Rainbow Fin Albacore"]),this.spottedYellowtail=parseInt(e["Spotted Yellowtail"]),this.bakedSalmon=parseInt(e["Baked Salmon"])},g=o.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var w=function(t){l(r,t);var e=_(r);function r(t){return a(this,r),e.call(this,t)}return s(r,[{key:"render",value:function(){return g(n.Fragment,null,g("section",{id:"hero"},g("h1",null,"AQ War Effort"),g("h3",null,"Deviate Delight"),g("h4",null,"Last Updated: ",this.props.date)))}}]),r}(n.Component),j=o.a.createElement;function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var k=function(t){l(r,t);var e=S(r);function r(t){return a(this,r),e.call(this,t)}return s(r,[{key:"render",value:function(){var t={prog:{width:"".concat(Math.floor(this.props.current/this.props.total*100),"%")}};return j(n.Fragment,null,j("div",{className:"item"},j("a",{href:"https://classic.wowhead.com/item=".concat(this.props.id,"/"),"data-wowhead":"item=".concat(this.props.id)},j("img",{src:"https://wow.zamimg.com/images/wow/icons/large/".concat(this.props.pic)})),j("span",{className:"percent"},Math.floor(this.props.current/this.props.total*100)),j("div",{className:"meter"},j("span",{className:"progress",style:t.prog},this.props.current," / ",this.props.total))))}}]),r}(n.Component),B=o.a.createElement;function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var R=function(t){l(r,t);var e=x(r);function r(t){return a(this,r),e.call(this,t)}return s(r,[{key:"render",value:function(){"".concat(Math.floor(this.props.table.current.sumTotal/this.props.table.total.sumTotal*100),"%");return B(n.Fragment,null,B(k,{pic:"inv_bannerpvp_02.jpg",id:21436,total:this.props.table.total.sumTotal,current:this.props.table.current.sumTotal}),B("hr",null),B(k,{pic:"inv_ingot_02.jpg",id:2840,total:this.props.table.total.copperBar,current:this.props.table.current.copperBar}),B(k,{pic:"inv_misc_leatherscrap_08.jpg",id:4304,total:this.props.table.total.thickLeather,current:this.props.table.current.thickLeather}),B(k,{pic:"inv_misc_bandage_11.jpg",id:14529,total:this.props.table.total.runeclothBandage,current:this.props.table.current.runeclothBandage}),B(k,{pic:"inv_misc_herb_17.jpg",id:8831,total:this.props.table.total.purpleLotus,current:this.props.table.current.purpleLotus}),B(k,{pic:"inv_misc_fish_01.jpg",id:6887,total:this.props.table.total.spottedYellowtail,current:this.props.table.current.spottedYellowtail}),B("hr",null),B(k,{pic:"inv_misc_bandage_15.jpg",id:1251,total:this.props.table.total.linenBandage,current:this.props.table.current.linenBandage}),B(k,{pic:"inv_misc_bandage_01.jpg",id:6450,total:this.props.table.total.silkBandage,current:this.props.table.current.silkBandage}),B(k,{pic:"inv_misc_fish_27.jpg",id:5095,total:this.props.table.total.rainbowFin,current:this.props.table.current.rainbowFin}),B(k,{pic:"inv_misc_food_50.jpg",id:12210,total:this.props.table.total.roastRaptor,current:this.props.table.current.roastRaptor}),B(k,{pic:"inv_misc_herb_11.jpg",id:3820,total:this.props.table.total.stranglekelp,current:this.props.table.current.stranglekelp}),B(k,{pic:"inv_misc_herb_13.jpg",id:8836,total:this.props.table.total.arthasTear,current:this.props.table.current.arthasTear}),B(k,{pic:"inv_ingot_iron.jpg",id:3575,total:this.props.table.total.ironBar,current:this.props.table.current.ironBar}),B(k,{pic:"inv_ingot_07.jpg",id:12359,total:this.props.table.total.thoriumBar,current:this.props.table.current.thoriumBar}),B(k,{pic:"inv_misc_leatherscrap_03.jpg",id:2318,total:this.props.table.total.lightLeather,current:this.props.table.current.lightLeather}),B(k,{pic:"inv_misc_leatherscrap_05.jpg",id:2319,total:this.props.table.total.mediumLeather,current:this.props.table.current.mediumLeather}))}}]),r}(n.Component),I=o.a.createElement;function L(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var P=function(t){l(r,t);var e=L(r);function r(t){return a(this,r),e.call(this,t)}return s(r,[{key:"render",value:function(){return I(n.Fragment,null,I(k,{pic:"inv_bannerpvp_01.jpg",id:21438,total:this.props.table.total.sumTotal,current:this.props.table.current.sumTotal}),I("hr",null),I(k,{pic:"inv_ingot_02.jpg",id:2840,total:this.props.table.total.copperBar,current:this.props.table.current.copperBar}),I(k,{pic:"inv_misc_leatherscrap_08.jpg",id:4304,total:this.props.table.total.thickLeather,current:this.props.table.current.thickLeather}),I(k,{pic:"inv_misc_bandage_11.jpg",id:14529,total:this.props.table.total.runeclothBandage,current:this.props.table.current.runeclothBandage}),I(k,{pic:"inv_misc_herb_17.jpg",id:8831,total:this.props.table.total.purpleLotus,current:this.props.table.current.purpleLotus}),I(k,{pic:"inv_misc_fish_01.jpg",id:6887,total:this.props.table.total.spottedYellowtail,current:this.props.table.current.spottedYellowtail}),I("hr",null),I(k,{pic:"inv_misc_bandage_14.jpg",id:3530,total:this.props.table.total.woolBandage,current:this.props.table.current.woolBandage}),I(k,{pic:"inv_misc_bandage_19.jpg",id:8544,total:this.props.table.total.mageBandage,current:this.props.table.current.mageBandage}),I(k,{pic:"inv_misc_food_47.jpg",id:12209,total:this.props.table.total.leanWolf,current:this.props.table.current.leanWolf}),I(k,{pic:"inv_misc_fish_20.jpg",id:13935,total:this.props.table.total.bakedSalmon,current:this.props.table.current.bakedSalmon}),I(k,{pic:"inv_misc_flower_02.jpg",id:2447,total:this.props.table.total.peacebloom,current:this.props.table.current.peacebloom}),I(k,{pic:"inv_misc_herb_19.jpg",id:4625,total:this.props.table.total.firebloom,current:this.props.table.current.firebloom}),I(k,{pic:"inv_ingot_05.jpg",id:3576,total:this.props.table.total.tinBar,current:this.props.table.current.tinBar}),I(k,{pic:"inv_ingot_06.jpg",id:3860,total:this.props.table.total.mithrilBar,current:this.props.table.current.mithrilBar}),I(k,{pic:"inv_misc_leatherscrap_07.jpg",id:4234,total:this.props.table.total.heavyLeather,current:this.props.table.current.heavyLeather}),I(k,{pic:"inv_misc_leatherscrap_02.jpg",id:8170,total:this.props.table.total.ruggedLeather,current:this.props.table.current.ruggedLeather}))}}]),r}(n.Component),C=o.a.createElement,O=!0;function E(t){var e=t.gson,r=t.lastUpdate,n=(t.preview,{ally:{current:new v(e[1]),total:new v(e[0])},horde:{current:new v(e[3]),total:new v(e[2])}});return C(y,null,C(w,{date:r}),C("section",{id:"section-table"},C("div",{className:"header-bar"},C(k,{pic:"inv_misc_monsterhead_04.jpg",id:6657,total:n.ally.total.sumTotal+n.horde.total.sumTotal,current:n.ally.current.sumTotal+n.horde.current.sumTotal})),C("div",{id:"table"},C("div",{id:"table-ally",className:"tab"},C(R,{table:n.ally})),C("div",{id:"table-horde",className:"tab"},C(P,{table:n.horde})))),C("footer",{id:"footer"},C("span",null,"Made with \ud83c\udf7b\ufe0f by Exa & Doyd ",C("br",null),"of the Laughing Coffin"),C("span",null,C("i",{className:"fab fa-github"})," ",C("a",{href:"https://github.com/JollyGrin/aqwareffort"},"View Source"))))}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},W8MJ:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},Xuae:function(t,e,r){"use strict";var n=r("lwsE"),o=r("PJYZ"),a=r("W8MJ"),i=r("7W2i"),s=r("a1gu"),c=r("Nsbk"),l=r("RIqP");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}e.__esModule=!0,e.default=void 0;var p=r("q1tI"),f=!1;e.default=function(){var t,e=new Set;function r(r){t=r.props.reduceComponentsToState(l(e),r.props),r.props.handleStateChange&&r.props.handleStateChange(t)}return(function(s){i(l,s);var c=u(l);function l(t){var a;return n(this,l),a=c.call(this,t),f&&(e.add(o(a)),r(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var r=t;return t=void 0,e.clear(),r}}]),a(l,[{key:"componentDidMount",value:function(){e.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),r(this)}},{key:"render",value:function(){return null}}]),l}(p.Component))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},vlRD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1]]]);