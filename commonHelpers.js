import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as r}from"./assets/vendor-2b44ac2e.js";let a=0;const m=Date.now(),f=document.querySelector("button[data-start]");f.addEventListener("click",v);const s=document.querySelector("#datetime-picker");s.addEventListener("click",S);const h=document.querySelector(".value[data-days]"),y=document.querySelector(".value[data-hours]"),T=document.querySelector(".value[data-minutes]"),k=document.querySelector(".value[data-seconds]");function S(){r()}const M=s,p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<m?window.alert("Please choose a date in the future"):a=e[0]}};r(M,p);function v(){console.log(a);const e=a;setInterval(()=>{const t=Date.now(),o=e-t,n=q(o);w(n)},1e3)}function q(e){const u=Math.floor(e/864e5),d=c(Math.floor(e%864e5/36e5)),i=c(Math.floor(e%864e5%36e5/6e4)),l=c(Math.floor(e%864e5%36e5%6e4/1e3));return{days:u,hours:d,minutes:i,seconds:l}}function c(e){return String(e).padStart(2,"0")}function w({days:e,hours:t,minutes:o,seconds:n}){h.innerHTML=`${e}`,y.innerHTML=`${t}`,T.innerHTML=`${o}`,k.innerHTML=`${n}`}
//# sourceMappingURL=commonHelpers.js.map
