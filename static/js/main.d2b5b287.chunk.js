(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=(n(10),n(1)),l=(n(11),n(2));function u(e){var t=e.value,n=e.onClick,r=e.selected,a={piece:{height:80,width:"".concat(100/7,"%"),backgroundColor:"yellow",padding:12,boxSizing:"border-box"},circle:{height:60,width:60,borderRadius:40,border:"3px solid ".concat(r?"#00FF00":"yellow"),boxShadow:"inset 1px 2px 3px #000000"}};return o.a.createElement("div",{style:Object(l.a)({},a.piece),onClick:n},o.a.createElement("div",{style:Object(l.a)(Object(l.a)({},a.circle),{},{backgroundColor:t?1===t?"#ff0000":"#000000":"#ffffff"})}))}function f(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}function s(e){if(1===v(e))return 1e4;if(2===v(e))return-1e4;for(var t=0,n=function(n){for(var r=function(r){for(var o=function(o){for(var a=function(a){[1,2].forEach((function(i){e[n]+1&&e[n][r]+1&&e[n+a]+1&&e[n+a][r+o]+1&&e[n+2*a]+1&&e[n+2*a][r+2*o]+1&&e[n+3*a]+1&&e[n+3*a][r+3*o]+1&&(f([e[n][r],e[n+a][r+o],e[n+2*a][r+2*o],e[n+3*a][r+3*o]],[0,i,i,i])||f([e[n][r],e[n+a][r+o],e[n+2*a][r+2*o],e[n+3*a][r+3*o]],[i,0,i,i]))&&(1===i?t+=1.5:t--)}))},i=-1;i<2;i++)a(i)},a=-1;a<2;a++)o(a)},o=0;o<e[0].length;o++)r(o)},r=0;r<e.length;r++)n(r);return t}function v(e){for(var t=0,n=0;n<e.length;n++)for(var r=0;r<e[0].length;r++)for(var o=1;o<3;o++)n>2&&r<e[0].length-3&&f([e[n][r],e[n-1][r+1],e[n-2][r+2],e[n-3][r+3]],[o,o,o,o])&&(t=o),r<e[0].length-3&&f([e[n][r],e[n][r+1],e[n][r+2],e[n][r+3]],[o,o,o,o])&&(t=o),n>2&&f([e[n][r],e[n-1][r],e[n-2][r],e[n-3][r]],[o,o,o,o])&&(t=o),r<e[0].length-3&&n<e.length-3&&f([e[n][r],e[n+1][r+1],e[n+2][r+2],e[n+3][r+3]],[o,o,o,o])&&(t=o);return t}function d(e){var t={circle:{height:20,width:20,borderRadius:40,backgroundColor:1===e.value?"#FF0000":"#000000",display:"inline-block"}};return o.a.createElement("div",{style:t.circle})}function m(e){var t=e.title,n=e.onClick,r={container:{color:"#FFFFFF",backgroundColor:e.isRed?"#FF0000":"#0000FF",display:"inline-block",padding:4,cursor:"pointer",borderRadius:4}};return o.a.createElement("div",{style:r.container,onClick:n},t)}var h=function(){function e(){var e=function(){for(var e=[],t=0;t<6;t++){e.push([]);for(var n=0;n<7;n++)e[t].push(0)}return e}();g(e),i(1),E(null)}var t=Object(r.useState)(1),n=Object(c.a)(t,2),a=n[0],i=n[1],l=Object(r.useState)([]),f=Object(c.a)(l,2),h=f[0],g=f[1];console.log("board",h);var b=Object(r.useState)(null),p=Object(c.a)(b,2),y=p[0],E=p[1],k=Object(r.useState)(!1),w=Object(c.a)(k,2),O=w[0],j=w[1],C=Object(r.useState)(!1),F=Object(c.a)(C,2),S=F[0],x=F[1],N=Object(r.useState)(1),R=Object(c.a)(N,2),H=R[0],M=R[1],J=Object(r.useRef)(!1);Object(r.useEffect)((function(){return e()}),[]),Object(r.useEffect)((function(){if(O&&h){console.log("doing work");var e=I(h);if(!v(h)){var t=z(h,H+3,2,-1e4,1e4).move;g(W(t,e,2)),i(1),E([B(t,h),t])}j(!1),J.current=!1}}),[O]),Object(r.useEffect)((function(){!function(){if(S){var e,t=null===(e=z(h,4,4,-1e4,1e4))||void 0===e?void 0:e.move;if(!isNaN(t)){var n=B(t,h);setTimeout((function(){if(!isNaN(t)&&null!==t){console.log("move",t);var e=I(h);e[n][t]=a,g(e),i(1===a?2:1),E([n,t]),j(!0),setTimeout((function(){return x(!0)}),100)}}),50)}x(!1)}}()}),[S,h]);var T={boardStyle:{display:"flex",flexWrap:"wrap",width:648},buttonHolder:{padding:4},header:{display:"flex",justifyContent:"space-between",alignItems:"center",width:648},difficultyHolder:{display:"flex"}};function W(e,t,n){var r=B(e,t);if(!isNaN(r)){var o=I(t);return o[B(e,t)][e]=n,o}}function B(e,t){for(var n=t.length-1;n>=0;n--)if(0===t[n][e])return n}function I(e){return JSON.parse(JSON.stringify(e))}function z(e,t,n,r,o){if(e){var a,i=s(e),c=0,l=[],u=[];if(Math.abs(i)<1e4){if(0===t){var f={score:s(e),move:null};return console.log("final!",f),f}if(2===n){c=o;for(var v=0,d=0;d<7;d++){var m=W(d,e,2);if(m){var h,g=null===(h=z(m,t-1,1,r,o))||void 0===h?void 0:h.score;if(g<c&&(o=c=g,v=d),0===g&&l.push({move:d,score:g}),u.push({move:d,score:g}),r>=o)return{score:o,move:d}}}if(console.log("player ".concat(n," score: ").concat(c)),W(v,e,n))return{score:c,move:v}}if(1===n){c=r;for(var b=0,p=0;p<7;p++){var y=W(p,e,n);if(y){var E=z(y,t-1,n%2+1,r,o).score;if(E>c&&(r=c=E,b=p),0===E&&l.push({move:p,score:E}),u.push({move:p,score:E}),r>=o)return{score:r,move:p}}}if(console.log("player ".concat(n," score: ").concat(c)),W(b,e,n))return{score:c,move:b}}}else{if(1e4===i)return{score:1e4,move:null};if(-1e4===i)return{score:-1e4,move:null}}var k=Math.floor(Math.random()*l.length);if(!l.length)for(var w=0;w<7;w++)if(W(w,e,n))return{score:0,move:w};var O=null===(a=l[k])||void 0===a?void 0:a.move;return console.log("rando",u),{score:c,move:O}}}var $=h?v(h):0;return o.a.createElement("div",null,o.a.createElement("div",{style:T.header},o.a.createElement("div",{style:T.difficultyHolder},["Easy","Medium","Hard"].map((function(e,t){return o.a.createElement("div",{style:T.buttonHolder},o.a.createElement(m,{title:e,onClick:function(){return M(t)},isRed:t===H}))}))),o.a.createElement("div",null,2===a?o.a.createElement("div",null,"Computer is thinking"):o.a.createElement("div",null,o.a.createElement(d,{value:a})," 's turn")),o.a.createElement("div",null,o.a.createElement(m,{title:"Restart",onClick:function(){e(),console.log("score",s([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[2,0,0,0,0,0,0],[2,2,0,1,1,2,1]]))}}),o.a.createElement(m,{title:"Hint",onClick:function(){return x(!0)}}))),$?o.a.createElement("div",null," player ",1===$?"red":"black"," has won the game "):null,o.a.createElement("div",{style:T.boardStyle},h.map((function(e,t){return e.map((function(e,n){return o.a.createElement(u,{value:e,onClick:function(){var e=B(n,h);if(console.log("waiting",J.current),!$&&!J.current){J.current=!0;var t=I(h);t[e][n]=a,g(t),i(1===a?2:1),E([e,n]),setTimeout((function(){return j(!0)}),100)}},selected:y&&y[0]===t&&y[1]===n})}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.d2b5b287.chunk.js.map