(this.webpackJsonppokepi=this.webpackJsonppokepi||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(25),n(5)),u=(n(26),n(11)),i=n.n(u),s=n(17),p=n(8);var m=function(e){var t=e.pokemons;return r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,e.name)}))))};var f=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(20),l=Object(p.a)(c,2),u=l[0],f=l[1],v=Object(a.useState)(20),h=Object(p.a)(v,2),k=h[0],E=h[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://pokeapi.co/api/v2/pokemon/?limit=".concat(u,"&offset=").concat(k),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=a.results,o(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),r.a.createElement("div",null,r.a.createElement("h1",null,"Pokepi Pok\xe9mon"),r.a.createElement(m,{pokemons:n}),r.a.createElement("button",{onClick:function(){return alert("Yuhu"),f(u+20),void E(k+20)}},"More"))};var v=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(10);c.a.render(r.a.createElement(h.a,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0de1e2ed.chunk.js.map