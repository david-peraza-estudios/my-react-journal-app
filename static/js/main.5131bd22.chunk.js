(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(42),r=n.n(c),o=n(13),s=n(31),i=n(18),u=n(27),l=n(0),j=n.n(l),d=n(1),b=n(26),p=n(72),O=(Object(p.a)({apiKey:"AIzaSyA-G3hP-rbC_OwYWyYYXnKBnTn48j31o-8",authDomain:"curso-react-fh-50afa.firebaseapp.com",projectId:"curso-react-fh-50afa",storageBucket:"curso-react-fh-50afa.appspot.com",messagingSenderId:"1037797384180",appId:"1:1037797384180:web:fade7a2eb8ab1fea1ea3a1"}),Object(b.f)()),f=new u.a,m="[Auth] Login",h="[Auth Logout] Logout",x="[UI] Set Error",g="[UI] Remove Error",v="[UI] Start Loading",y="[UI] Finish Loading",_="[Notes] New note",N="[Notes] Set active note",w="[Notes] Load notes",k="[Notes] Updated note",C="[Notes] Delete note",S="[Notes] Logout Cleaning",E=function(e){return{type:x,payload:e}},I=n(32),L=n.n(I),A=Object(u.c)(),D=function(e,t){return{type:m,payload:{uid:e,displayName:t}}},P=function(e,t){return function(n){n({type:v,payload:!0}),Object(u.e)(A,e,t).then((function(e){var t=e.user;n(D(t.uid,t.displayName))})).catch((function(e){console.log(e),L.a.fire({icon:"error",title:"Oops...",text:e.message})})).finally((function(){n({type:y,payload:!1})}))}},U=function(){return function(e){Object(u.g)(A).then((function(){e({type:h}),e({type:S})})).catch((function(e){}))}},B=n(4),R=n(12),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(o.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(R.a)(Object(R.a)({},c),{},Object(B.a)({},t.name,t.value)))};return[c,i,s]},Y=n(15),z=n(6),F=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.ui})).loading,n=T({email:"user5@gmail.com",password:"123456"}),a=Object(o.a)(n,2),c=a[0],r=a[1],i=c.email,l=c.password;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h3",{className:"auth__title",children:"Login"}),Object(z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(P(i,l))},className:"animate__animated animate__fadeIn animate_faster",children:[Object(z.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(z.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:l,onChange:r}),Object(z.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(z.jsxs)("div",{className:"auth__social-networks",children:[Object(z.jsx)("p",{children:"Login with social networks"}),Object(z.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){Object(u.f)(A,f).then((function(t){var n=t.user;e(D(n.uid,n.displayName))}))}))},children:[Object(z.jsx)("div",{className:"google-icon-wrapper",children:Object(z.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(z.jsx)("p",{className:"btn-text",children:Object(z.jsx)("b",{children:"Sign in with google"})})]})]}),Object(z.jsx)(s.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},q=n(75),G=n.n(q),X=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.ui})).msgError,n=T({name:"Hernando",email:"nanod@gmail.com",password:"123456",password2:"123456"}),a=Object(o.a)(n,2),c=a[0],r=a[1],i=c.name,l=c.email,b=c.password,p=c.password2,O=function(){return 0===i.trim().length?(console.log("Name is required"),e(E("Name is required")),!1):G.a.isEmail(l)?b!==p||b.length<5?(e(E("Password inputs are incorrect or less than 6 characters")),!1):(e({type:g}),!0):(e(E("Email is not valid")),!1)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h3",{className:"auth__title",children:"Register"}),Object(z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O()&&e(function(e,t,n){return function(a){Object(u.b)(A,e,t).then(function(){var e=Object(d.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(u.h)(A.currentUser,{displayName:n});case 3:a(D(c.uid,c.displayName)),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n),L.a.fire({icon:"error",title:"Oops...",text:e.message})}))}}(l,b,i))},className:"animate__animated animate__fadeIn animate_faster",children:[t&&Object(z.jsx)("div",{className:"auth__alert-error",children:t}),Object(z.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",onChange:r}),Object(z.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",onChange:r}),Object(z.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",onChange:r}),Object(z.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",autoComplete:"off",onChange:r}),Object(z.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(z.jsx)(s.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},J=function(){return Object(z.jsx)("div",{className:"auth__main",children:Object(z.jsx)("div",{className:"auth__box-container",children:Object(z.jsxs)(i.d,{children:[Object(z.jsx)(i.b,{exact:!0,path:"/auth/login",component:F}),Object(z.jsx)(i.b,{exact:!0,path:"/auth/register",component:X}),Object(z.jsx)(i.a,{to:"/auth/login"})]})})})},K=n(76),W=n.n(K),H=n(19),M=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(Object(b.b)(O,"".concat(t,"/journal/notes")));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(R.a)({id:e.id},e.data()))})),console.log(a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/datrkzch3/upload",(n=new FormData).append("upload_preset","udemy-react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/datrkzch3/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(e,t){return{type:_,payload:Object(R.a)({id:e},t)}},Z=function(e,t){return{type:N,payload:Object(R.a)({id:e},t)}},$=function(e){return{type:w,payload:Object(H.a)(e)}},ee=function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c,r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(R.a)({},e)).id,o=Object(b.d)(O,"".concat(c,"/journal/notes/").concat(e.id)),t.next=7,Object(b.g)(o,r);case 7:n(te(e.id,e)),L.a.fire({position:"top-end",icon:"success",title:"Your note has been saved",showConfirmButton:!1,timer:1200});case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},te=function(e,t){return{type:k,payload:{id:e,note:t}}},ne=function(e){return{type:C,payload:e}},ae=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,o=W()(n),s=Object(Y.b)();return Object(z.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeInDown animate__faster",onClick:function(){var e={id:t,title:a,body:c,date:n,url:r};console.log(e),s(Z(t,e))},children:[r&&Object(z.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(z.jsxs)("div",{className:"journal__entry-body",children:[Object(z.jsx)("p",{className:"journal__entry-title",children:a}),Object(z.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(z.jsxs)("div",{className:"journal__entry-date-box",children:[Object(z.jsx)("span",{children:o.format("dddd")}),Object(z.jsx)("h4",{children:o.format("Do")})]})]})},ce=function(){var e=Object(Y.c)((function(e){return e.notes})).notes;return Object(z.jsx)("div",{className:"journal__entries",children:e&&e.map((function(e){return Object(z.jsx)(ae,Object(R.a)({},e),e.id)}))})},re=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.auth})).name;return Object(z.jsxs)("aside",{className:"journal__sidebar",children:[Object(z.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(z.jsxs)("h3",{className:"mt-5",children:[Object(z.jsx)("i",{className:"far fa-moon"}),Object(z.jsxs)("span",{children:[" ",t]})]}),Object(z.jsx)("button",{className:"btn",onClick:function(){e(U())},children:"Logout"})]}),Object(z.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,Object(b.a)(Object(b.b)(O,"".concat(a,"/journal/notes")),c);case 4:r=e.sent,t(Z(r.id,c)),t(Q(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(z.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(z.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(z.jsx)(ce,{})]})},oe=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.notes})).active;return Object(z.jsxs)("div",{className:"notes__appbar",children:[Object(z.jsx)("span",{children:"28 de agosto 2020"}),Object(z.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){L.a.showLoading()}}),c=a().notes.active,t.next=4,V(e);case 4:r=t.sent,console.log(r),c.url=r,n(ee(c)),L.a.close();case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(z.jsxs)("div",{children:[Object(z.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(z.jsx)("button",{className:"btn",onClick:function(){e(ee(t))},children:"Save"})]})]})},se=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.notes})).active,n=T(t),c=Object(o.a)(n,3),r=c[0],s=c[1],i=c[2],u=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==u.current&&(i(t),u.current=t.id)}),[t,i]),Object(a.useEffect)((function(){e(Z(r.id,Object(R.a)({},r)))}),[r,e]);var l=r.title,p=r.body,f=r.id;return Object(z.jsxs)("div",{className:"notes__main-content",children:[Object(z.jsx)(oe,{}),Object(z.jsxs)("div",{className:"notes__content",children:[Object(z.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:l,onChange:s}),Object(z.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:p,onChange:s}),t.url&&Object(z.jsx)("div",{className:"notes__image",children:Object(z.jsx)("img",{src:t.url,alt:"imagen"})}),Object(z.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,Object(b.c)(Object(b.d)(O,"".concat(c,"/journal/notes/").concat(e)));case 3:n(ne(e)),L.a.fire({position:"top-end",icon:"success",title:"Your note has been deleted",showConfirmButton:!1,timer:1200});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(f))},children:"Delete"})]})]})},ie=function(){return Object(z.jsxs)("div",{className:"nothing__main-content",children:[Object(z.jsxs)("p",{children:["Select something",Object(z.jsx)("br",{}),"pr create an entry!"]}),Object(z.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ue=function(){var e=Object(Y.c)((function(e){return e.notes})).active;return Object(z.jsxs)("div",{className:"journal__main-content",children:[Object(z.jsx)(re,{}),Object(z.jsx)("main",{children:e?Object(z.jsx)(se,{}):Object(z.jsx)(ie,{})})]})},le=n(45),je=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,je);return Object(z.jsx)(i.b,Object(R.a)(Object(R.a)({},a),{},{component:function(e){return t?Object(z.jsx)(i.a,{to:"/"}):Object(z.jsx)(n,Object(R.a)({},e))}}))},be=["isAuthenticated","component"],pe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,be);return localStorage.setItem("lastPath",a.location.pathname),Object(z.jsx)(i.b,Object(R.a)(Object(R.a)({},a),{},{component:function(e){return t?Object(z.jsx)(n,Object(R.a)({},e)):Object(z.jsx)(i.a,{to:"/auth/login"})}}))},Oe=function(){var e=Object(a.useState)({loading:!0}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({loggedIn:!1}),l=Object(o.a)(r,2),b=l[0],p=l[1],O=Object(Y.b)(),f=Object(u.c)();return Object(a.useEffect)((function(){Object(u.d)(f,(function(e){var t;(null===e||void 0===e?void 0:e.uid)?(console.log(e),O(D(e.uid,e.displayName)),p({loggedIn:!0}),O((t=e.uid,function(){var e=Object(d.a)(j.a.mark((function e(n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:a=e.sent,n($(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):(console.log("user has signed out"),p({loggedIn:!1})),c({loading:!1})}))}),[O,c,p]),n.loading?Object(z.jsx)("h1",{children:" Checking..."}):Object(z.jsx)(s.a,{children:Object(z.jsx)("div",{children:Object(z.jsxs)(i.d,{children:[Object(z.jsx)(de,{isAuthenticated:b.loggedIn,path:"/auth",component:J}),Object(z.jsx)(pe,{isAuthenticated:b.loggedIn,exact:!0,path:"/",component:ue}),Object(z.jsx)(i.a,{to:"/auth/login"})]})})})},fe=n(40),me=n(77),he={loading:!1,msgError:null},xe={notes:[],active:null},ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.c,ve=Object(fe.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{uid:t.payload.uid,name:t.payload.displayName};case h:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(R.a)(Object(R.a)({},e),{},{msgError:t.payload});case g:return Object(R.a)(Object(R.a)({},e),{},{msgError:null});case v:case y:return Object(R.a)(Object(R.a)({},e),{},{loading:t.payload});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(R.a)(Object(R.a)({},e),{},{active:Object(R.a)({},t.payload)});case w:return Object(R.a)(Object(R.a)({},e),{},{notes:Object(H.a)(t.payload)});case k:return Object(R.a)(Object(R.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case C:return Object(R.a)(Object(R.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case S:return Object(R.a)(Object(R.a)({},e),{},{active:null,notes:[]});case _:return Object(R.a)(Object(R.a)({},e),{},{notes:[t.payload].concat(Object(H.a)(e.notes))});default:return e}}}),ye=Object(fe.d)(ve,ge(Object(fe.a)(me.a))),_e=function(){return Object(z.jsx)(Y.a,{store:ye,children:Object(z.jsx)(Oe,{})})};n(183);r.a.render(Object(z.jsx)(_e,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.5131bd22.chunk.js.map