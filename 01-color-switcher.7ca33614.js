const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),l=document.querySelector("body"),d=document.createElement("div");l.append(d),d.append(e,t),d.style.display="flex",d.style.gap="20px",d.style.justifyContent="center",d.style.marginTop="200px",e.style.height="40px",e.style.width="100px",t.style.height="40px",t.style.width="100px";let a=null;t.disabled=!0;e.addEventListener("click",(()=>{a=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7ca33614.js.map
