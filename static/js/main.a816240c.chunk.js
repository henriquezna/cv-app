(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),j=n(9),r=n.n(j),o=(n(17),n(2)),s=(n(18),n(0));var i=function(e){var t=e.data,n=(e.personalData,e.updatePersonalData);console.log(t,"PersonalForm.");var c=Object(a.useState)(""),j=Object(o.a)(c,2),r=j[0],i=j[1],b=Object(a.useState)(""),l=Object(o.a)(b,2),u=l[0],d=l[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),p=x[0],h=x[1],m=Object(a.useState)(""),v=Object(o.a)(m,2),f=v[0],g=v[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Personal"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("You clicked submit."),console.log(r,"First."),n(r,u,p,f)},children:[Object(s.jsx)("label",{for:"fname",children:"First name:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"fname",name:"fname",value:r,onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"lname",children:"Last name:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"lname",name:"lname",value:u,onChange:function(e){return d(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"email",children:"Email:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"email",id:"email",name:"email",value:p,onChange:function(e){return h(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"phone",children:"Phone Number:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"tel",id:"phone",name:"phone",value:f,onChange:function(e){return g(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})};var b=function(e){var t=e.updateExperienceData,n=Object(a.useState)(""),c=Object(o.a)(n,2),j=c[0],r=c[1],i=Object(a.useState)(""),b=Object(o.a)(i,2),l=b[0],u=b[1],d=Object(a.useState)(""),O=Object(o.a)(d,2),x=O[0],p=O[1],h=Object(a.useState)(""),m=Object(o.a)(h,2),v=m[0],f=m[1],g=Object(a.useState)(""),D=Object(o.a)(g,2),E=D[0],S=D[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Experience"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("You clicked submit."),t(j,l,x,v,E)},children:[Object(s.jsx)("label",{for:"company",children:"Company name:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"company",name:"company",value:j,onChange:function(e){return r(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"position",children:"Position Title:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"position",name:"position",value:l,onChange:function(e){return u(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"tasks",children:"Main Tasks:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"tasks",name:"tasks",value:x,onChange:function(e){return p(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"dateFrom",children:"Date Began:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"date",id:"dateFrom",name:"dateFrom",value:v,onChange:function(e){return f(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"dateEnd",children:"Dates:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"date",id:"dateEnd",name:"dateEnd",value:E,onChange:function(e){return S(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})};var l,u=function(e){var t=e.updateEducationData,n=Object(a.useState)(""),c=Object(o.a)(n,2),j=c[0],r=c[1],i=Object(a.useState)(""),b=Object(o.a)(i,2),l=b[0],u=b[1],d=Object(a.useState)(""),O=Object(o.a)(d,2),x=O[0],p=O[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Education Section"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("You clicked submit."),t(j,l,x)},children:[Object(s.jsx)("label",{for:"school",children:"School:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"school",name:"school",value:j,onChange:function(e){return r(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"major",children:"Major:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",id:"major",name:"major",value:l,onChange:function(e){return u(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{for:"dates",children:"Date of Study:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"date",id:"dates",name:"dates",value:x,onChange:function(e){return p(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})},d=n(3),O=n(4),x=O.a.div(l||(l=Object(d.a)(["\n    width: 50vh;\n    background-color: #D6C9C9\n"])));var p=function(e){var t=e.personalData,n=e.updatePersonalData,c=e.updateExperienceData,j=e.updateEducationData;return Object(a.useEffect)((function(){console.log(t,"CreateForms USEEFFECT")})),Object(s.jsxs)(x,{children:[Object(s.jsx)("h2",{children:"Create CV"}),Object(s.jsx)(i,{personalData:t,updatePersonalData:n}),Object(s.jsx)(b,{updateExperienceData:c}),Object(s.jsx)(u,{updateEducationData:j})]})};var h=function(e){console.log(e,"PROPSNAME");var t=e.personalData;return console.log(t,"personalDataPREVIEW"),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Personal Preview"}),Object(s.jsx)("p",{children:t.name}),Object(s.jsx)("p",{children:t.last}),Object(s.jsx)("p",{children:t.email}),Object(s.jsx)("p",{children:t.phone})]})};var m=function(e){var t=e.experienceData;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Experience Preview"}),Object(s.jsx)("p",{children:t.company}),Object(s.jsx)("p",{children:t.position}),Object(s.jsx)("p",{children:t.tasks}),Object(s.jsx)("p",{children:t.dateBeg}),Object(s.jsx)("p",{children:t.dateEnd})]})};var v,f=function(e){var t=e.educationData;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Education Preview"}),Object(s.jsx)("p",{children:t.school}),Object(s.jsx)("p",{children:t.major}),Object(s.jsx)("p",{children:t.date})]})},g=O.a.div(v||(v=Object(d.a)(["\n    width: 50vh;\n    background-color: #D6C9C9\n"])));var D=function(e){return console.log(e,"PREVIEW"),Object(s.jsxs)(g,{children:[Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)(h,{personalData:e.personalData}),Object(s.jsx)(m,{experienceData:e.experienceData}),Object(s.jsx)(f,{educationData:e.educationData})]})};var E=function(){var e=Object(a.useState)({name:"John",last:"Smith",email:"john@smith.com",phone:"1234567890"}),t=Object(o.a)(e,2),n=t[0],c=t[1],j=Object(a.useState)({company:"ACME",position:"CEO",tasks:"Running the Company",dateBeg:"12/20/2015",dateEnd:"08/15/2021"}),r=Object(o.a)(j,2),i=r[0],b=r[1],l=Object(a.useState)({school:"University of Michigan",major:"Michigan Studies",date:"08/20/2015"}),u=Object(o.a)(l,2),d=u[0],O=u[1];return Object(a.useEffect)((function(){console.log(n,"mainApp USEEFFECT")})),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("h1",{children:"CV Maker"})}),Object(s.jsxs)("body",{children:[Object(s.jsx)(p,{updatePersonalData:function(e,t,a,j){console.log(e,t,"SEND FUNCTION2"),c({name:e,last:t,email:a,phone:j}),console.log(n,"SEND FUNCTION2")},updateExperienceData:function(e,t,n,a,c){b({company:e,position:t,tasks:n,dateBeg:a,dateEnd:c}),console.log(i,"SEND FUNCTION2")},updateEducationData:function(e,t,n){O({school:e,major:t,date:n}),console.log(d,"SEND FUNCTION2")}}),Object(s.jsx)(D,{personalData:n,experienceData:i,educationData:d})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,j=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),j(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),S()}},[[24,1,2]]]);
//# sourceMappingURL=main.a816240c.chunk.js.map