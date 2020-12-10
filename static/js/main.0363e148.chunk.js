(this["webpackJsonpdonut-builder"]=this["webpackJsonpdonut-builder"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(23),r=function(){return{type:"UPDATE_PURCHASED"}},i=function(){return{type:"CLEAR_PURCHASE"}},o=function(e,t){return function(n){n({type:"PURCHASE_DONUT_START"}),a.a.post("/orders.json?auth=".concat(t),e).then((function(t){n(function(e,t){return{type:"PURCHASE_DONUT_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).then((function(e){n(i())})).catch((function(e){n(function(e){return{type:"PURCHASE_DONUT_FAILURE",error:e}}(e))}))}},c=function(e){return{type:"CONTACT/ON_CHANGE",data:e}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(36),r=n.n(a),i="AIzaSyAGe9BYm7Ee6r7z0Z4QwHxlVmdA9PqcDqI",o=function(){return{type:"AUTH/START"}},c=function(e,t,n){return{type:"AUTH/SUCCESS",email:e,localId:t,idToken:n}},s=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("email"),localStorage.removeItem("localId"),{type:"LOG_OUT"}},l=function(e){return function(t){setTimeout((function(){t(s())}),1e3*e)}},u=function(e,t,n){var a;return a=n?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+i:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+i,function(n){var i={email:e,password:t,returnSecureToken:!0};r.a.post(a,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationTime",t),localStorage.setItem("email",e.data.email),localStorage.setItem("localId",e.data.localId),n(c(e.data.email,e.data.localId,e.data.idToken)),n(l(e.data.expiresIn))})).catch((function(e){var t;switch(e.response.data.error.message){case"EMAIL_EXISTS":t="S t\xedmhle mailem u\u017e je u n\xe1s n\u011bkdo zaregistrovan\xfd. Nejsi to ty?";break;case"EMAIL_NOT_FOUND":t="Nikdo takov\xfd u n\xe1s nen\xed. Nechce\u0161 se zaregistrovat?";break;case"INVALID_PASSWORD":t="Zadan\xe9 heslo nesouhlas\xed s t\xedm, co jsi zadal p\u0159i registraci.";break;default:t="Nev\xedme, co je p\u0159esn\u011b \u0161patn\u011b, ale zkontroluj si \xfadaje a p\u0159ihla\u0161 se znovu."}n(function(e){return{type:"AUTH/FAIL",error:e}}(t))}))}},d=function(){var e=new Date(localStorage.getItem("expirationTime")),t=localStorage.getItem("email"),n=localStorage.getItem("localId");return function(a){var r=localStorage.getItem("token");r?e>=new Date?(a(c(t,n,r)),a(l((e.getTime()-(new Date).getTime())/1e3))):(console.log("logging out"),a(s())):a(s())}}},,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=(n(1),n(71)),i=n.n(r),o=function(){return Object(a.jsx)("div",{className:i.a.loader,children:"Loading..."})}},function(e,t,n){"use strict";var a=n(36),r=n.n(a).a.create({baseURL:"https://donut-builder.firebaseio.com/"});t.a=r},,,function(e,t,n){e.exports={Submit:"Buttons_Submit__UjlZf",Disabled:"Buttons_Disabled__2mjru",cancel:"Buttons_cancel__m6gT3"}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Closed:"SideDrawer_Closed__wRM5T",closer:"SideDrawer_closer__2JJL1"}},function(e,t,n){e.exports={donut:"DonutIngredients_donut__342Rg",marmelada:"DonutIngredients_marmelada__2Nkbv",karamel:"DonutIngredients_karamel__rWy1D",cokolada:"DonutIngredients_cokolada__1MOl1",krem:"DonutIngredients_krem__1e1qK"}},function(e,t,n){e.exports={Objednavka:"Objednavka_Objednavka__27T0K",cena:"Objednavka_cena__X-a81",Active:"Objednavka_Active__1YmVO",Passive:"Objednavka_Passive__2lWrz"}},,function(e,t,n){e.exports={InputWrapper:"Input_InputWrapper__2Gj-8",Label:"Input_Label__1qyHr",Input:"Input_Input__3r5Ke",Invalid:"Input_Invalid__16Mis"}},,,function(e,t,n){"use strict";var a=n(3),r=n(4),i=n(5),o=n(9),c=n(7),s=n(6),l=n(0),u=n(1),d=n.n(u),p=n(39);t.a=function(e,t){return function(n){Object(c.a)(h,n);var u=Object(s.a)(h);function h(e){var t;return Object(r.a)(this,h),(t=u.call(this,e)).state={error:null},t.errorConfirmedHandler=t.errorConfirmedHandler.bind(Object(o.a)(t)),t}return Object(i.a)(h,[{key:"componentDidMount",value:function(){var e=this;t.interceptors.request.use((function(t){return e.setState({error:null}),t})),t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"errorConfirmedHandler",value:function(){this.setState({error:null})}},{key:"render",value:function(){return Object(l.jsxs)(d.a.Fragment,{children:[this.state.error&&Object(l.jsxs)(p.a,{show:this.state.error,handleHide:this.errorConfirmedHandler,header:"O-ou!",children:[Object(l.jsx)("p",{children:"N\u011bco se pokazilo"}),Object(l.jsx)("p",{children:this.state.error.message})]}),Object(l.jsx)(e,Object(a.a)({},this.props))]})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.myInterceptorReq),t.interceptors.response.eject(this.myInterceptorRes)}}]),h}(d.a.Component)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=(n(1),n(66)),i=n.n(r),o=function(e){return e.show?Object(a.jsx)("div",{className:i.a.Backdrop,onClick:e.handleHide}):null}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(4),r=n(5),i=n(7),o=n(6),c=n(0),s=n(1),l=n.n(s),u=n(70),d=n.n(u),p=n(35),h=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(c.jsxs)(l.a.Fragment,{children:[Object(c.jsx)(p.a,{show:this.props.show,handleHide:this.props.handleHide}),Object(c.jsxs)("div",{className:d.a.Modal,children:[Object(c.jsx)("h2",{children:this.props.header}),this.props.children]})]})}}]),n}(l.a.Component)},,function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return s}));var a=function(e){return{type:"GET_ORDER",finalOrder:e}},r=function(e){return{type:"GET_TOTAL",total:e}},i=n(13),o=n(3),c=n(23),s=function(e,t){var n="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');return function(e){c.a.get("/orders.json"+n).then((function(t){var n=[];for(var a in t.data)n.push(Object(o.a)(Object(o.a)({},t.data[a]),{},{id:a}));e({type:"FETCH_ORDER/SUCCESS",order:n})})).catch((function(t){e({type:"FETCH_ORDER/FAIL"})}))}};n(14)},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Toggler:"Toolbar_Toggler__1M-Kj"}},function(e,t,n){e.exports={Logo:"Logo_Logo__3tJ9M",Logo__name:"Logo_Logo__name__1Z096"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__tPs5_",active:"NavigationItem_active__19kMY"}},,function(e,t,n){e.exports={vyber:"DonutControls_vyber__d-wt2",order:"DonutControls_order__3K0Ko"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi",Donut:"CheckoutSummary_Donut__2CP46"}},function(e,t,n){e.exports={Contact:"ContactData_Contact__3m0WE",Image:"ContactData_Image__3gWv2"}},,,,,,,,,,,,function(e,t,n){e.exports={NavigationItems:"NavgationItems_NavigationItems__1OAen",active:"NavgationItems_active__1uJo3"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,,function(e,t,n){e.exports={price:"DonutBuilder_price__1E8wy"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load3:"Spinner_load3__3VkKK"}},function(e,t,n){},function(e,t,n){e.exports={Register:"Auth_Register__3_ETB",Error:"Auth_Error__BkJd8"}},,,,,,,,function(e,t,n){},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n.n(r),o=n(32),c=n.n(o),s=(n(81),n(4)),l=n(5),u=n(7),d=n(6),p=n(9),h=n(45),j=n.n(h),b=n(46),m=n.n(b),O=n(17),g=function(){return Object(a.jsx)("div",{className:m.a.Logo,children:Object(a.jsxs)(O.b,{to:"/",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("svg",{id:"Outline",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{d:"m168 320a152.935 152.935 0 0 0 26.281-2.285 152.35 152.35 0 0 0 -2.281 26.285c0 83.813 68.187 152 152 152s152-68.187 152-152-68.187-152-152-152a152.35 152.35 0 0 0 -26.285 2.281 152.918 152.918 0 0 0 2.285-26.281c0-83.813-68.187-152-152-152s-152 68.187-152 152 68.187 152 152 152zm176-112c74.99 0 136 61.009 136 136s-61.01 136-136 136-136-61.009-136-136 61.01-136 136-136zm-176 64a104.005 104.005 0 1 1 91.26-54.128 153.253 153.253 0 0 0 -41.388 41.388 103.937 103.937 0 0 1 -49.872 12.74zm0-240c74.99 0 136 61.009 136 136a136.446 136.446 0 0 1 -3.395 30.322 150.776 150.776 0 0 0 -18.514 6.869 120 120 0 1 0 -76.9 76.9 150.776 150.776 0 0 0 -6.869 18.514 136.473 136.473 0 0 1 -30.322 3.395c-74.99 0-136-61.009-136-136s61.01-136 136-136z"}),Object(a.jsx)("circle",{cx:"168",cy:"88",r:"8"}),Object(a.jsx)("circle",{cx:"232",cy:"120",r:"8"}),Object(a.jsx)("circle",{cx:"104",cy:"120",r:"8"}),Object(a.jsx)("circle",{cx:"136",cy:"248",r:"8"}),Object(a.jsx)("circle",{cx:"200",cy:"248",r:"8"}),Object(a.jsx)("circle",{cx:"248",cy:"184",r:"8"}),Object(a.jsx)("circle",{cx:"88",cy:"184",r:"8"}),Object(a.jsx)("path",{d:"m168 128a40 40 0 1 0 40 40 40.045 40.045 0 0 0 -40-40zm0 64a24 24 0 1 1 24-24 24.028 24.028 0 0 1 -24 24z"}),Object(a.jsx)("path",{d:"m240.5 301.129c-1.71 4.123-5.49 8.553-9.493 13.241-7.033 8.24-15 17.58-15 29.63s7.972 21.39 15.006 29.63c4 4.688 7.782 9.117 9.492 13.241 1.845 4.448 2.357 10.473 2.9 16.852.9 10.6 1.926 22.62 10.091 30.786s20.185 9.19 30.788 10.093c6.379.543 12.405 1.055 16.852 2.9 4.124 1.711 8.553 5.491 13.241 9.493 8.233 7.033 17.572 15.005 29.623 15.005s21.39-7.972 29.63-15.006c4.688-4 9.117-7.782 13.241-9.493 4.447-1.844 10.473-2.356 16.851-2.9 10.6-.9 22.622-1.926 30.788-10.092s9.188-20.184 10.092-30.787c.543-6.379 1.055-12.4 2.9-16.852 1.71-4.123 5.49-8.553 9.493-13.241 7.033-8.24 15-17.58 15-29.63s-7.972-21.39-15.006-29.63c-4-4.688-7.782-9.117-9.492-13.241-1.845-4.448-2.357-10.473-2.9-16.852-.9-10.6-1.926-22.62-10.091-30.786s-20.185-9.19-30.788-10.093c-6.379-.543-12.405-1.055-16.852-2.9-4.124-1.711-8.553-5.491-13.241-9.493-8.235-7.032-17.574-15.004-29.625-15.004s-21.39 7.972-29.63 15.006c-4.688 4-9.117 7.782-13.241 9.493-4.447 1.844-10.473 2.356-16.851 2.9-10.6.9-22.622 1.926-30.788 10.092s-9.19 20.183-10.09 30.786c-.545 6.379-1.057 12.404-2.9 16.852zm14.779 6.128c2.8-6.743 3.441-14.307 4.064-21.622.735-8.639 1.43-16.8 5.464-20.831s12.192-4.728 20.83-5.463c7.315-.623 14.88-1.267 21.623-4.063 6.459-2.679 12.072-7.469 17.5-12.1 6.73-5.75 13.09-11.178 19.24-11.178s12.51 5.428 19.242 11.175c5.428 4.634 11.041 9.424 17.5 12.1 6.743 2.8 14.308 3.44 21.623 4.063 8.639.735 16.8 1.43 20.831 5.463s4.728 12.192 5.463 20.83c.623 7.316 1.267 14.88 4.064 21.624 2.678 6.459 7.468 12.072 12.1 17.5 5.749 6.735 11.177 13.095 11.177 19.245s-5.428 12.51-11.175 19.242c-4.633 5.428-9.424 11.041-12.1 17.5-2.8 6.743-3.441 14.307-4.064 21.622-.735 8.639-1.43 16.8-5.464 20.831s-12.192 4.728-20.83 5.463c-7.315.623-14.88 1.267-21.623 4.063-6.459 2.679-12.072 7.469-17.5 12.1-6.734 5.751-13.094 11.179-19.244 11.179s-12.51-5.428-19.242-11.175c-5.428-4.634-11.041-9.424-17.5-12.1-6.743-2.8-14.308-3.44-21.623-4.063-8.639-.735-16.8-1.43-20.831-5.463s-4.728-12.192-5.463-20.83c-.623-7.316-1.267-14.88-4.064-21.624-2.678-6.459-7.468-12.072-12.1-17.5-5.749-6.735-11.177-13.095-11.177-19.245s5.428-12.51 11.175-19.242c4.633-5.428 9.425-11.041 12.102-17.501z"}),Object(a.jsx)("path",{d:"m344 384a40 40 0 1 0 -40-40 40.045 40.045 0 0 0 40 40zm0-64a24 24 0 1 1 -24 24 24.028 24.028 0 0 1 24-24z"}),Object(a.jsx)("path",{d:"m328 288a8 8 0 0 0 8-8v-16a8 8 0 0 0 -16 0v16a8 8 0 0 0 8 8z"}),Object(a.jsx)("path",{d:"m274.343 349.657a8 8 0 0 0 11.314-11.314l-16-16a8 8 0 0 0 -11.314 11.314z"}),Object(a.jsx)("path",{d:"m370.343 394.343-16 16a8 8 0 0 0 11.314 11.314l16-16a8 8 0 0 0 -11.314-11.314z"}),Object(a.jsx)("path",{d:"m400 360a8 8 0 0 0 8 8h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 -8 8z"}),Object(a.jsx)("path",{d:"m274.343 413.657a8 8 0 0 0 11.314 0l16-16a8 8 0 0 0 -11.314-11.314l-16 16a8 8 0 0 0 0 11.314z"}),Object(a.jsx)("path",{d:"m402.343 317.657a8 8 0 0 0 11.314-11.314l-16-16a8 8 0 0 0 -11.314 11.314z"})]})}),Object(a.jsx)("div",{className:m.a.Logo__name,children:Object(a.jsx)("p",{children:"Donutio"})})]})})},f=n(64),v=n.n(f),k=(n(86),function(e){return Object(a.jsx)(v.a,{style:{fontSize:20}})}),x=n(65),y=n.n(x),C=n(49),_=n.n(C),S=function(e){return Object(a.jsx)("li",{className:_.a.NavigationItem,children:Object(a.jsx)(O.c,{to:e.link,activeClassName:_.a.active,exact:!0,children:e.children})})},I=function(e){return Object(a.jsxs)("ul",{className:y.a.NavigationItems,children:[Object(a.jsx)(S,{link:"/",children:" \ud83c\udf69 Donut Builder"}),e.order>0&&Object(a.jsx)(S,{link:"/checkout",children:"\ud83d\udcb0 Checkout"}),e.token?Object(a.jsx)(S,{link:"/logout",children:"\ud83c\udf11 Odhl\xe1sit"}):Object(a.jsx)(S,{link:"/auth",children:"\ud83c\udf15 P\u0159ihl\xe1sit"}),null!==e.token&&Object(a.jsx)(S,{link:"/orders",children:"\ud83e\uddfa Objedn\xe1vky"})]})},T=function(e){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("div",{onClick:e.onClick,className:j.a.Toggler,children:Object(a.jsx)(k,{})}),Object(a.jsxs)("header",{className:j.a.Toolbar,children:[Object(a.jsx)(g,{}),Object(a.jsx)("nav",{children:Object(a.jsx)(I,{token:e.token,action:e.action,order:e.order})})]})]})},D=n(27),w=n.n(D),N=n(35),E=n(67),A=n.n(E),H=function(e){var t=e.shown;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(N.a,{show:!!t,handleHide:e.handleHide}),Object(a.jsxs)("div",{className:t?"".concat(w.a.SideDrawer," ").concat(w.a.Open):"".concat(w.a.SideDrawer," ").concat(w.a.Closed),children:[Object(a.jsx)("div",{className:w.a.closer,onClick:e.handleHide,children:Object(a.jsx)(A.a,{})}),Object(a.jsx)(g,{}),Object(a.jsx)("nav",{children:Object(a.jsx)(I,{token:e.token,action:e.action,order:e.order})})]})]})},U=n(10),R=n(14),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showSideDrawer:!1},a.sideDrawerClosedHandler=a.sideDrawerClosedHandler.bind(Object(p.a)(a)),a.sideDrawerOpenHandler=a.sideDrawerOpenHandler.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"sideDrawerClosedHandler",value:function(){this.setState({showSideDrawer:!1})}},{key:"sideDrawerOpenHandler",value:function(){this.setState({showSideDrawer:!0})}},{key:"render",value:function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(T,{onClick:this.sideDrawerOpenHandler,token:this.props.token,action:this.props.logOut,order:this.props.order}),Object(a.jsx)(H,{handleHide:this.sideDrawerClosedHandler,shown:this.state.showSideDrawer,token:this.props.token,action:this.props.logOut,order:this.props.order}),Object(a.jsx)("main",{children:this.props.children})]})}}]),n}(i.a.Component),F=Object(U.b)((function(e){return{order:e.donut.total,token:e.auth.idToken}}),(function(e){return{logOut:function(){e(R.d())}}}))(P),L=n(3),z=n(28),B=n.n(z),M=n.p+"static/media/nakedDonut.32dfe8b4.png",q=n.p+"static/media/IcingPink.4d6f1428.png",K=n.p+"static/media/IcingPinkSpr.23fbe412.png",G=n.p+"static/media/IcingPinkOr.da095e02.png",V=n.p+"static/media/IcingPinkChoc.329f2f4c.png",J=n.p+"static/media/IcingPinkRasp.fe1f3d29.png",Z=n.p+"static/media/IcingBlue.a07bdd82.png",W=n.p+"static/media/IcingBlueSpr.42529469.png",X=n.p+"static/media/IcingBlueOr.660672ed.png",Y=n.p+"static/media/IcingBlueChoc.59397e62.png",$=n.p+"static/media/IcingBlueRasp.2bab0847.png",Q=n.p+"static/media/IcingChoc.391e9fe8.png",ee=n.p+"static/media/IcingChocSpr.a847c05c.png",te=n.p+"static/media/IcingChocOr.2ec6f829.png",ne=n.p+"static/media/IcingChocChoc.4bbd40cc.png",ae=n.p+"static/media/IcingChocRasp.906e992f.png",re=n.p+"static/media/IcingCaram.64a0a9a9.png",ie=n.p+"static/media/IcingCaramSpr.a86b99a2.png",oe=n.p+"static/media/IcingCaramOr.bcca7bbf.png",ce=n.p+"static/media/IcingCaramChoc.56f75fcc.png",se=n.p+"static/media/IcingCaramRasp.0c1b4b39.png",le=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.icing){case"pink":switch(this.props.topping){case"sprinkles":e=Object(a.jsx)("img",{src:K,alt:"Donut s r\u016f\u017eovou polevou se sprinkles"});break;case"oreo":e=Object(a.jsx)("img",{src:G,alt:"Donut s r\u016f\u017eovou polevou s oreo"});break;case"\u010dokol\xe1da":e=Object(a.jsx)("img",{src:V,alt:"Donut s r\u016f\u017eovou polevou s kousky \u010dokol\xe1dy"});break;case"maliny":e=Object(a.jsx)("img",{src:J,alt:"Donut s r\u016f\u017eovou polevou s kousky lyofilizovan\xfdch malin"});break;default:e=Object(a.jsx)("img",{src:q,alt:"Donut s r\u016f\u017eovou polevou"})}break;case"\u0161moula":switch(this.props.topping){case"sprinkles":e=Object(a.jsx)("img",{src:W,alt:"Donut s modrou polevou se sprinkles"});break;case"oreo":e=Object(a.jsx)("img",{src:X,alt:"Donut s modrou polevou s oreo"});break;case"\u010dokol\xe1da":e=Object(a.jsx)("img",{src:Y,alt:"Donut s modrou polevou s kousky \u010dokol\xe1dy"});break;case"maliny":e=Object(a.jsx)("img",{src:$,alt:"Donut s modrou polevou s kousky lyofilizovan\xfdch malin"});break;default:e=Object(a.jsx)("img",{src:Z,alt:"Donut s modrou polevou"})}break;case"\u010dokol\xe1da":switch(this.props.topping){case"sprinkles":e=Object(a.jsx)("img",{src:ee,alt:"Donut s \u010dokol\xe1dovou polevou se sprinkles"});break;case"oreo":e=Object(a.jsx)("img",{src:te,alt:"Donut s \u010dokol\xe1dovou polevou s oreo"});break;case"\u010dokol\xe1da":e=Object(a.jsx)("img",{src:ne,alt:"Donut s \u010dokol\xe1dovou polevou s kousky \u010dokol\xe1dy"});break;case"maliny":e=Object(a.jsx)("img",{src:ae,alt:"Donut s \u010dokol\xe1dovou polevou s kousky lyofilizovan\xfdch malin"});break;default:e=Object(a.jsx)("img",{src:Q,alt:"Donut s \u010dokol\xe1dovou polevou"})}break;case"karamel":switch(this.props.topping){case"sprinkles":e=Object(a.jsx)("img",{src:ie,alt:"Donut s karamelovou polevou se sprinkles"});break;case"oreo":e=Object(a.jsx)("img",{src:oe,alt:"Donut s karamelovou polevou s oreo"});break;case"\u010dokol\xe1da":e=Object(a.jsx)("img",{src:ce,alt:"Donut s karamelovou polevou s kousky \u010dokol\xe1dy"});break;case"maliny":e=Object(a.jsx)("img",{src:se,alt:"Donut s karamelovou polevou s kousky lyofilizovan\xfdch malin"});break;default:e=Object(a.jsx)("img",{src:re,alt:"Donut s karamelovou polevou"})}break;default:e=Object(a.jsx)("img",{src:M,alt:"Donut bez p\u0159\xedsad"})}var t=null;switch(this.props.napln){case"marmel\xe1da":t=Object(a.jsx)("aside",{className:B.a.marmelada});break;case"karamel":t=Object(a.jsx)("aside",{className:B.a.karamel});break;case"\u010dokol\xe1da":t=Object(a.jsx)("aside",{className:B.a.cokolada});break;case"kr\xe9m":t=Object(a.jsx)("aside",{className:B.a.krem});break;default:t=""}return Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{className:B.a.donut,children:e}),t]})}}]),n}(i.a.Component),ue=n(42),de=n(51),pe=n.n(de),he=function(e){var t=Object(r.useState)(!1),n=Object(ue.a)(t,2),o=n[0],c=n[1],s=Object(r.useState)(!1),l=Object(ue.a)(s,2),u=l[0],d=l[1],p=Object(r.useState)(!1),h=Object(ue.a)(p,2),j=(h[0],h[1]),b=Object.keys(e.icing).map((function(t){var n=e.icing[t].bought;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)("label",{htmlFor:t+e.icing[t].id,children:[Object(a.jsx)("input",{type:"radio",id:t+e.icing[t].id,name:"icing",checked:n,value:t,onChange:function(t){c(!0),e.handleChange(t)}}),Object(a.jsx)("span",{children:t})]})},e.icing[t].id)})),m=Object.keys(e.topping).map((function(t){var n=e.topping[t].bought;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)("label",{htmlFor:t+e.topping[t].id,children:[Object(a.jsx)("input",{type:"radio",id:t+e.topping[t].id,name:"topping",value:t,checked:n,onChange:function(t){d(!0),e.handleChange(t)}}),Object(a.jsx)("span",{children:t})]})},e.topping[t].id)})),O=Object.keys(e.napln).map((function(t){var n=e.napln[t].bought;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)("label",{htmlFor:t+e.napln[t].id,children:[Object(a.jsx)("input",{type:"radio",id:t+e.napln[t].id,name:"napln",value:t,checked:n,onChange:function(t){j(!0),e.handleChange(t)}}),Object(a.jsx)("span",{children:t})]})},e.napln[t].id)}));return Object(a.jsxs)("div",{className:pe.a.vyber,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Zvol si polevu:"}),b]}),o&&Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("h3",{children:"Zvol si topping:"}),m]}),u&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Zvol si n\xe1pl\u0148:"}),O]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"button",onClick:function(){j(!1),d(!1),c(!1),e.handleReset()},children:"za\u010dni znovu"}),o&&Object(a.jsx)("button",{type:"button",className:pe.a.order,onClick:e.koupit,children:"OBJEDNAT"})]})},je=n(69),be=n.n(je),me=n(39),Oe=n(29),ge=n.n(Oe),fe=n(26),ve=n.n(fe),ke=function(e){return Object(a.jsx)("button",{type:"button",onClick:e.onClick,className:ve.a.cancel,children:" Zru\u0161it"})},xe=function(e){var t=[ve.a.Submit];return e.disabled&&t.push(ve.a.Disabled),Object(a.jsx)("button",{onClick:e.onClick,disabled:e.disabled,className:t.join(" "),children:e.children})},ye=function(e){var t=[ve.a.Submit];return e.disabled&&t.push(ve.a.Disabled),Object(a.jsx)("button",{className:t.join(" "),onClick:e.onClick,disabled:e.disabled,children:"Odeslat"})},Ce=n(22),_e=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.showModal!==this.props.showModal}},{key:"render",value:function(){var e=this.props.finalOrder,t=Object(a.jsxs)("div",{className:ge.a.Objednavka,children:[Object(a.jsx)("p",{children:"Tvoje objedn\xe1vka je n\xe1sleduj\xedc\xed, pros\xedm zkontroluj si ji."}),Object(a.jsxs)("div",{children:[e.icing.typ&&Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Poleva:"})," ",e.icing.typ]}),e.topping.typ&&Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Topping:"})," ",e.topping.typ]}),e.topping.typ&&e.napln.typ&&Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"N\xe1pl\u0148:"})," ",e.napln.typ]}),this.props.total&&Object(a.jsxs)("p",{className:ge.a.cena,children:[Object(a.jsx)("strong",{children:"Cena: "})," ",this.props.total," K\u010d"]}),Object(a.jsx)("p",{className:ge.a.Pokracovat,children:"Pokra\u010dovat k objedn\xe1vce?"}),Object(a.jsx)(ke,{onClick:this.props.hideModal}),Object(a.jsx)(ye,{onClick:this.props.handleBuy})]})]});return this.props.isLoading&&(t=Object(a.jsx)(Ce.a,{})),Object(a.jsx)("div",{className:!0===this.props.showModal?ge.a.Active:ge.a.Passive,children:Object(a.jsx)(me.a,{show:this.props.showModal,handleHide:this.props.hideModal,header:"Skv\u011bl\xe1 volba!",children:t})})}}]),n}(i.a.Component),Se=Object(U.b)((function(e){return{finalOrder:e.donut.finalOrder,total:e.donut.total}}))(_e),Ie=n(34),Te=n(23),De=n(8),we=n(52),Ne=n.n(we),Ee=Object(U.b)((function(e){return{token:e.auth.idToken}}))((function(e){return Object(a.jsxs)("div",{className:Ne.a.CheckoutSummary,children:[Object(a.jsx)("h1",{children:"Skv\u011bl\xe1 volba, ur\u010dit\u011b si pochutn\xe1te!"}),Object(a.jsx)("div",{className:Ne.a.Donut,children:Object(a.jsx)(le,{icing:e.icing,topping:e.topping,napln:e.napln})}),Object(a.jsx)(ke,{onClick:e.checkoutCancel,children:"Zru\u0161it objedn\xe1vku"}),e.token?null:Object(a.jsxs)(O.b,{to:"/auth",children:[Object(a.jsx)(xe,{children:"P\u0159ihl\xe1sit se"})," "]}),e.token?Object(a.jsx)(ye,{onClick:e.checkoutContinue}):Object(a.jsx)("p",{className:"Error Err",children:" K dokon\u010den\xed objedn\xe1vky se mus\xed\u0161 p\u0159ihl\xe1sit. Pak se vra\u0165 sem, tv\u016fj donut t\u011b tu po\u010dk\xe1."})]})})),Ae=n(37),He=n(53),Ue=n.n(He),Re=n.p+"static/media/donutio.6fc3b768.png",Pe=n(31),Fe=n.n(Pe),Le=function(e){var t=[Fe.a.Input];!1===e.valid&&e.touched&&t.push(Fe.a.Invalid);var n=null;switch(e.inputType){case"input":n=Object(a.jsx)("input",Object(L.a)(Object(L.a)({className:t.join(" ")},e.elementConfig),{},{onChange:e.onChange,value:e.value}));break;case"select":n=Object(a.jsx)("select",Object(L.a)(Object(L.a)({className:t.join(" ")},e.elementConfig),{},{onChange:e.onChange,value:e.value,children:e.elementConfig.options.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.display},e.value)}))}));break;default:n=Object(a.jsx)("input",Object(L.a)(Object(L.a)({className:t.join(" ")},e.elementConfig),{},{onChange:e.onChange,value:e.value}))}return Object(a.jsxs)("div",{className:Fe.a.InputWrapper,children:[Object(a.jsx)("label",{htmlFor:e.id,className:Fe.a.Label,children:e.elementConfig.label}),n]})},ze=n(13),Be=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&e.length<=t.maxLength&&n),t.regex&&(n=t.regex.test(e)&&n),n},Me=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={orderForm:{name:{inputType:"input",elementConfig:{type:"text",placeholder:"Jm\xe9no",label:"Jm\xe9no",name:"name"},touched:!1,rules:{required:!0},value:"",valid:!1},street:{inputType:"input",elementConfig:{type:"text",placeholder:"Adresa",label:"Ulice",name:"street"},touched:!1,rules:{required:!0},value:"",valid:!1},zip:{inputType:"input",elementConfig:{type:"number",placeholder:"PS\u010c",label:"PS\u010c",name:"zip"},touched:!1,rules:{required:!0,minLength:5,maxLength:6},value:"",valid:!1},city:{inputType:"input",elementConfig:{type:"text",placeholder:"M\u011bsto",label:"M\u011bsto",name:"city"},touched:!1,rules:{required:!0},value:"",valid:!1},email:{inputType:"input",elementConfig:{type:"email",placeholder:"Email",label:"e-mail",name:"email"},touched:!1,rules:{required:!0,regex:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi},value:"",valid:!1},deliveryMethod:{inputType:"select",elementConfig:{label:"Mo\u017enosti doru\u010den\xed",options:[{value:"",display:"Vyber rychlost doru\u010den\xed"},{value:"slow",display:"Nesp\u011bch\xe1m (2-3 hodiny)"},{value:"normal",display:"Norm\xe1ln\xed doru\u010dovac\xed \u010das (1 hodina)"},{value:"fast",display:"Um\xedr\xe1m hlady (30min)"}],value:"",name:"delivery"},rules:{required:!0,minLength:2,maxLength:30},valid:!1}},isValid:!1},a.handlePurchase=a.handlePurchase.bind(Object(p.a)(a)),a.inputChangeHandler=a.inputChangeHandler.bind(Object(p.a)(a)),a.props.updatePurchased(),a}return Object(l.a)(n,[{key:"handlePurchase",value:function(e){e.preventDefault();var t={};for(var n in this.state.orderForm)t[n]=this.state.orderForm[n].value;var a={order:this.props.finalOrder,total:this.props.total,userId:this.props.localId,orderForm:t};this.props.onSubmitInput(a,this.props.token)}},{key:"inputChangeHandler",value:function(e,t){var n=Object(L.a)({},this.state.orderForm),a=Object(L.a)({},n[t]);a.value=e.target.value,a.rules&&(a.valid=Be(a.value,a.rules)),a.touched=!0,n[t]=a;var r=!0;for(var i in n)r=n[i].valid&&r;this.setState({orderForm:n,isValid:r})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=t.map((function(t){return Object(a.jsx)(Le,{inputType:t.config.inputType,elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,onChange:function(n){e.inputChangeHandler(n,t.id),e.props.onChangeInput(Object(Ae.a)({},n.target.name,n.target.value))},valid:t.config.valid},t.id)})),i=Object(a.jsx)(De.a,{to:"/"});return Object(a.jsxs)("div",{className:Ue.a.Contact,children:[Object(a.jsx)("h4",{children:"Komu m\xe1me donut poslat?"}),this.props.loading?Object(a.jsx)(Ce.a,{}):Object(a.jsxs)("form",{children:[r,Object(a.jsx)(ye,{disabled:!this.state.isValid,onClick:this.handlePurchase})]}),!0===this.props.ordered&&i,Object(a.jsx)("div",{className:Ue.a.Image,children:Object(a.jsx)("img",{src:Re,alt:""})})]})}}]),n}(r.Component),qe=Object(U.b)((function(e){return{finalOrder:e.donut.finalOrder,total:e.donut.total,name:e.customer.name,street:e.customer.street,city:e.customer.city,zip:e.customer.zip,email:e.customer.email,deliveryMethod:e.customer.deliveryMethod,loading:e.order.loading,ordered:e.order.ordered,token:e.auth.idToken,localId:e.auth.localId}}),(function(e){return{onChangeInput:function(t){e(ze.b(t))},onSubmitInput:function(t,n){e(ze.c(t,n))},updatePurchased:function(){e(ze.d())}}}))(Object(Ie.a)(Me,Te.a)),Ke=n(72),Ge=n.n(Ke),Ve=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).checkoutCancel=a.checkoutCancel.bind(Object(p.a)(a)),a.checkoutContinue=a.checkoutContinue.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"checkoutCancel",value:function(){this.props.cancelOrder(),this.props.history.push("/")}},{key:"checkoutContinue",value:function(){this.props.history.replace("/checkout/contact-data")}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:Ge.a.Checkout,children:[Object(a.jsx)(Ee,{icing:this.props.finalOrder.icing.typ,topping:this.props.finalOrder.topping.typ,napln:this.props.finalOrder.napln.typ,checkoutCancel:this.checkoutCancel,checkoutContinue:this.checkoutContinue}),Object(a.jsx)(De.b,{path:this.props.match.url+"/contact-data",component:qe})]})}}]),n}(i.a.Component),Je=Object(U.b)((function(e){return{finalOrder:e.donut.finalOrder,total:e.donut.total}}),(function(e){return{cancelOrder:function(){e(ze.a())}}}))(Ve),Ze=n(41),We=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={total:0,finalOrder:{icing:{cena:0},topping:{cena:0},napln:{cena:0}},prevClicked:"",prevPrice:0,koupit:!1,modal:!1,loading:!1,icing:{pink:{id:1,bought:!1,price:14},"\u0161moula":{id:2,bought:!1,price:15},"\u010dokol\xe1da":{id:3,bought:!1,price:14},karamel:{id:4,bought:!1,price:16}},topping:{sprinkles:{id:5,bought:!1,price:10},oreo:{id:6,bought:!1,price:17},"\u010dokol\xe1da":{id:7,bought:!1,price:12},maliny:{id:8,bought:!1,price:13}},napln:{"marmel\xe1da":{id:9,bought:!1,price:7},karamel:{id:10,bought:!1,price:10},"\u010dokol\xe1da":{id:11,bought:!1,price:11},"kr\xe9m":{id:12,bought:!1,price:12}}},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleRemove=a.handleRemove.bind(Object(p.a)(a)),a.handleBuy=a.handleBuy.bind(Object(p.a)(a)),a.handleHide=a.handleHide.bind(Object(p.a)(a)),a.handlePurchase=a.handlePurchase.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value,a=Object.keys(this.state[t]),r=Object(L.a)({},this.state);a.forEach((function(e){r[t][e].bought=!1})),r[t][n].bought=!0,r.finalOrder[t]={typ:n,cena:r[t][n].price},r.total+=r[t][n].price,r.total=r.finalOrder.icing.cena+r.finalOrder.topping.cena+r.finalOrder.napln.cena,this.setState(Object(L.a)({},r))}},{key:"handleRemove",value:function(){var e=this.state.icing,t=this.state.topping,n=this.state.napln;Object.keys(e).forEach((function(t){return e[t].bought=!1})),Object.keys(t).forEach((function(e){return t[e].bought=!1})),Object.keys(n).forEach((function(e){return n[e].bought=!1})),this.props.resetPurchase(),this.setState({icing:e,topping:t,napln:n,total:0,finalOrder:{icing:{cena:0},topping:{cena:0},napln:{cena:0}}})}},{key:"handleBuy",value:function(){this.setState({koupit:!0,modal:!0})}},{key:"handleHide",value:function(){this.setState({koupit:!1,modal:!1})}},{key:"handlePurchase",value:function(){this.setState({loading:!0}),this.props.history.push("/checkout")}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.icing).find((function(t){return!0===e.state.icing[t].bought})),n=Object.keys(this.state.topping).find((function(t){return!0===e.state.topping[t].bought})),r=Object.keys(this.state.napln).find((function(t){return!0===e.state.napln[t].bought})),o=this.state.total;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(Se,{showModal:this.state.modal,hideModal:this.handleHide,handleBuy:this.handlePurchase,isLoading:this.state.loading}),Object(a.jsx)(le,{icing:t,topping:n,napln:r}),0===o||!0===this.state.koupit?"":Object(a.jsxs)("div",{className:be.a.price,children:["Zaplat\xed\u0161 ",this.state.total," korun"]}),Object(a.jsx)(he,{icing:this.state.icing,topping:this.state.topping,napln:this.state.napln,handleChange:this.handleChange,handleReset:this.handleRemove,koupit:function(){e.handleBuy(),e.props.onGetOrder(e.state.finalOrder),e.props.getTotal(e.state.total)}}),Object(a.jsx)(De.b,{path:"/checkout",component:Je})]})}}]),n}(i.a.Component),Xe=Object(U.b)((function(e){return{finalOrder:e.donut.finalOrder,total:e.donut.total}}),(function(e){return{onGetOrder:function(t){return e(Ze.c(t))},getTotal:function(t){return e(Ze.d(t))},resetPurchase:function(){return e(Ze.a())}}}))(Object(Ie.a)(We,Te.a)),Ye=n(73),$e=n.n(Ye),Qe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isSignedUp:!0,signInForm:{email:{inputType:"input",elementConfig:{type:"text",placeholder:"nap\u0159. milovnikDonutu@seznam.cz",label:"E-mail"},touched:!1,rules:{required:!0,regex:/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/gi},value:"",valid:!1},password:{inputType:"input",elementConfig:{type:"password",placeholder:"*******",label:"Heslo"},touched:!1,rules:{required:!0,minLength:6,maxLength:30},value:"",valid:!1}},isValid:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e,t){var n=Object(L.a)({},this.state.signInForm),a=Object(L.a)({},n[t]);a.value=e.target.value,a.valid=Be(a.value,a.rules),a.touched=!0,n[t]=a;var r=!0;for(var i in n)r=r&&n[i].valid;this.setState({signInForm:n,isValid:r})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.signInForm)t.push({id:n,config:this.state.signInForm[n]});var r=t.map((function(t){return Object(a.jsx)(Le,{id:t.id,inputType:t.config.inputType,elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,onChange:function(n){e.handleChange(n,t.id)},valid:t.config.valid},t.id)})),i=Object(a.jsxs)("div",{className:$e.a.Register,children:[this.props.error&&Object(a.jsx)("div",{className:"Error",children:Object(a.jsx)("p",{children:this.props.error})}),r,Object(a.jsx)(xe,{onClick:function(){e.props.authStart(),e.props.onAuth(e.state.signInForm.email.value,e.state.signInForm.password.value,!e.state.isSignedUp)},disabled:!this.state.isValid,children:this.state.isSignedUp?"Zaregistrovat":"P\u0159ihl\xe1sit se"}),Object(a.jsx)("br",{}),Object(a.jsx)(xe,{onClick:function(){e.setState((function(e){return{isSignedUp:!e.isSignedUp}}))},disabled:!1,children:this.state.isSignedUp?"U\u017e m\xe1m \xfa\u010det":"Je\u0161t\u011b nem\xe1m \xfa\u010det"}),this.props.authenticated&&this.props.history.goBack()]});return this.props.loading?Object(a.jsx)(Ce.a,{}):i}}]),n}(r.Component),et=Object(U.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,authenticated:e.auth.authenticated}}),(function(e){return{onAuth:function(t,n,a){e(R.c(t,n,a))},authStart:function(){e(R.b())}}}))(Qe),tt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).props.logOut(),a.props.history.push("/"),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("p",{children:"Nashle p\u0159\xed\u0161t\u011b!"})}}]),n}(r.Component),nt=Object(U.b)((function(e){return{token:e.auth.idToken}}),(function(e){return{logOut:function(){e(R.d())}}}))(tt),at=i.a.lazy((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,123))})),rt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).props.fetchUser(),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O.a,{basename:"/donutio-app",children:Object(a.jsx)(F,{children:Object(a.jsxs)(De.d,{children:[Object(a.jsx)(De.b,{path:"/checkout",component:Je}),this.props.auth&&Object(a.jsx)(De.b,{path:"/orders",render:function(){return Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)("div",{children:Object(a.jsx)(Ce.a,{})}),children:Object(a.jsx)(at,{})})}}),Object(a.jsx)(De.b,{path:"/auth",component:et}),Object(a.jsx)(De.b,{path:"/logout",component:nt}),Object(a.jsx)(De.b,{path:"/",component:Xe})]})})})}}]),n}(i.a.Component),it=Object(U.b)((function(e){return{auth:e.auth.authenticated}}),(function(e){return{fetchUser:function(){e(R.a())}}}))(rt),ot=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,122)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))},ct=n(25),st=function(e,t){return Object(L.a)(Object(L.a)({},e),t)},lt={total:0,finalOrder:{icing:{cena:0},topping:{cena:0},napln:{cena:0}}},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ORDER":return st(e,{finalOrder:t.finalOrder});case"GET_TOTAL":return st(e,{total:t.total});case"CLEAR_PURCHASE":return st(e,{total:0,finalOrder:{icing:{cena:0},topping:{cena:0},napln:{cena:0}}});default:return e}},dt={name:"",street:"",zip:"",city:"",email:"",deliveryMethod:"slow"},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT/ON_CHANGE":return st(e,t.data);case"CONTACT/ON_SUBMIT":default:return e}},ht=n(40),jt={orders:[],loading:!1,ordered:null},bt=function(e,t){return st(e,{loading:!1,ordered:!0,orders:[].concat(Object(ht.a)(e.orders),[{orderId:t.orderId,order:t.orderData}])})},mt=function(e,t){return st(e,{loading:!1,ordered:null,error:t.error})},Ot={orders:[],loading:!1},gt=function(e,t){return{orders:Object(ht.a)(t.order),loading:!1}},ft=function(e,t){return{error:t.error,loading:!1}},vt={email:null,idToken:null,refreshToken:null,authenticated:!1,loading:!1},kt=function(e,t){return st(e,{loading:!0,error:null,email:null,localId:null,idToken:null,authenticated:!1})},xt=function(e,t){return st(e,{loading:!1,error:null,email:t.email,localId:t.localId,idToken:t.idToken,authenticated:!0})},yt=function(e,t){return st(e,{error:t.error,loading:!1,authenticated:!1})},Ct=function(e,t){return st(e,{email:null,idToken:null,refreshToken:null,authenticated:!1,loading:!1})},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/START":return kt(e);case"AUTH/SUCCESS":return xt(e,t);case"AUTH/FAIL":return yt(e,t);case"LOG_OUT":return Ct(e);default:return e}},St=n(74),It=Object(ct.c)({donut:ut,customer:pt,order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PURCHASED":return st(e,{ordered:null});case"PURCHASE_DONUT_START":return st(e,{loading:!0,ordered:null});case"PURCHASE_DONUT_SUCCESS":return bt(e,t);case"PURCHASE_DONUT_FAILURE":return mt(e,t);default:return e}},fetched:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ORDER/START":return st(e,{loading:!0});case"FETCH_ORDER/SUCCESS":return gt(0,t);case"FETCH_ORDER/FAIL":return ft(0,t);default:return e}},auth:_t}),Tt=ct.d,Dt=Object(ct.e)(It,Tt(Object(ct.a)(St.a)));c.a.render(Object(a.jsx)(U.a,{store:Dt,children:Object(a.jsx)(it,{})}),document.getElementById("root")),ot()}],[[107,1,2]]]);
//# sourceMappingURL=main.0363e148.chunk.js.map