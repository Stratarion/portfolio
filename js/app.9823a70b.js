(function(e){function t(t){for(var n,i,s=t[0],c=t[1],p=t[2],g=0,d=[];g<s.length;g++)i=s[g],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,p||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0813":function(e,t,r){e.exports=r.p+"img/perfect_pc.c6cf1434.jpg"},"0b6d":function(e,t,r){e.exports=r.p+"img/Screenshot_4.a0c4ed2c.jpg"},"177c":function(e,t,r){e.exports=r.p+"img/Screenshot_3.84a6f257.jpg"},"1ada":function(e,t,r){e.exports=r.p+"img/Screenshot_4.6e7d6e8f.jpg"},2256:function(e,t,r){e.exports=r.p+"img/gipsolit.3b04d106.jpg"},2480:function(e,t,r){e.exports=r.p+"img/oxgame.6a7ec37f.jpg"},"2cc6":function(e,t,r){e.exports=r.p+"img/keksoBooking.0e6c1137.jpg"},"30f5":function(e,t,r){e.exports=r.p+"img/Screenshot_3.87d79302.jpg"},3385:function(e,t,r){},3695:function(e,t,r){e.exports=r.p+"img/Screenshot_1.38cb02a2.jpg"},"37a9":function(e,t,r){e.exports=r.p+"img/Screenshot_1.0bf0a120.jpg"},"381f":function(e,t,r){e.exports=r.p+"img/Screenshot_2.cb8c8e93.jpg"},"3fed":function(e,t,r){e.exports=r.p+"img/vr-glass.fce9c43d.jpg"},4998:function(e,t,r){e.exports=r.p+"img/credit_center_landing.07d5a433.jpg"},"4eb9":function(e,t,r){e.exports=r.p+"img/Screenshot_2.f4530050.jpg"},5180:function(e,t,r){e.exports=r.p+"img/serach.e8e29222.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("Navigation",{attrs:{links:e.links}}),r("v-content",[r("v-container",[r("router-view")],1)],1),r("Footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{color:"cyan darken-2",app:""}},[r("span",{staticClass:"white--text"},[e._v("© 2020, git-hub portfolio "),r("a",{staticClass:"white--text",attrs:{href:"https://github.com/Stratarion/"}},[e._v("Stratarion")])])])},s=[],c=r("2877"),p=r("6544"),l=r.n(p),g=r("553a"),d={},u=Object(c["a"])(d,i,s,!1,null,null,null),h=u.exports;l()(u,{VFooter:g["a"]});var f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},e._l(e.links,(function(t,n){return r("v-list-item",{key:n,attrs:{link:"",to:t.address}},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1)],1),r("Header",{on:{toggleDrawer:e.toggleDrawer}})],1)},_=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"cyan darken-2",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.toggleDrawer(t)}}}),r("v-toolbar-title",[e._v("Oleg Volkov")])],1)},m=[],v={methods:{toggleDrawer:function(){this.$emit("toggleDrawer")}}},S=v,b=r("40dc"),x=r("5bc1"),k=r("2a7f"),w=Object(c["a"])(S,j,m,!1,null,null,null),y=w.exports;l()(w,{VAppBar:b["a"],VAppBarNavIcon:x["a"],VToolbarTitle:k["a"]});var M={components:{Header:y},props:["links"],data:function(){return{drawer:!0}},methods:{toggleDrawer:function(){this.drawer=!this.drawer}}},V=M,O=r("132d"),C=r("8860"),T=r("da13"),P=r("1800"),L=r("5d23"),E=r("f774"),H=Object(c["a"])(V,f,_,!1,null,null,null),A=H.exports;l()(H,{VIcon:O["a"],VList:C["a"],VListItem:T["a"],VListItemAction:P["a"],VListItemContent:L["a"],VListItemTitle:L["b"],VNavigationDrawer:E["a"]});var D={props:{source:String},components:{Footer:h,Navigation:A},data:function(){return{links:[{text:"В начало",address:"/",icon:"mdi-home"},{text:"Верстка",address:"html-projects",icon:"mdi-language-html5"},{text:"Приложения на VueJS",address:"vue-projects",icon:"mdi-vuejs"},{text:"Нативный JS",address:"js-projects",icon:"mdi-language-javascript"}]}}},$=D,I=r("7496"),B=r("a523"),J=r("a75b"),N=Object(c["a"])($,o,a,!1,null,null,null),G=N.exports;l()(N,{VApp:I["a"],VContainer:B["a"],VContent:J["a"]});var F=r("f309");n["a"].use(F["a"]);var R=new F["a"]({}),z=r("8c4f"),U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Мои проекты")]),r("p",[e._v("На этой странице, вы можете ознакомится со всеми моими проектами")])])}],X={},K=Object(c["a"])(X,U,W,!1,null,null,null),q=K.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Vue")]),r("ProjectsList",{attrs:{projects:e.projects}})],1)},Y=[],Z=function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return t.projects?o("div",[o("v-row",{attrs:{dense:""}},t._l(t.projects,(function(e,n){return o("v-col",{key:n,attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var a=n.hover;return[o("v-card",[o("v-img",{staticClass:"white--text",attrs:{src:r("af28")("./"+e.src),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"350px"}},[o("v-expand-transition",[a?o("div",{staticClass:"px-10 subtitle-1 d-flex transition-fast-in-fast-out cyan lighten-1 darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"},on:{click:function(){return t.showProject(e)}}},[t._v(" "+t._s(e.preview)+" ")]):t._e()]),o("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),o("v-card-actions",[o("v-btn",{staticClass:"white--text",attrs:{color:"cyan darken-3"},on:{click:function(){return t.showProject(e)}}},[t._v(" Details ")]),o("v-spacer"),e.links.pages?o("v-btn",{attrs:{color:"cyan darken-3",text:"",href:e.links.pages}},[t._v(" Link ")]):t._e(),e.links.git?o("v-btn",{attrs:{color:"cyan darken-3",text:"",href:e.links.git}},[t._v(" Git ")]):t._e()],1)],1)]}}],null,!0)})],1)})),1),t.currentProject?o("ProjectModal",{attrs:{showModal:t.showModal,project:t.currentProject},on:{closeModal:function(){return e.showModal=!1}}}):t._e()],1):t._e()},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"1200"},on:{"click:outside":e.closeModal},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[n("v-card",[n("v-card-title",{staticClass:"headline cyan darken-3 white--text",attrs:{"primary-title":""}},[e._v(" "+e._s(e.project.title)+" "),n("v-spacer"),n("v-btn",{attrs:{icon:"",color:"white"},on:{click:e.closeModal}},[n("v-icon",[e._v("mdi-close")])],1)],1),e.project.gallery?n("v-carousel",{attrs:{cycle:"",height:"500","hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.project.gallery,(function(t,o){return n("v-carousel-item",{key:o,attrs:{src:r("af28")("./"+e.project.gallery_folder+"/"+t)}})})),1):e._e(),n("v-card-text",{staticClass:"mt-5"},[e._v(" "+e._s(e.project.description)+" ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),e.project.links.pages?n("v-btn",{attrs:{color:"cyan darken-3",text:"",href:e.project.links.pages}},[e._v(" Link ")]):e._e(),e.project.links.git?n("v-btn",{attrs:{color:"cyan darken-3",text:"",href:e.project.links.git}},[e._v(" Git ")]):e._e()],1)],1)],1)],1)},re=[],ne={props:["showModal","project"],methods:{closeModal:function(){this.$emit("closeModal")}}},oe=ne,ae=r("8336"),ie=r("b0af"),se=r("99d9"),ce=r("5e66"),pe=r("3e35"),le=r("169a"),ge=r("ce7e"),de=r("2fa4"),ue=Object(c["a"])(oe,te,re,!1,null,null,null),he=ue.exports;l()(ue,{VBtn:ae["a"],VCard:ie["a"],VCardActions:se["a"],VCardText:se["b"],VCardTitle:se["c"],VCarousel:ce["a"],VCarouselItem:pe["a"],VDialog:le["a"],VDivider:ge["a"],VIcon:O["a"],VSpacer:de["a"]});var fe={props:["projects"],data:function(){return{showModal:!1,currentProject:null}},components:{ProjectModal:he},methods:{closeProjectModal:function(){this.showModal=!1},showProject:function(e){this.currentProject=e,this.showModal=!0}}},_e=fe,je=(r("f92d"),r("62ad")),me=r("0789"),ve=r("ce87"),Se=r("adda"),be=r("0fd9"),xe=Object(c["a"])(_e,Z,ee,!1,null,"3a57196f",null),ke=xe.exports;l()(xe,{VBtn:ae["a"],VCard:ie["a"],VCardActions:se["a"],VCardTitle:se["c"],VCol:je["a"],VExpandTransition:me["a"],VHover:ve["a"],VImg:Se["a"],VRow:be["a"],VSpacer:de["a"]});var we={components:{ProjectsList:ke},data:function(){return{projects:[{title:"PerfectPC (in progress)",description:"Приложение планируется использовать, чтобы подбирать комплектующие для ПК, сравнивать цены. Пользователь может выбрать комплектующие, сохранить сборку, сравнить цены с другими сборками. Цены буду собираться парсером, и обновляться в определённый промежуток времени (например 1 раз в месяц).",preview:"Приложение для мониторинга цен комплектующих на ПК",gallery_folder:"perfect_pc",gallery:["perfect_pc.jpg","Screenshot_1.jpg"],links:{git:"https://github.com/Stratarion/perfect-pc",pages:"https://stratarion.github.io/perfect-pc/"},src:"perfect_pc.jpg"}]}}},ye=we,Me=Object(c["a"])(ye,Q,Y,!1,null,null,null),Ve=Me.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("JS")]),r("ProjectsList",{attrs:{projects:e.projects}})],1)},Ce=[],Te={components:{ProjectsList:ke},data:function(){return{projects:[{title:"Code and Magic",description:'Учебное задание. С курсов HTML Academy по JS. Данную игру наставники рассчитывали развивать в следующих курсах, но я на них не попал, поэтому она находится в таком, "недопиленном" виде',preview:"Учебное задание. С курсов HTML Academy по JS",gallery_folder:"codeAndMagic",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/codeAndMagic",pages:"https://stratarion.github.io/codeAndMagic/"},src:"codeAndMagic.jpg"},{title:"Keksobuking",description:"Учебное задание. С курсов HTML Academy по JS. Кексобукинг это приложение, позволяющее подобрать съемное жилище в Токио. Предложения запрашиваются с ресурса HTML Academy",preview:"Учебное задание. С курсов HTML Academy по JS",gallery_folder:"keksoBooking",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/keksoboocking",pages:"https://stratarion.github.io/keksoboocking/"},src:"keksoBooking.jpg"},{title:"OX-game",description:"Делал, когда самостоятельно изучал JS. В планах было сделать возможность кастомизации поля (резмеры) и условия победы. Все параметры на данный момент, задаются через конфиг, осталось только добавить возможность их менять через пользовательский интерфейс",preview:"Крестики нолики",gallery_folder:"oxgame",gallery:["Screenshot_1.jpg","Screenshot_2.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/OXgame",pages:"https://stratarion.github.io/OXgame/index.html"},src:"oxgame.jpg"}]}}},Pe=Te,Le=Object(c["a"])(Pe,Oe,Ce,!1,null,null,null),Ee=Le.exports,He=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("HTML")]),r("ProjectsList",{attrs:{projects:e.projects}})],1)},Ae=[],De={components:{ProjectsList:ke},data:function(){return{projects:[{title:"EW Real Estate",description:"Test task for OHDESIGN Studio. HTML + CSS  + Bootstrap, without design",preview:"Test task for OHDESIGN Studio. HTML + CSS  + Bootstrap, without design",gallery_folder:"ew_real_estate",gallery:["main_page.jpg","footer.jpg","serach.jpg","slider.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/testOHDESIGN",pages:"https://stratarion.github.io/testOHDESIGN/"},src:"ew_real_estate.png"},{title:"Credit center (landing)",description:"Order from the freelance exchange. He made an adaptive for mobile devices and widescreen monitors. Used only css",preview:"Made adaptive for mobile devices",gallery_folder:"credit_center_landing",gallery:["mainpage.jpg","calculator.jpg","feedback.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/lpnew",pages:"https://stratarion.github.io/lpnew"},src:"credit_center_landing.jpg"},{title:"pro_manager",description:"One more task abused on freelance. The customer needed to make up a series of landing pages. Website design provided by the customer. The layout is built in https://tilda.cc/",preview:"HTML + CSS",gallery_folder:"mlmlanding",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg","Screenshot_4.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/pro103_proManager",pages:"https://stratarion.github.io/pro103_proManager/"},src:"pro_manager.jpg"},{title:"Mlmlanding (landing)",description:"One more task abused on freelance. The customer needed to make up a series of landing pages. Website design provided by the customer. The layout is built in https://tilda.cc/",preview:"HTML + CSS",gallery_folder:"mlmlanding",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg","Screenshot_4.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/mlm_landing",pages:"https://stratarion.github.io/mlm_landing/"},src:"mlmlanding.jpg"},{title:"Antares",description:"First commerc work",preview:"HTML + CSS + Joomla",gallery_folder:"antares",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/antares_for_gihub",pages:"https://stratarion.github.io/antares_for_gihub/"},src:"antares.jpg"},{title:"VR Glass (landing)",description:"Training task, when I was just learning layout",preview:"HTML + CSS",gallery_folder:"vr-glass",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg","Screenshot_4.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/VR-glass",pages:"https://stratarion.github.io/VR-glass/"},src:"vr-glass.jpg"},{title:"Gipsolit (landing)",description:"Training task, when I was just learning layout",preview:"HTML + CSS",gallery_folder:"gipsolit",gallery:["Screenshot_1.jpg","Screenshot_2.jpg","Screenshot_3.jpg","Screenshot_4.jpg","Screenshot_5.jpg","Screenshot_6.jpg"],links:{git:"https://github.com/Stratarion/Stratarion.github.io/tree/master/gipsolit",pages:"https://stratarion.github.io/gipsolit/"},src:"gipsolit.jpg"}]}}},$e=De,Ie=Object(c["a"])($e,He,Ae,!1,null,null,null),Be=Ie.exports,Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Freeze")])},Ne=[],Ge={},Fe=Object(c["a"])(Ge,Je,Ne,!1,null,null,null),Re=Fe.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("OTHER")])},Ue=[],We={},Xe=Object(c["a"])(We,ze,Ue,!1,null,null,null),Ke=Xe.exports,qe=new z["a"]({mode:"history",base:"portfolio",routes:[{path:"/",name:"home",component:q},{path:"/html-projects",name:"htmlProjects",component:Be},{path:"/vue-projects",name:"vueProjects",component:Ve},{path:"/js-projects",name:"jsProjects",component:Ee},{path:"/other-page",name:"otherPage",component:Ke},{path:"/freeze-projects",name:"freezeProjects",component:Re}]});n["a"].config.productionTip=!1,n["a"].use(z["a"]),new n["a"]({vuetify:R,router:qe,render:function(e){return e(G)}}).$mount("#app")},"5e94":function(e,t,r){e.exports=r.p+"img/ew_real_estate.ebaa976e.png"},6515:function(e,t,r){e.exports=r.p+"img/Screenshot_4.1429504a.jpg"},6565:function(e,t,r){e.exports=r.p+"img/mainpage.d36e9d08.jpg"},"6a44":function(e,t,r){e.exports=r.p+"img/feedback.39e50002.jpg"},"6a58":function(e,t,r){e.exports=r.p+"img/Screenshot_2.06f8c478.jpg"},"825b":function(e,t,r){e.exports=r.p+"img/calculator.ed6608af.jpg"},"83f3":function(e,t,r){e.exports=r.p+"img/Screenshot_3.44709791.jpg"},"887e":function(e,t,r){e.exports=r.p+"img/Screenshot_1.897c9e48.jpg"},9855:function(e,t,r){e.exports=r.p+"img/Screenshot_1.64b0f137.jpg"},a38a:function(e,t,r){e.exports=r.p+"img/antares.d34c7a01.jpg"},a5bc:function(e,t,r){e.exports=r.p+"img/Screenshot_1.aad0e8a2.jpg"},a631:function(e,t,r){e.exports=r.p+"img/Screenshot_3.851cb308.jpg"},a8f5:function(e,t,r){e.exports=r.p+"img/codeAndMagic.f6334f92.jpg"},af28:function(e,t,r){var n={"./antares.jpg":"a38a","./antares/Screenshot_1.jpg":"d4a5","./antares/Screenshot_2.jpg":"381f","./antares/Screenshot_3.jpg":"177c","./codeAndMagic.jpg":"a8f5","./codeAndMagic/Screenshot_1.jpg":"3695","./codeAndMagic/Screenshot_2.jpg":"4eb9","./codeAndMagic/Screenshot_3.jpg":"b198","./credit_center_landing.jpg":"4998","./credit_center_landing/calculator.jpg":"825b","./credit_center_landing/feedback.jpg":"6a44","./credit_center_landing/mainpage.jpg":"6565","./ew_real_estate.png":"5e94","./ew_real_estate/footer.jpg":"c94b","./ew_real_estate/main_page.jpg":"d3e0","./ew_real_estate/serach.jpg":"5180","./ew_real_estate/slider.jpg":"c523","./gipsolit.jpg":"2256","./gipsolit/Screenshot_1.jpg":"a5bc","./gipsolit/Screenshot_2.jpg":"6a58","./gipsolit/Screenshot_3.jpg":"30f5","./gipsolit/Screenshot_4.jpg":"6515","./gipsolit/Screenshot_5.jpg":"f40a","./gipsolit/Screenshot_6.jpg":"e22f","./keksoBooking.jpg":"2cc6","./keksoBooking/Screenshot_1.jpg":"37a9","./keksoBooking/Screenshot_2.jpg":"b536","./keksoBooking/Screenshot_3.jpg":"a631","./mlmlanding.jpg":"e7dd","./mlmlanding/Screenshot_1.jpg":"9855","./mlmlanding/Screenshot_2.jpg":"d32a","./mlmlanding/Screenshot_3.jpg":"83f3","./mlmlanding/Screenshot_4.jpg":"0b6d","./oxgame.jpg":"2480","./oxgame/Screenshot_1.jpg":"dfc9","./oxgame/Screenshot_2.jpg":"c12b","./perfect_pc.jpg":"0813","./perfect_pc/Screenshot_1.jpg":"887e","./perfect_pc/perfect_pc.jpg":"c8f3","./pro_manager.jpg":"f596","./vr-glass.jpg":"3fed","./vr-glass/Screenshot_1.jpg":"b012","./vr-glass/Screenshot_2.jpg":"e8d5","./vr-glass/Screenshot_3.jpg":"c8dd","./vr-glass/Screenshot_4.jpg":"1ada"};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="af28"},b012:function(e,t,r){e.exports=r.p+"img/Screenshot_1.6ba5d1fe.jpg"},b198:function(e,t,r){e.exports=r.p+"img/Screenshot_3.9cad9472.jpg"},b536:function(e,t,r){e.exports=r.p+"img/Screenshot_2.01d6d719.jpg"},c12b:function(e,t,r){e.exports=r.p+"img/Screenshot_2.100f3021.jpg"},c523:function(e,t,r){e.exports=r.p+"img/slider.c804589f.jpg"},c8dd:function(e,t,r){e.exports=r.p+"img/Screenshot_3.d6512717.jpg"},c8f3:function(e,t,r){e.exports=r.p+"img/perfect_pc.c6cf1434.jpg"},c94b:function(e,t,r){e.exports=r.p+"img/footer.12526cfd.jpg"},d32a:function(e,t,r){e.exports=r.p+"img/Screenshot_2.3acd53c0.jpg"},d3e0:function(e,t,r){e.exports=r.p+"img/main_page.0bf2d088.jpg"},d4a5:function(e,t,r){e.exports=r.p+"img/Screenshot_1.f33d4eee.jpg"},dfc9:function(e,t,r){e.exports=r.p+"img/Screenshot_1.77aa1bb3.jpg"},e22f:function(e,t,r){e.exports=r.p+"img/Screenshot_6.afe9dda8.jpg"},e7dd:function(e,t,r){e.exports=r.p+"img/mlmlanding.cbb97d3e.jpg"},e8d5:function(e,t,r){e.exports=r.p+"img/Screenshot_2.1b8ee7b5.jpg"},f40a:function(e,t,r){e.exports=r.p+"img/Screenshot_5.665f2667.jpg"},f596:function(e,t,r){e.exports=r.p+"img/pro_manager.487a6be1.jpg"},f92d:function(e,t,r){"use strict";var n=r("3385"),o=r.n(n);o.a}});
//# sourceMappingURL=app.9823a70b.js.map