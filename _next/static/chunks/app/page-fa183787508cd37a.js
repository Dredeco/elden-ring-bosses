(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4039:function(n,e,t){Promise.resolve().then(t.bind(t,139))},139:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return I},getBoss:function(){return E}});var i=t(9268);t(6394);var r=t(7533),o=t.n(r),s=t(6006);let c="https://eldenring.fanapis.com/api/bosses?limit=".concat(50);async function a(){let n=null;return await fetch(c).then(n=>n.json()).then(e=>n=e.data),n}var d=t(2805),l=t(5732);function u(){let n=(0,d._)(["\n    margin: 2rem 0;\n    font-size: 2rem;\n"]);return u=function(){return n},n}let f=l.ZP.header.withConfig({componentId:"sc-dd3cbd89-0"})(u());function m(){return(0,i.jsxs)(f,{children:[(0,i.jsx)("h1",{children:"Elden Ring"}),(0,i.jsx)("span",{children:"Bosses Wiki"})]})}var h=t(9590),p=t.n(h),g=t(5846),x=t.n(g);function b(){let n=(0,d._)(["\n    height: auto;\n"]);return b=function(){return n},n}function j(){let n=(0,d._)(["\n    margin: 1rem 2%;\n"]);return j=function(){return n},n}function w(){let n=(0,d._)(["\n    list-style: none;\n    padding: 0;\n    display: grid;\n    gap: .5rem;\n    grid-template-columns: 1fr;\n\n    @media screen and (min-width: 426px) {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    @media screen and (min-width: 769px) {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n"]);return w=function(){return n},n}function _(){let n=(0,d._)(["\n    background-color: #000;\n    padding: .5rem .5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n    border: 1px solid gold;\n    border-radius: 10px;\n\n    h3 {\n        margin: .5rem 0;\n    }\n    span {\n        margin: .5rem 0;\n    }\n    a {\n        text-decoration: none;\n        color: #fff;\n        background-color: goldenrod;\n        padding: .5rem 1rem;\n        border-radius: 10px;\n        border: 1px solid #555;\n        text-transform: uppercase;\n        font-weight: 700;\n    }\n"]);return _=function(){return n},n}let k=l.ZP.section.withConfig({componentId:"sc-d64bd86e-0"})(b()),v=l.ZP.div.withConfig({componentId:"sc-d64bd86e-1"})(j()),y=l.ZP.ul.withConfig({componentId:"sc-d64bd86e-2"})(w()),C=l.ZP.li.withConfig({componentId:"sc-d64bd86e-3"})(_());function P(n){let e=n.BossesData;return(0,i.jsx)(k,{children:(0,i.jsx)(v,{children:(0,i.jsx)(y,{children:e.map(n=>{if(null!=n.image)return(0,i.jsxs)(C,{children:[(0,i.jsx)(p(),{src:"".concat(n.image),width:300,height:120,objectFit:"cover",objectPosition:"center"}),(0,i.jsx)("h3",{children:n.name}),(0,i.jsx)("h4",{children:"Location"}),(0,i.jsx)("span",{children:n.location}),(0,i.jsx)(x(),{href:"./boss/".concat(n.id),children:"Mais detalhes"})]},n.id)})})})})}let E=async()=>{let n=await fetch("https://eldenring.fanapis.com/api/bosses/17f695abef9l0i1ujzrup5y0z7rw6"),e=await n.json();console.log(e)};function I(){let[n,e]=(0,s.useState)([]);return(0,s.useEffect)(()=>{a().then(n=>e(n))},[]),(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsx)(m,{}),(0,i.jsx)(P,{BossesData:n})]})}E()},7533:function(n){n.exports={main:"page_main__ibFHK"}}},function(n){n.O(0,[449,271,253,667,488,744],function(){return n(n.s=4039)}),_N_E=n.O()}]);