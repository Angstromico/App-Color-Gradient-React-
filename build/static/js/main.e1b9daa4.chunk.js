(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),o=c.n(r),l=(c(14),c(7)),s=c(2),i=c(9);function u(e){var t=e.toString(16);return 1===t.length?"0"+t:t}var j=function(e,t,c){return"#"+u(e)+u(t)+u(c)},b=c(0),O=function(e){var t=e.rgb,c=e.weight,a=e.index,r=(e.hex,e.btw),o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],O=l[1],d=t.join(","),h=j.apply(void 0,Object(i.a)(t));return Object(n.useEffect)((function(){var e=setTimeout((function(){O(!1)}),3e3);return function(){return clearTimeout(e)}}),[u]),Object(b.jsxs)("article",{className:"color ".concat(a>r&&"color-light"),style:{backgroundColor:"rgb(".concat(d,")")},onClick:function(){O(!0),navigator.clipboard.writeText(h)},children:[Object(b.jsxs)("p",{className:"percent-value",children:[c,"%"]}),Object(b.jsx)("p",{className:"color-value",children:h}),u&&Object(b.jsx)("p",{className:"alert",children:"copied to clipboard"})]})},d=c(4),h=c.n(d);var f=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),o=Object(s.a)(r,2),i=o[0],u=o[1],j=Object(n.useState)(20),d=Object(s.a)(j,2),f=d[0],m=d[1],x=Object(n.useState)(5),p=Object(s.a)(x,2),v=p[0],g=p[1],N=Object(n.useState)(new h.a("#FF6F61").all(f)),C=Object(s.a)(N,2),k=C[0],S=C[1],w=Object(n.useState)(!1),y=Object(s.a)(w,2),F=y[0],M=y[1],D=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],E=(new Date).getFullYear(),B=function(e){e.target.style.backgroundColor="#cc594e"},R=function(e){e.target.style.backgroundColor="#FF6F61"},T=function(e){var t=e.target.value,n=Math.round(200/t),a=t/2;console.log("pick",c),g(a),S(new h.a(c).all(n)),m(n)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h3",{children:"Color Generator"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{var t=new h.a(c).all(f);S(t),u(!1)}catch(i){u(!0)}},children:[Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},placeholder:"#34568B",className:"".concat(i?"error":"success")}),Object(b.jsx)("button",{className:"btn",type:"submit",children:"Chose Color"})]})]}),Object(b.jsxs)("div",{className:"picker",children:[Object(b.jsxs)("ul",{name:"select",id:"select",className:"pick-number",children:[Object(b.jsx)("li",{disabled:!0,onClick:function(){return M(!F)},className:"first-li",children:"--Select a Quantity of Examples--"}),[4,11,21,41,51,101,201].map((function(e){return Object(b.jsx)("li",{value:e,className:"option-center ".concat(F?"liStyles":""),onMouseOver:B,onMouseOut:R,onClick:T,children:e},e)}))]}),Object(b.jsx)("button",{className:"btn",onClick:function(){try{for(var e="#",t=0;t<6;t++)e+=D[Math.floor(Math.random()*D.length)];a(e);var c=new h.a(e).all(f);S(c),u(!1)}catch(i){u(!0)}},children:"Get Random Color"})]}),Object(b.jsx)("section",{className:"colors",children:k.map((function(e,t){return Object(b.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{index:t,hex:e.hex,btw:v}),t)}))}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{children:"Manuel Morales Web Developer All the Rights Reserved ".concat(E)})})]})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e1b9daa4.chunk.js.map