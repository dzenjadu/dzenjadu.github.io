(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(52)},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),l=a(12),o=a(13),s=a(29),u=a(22),m=a(30),d=a(1),f=a(9),g=a(24),b=a(14),E={data:{},categories:{},details:{}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_LOADED":return Object(b.a)({},e,{data:t.payload});case"CATEGORIES_LOADED":return Object(b.a)({},e,{categories:t.payload});case"DETAILS_LOADED":return Object(b.a)({},e,{details:t.payload});default:return e}},_=Object(f.c)(p,Object(f.a)(g.a)),v=a(2),O=(a(40),a(4)),y=(a(41),Object(d.b)((function(e){return{categories:e.categories}}))((function(e){var t=e.categories,a=Object.entries(t).map((function(e){var t=Object(O.a)(e,2),a=t[0],n=t[1];return c.a.createElement(v.b,{to:"/".concat(a),key:a,className:"menu__link"},n)}));return c.a.createElement("nav",{className:"menu"},a)}))),h=function(){return c.a.createElement("header",{className:"header"},c.a.createElement(v.b,{to:"/"},c.a.createElement("img",{src:"/DoctorWho/images/logo.png",className:"header__logo"})),c.a.createElement("div",{className:"header__menu"},c.a.createElement(y,null)))},j=a(6),N=(a(43),Object(d.b)((function(e){return{data:e.data,categories:e.categories}}))((function(e){var t=e.data,a=e.category,n=e.categories,r=Object(j.f)().category||a,i=n[r];if(0===Object.keys(t).length)return c.a.createElement("div",null,"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445");var l=t[r].map((function(e){var t="/DoctorWho/images/".concat(e.img.item);return c.a.createElement(v.b,{to:"/".concat(r,"/").concat(e.id),key:e.id,className:"category__item"},c.a.createElement("img",{className:"category__img",src:t,alt:e.name}),c.a.createElement("div",{className:"category__name"},e.name))}));return c.a.createElement("div",{className:"category"},c.a.createElement("h2",{className:"title"},i,":"),c.a.createElement("div",{className:"category__items"},l))}))),k=(a(44),Object(d.b)((function(e){return{categories:e.categories}}))((function(e){var t=e.categories,a=e.titlePage,n=Object(j.f)(),r=n.category,i=n.id,l=[{link:"/",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},{link:"/".concat(r),title:t[r]},{link:"/".concat(r,"/").concat(i),title:a}].map((function(e){return c.a.createElement(v.b,{to:e.link,key:e.title,className:"breadcrumbs__link"},e.title)}));return c.a.createElement("div",{className:"breadcrumbs"},l)}))),D=(a(45),Object(d.b)((function(e){return{data:e.data,details:e.details}}))((function(e){var t=e.data,a=e.details,n=Object(j.f)(),r=n.id,i=t[n.category].filter((function(e){return e.id===Number(r)})),l=Object(O.a)(i,1)[0],o=Object.entries(l.details).map((function(e,t){var n=Object(O.a)(e,2),r=n[0],i=n[1],l=[];"string"!==typeof i&&(Array.isArray(i)?i.map((function(e){l.push(c.a.createElement("div",{key:e,className:"details__subitem"},e))})):Object.entries(i).map((function(e){var t=Object(O.a)(e,2),n=t[0],r=t[1];l.push(c.a.createElement("div",{key:n,className:"details__subitem"},a[n],": ",r))})));var o="string"===typeof i?c.a.createElement("div",{className:"details__subitem"},i):c.a.createElement("div",{className:"details__list"},l);return c.a.createElement("div",{key:t,className:"details__item"},c.a.createElement("div",{className:"details__item-title"},a[r],":"),o)}));return c.a.createElement("div",{className:"details"},o)}))),A=(a(46),Object(d.b)((function(e){return{data:e.data}}))((function(e){var t=e.data,a=Object(j.f)(),n=a.id,r=t[a.category].filter((function(e){return e.id===Number(n)})),i=Object(O.a)(r,1)[0].description.map((function(e){return c.a.createElement("div",{key:e.title,className:"description__block"},c.a.createElement("div",{className:"description__title"},e.title,":"),c.a.createElement("div",{className:"description__text"},e.text))}));return c.a.createElement("div",{className:"description"},i)}))),L=(a(47),Object(d.b)((function(e){return{data:e.data}}))((function(e){var t=e.data,a=Object(j.f)(),n=a.id,r=t[a.category].filter((function(e){return e.id===Number(n)})),i=Object(O.a)(r,1)[0];return c.a.createElement("div",{className:"page"},c.a.createElement(k,{titlePage:i.name}),c.a.createElement("div",{className:"page__title"},i.name),c.a.createElement("div",{className:"page__block"},c.a.createElement("div",{className:"page__cell"},c.a.createElement("div",{className:"page__info"},c.a.createElement(D,null),c.a.createElement(A,null))),c.a.createElement("div",{className:"page__cell page__cell_img"},c.a.createElement("img",{src:"/DoctorWho/images/".concat(i.img.page),className:"page__img",alt:i.name}))))}))),w=Object(d.b)((function(e){return{categories:e.categories}}))((function(e){var t=e.categories,a=Object.entries(t).map((function(e){var t=Object(O.a)(e,1)[0];return c.a.createElement(N,{key:t,category:t})}));return c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/",exact:!0},a),c.a.createElement(j.a,{path:"/:category",exact:!0},c.a.createElement(N,null)),c.a.createElement(j.a,{path:"/:category/:id"},c.a.createElement(L,null)))})),x=(a(48),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__copyright"},"\xa9 Doktor Who Wiki"))}),I=a(19),T=a.n(I),W=a(26),C=a(27),S=a(28),P=function(){function e(){Object(l.a)(this,e),Object.defineProperty(this,G,{writable:!0,value:"https://dzenjadu.github.io/data/DoctorWhoData.json"}),this.getCategories=function(){return{doctors:"\u0414\u043e\u043a\u0442\u043e\u0440",companions:"\u0421\u043f\u0443\u0442\u043d\u0438\u043a\u0438"}},this.getDetails=function(){return{gender:"\u041f\u043e\u043b",race:"\u0420\u0430\u0441\u0430",family:"\u0421\u0435\u043c\u044c\u044f",planet:"\u041f\u043b\u0430\u043d\u0435\u0442\u0430",birth:"\u0420\u043e\u0436\u0434\u0435\u043d\u0438\u0435",death:"\u0421\u043c\u0435\u0440\u0442\u044c",nickname:"\u041f\u0440\u043e\u0437\u0432\u0438\u0449\u0435",doings:"\u0417\u0430\u043d\u044f\u0442\u0438\u044f",wife:"\u0416\u0435\u043d\u0430",motherInLaw:"\u0422\u0451\u0449\u0430",fatherInLaw:"\u0422\u0435\u0441\u0442\u044c"}}}return Object(o.a)(e,[{key:"getData",value:function(){var e=Object(W.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Object(C.a)(this,G)[G]);case 2:if((t=e.sent).ok){e.next=5;break}throw Error("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0431\u0434");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),G=Object(S.a)("urn"),J=P,R={dataLoaded:function(e){return{type:"DATA_LOADED",payload:e}},categoriesLoaded:function(e){return{type:"CATEGORIES_LOADED",payload:e}},detailsLoaded:function(e){return{type:"DETAILS_LOADED",payload:e}}},z=Object(d.b)(null,R)((function(e){var t=e.categoriesLoaded,a=e.dataLoaded,n=e.detailsLoaded,r=e.children,i=new J;return t(i.getCategories()),n(i.getDetails()),i.getData().then((function(e){a(e)})),c.a.createElement("div",null,r)})),B=(a(50),function(){return c.a.createElement(z,null,c.a.createElement("div",{className:"container"},c.a.createElement("main",{className:"main"},c.a.createElement(h,null),c.a.createElement(w,null)),c.a.createElement(x,null)))}),q=(a(51),function(){return c.a.createElement(d.a,{store:_},c.a.createElement(v.a,null,c.a.createElement(B,null)))}),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(q,null)}}]),t}(n.Component);i.a.render(c.a.createElement(F,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.299e7153.chunk.js.map