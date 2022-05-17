(()=>{"use strict";var e,n={923:(e,n,t)=>{var r=t(935),o=t(294),_=t(379),a=t.n(_),l=t(795),i=t.n(l),p=t(569),u=t.n(p),s=t(565),d=t.n(s),m=t(216),c=t.n(m),A=t(589),h=t.n(A),C=t(306),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=u().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=c(),a()(C.Z,f);const g=C.Z&&C.Z.locals?C.Z.locals:void 0;var b=t(893);function y(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,_=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(_.push(r.value),!n||_.length!==n);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return _}}(e,n)||v(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const w=function(){var e=x(o.useState([{entryPoint:"A",where:"West Entrance",className:g.westEnt,slots:[{slotType:0,name:"Small (SP)",list:[]},{slotType:1,name:"Medium (MP)",list:[]},{slotType:2,name:"Large (LP)",list:[]}]},{entryPoint:"B",where:"East Entrance",className:g.eastEnt,slots:[{slotType:0,name:"Small (SP)",list:[]},{slotType:1,name:"Medium (MP)",list:[]},{slotType:2,name:"Large (LP)",list:[]}]},{entryPoint:"C",where:"South Entrance",className:g.southEnt,slots:[{slotType:0,name:"Small (SP)",list:[]},{slotType:1,name:"Medium (MP)",list:[]},{slotType:2,name:"Large (LP)",list:[]}]}]),2),n=e[0],t=e[1],r=new Date,_=x(o.useState([{vehicleType:0,entryPoint:"",date:"".concat(r.getMonth()+1,"/").concat(r.getDate(),"/").concat(r.getFullYear()," ").concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds())}]),2),a=_[0],l=_[1],i=function(e,n){var t=y(a);t[e][n.currentTarget.name]=n.currentTarget.value,l(t)};return(0,b.jsxs)("section",{className:g.container,children:[(0,b.jsx)("div",{className:g.outterContainer,children:n.map((function(e,r){return(0,b.jsxs)("div",{className:e.className,children:[(0,b.jsx)("h2",{className:g.entryPoint,children:e.entryPoint}),(0,b.jsx)("p",{className:g.where,children:e.where}),e.slots.map((function(r,o){return(0,b.jsxs)("div",{className:g.innerContainer,children:[(0,b.jsxs)("p",{children:[(0,b.jsx)("span",{className:g.slotType,children:"Slot Type: "}),r.name]}),(0,b.jsx)("ul",{className:g.list,children:r.list.map((function(o,_){return(0,b.jsx)("li",{id:r.name,"data-value":o,"data-slottype":r.slotType,"data-name":e.entryPoint,onClick:function(){return function(e,r){for(var o=document.getElementById(e).getAttribute("data-value"),_=document.getElementById(e).getAttribute("data-slottype"),l=document.getElementById(e).getAttribute("data-name"),i=0;i<n.length;i++)if(n[i].entryPoint===l)for(var p=0;p<n[i].slots.length;p++)n[i].slots[p].slotType===Number(_)&&n[i].slots[p].list.includes(o)&&(n[i].slots[p].list.splice(r,1),t(y(n)));!function(e){var n=new Date,t=a[0].date,r=12===l?7:8,o=Number(n.getSeconds())<=9?4:5,_=12===l?1:2,l=0===Number(n.getHours())?12:Number(n.getHours()),i=Number(n.getMinutes());console.log("GetHourNow",l),console.log("getMinutesNow",i);var p=0===Number(t.substring(t.length-r).substring(0,_))?12:Number(t.substring(t.length-r).substring(0,_)),u=Number(t.substring(t.length-o).substring(0,_));console.log("startedHour",p),console.log("startedMinutes",u);var s=l-p,d=144e4,m=0,c=0;if(s<=180&&(m=40),0===Number(e)?(c=20,console.log(c)):1===Number(e)?(c=60,console.log(c)):2===Number(e)&&(c=100,console.log(c)),s>18e4&&(s-=18e4,m+=40),s>d){var A=parseInt(s/d);m+=5e3*A,s-=A*d}alert("Your bill is ".concat(m," pesos"))}(Number(_))}(r.name,_)},children:o},_)}))}),3===r.list.length&&(0,b.jsx)("p",{className:g.fullSlot,children:"Full!"})]},o)}))]},r)}))}),(0,b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();for(var r=0;r<n.length;r++)if(n[r].entryPoint===a[0].entryPoint)for(var o=0;o<n[r].slots.length;o++)n[r].slots[o].slotType===Number(a[0].vehicleType)&&(3!==n[r].slots[o].list.length?(n[r].slots[o].list.push(a[0].date),t(y(n))):alert("Parking space is full!"))}(e)},className:g.form,children:[a.map((function(e,n){return(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:"Vehicle Type - "}),(0,b.jsx)("label",{htmlFor:"small",children:" SP "}),(0,b.jsx)("input",{type:"radio",name:"vehicleType",id:"small",value:0,onChange:function(e){return i(n,e)},required:!0}),(0,b.jsx)("label",{htmlFor:"medium",children:" MP "}),(0,b.jsx)("input",{type:"radio",name:"vehicleType",id:"medium",value:1,onChange:function(e){return i(n,e)},required:!0}),(0,b.jsx)("label",{htmlFor:"large",children:" LP "}),(0,b.jsx)("input",{type:"radio",name:"vehicleType",id:"large",value:2,onChange:function(e){return i(n,e)},required:!0})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:"Entry point - "}),(0,b.jsx)("label",{htmlFor:"westEnt",children:"A "}),(0,b.jsx)("input",{type:"radio",name:"entryPoint",id:"westEnt",value:"A",onChange:function(e){return i(n,e)},required:!0}),(0,b.jsx)("label",{htmlFor:"eastEnt",children:" B "}),(0,b.jsx)("input",{type:"radio",name:"entryPoint",id:"eastEnt",value:"B",onChange:function(e){return i(n,e)},required:!0}),(0,b.jsx)("label",{htmlFor:"southEnt",children:" C "}),(0,b.jsx)("input",{type:"radio",name:"entryPoint",id:"southEnt",value:"C",onChange:function(e){return i(n,e)},required:!0})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"plateNumber",children:"Current Date & Time:"}),(0,b.jsx)("input",{type:"text",placeholder:"".concat(e.date),value:e.date,onChange:function(e){return i(n,e)},name:"date",className:"".concat(g.input," ").concat(g.date),disabled:!0})]})]},n)})),(0,b.jsxs)("div",{children:[(0,b.jsx)("button",{type:"submit",className:g.btnSubmit,children:"Park"}),(0,b.jsx)("button",{type:"reset",className:g.btnReset,onClick:function(){return l([{vehicleType:0,entryPoint:""}])},children:"Reset"})]})]})]})};var T=t(614),O={};O.styleTagTransform=h(),O.setAttributes=d(),O.insert=u().bind(null,"head"),O.domAPI=i(),O.insertStyleElement=c(),a()(T.Z,O),T.Z&&T.Z.locals&&T.Z.locals,r.render((0,b.jsx)(w,{}),document.getElementById("root"))},306:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(537),o=t.n(r),_=t(645),a=t.n(_)()(o());a.push([e.id,".app-module__container__Q_HO0{width:80%;max-width:900px;margin:1rem auto;display:flex;flex-direction:column;align-items:center;justify-content:center}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT{width:100%;display:flex;align-items:center;justify-content:space-between;padding:1rem}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4{border:1px solid #eee;padding:1rem}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__entryPoint__H3cuY,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__entryPoint__H3cuY,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__entryPoint__H3cuY{font-size:2rem;font-weight:600;color:var(--color-text);text-align:center}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__where__KOttR,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__where__KOttR,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__where__KOttR{text-align:center}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__innerContainer__klh3V,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__innerContainer__klh3V,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__innerContainer__klh3V{margin:1rem 0}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__innerContainer__klh3V .app-module__slotType__QbUtH,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__innerContainer__klh3V .app-module__availableSlot__R0x3V,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__innerContainer__klh3V .app-module__slotType__QbUtH,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__innerContainer__klh3V .app-module__availableSlot__R0x3V,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__innerContainer__klh3V .app-module__slotType__QbUtH,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__innerContainer__klh3V .app-module__availableSlot__R0x3V{color:var(--color-subtext)}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__innerContainer__klh3V .app-module__list__oZ_fP,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__innerContainer__klh3V .app-module__list__oZ_fP,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__innerContainer__klh3V .app-module__list__oZ_fP{margin-left:1.5rem;cursor:pointer}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__innerContainer__klh3V .app-module__list__oZ_fP>li:hover,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__innerContainer__klh3V .app-module__list__oZ_fP>li:hover,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__innerContainer__klh3V .app-module__list__oZ_fP>li:hover{color:var(--color-full)}.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__westEnt__hx1OV .app-module__innerContainer__klh3V .app-module__fullSlot__RZZmb,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__eastEnt__S5WAX .app-module__innerContainer__klh3V .app-module__fullSlot__RZZmb,.app-module__container__Q_HO0 .app-module__outterContainer__hcFeT .app-module__southEnt__Z7uQ4 .app-module__innerContainer__klh3V .app-module__fullSlot__RZZmb{font-size:1.5rem;font-weight:600;color:var(--color-full);text-align:center}.app-module__container__Q_HO0 .app-module__form__x4Ra0{padding:1rem;border:1px solid #eee}.app-module__container__Q_HO0 .app-module__form__x4Ra0 input{cursor:pointer}.app-module__container__Q_HO0 .app-module__form__x4Ra0 .app-module__input__Agnda{margin-left:.5rem;padding:.3rem .5rem}.app-module__container__Q_HO0 .app-module__form__x4Ra0 .app-module__input__Agnda.app-module__date__HdD2J{width:9rem;text-align:center;color:var(--color-white-text);pointer-events:none;background-color:rgba(0,0,0,0);border:none}.app-module__container__Q_HO0 .app-module__form__x4Ra0 .app-module__btnSubmit__MALW7,.app-module__container__Q_HO0 .app-module__form__x4Ra0 .app-module__btnReset__zr6F9{margin-top:1rem;padding:.3rem .5rem;border-radius:5px;border:none;cursor:pointer}.app-module__container__Q_HO0 .app-module__form__x4Ra0 .app-module__btnSubmit__MALW7{margin-right:1rem}","",{version:3,sources:["webpack://./src/styles/app.module.scss"],names:[],mappings:"AAAA,8BACE,SAAA,CACA,eAAA,CACA,gBAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CAEA,kEACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,YAAA,CAEA,2RAGE,qBAAA,CACA,YAAA,CAEA,wXACE,cAAA,CACA,eAAA,CACA,uBAAA,CACA,iBAAA,CAGF,yWACE,iBAAA,CAGF,oYACE,aAAA,CAEA,q8BAEE,0BAAA,CAGF,+cACE,kBAAA,CACA,cAAA,CAGE,0eACE,uBAAA,CAKN,2dACE,gBAAA,CACA,eAAA,CACA,uBAAA,CACA,iBAAA,CAMR,uDACE,YAAA,CACA,qBAAA,CAEA,6DACE,cAAA,CAGF,iFACE,iBAAA,CACA,mBAAA,CAGF,yGACE,UAAA,CACA,iBAAA,CACA,6BAAA,CACA,mBAAA,CACA,8BAAA,CACA,WAAA,CAGF,yKAEE,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,WAAA,CACA,cAAA,CAGF,qFACE,iBAAA",sourcesContent:[".container {\r\n  width: 80%;\r\n  max-width: 900px;\r\n  margin: 1rem auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  .outterContainer {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n\r\n    .westEnt,\r\n    .eastEnt,\r\n    .southEnt {\r\n      border: 1px solid #eee;\r\n      padding: 1rem;\r\n\r\n      .entryPoint {\r\n        font-size: 2rem;\r\n        font-weight: 600;\r\n        color: var(--color-text);\r\n        text-align: center;\r\n      }\r\n\r\n      .where {\r\n        text-align: center;\r\n      }\r\n\r\n      .innerContainer {\r\n        margin: 1rem 0;\r\n\r\n        .slotType,\r\n        .availableSlot {\r\n          color: var(--color-subtext);\r\n        }\r\n\r\n        .list {\r\n          margin-left: 1.5rem;\r\n          cursor: pointer;\r\n\r\n          > li {\r\n            &:hover {\r\n              color: var(--color-full);\r\n            }\r\n          }\r\n        }\r\n\r\n        .fullSlot {\r\n          font-size: 1.5rem;\r\n          font-weight: 600;\r\n          color: var(--color-full);\r\n          text-align: center;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .form {\r\n    padding: 1rem;\r\n    border: 1px solid #eee;\r\n\r\n    input {\r\n      cursor: pointer;\r\n    }\r\n\r\n    .input {\r\n      margin-left: 0.5rem;\r\n      padding: 0.3rem 0.5rem;\r\n    }\r\n\r\n    .input.date {\r\n      width: 9rem;\r\n      text-align: center;\r\n      color: var(--color-white-text);\r\n      pointer-events: none;\r\n      background-color: transparent;\r\n      border: none;\r\n    }\r\n\r\n    .btnSubmit,\r\n    .btnReset {\r\n      margin-top: 1rem;\r\n      padding: 0.3rem 0.5rem;\r\n      border-radius: 5px;\r\n      border: none;\r\n      cursor: pointer;\r\n    }\r\n\r\n    .btnSubmit {\r\n      margin-right: 1rem;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]),a.locals={container:"app-module__container__Q_HO0",outterContainer:"app-module__outterContainer__hcFeT",westEnt:"app-module__westEnt__hx1OV",eastEnt:"app-module__eastEnt__S5WAX",southEnt:"app-module__southEnt__Z7uQ4",entryPoint:"app-module__entryPoint__H3cuY",where:"app-module__where__KOttR",innerContainer:"app-module__innerContainer__klh3V",slotType:"app-module__slotType__QbUtH",availableSlot:"app-module__availableSlot__R0x3V",list:"app-module__list__oZ_fP",fullSlot:"app-module__fullSlot__RZZmb",form:"app-module__form__x4Ra0",input:"app-module__input__Agnda",date:"app-module__date__HdD2J",btnSubmit:"app-module__btnSubmit__MALW7",btnReset:"app-module__btnReset__zr6F9"};const l=a},614:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(537),o=t.n(r),_=t(645),a=t.n(_)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap);"]),a.push([e.id,':root{--color-bg: #040c18;--color-full: #ff4820;--color-white-text: #fff;--color-text: #81afdd;--color-subtext: #ff8a71}*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif}body{color:var(--color-white-text);background-color:var(--color-bg)}',"",{version:3,sources:["webpack://./src/styles/index.scss"],names:[],mappings:"AAEA,MACE,mBAAA,CACA,qBAAA,CACA,wBAAA,CACA,qBAAA,CACA,wBAAA,CAGF,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CACA,gCAAA,CAGF,KACE,6BAAA,CACA,gCAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");\r\n\r\n:root {\r\n  --color-bg: #040c18;\r\n  --color-full: #ff4820;\r\n  --color-white-text: #fff;\r\n  --color-text: #81afdd;\r\n  --color-subtext: #ff8a71;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Poppins", sans-serif;\r\n}\r\n\r\nbody {\r\n  color: var(--color-white-text);\r\n  background-color: var(--color-bg);\r\n}\r\n'],sourceRoot:""}]),a.locals={};const l=a}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var _=t[e]={id:e,exports:{}};return n[e](_,_.exports,r),_.exports}r.m=n,e=[],r.O=(n,t,o,_)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,_]=e[u],l=!0,i=0;i<t.length;i++)(!1&_||a>=_)&&Object.keys(r.O).every((e=>r.O[e](t[i])))?t.splice(i--,1):(l=!1,_<a&&(a=_));if(l){e.splice(u--,1);var p=o();void 0!==p&&(n=p)}}return n}_=_||0;for(var u=e.length;u>0&&e[u-1][2]>_;u--)e[u]=e[u-1];e[u]=[t,o,_]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,_,[a,l,i]=t,p=0;if(a.some((n=>0!==e[n]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(i)var u=i(r)}for(n&&n(t);p<a.length;p++)_=a[p],r.o(e,_)&&e[_]&&e[_][0](),e[_]=0;return r.O(u)},t=self.webpackChunkparking_slot_react=self.webpackChunkparking_slot_react||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),r.nc=void 0;var o=r.O(void 0,[910],(()=>r(923)));o=r.O(o)})();
//# sourceMappingURL=index.js.map