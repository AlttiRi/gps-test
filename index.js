import{d as m,r as b,o as u,c as d,a as c,F as y,b as O,e as f,t as _,f as A,p as h,g as v,h as I,i as N}from"./vendor.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const P=o=>(h("data-v-1507982e"),o=o(),v(),o),j={class:"main"},x={key:0,class:"coord"},L=P(()=>c("td",null,"timestamp",-1)),S=m({__name:"Main",setup(o){const s=b();async function i(){return new Promise((t,l)=>{navigator.geolocation.getCurrentPosition(r=>t(r),r=>l(r),{enableHighAccuracy:!0})})}function a(t){const l={};for(const r in t){if(n(t[r])){l[r]=a(t[r]);continue}l[r]=t[r]}return l}async function e(){s.value=await i()}e();function n(t){return typeof t=="object"&&!Array.isArray(t)&&t!==null}return(t,l)=>(u(),d("div",j,[c("button",{onClick:e},"Update Point"),s.value?(u(),d("table",x,[(u(!0),d(y,null,O(Object.entries(a(s.value.coords)).filter(([r,p])=>p),([r,p])=>(u(),d("tr",null,[c("td",null,_(r),1),f(": "),c("td",null,_(p),1)]))),256)),c("tr",null,[L,f(": "),c("td",null,_(s.value.timestamp),1)])])):A("",!0)]))}});const g=(o,s)=>{const i=o.__vccOpts||o;for(const[a,e]of s)i[a]=e;return i},w=g(S,[["__scopeId","data-v-1507982e"]]),C=o=>(h("data-v-2724c669"),o=o(),v(),o),M=C(()=>c("a",{class:"readme",title:"Open Readme",href:"https://github.com/AlttiRi/gps-test",target:"_blank"},[c("i",null,"i")],-1)),V=m({__name:"App",setup(o){return(s,i)=>(u(),d(y,null,[I(w),M],64))}});const k=g(V,[["__scopeId","data-v-2724c669"]]);N(k).mount("#app");
//# sourceMappingURL=index.js.map
