(this.webpackJsonpchaos=this.webpackJsonpchaos||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/selfie.e5779b05.jpg"},23:function(n,e,t){n.exports=t.p+"static/media/todolist.9225eeff.jpg"},24:function(n,e,t){n.exports=t.p+"static/media/sixty-second-gaming.ce2e066e.jpg"},25:function(n,e,t){n.exports=t.p+"static/media/aqi-index-service.71a5c062.jpg"},26:function(n,e,t){n.exports=t.p+"static/media/tictactoe.f754f9f8.jpg"},27:function(n,e,t){n.exports=t.p+"static/media/muses.d919de5e.jpg"},28:function(n,e,t){n.exports=t.p+"static/media/canvas.a45ac18c.jpg"},30:function(n,e,t){n.exports=t(42)},41:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(18),o=t.n(r),c=t(29),l=t(3),u=t(12),s=t(1),m=t(4),d=t(19),p=t.n(d);function f(){var n=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  img,\n  h1,\n  p {\n    margin-top: 25px;\n  }\n  img {\n    width: 450px;\n    height: 450px;\n  }\n  h1 {\n    font-size: 3rem;\n    font-family: "Amatic SC", cursive;\n  }\n  p {\n    font-family: "Amatic SC", cursive;\n    width: 450px;\n    text-align: center;\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n  }\n']);return f=function(){return n},n}var g=m.a.div(f()),h=function(){return i.a.createElement(g,null,i.a.createElement("img",{src:p.a,alt:"selfie.png"}),i.a.createElement("h1",null,"About me"),i.a.createElement("p",null,"I'm guy .I am a person who is curious about everything and likes magic and programming. I graduated from Fu Jen Catholic University Information Management, and I worked as a software engineer at titansoft. Here you can see my portfolio. If you have any feedback, please feel welcome Tell me, this allows me to make more progress and improve."))},x=t(23),b=t.n(x),v=t(24),y=t.n(v),k=t(25),j=t.n(k),w=t(26),E=t.n(w),I=t(27),O=t.n(I),S=t(28),C=t.n(S);function H(){var n=Object(l.a)(['\n  position: relative;\n  margin: 10px 0 10px 0;\n  img {\n    box-sizing: border-box;\n    display: block;\n    max-width: 280px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n  .overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: all 0.5s ease;\n    background-color: #eee;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: "Amatic SC", cursive;\n    font-size: 2rem;\n    color: #000;\n  }\n  :hover {\n    .overlay {\n      opacity: 0.7;\n    }\n    box-shadow: 0 0 10px 2px #bbb;\n  }\n']);return H=function(){return n},n}function z(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 10px 0 10px;\n"]);return z=function(){return n},n}function A(){var n=Object(l.a)(["\n  min-width: 320px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return A=function(){return n},n}var W=m.a.div(A()),F=m.a.div(z()),q=m.a.a(H()),J=[{link:"https://guychienll.github.io/sixty-seconds-gaming/",imgSrc:y.a,name:"sixtySecondGaming.jpg",orderId:3},{link:"https://muses-6c8bb.web.app/menu",imgSrc:O.a,name:"muses.jpg",orderId:2},{link:"https://guychienll.github.io/canvas",imgSrc:C.a,name:"canvas.jpg",orderId:1}],M=[{link:"https://guychienll.github.io/tictactoe/",imgSrc:E.a,name:"tictactoe.jpg",orderId:1},{link:"https://guychienll.github.io/aqi-index-service/",imgSrc:j.a,name:"aqiIndexService.jpg",orderId:3},{link:"https://guychienll.github.io/todolist",imgSrc:b.a,name:"todolist.jpg",orderId:2}],G=[{orderId:2,key:"About",component:h,path:"/about"},{orderId:3,key:"Contact",component:function(){return i.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScWgfOnp2IjTfC0176qJoZZTjWOFF8Dua8WKo1VG-OvWOcFQA/viewform?embedded=true",width:"640",height:"700"},"\u8f09\u5165\u4e2d\u2026")},path:"/contact"},{orderId:1,key:"Home",component:function(){return i.a.createElement(W,null,i.a.createElement(F,null,J.sort((function(n,e){return n.orderId-e.orderId})).map((function(n){return i.a.createElement(q,{href:n.link},i.a.createElement("img",{src:n.imgSrc,alt:n.name}),i.a.createElement("div",{className:"overlay"},"Click Me"))}))),i.a.createElement(F,null,M.sort((function(n,e){return n.orderId-e.orderId})).map((function(n){return i.a.createElement(q,{href:n.link},i.a.createElement("img",{src:n.imgSrc,alt:n.name}),i.a.createElement("div",{className:"overlay"},"Click Me"))}))))},path:"/"}];function T(){var n=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 1rem;\n  display: none;\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]);return T=function(){return n},n}var B=m.a.button(T());function N(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  li {\n    a {\n      font-size: 1.5rem;\n      padding: 10px;\n      text-decoration: none;\n      &:visited {\n        color: black;\n      }\n    }\n  }\n  @media screen and (max-width: 768px) {\n    position: fixed;\n    top: ",";\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: #eee;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    li {\n      padding: 10px;\n    }\n    transition: top 0.7s;\n  }\n"]);return N=function(){return n},n}var Q=m.a.ul(N(),(function(n){return n.isHambergurOn?0:"-100%"})),Z=function(n){return i.a.createElement(Q,{isHambergurOn:n.isHambergurOn},i.a.createElement(B,{onClick:function(){n.toggleHambergur()}},"X"),G.sort((function(n,e){return n.orderId-e.orderId})).map((function(e){return i.a.createElement("li",{key:e.key},i.a.createElement(u.b,{onClick:function(){n.toggleHambergur(!1)},to:e.path},e.key))})))};function D(){var n=Object(l.a)(["\n  max-width: 960px;\n  min-height: calc(100vh - 120px);\n  padding-top: 120px;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto 0 auto;\n"]);return D=function(){return n},n}function K(){var n=Object(l.a)(["\n  font-size: 3rem;\n"]);return K=function(){return n},n}function L(){var n=Object(l.a)(['\n  width: 100%;\n  height: 120px;\n  background: #fff;\n  z-index: 100;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  font-family: "Amatic SC", cursive;\n']);return L=function(){return n},n}var U=m.a.nav(L()),V=m.a.div(K()),X=m.a.div(D()),$=function(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],r=e[1],o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!t;r(n)};return i.a.createElement(u.a,null,i.a.createElement(U,null,i.a.createElement(V,null,"Guy Chien"),t?null:i.a.createElement(B,{onClick:function(){o()}},"\u2261"),i.a.createElement(Z,{isHambergurOn:t,toggleHambergur:o})),i.a.createElement(X,null,i.a.createElement(s.c,null,G.map((function(n){return i.a.createElement(s.a,{key:n.key,exact:!0,path:n.path},n.component)})))))};t(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b9036c54.chunk.js.map