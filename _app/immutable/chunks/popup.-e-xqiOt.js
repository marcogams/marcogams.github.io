import{w as K}from"./index.iPUsvQzU.js";import{g as P}from"./scheduler.MKC7XiNm.js";const X=K(void 0);function G(n,t){const{computePosition:E,autoUpdate:j,offset:h,shift:y,flip:b,arrow:L,size:$,autoPlacement:k,hide:x,inline:A}=P(X),r={open:!1,autoUpdateCleanup:()=>{}},m=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let f;const u="https://www.skeleton.dev/utilities/popups";let e,c;function U(){e=document.querySelector(`[data-popup="${t.target}"]`)??document.createElement("div"),c=e.querySelector(".arrow")??document.createElement("div")}U();function p(){var i,s,w,F,D,C,q,I;if(!e)throw new Error(`The data-popup="${t.target}" element was not found. ${u}`);if(!E)throw new Error(`Floating UI 'computePosition' not found for data-popup="${t.target}". ${u}`);if(!h)throw new Error(`Floating UI 'offset' not found for data-popup="${t.target}". ${u}`);if(!y)throw new Error(`Floating UI 'shift' not found for data-popup="${t.target}". ${u}`);if(!b)throw new Error(`Floating UI 'flip' not found for data-popup="${t.target}". ${u}`);if(!L)throw new Error(`Floating UI 'arrow' not found for data-popup="${t.target}". ${u}`);const o=[];$&&o.push($((i=t.middleware)==null?void 0:i.size)),k&&o.push(k((s=t.middleware)==null?void 0:s.autoPlacement)),x&&o.push(x((w=t.middleware)==null?void 0:w.hide)),A&&o.push(A((F=t.middleware)==null?void 0:F.inline)),E(n,e,{placement:t.placement??"bottom",middleware:[h(((D=t.middleware)==null?void 0:D.offset)??8),y(((C=t.middleware)==null?void 0:C.shift)??{padding:8}),b((q=t.middleware)==null?void 0:q.flip),L(((I=t.middleware)==null?void 0:I.arrow)??{element:c||null}),...o]}).then(({x:z,y:M,placement:O,middlewareData:W})=>{if(Object.assign(e.style,{left:`${z}px`,top:`${M}px`}),c){const{x:T,y:Q}=W.arrow,_={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];Object.assign(c.style,{left:T!=null?`${T}px`:"",top:Q!=null?`${Q}px`:"",right:"",bottom:"",[_]:"-4px"})}})}function l(){e&&(r.open=!0,t.state&&t.state({state:r.open}),p(),e.style.display="block",e.style.opacity="1",e.style.pointerEvents="auto",e.removeAttribute("inert"),r.autoUpdateCleanup=j(n,e,p),f=Array.from(e==null?void 0:e.querySelectorAll(m)))}function a(o){if(!e)return;const i=parseFloat(window.getComputedStyle(e).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{r.open=!1,t.state&&t.state({state:r.open}),e.style.opacity="0",e.setAttribute("inert",""),r.autoUpdateCleanup&&r.autoUpdateCleanup(),o&&o()},i)}function d(){r.open===!1?l():a()}function v(o){if(r.open===!1||n.contains(o.target))return;if(e&&e.contains(o.target)===!1){a();return}const i=t.closeQuery===void 0?"a[href], button":t.closeQuery;if(i==="")return;const s=e==null?void 0:e.querySelectorAll(i);s==null||s.forEach(w=>{w.contains(o.target)&&a()})}const S=o=>{if(r.open===!1)return;const i=o.key;if(i==="Escape"){o.preventDefault(),n.focus(),a();return}f=Array.from(e==null?void 0:e.querySelectorAll(m)),r.open&&document.activeElement===n&&(i==="ArrowDown"||i==="Tab")&&m.length>0&&f.length>0&&(o.preventDefault(),f[0].focus())};switch(t.event){case"click":n.addEventListener("click",d,!0),window.addEventListener("click",v,!0);break;case"hover":n.addEventListener("mouseover",l,!0),n.addEventListener("mouseleave",()=>a(),!0);break;case"focus-blur":n.addEventListener("focus",d,!0),n.addEventListener("blur",()=>a(),!0);break;case"focus-click":n.addEventListener("focus",l,!0),window.addEventListener("click",v,!0);break;default:throw new Error(`Event value of '${t.event}' is not supported. ${u}`)}return window.addEventListener("keydown",S,!0),p(),{update(o){a(()=>{t=o,p(),U()})},destroy(){n.removeEventListener("click",d,!0),n.removeEventListener("mouseover",l,!0),n.removeEventListener("mouseleave",()=>a(),!0),n.removeEventListener("focus",d,!0),n.removeEventListener("focus",l,!0),n.removeEventListener("blur",()=>a(),!0),window.removeEventListener("click",v,!0),window.removeEventListener("keydown",S,!0)}}}export{G as p,X as s};
