(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={form:"Form_form__qMvWp",input:"Form_input__1706p",button:"Form_button__2E6Mi"}},27:function(t,e,n){t.exports={alert:"Alert_alert__1RHZF",enter:"Alert_enter__L_DtP",enterActive:"Alert_enterActive__SE9AT",exit:"Alert_exit__13YfK",exitActive:"Alert_exitActive__16p1P"}},37:function(t,e,n){t.exports={container:"Container_container__2DeNk"}},39:function(t,e,n){t.exports={input:"Filter_input__Jw1BS"}},47:function(t,e,n){},48:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=(n(47),n(17)),u=n(18),l=n(21),b=n(19),j=(n(48),n(37)),f=n.n(j);function m(t){var e=t.children;return Object(c.jsx)("div",{className:f.a.container,children:e})}var d=n(3),h=n(8),O=n(13),p=n.n(O),_=n(14),x=n.n(_),v=n(2),g=Object(v.b)("contact/fetchRequest"),C=Object(v.b)("contact/fetchSuccess"),N=Object(v.b)("contact/fetchError"),A=Object(v.b)("contact/addRequest"),y=Object(v.b)("contact/addSuccess"),L=Object(v.b)("contact/addError"),S=Object(v.b)("contact/deleteRequest"),k=Object(v.b)("contact/deleteSuccess"),F=Object(v.b)("contact/deleteError"),w=Object(v.b)("contact/changeFilter");x.a.defaults.baseURL="http://localhost:2332";var E=n(72),D=n(27),J=n.n(D);function R(t){var e=t.massage,n=t.alert;return Object(c.jsx)(E.a,{in:n,timeout:250,classNames:J.a,unmountOnExit:!0,children:Object(c.jsx)("div",{className:J.a.alert,children:Object(c.jsx)("span",{children:e})})})}var M=n(16),T=function(t){return t.phonebook.contacts},q=function(t){return t.phonebook.filter},B=Object(M.a)([T,q],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),H=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",alert:!1,massage:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.onAlert=function(e){t.setState({massage:e,alert:!0}),setTimeout((function(){t.setState({massage:"",alert:!1})}),3e3)},t.onSubmitForm=function(e){e.preventDefault(),""!==t.state.name?t.props.contacts.find((function(e){return e.name===t.state.name}))?t.onAlert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(t.state.name," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")):(t.props.handleSubmit(t.state),t.setState({name:"",number:""})):t.onAlert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d")},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.massage,n=t.alert;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R,{massage:e,alert:n}),Object(c.jsxs)("form",{className:p.a.form,onSubmit:this.onSubmitForm,children:[Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,placeholder:"\u0418\u043c\u044f",className:p.a.input})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"tel",name:"number",onChange:this.handleChange,value:this.state.number,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",className:p.a.input})}),Object(c.jsx)("button",{type:"submit",className:p.a.button,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})]})}}]),n}(a.Component),G=Object(h.b)((function(t){return{contacts:T(t)}}),(function(t){return{handleSubmit:function(e){var n=e.name,c=e.number;return t(function(t,e){return function(n){var c={name:t,number:e};n(A()),x.a.post("/contacts",c).then((function(t){var e=t.data;n(y(e))})).catch((function(t){n(L(t))}))}}(n,c))}}}))(H),K=n(73),P=n(9),Z=n.n(P),z=n.p+"static/media/defAvaCir.d011667d.png";var I=Object(h.b)((function(t){return{contacts:B(t)}}),(function(t){return{onDelete:function(e){return t(function(t){return function(e){e(S()),x.a.delete("/contacts/".concat(t)).then((function(){e(k(t))})).catch((function(t){e(F(t))}))}}(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(c.jsx)(c.Fragment,{children:e.length>0&&Object(c.jsx)(K.a,{component:"ul",className:Z.a.list,children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(c.jsx)(E.a,{timeout:250,classNames:Z.a,children:Object(c.jsxs)("li",{className:Z.a.contact,children:[Object(c.jsx)("img",{src:z,className:Z.a.avatar,alt:"avatar"}),Object(c.jsxs)("div",{className:Z.a.discription,children:[Object(c.jsxs)("span",{className:Z.a.name,children:[e," "]}),Object(c.jsxs)("span",{className:Z.a.number,children:[" ",a," "]})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return n(r)},className:Z.a.button,children:Object(c.jsx)("p",{className:Z.a.delete,children:"\u26d4"})})]})},r)}))})})})),U=n(39),W=n.n(U);var Y=Object(h.b)((function(t){return{contacts:T(t),filter:q(t)}}),(function(t){return{onChange:function(e){return t(w(e.target.value))}}}))((function(t){var e=t.contacts,n=t.filter,a=t.onChange;return Object(c.jsx)(E.a,{in:e.length>1,timeout:250,classNames:"Filter",unmountOnExit:!0,children:Object(c.jsx)("input",{type:"text",value:n,onChange:a,placeholder:"\u041d\u0430\u0439\u0442\u0438",className:W.a.input})})}));function Q(){return Object(c.jsx)(E.a,{in:!0,appear:!0,timeout:500,classNames:"Title",unmountOnExit:!0,children:Object(c.jsx)("h1",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})}var V,X,$=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(c.jsx)(m,{children:Object(c.jsxs)("div",{className:"phoneBook",children:[Object(c.jsx)(Q,{}),Object(c.jsx)(G,{}),Object(c.jsx)(Y,{}),Object(c.jsx)(I,{})]})})}}]),n}(a.Component),tt=Object(h.b)(null,(function(t){return{fetchContacts:function(){return t((function(t){t(g()),x.a.get("/contacts").then((function(e){var n=e.data;t(C(n))})).catch((function(e){t(N(e))}))}))}}}))($),et=n(20),nt=n(40),ct=n.n(nt),at=n(7),rt={contacts:[],filter:"",loading:!1},ot=Object(v.c)(rt.contacts,(V={},Object(d.a)(V,C,(function(t,e){return e.payload})),Object(d.a)(V,y,(function(t,e){return[e.payload].concat(Object(et.a)(t))})),Object(d.a)(V,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),V)),it=Object(v.c)(rt.filter,Object(d.a)({},w,(function(t,e){return e.payload}))),st=Object(v.c)(rt.loading,(X={},Object(d.a)(X,g,(function(){return!0})),Object(d.a)(X,C,(function(){return!1})),Object(d.a)(X,N,(function(){return!1})),Object(d.a)(X,A,(function(){return!0})),Object(d.a)(X,y,(function(){return!1})),Object(d.a)(X,L,(function(){return!1})),Object(d.a)(X,S,(function(){return!0})),Object(d.a)(X,k,(function(){return!1})),Object(d.a)(X,F,(function(){return!1})),X)),ut=Object(at.c)({contacts:ot,filter:it,loading:st}),lt=[].concat(Object(et.a)(Object(v.d)()),[ct.a]),bt=Object(v.a)({reducer:{phonebook:ut},middleware:lt,devTools:!1});i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h.a,{store:bt,children:Object(c.jsx)(tt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactsList_list__2ZJiH",contact:"ContactsList_contact__2ikFJ",discription:"ContactsList_discription__1R9bT",avatar:"ContactsList_avatar__3JEh_",button:"ContactsList_button__1zfw9",delete:"ContactsList_delete__27oBM",enter:"ContactsList_enter__bjKdL",enterActive:"ContactsList_enterActive__28cft",exit:"ContactsList_exit__3mtax",exitActive:"ContactsList_exitActive__3vGHG"}}},[[71,1,2]]]);
//# sourceMappingURL=main.fca20abc.chunk.js.map