(this["webpackJsonpant.d-project"]=this["webpackJsonpant.d-project"]||[]).push([[0],{138:function(e,n,t){},215:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(24),o=t.n(c),r=(t(137),t(138),t(104)),l=t(50),s=t(54),d=t(218),u=t(74),m=t(221),p=t(30),j=t(219),h=t(15),f=function(e){var n=e.rowsData,t=e.columnsData,i=e.isOpen,c=e.onCancel,o=e.onSave,r=Object(a.useState)({"Overall Score":6}),d=Object(s.a)(r,2),f=d[0],b=d[1],y=Object(a.useState)({"Image url":"https://img.icons8.com/color/452/amazon-web-services.png",Title:"New company"}),g=Object(s.a)(y,2),O=g[0],x=g[1],v=Object(a.useState)(!1),C=Object(s.a)(v,2),w=C[0],k=C[1];Object(a.useEffect)((function(){var e=t.every((function(e){return O[e.name]})),a=n.every((function(e){return f[e.name]&&(e.children||[]).every((function(e){return f[e.name]}))}));k(a&&e)}),[f]);var S=function(e){var n=e.target,t=Object(u.a)(Object(u.a)({},f),{},Object(l.a)({},n.name,n.value));b(t)},I=function(e){var n=e.target,t=Object(u.a)(Object(u.a)({},O),{},Object(l.a)({},n.name,n.value));x(t)},D=function(){o({rows:f,columns:O})};return Object(h.jsxs)(m.a,{visible:i,title:"Add new Vendor",onOk:D,onCancel:c,footer:[Object(h.jsx)(p.a,{onClick:c,children:"Cancel"},"back"),Object(h.jsx)(p.a,{type:"primary",disabled:!w,onClick:D,children:"Add +"},"submit")],children:[t.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:e.name,children:e.name}),Object(h.jsx)(j.a,{id:e.name,name:e.name,value:O[e.name],onChange:I})]},e.name)})),n.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:e.name,children:e.name}),Object(h.jsx)(j.a,{id:e.name,name:e.name,value:f[e.name],onChange:S}),e.children&&e.children.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:e.name,children:e.name}),Object(h.jsx)(j.a,{id:e.name,name:e.name,value:f[e.name],onChange:S})]})}))]},e.name)}))]})},b={headerCellLogoContainer:{backgroundColor:"#eee",width:60,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:2},headerCellLTitle:{margin:"10px 0 0"},headerCellLogo:{width:30},headerCellIcon:{transform:"rotate(45deg)",color:"#a4aab2",fontSize:25,fontWeight:300,position:"absolute",top:0,right:0,lineHeight:"15px",cursor:"pointer"},headerCellContainer:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",position:"relative"}},y=function(e){var n=e.id,t=e.title,a=e.imgUrl,i=e.onDelete;return Object(h.jsxs)("div",{style:b.headerCellContainer,children:[Object(h.jsx)("span",{onClick:function(){return i(n)},style:b.headerCellIcon,children:"+"}),Object(h.jsx)("div",{style:b.headerCellLogoContainer,children:Object(h.jsx)("img",{style:b.headerCellLogo,src:a})}),Object(h.jsx)("p",{style:b.headerCellLTitle,children:t})]})},g=t(220),O={scoreCellContainer:{display:"flex",justifyContent:"center",alignItems:"center"},scoreValue:{display:"flex",justifyContent:"center",alignItems:"center",background:"#c5e1a5",width:40,height:40,borderRadius:50,fontWeight:600,fontSize:12}},x=function(e){var n=e.value;return Object(h.jsx)("div",{style:O.scoreCellContainer,children:Object(h.jsx)(g.a,{type:"circle",percent:10*n,width:40,strokeLinecap:"#c5e1a5",format:function(){return n}})})},v=t(222),C={headerCellLTitle:{margin:"10px 0 0",color:"#42a5f5"},headerCellContainer:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",position:"relative"},headerCellButton:{cursor:"pointer",border:"none",width:60,height:40,backgroundColor:"#eee",color:"#66bb6a"}},w=function(e){var n=e.title,t=e.onAdd;return Object(h.jsxs)("div",{style:C.headerCellContainer,children:[Object(h.jsx)("button",{style:C.headerCellButton,onClick:t,children:Object(h.jsx)(v.a,{})}),Object(h.jsx)("p",{style:C.headerCellLTitle,children:n})]})},k={vendorCellLink:{color:"#42a5f5"}},S=[{key:"actions",width:"100px",imgUrl:null,title:"Add new vendor"},{key:"company1",width:"100px",imgUrl:t.p+"static/media/Box.0f2018f4.png",title:"Box"},{key:"company2",width:"100px",imgUrl:t.p+"static/media/Dropbox.8ea3e13b.png",title:"Dropbox"},{key:"company3",width:"100px",imgUrl:t.p+"static/media/Googledrive.344c40ac.png",title:"Google Drive"}],I=[{actions:"Overall Score",company1:"6.1",company2:"6.0",company3:"4.5"},{actions:"Company Info",company1:"Box is a powerful content management platform. It emphasizes the user experience while providing built-in security and compliance all on an integrated, open platform. ",company2:'Dropbox is a file hosting service, often referred to as a "cloud storage" service.',company3:"Google Drive is a file storage and synchronization service developed by Google."},{actions:"Funding History",company1:"Total funding $110m",company2:"Total funding $170m",company3:"Total funding $36.1m",children:[{actions:"Founded",company1:"2005",company2:"2007",company3:"1998"},{actions:"Key investors",company1:"DFG, Scale Venture Partners",company2:"Index Venture, Sequoia",company3:"Sequoia, Kleiner, Index Venture"},{actions:"Founders",company1:"Aeron Leviel, Dilon Smith",company2:"Arash Ferdoswi",company3:"Larry Page, Sergey Brin"}]},{actions:"Pricing",company1:"https://www.dropbox.com/plans",company2:"https://drive.google.com/pricing",company3:"https://www.salesforce.com/pricing"},{actions:"Features",company1:"5 different features present",company2:"4 different features present",company3:"6 different features present"},{actions:"Customer Case Studies",company1:"4 customer case studies found",company2:"6 customer case studies found",company3:"1 customer case studies found"}],D=function(){var e=Object(a.useState)(I),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(S),o=Object(s.a)(c,2),u=o[0],m=o[1],p=Object(a.useState)(!1),j=Object(s.a)(p,2),b=j[0],g=j[1],O=function(e){m(u.filter((function(n){return n.key!==e}))),i(t.filter((function(n){return delete n[e],n})))},v=u.map((function(e){return{key:e.key,width:"100px",dataIndex:e.key,title:"actions"===e.key?Object(h.jsx)(w,{title:e.title,onAdd:function(){return g(!b)}}):Object(h.jsx)(y,{id:e.key,title:e.title,imgUrl:e.imgUrl,onDelete:O})}})),C=t.map((function(e){if("Overall Score"===e.actions){var n={actions:e.actions};return Object.keys(e).forEach((function(t){"actions"!==t&&(n[t]=Object(h.jsx)(x,{value:e[t]}))})),n}if("Pricing"===e.actions){var t={actions:e.actions};return Object.keys(e).forEach((function(n){"actions"!==n&&(t[n]=Object(h.jsx)("a",{style:k.vendorCellLink,href:e[n],children:e[n]}))})),t}return e}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{isOpen:b,rowsData:C.map((function(e){var n=Object.assign({},{name:e.actions});return e.children&&(n.children=e.children.map((function(e){return{name:e.actions}}))),n})),columnsData:[{name:"Image url"},{name:"Title"}],onCancel:function(){g(!1)},onSave:function(e){var n=u[u.length-1].key,a=parseInt(n[n.length-1],10),c="company".concat(a+1),o={width:"20%",key:c,dataIndex:c,title:e.columns.Title,imgUrl:e.columns["Image url"]},s=t.map((function(n){var t=Object.assign(n,Object(l.a)({},c,e.rows[n.actions]));if(n.children){var a=Object(r.a)(n.children).map((function(n){return Object.assign(n,Object(l.a)({},c,e.rows[n.actions]))}));t.children=a}return t}));m([].concat(Object(r.a)(u),[o])),i(s),g(!1)}}),Object(h.jsx)(d.a,{columns:v,dataSource:C,pagination:!1,bordered:!0})]})};var L=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(D,{})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,223)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),F()}},[[215,1,2]]]);
//# sourceMappingURL=main.210abfac.chunk.js.map