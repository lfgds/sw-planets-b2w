(function(t){function n(n){for(var a,r,i=n[0],l=n[1],c=n[2],f=0,p=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,i=1;i<e.length;i++){var l=e[i];0!==s[l]&&(a=!1)}a&&(o.splice(n--,1),t=r(r.s=e[0]))}return t}var a={},s={app:0},o=[];function r(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0072":function(t,n,e){},"057e":function(t,n,e){},"0748":function(t,n,e){},1636:function(t,n,e){"use strict";var a=e("2bf2"),s=e.n(a);s.a},"1af7":function(t,n,e){t.exports=e.p+"img/sw_planets_logo.f068bbb5.svg"},"266d":function(t,n,e){"use strict";var a=e("6e35"),s=e.n(a);s.a},"2a4a":function(t,n,e){"use strict";var a=e("3f3f"),s=e.n(a);s.a},"2a85":function(t,n,e){},"2bf2":function(t,n,e){},"3f3f":function(t,n,e){},"43c4":function(t,n,e){},5225:function(t,n,e){t.exports=e.p+"img/baby-yoda.b50df21a.gif"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");for(var a=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],r=100,i=0;i<r;i++){var l=document.createElement("div");l.className="star";var c=u();l.style.top=c[0]+"px",l.style.left=c[1]+"px",document.body.append(l)}function u(){var t=window.innerWidth,n=window.innerHeight,e=Math.floor(Math.random()*n),a=Math.floor(Math.random()*t);return[e,a]}var f={name:"App"},p=f,_=(e("5c0b"),e("2877")),d=Object(_["a"])(p,s,o,!1,null,null,null),m=d.exports,h=e("8c4f"),v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("ThemeSong"),e("ALongTime"),e("LogoStarWars"),e("TextContent"),e("Buttons",{staticClass:"button",attrs:{id:"play_menu",text:"Play Menu ",path:"/play"}})],1)},b=[],g=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("p",{staticClass:"intro"},[t._v(" A long time ago in a galaxy far, "),e("br"),t._v("far away.... ")])])}],w={name:"ALongTime"},x=w,C=(e("266d"),Object(_["a"])(x,g,y,!1,null,"53bba326",null)),E=C.exports,O=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",[a("div",{staticClass:"logo"},[a("img",{attrs:{src:e("adf4")}})])])}],P={name:"LogoStarWars"},$=P,T=(e("9f4c"),Object(_["a"])($,O,j,!1,null,"5b92ebd2",null)),L=T.exports,M=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"board__container"},[e("div",{staticClass:"board__content"},[e("p",{staticClass:"board__title"},[t._v("Episode I")]),e("p",{staticClass:"board__subtitle"},[t._v("THE CODER'S MENACE")]),e("br"),e("p",[t._v("B2W summons your Jedis to go out in search of new warriors to join to your journey beside the light.")]),e("p",[t._v("Upon meeting the alleged Padawan, he was challenged to find out if he was worthy of the Force.")]),e("p",[t._v("The young Padawan carried out his challenge, but your destiny, as well as the outcome of this story, will be revealed in the future...")])])])}],B={name:"TextContent"},W=B,k=(e("2a4a"),Object(_["a"])(W,M,S,!1,null,"6f2e8ad4",null)),A=k.exports,H=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("audio",{attrs:{preload:"auto",autoplay:""}},[e("source",{attrs:{src:"https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg",type:"audio/ogg"}}),e("source",{attrs:{src:"https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3",type:"audio/mpeg"}})])}],J={name:"ThemeSong"},F=J,I=Object(_["a"])(F,H,N,!1,null,null,null),D=I.exports,G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("router-link",{attrs:{to:t.path}},[t._v(t._s(t.text))])},R=[],U={name:"Buttons",props:["text","path"]},Y=U,q=(e("bfb1"),Object(_["a"])(Y,G,R,!1,null,null,null)),z=q.exports,K={name:"Home",components:{ALongTime:E,LogoStarWars:L,TextContent:A,ThemeSong:D,Buttons:z},mounted:function(){var t=this;setTimeout((function(){t.$router.push("/play")}),96e3)}},Q=K,V=(e("1636"),Object(_["a"])(Q,v,b,!1,null,"80543d68",null)),X=V.exports,Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"planets__container"},[e("div",{staticClass:"planets__content"},[e("Loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),e("Planet",{attrs:{planets:this.planets}})],1),e("div",{staticClass:"planets__buttons"},[e("button",{staticClass:"button",attrs:{id:"randomPlanet"},on:{click:function(n){return t.randomPlanet()}}},[t._v("Next")]),e("Buttons",{staticClass:"button",attrs:{text:"Menu",path:"play"}})],1)])},tt=[],nt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"loading__container"},[a("img",{attrs:{src:e("5225"),alt:"Loading"}})])}],at={name:"Loading"},st=at,ot=(e("9251"),Object(_["a"])(st,nt,et,!1,null,"6f9e8a81",null)),rt=ot.exports,it=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",{staticClass:"planets__name"},[t._v(t._s(t.planets.name))])]),e("div",{staticClass:"planets__data"},[e("p",[e("span",[t._v("Population:")]),t._v(" "+t._s(t.planets.population)+" ")]),e("p",[e("span",[t._v("Climate:")]),t._v(" "+t._s(t.planets.climate)+" ")]),e("p",[e("span",[t._v("Terrain:")]),t._v(" "+t._s(t.planets.terrain)+" ")]),t.planets.films?e("p",[e("span",[t._v("Featured in")]),t._v(" "+t._s(t.planets.films.length)+" "),e("span",[t._v("films")])]):t._e()])])},lt=[],ct={name:"Planet",props:["planets"]},ut=ct,ft=(e("8f55"),Object(_["a"])(ut,it,lt,!1,null,"5b022390",null)),pt=ft.exports,_t=e("bc3a"),dt=e.n(_t),mt={name:"Planets",components:{Loading:rt,Planet:pt,Buttons:z},data:function(){return{planets:"",isLoading:!1}},methods:{randomPlanet:function(){var t=this;this.isLoading=!0;var n=Math.floor(61*Math.random())+1;dt.a.get("https://swapi.co/api/planets/"+n).then((function(n){t.planets=n.data,setTimeout((function(){t.isLoading=!1}),2e3)}))}},created:function(){this.randomPlanet()}},ht=mt,vt=(e("f22c"),Object(_["a"])(ht,Z,tt,!1,null,null,null)),bt=vt.exports,gt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("MenuContent")],1)},yt=[],wt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu__container"},[t._m(0),e("div",{staticClass:"menu__buttons"},[e("Buttons",{staticClass:"button",attrs:{id:"play",text:"Play",path:"planets"}}),e("Buttons",{staticClass:"button",attrs:{id:"intro",text:"Intro",path:"/"}}),e("Buttons",{staticClass:"button",attrs:{id:"about",text:"About",path:"about"}})],1)])},xt=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"menu__logo"},[a("img",{attrs:{src:e("1af7")}})])}],Ct={name:"MenuContent",components:{Buttons:z}},Et=Ct,Ot=(e("6042"),Object(_["a"])(Et,wt,xt,!1,null,"2f57be28",null)),jt=Ot.exports,Pt={name:"Play",components:{MenuContent:jt}},$t=Pt,Tt=(e("f959"),Object(_["a"])($t,gt,yt,!1,null,null,null)),Lt=Tt.exports,Mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about__container"},[t._m(0),e("div",{staticClass:"about__buttons"},[e("Buttons",{staticClass:"button",attrs:{text:"Home",path:"/"}}),e("Buttons",{staticClass:"button",attrs:{text:"Menu",path:"play"}})],1)])},St=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about__content"},[e("h1",{staticClass:"about__title"},[t._v("Star Wars Planets")]),e("p",[t._v(" The game was developed as a challenge proposed by "),e("a",{attrs:{href:"http://somos.b2wdigital.com/"}},[t._v("B2W")]),t._v(", which consists of displaying information about a random planet from the Star Wars franchise such as population, climate, terrain and in how many films this planet has been featured in. ")]),e("p",{staticClass:"about__social"},[e("a",{attrs:{href:"https://github.com/lfgds",target:"_blank"}},[t._v("Github")]),e("a",{attrs:{href:"https://www.linkedin.com/in/lfgsantos/",target:"_blank"}},[t._v("Linkedin")])])])}],Bt={name:"About",components:{Buttons:z}},Wt=Bt,kt=(e("f26d"),Object(_["a"])(Wt,Mt,St,!1,null,null,null)),At=kt.exports;a["a"].use(h["a"]);var Ht=[{path:"/",name:"Home",component:X},{path:"/play",name:"Play",component:Lt},{path:"/about",name:"About",component:At},{path:"/planets",name:"Planets",component:bt}],Nt=new h["a"]({mode:"history",base:"/",routes:Ht}),Jt=Nt;a["a"].config.productionTip=!1,new a["a"]({router:Jt,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var a=e("9c0c"),s=e.n(a);s.a},"5f83":function(t,n,e){},6042:function(t,n,e){"use strict";var a=e("a4df"),s=e.n(a);s.a},"6e35":function(t,n,e){},"8f55":function(t,n,e){"use strict";var a=e("0748"),s=e.n(a);s.a},9251:function(t,n,e){"use strict";var a=e("43c4"),s=e.n(a);s.a},"9c0c":function(t,n,e){},"9f4c":function(t,n,e){"use strict";var a=e("ae31"),s=e.n(a);s.a},a4df:function(t,n,e){},adf4:function(t,n,e){t.exports=e.p+"img/Star_Wars_Yellow_Logo.b02209e4.svg"},ae31:function(t,n,e){},bfb1:function(t,n,e){"use strict";var a=e("2a85"),s=e.n(a);s.a},f22c:function(t,n,e){"use strict";var a=e("0072"),s=e.n(a);s.a},f26d:function(t,n,e){"use strict";var a=e("5f83"),s=e.n(a);s.a},f959:function(t,n,e){"use strict";var a=e("057e"),s=e.n(a);s.a}});
//# sourceMappingURL=app.7ee0a472.js.map