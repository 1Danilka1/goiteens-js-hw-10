!function(){var t=0,e=document.querySelector("#value"),n=document.querySelector('[data-action="increment"]');document.querySelector('[data-action="decrement"]').addEventListener("click",(function(){t-=1,e.textContent=t})),n.addEventListener("click",(function(){t+=1,e.textContent=t}));var o=document.querySelector("#name-input"),c=document.querySelector("#name-output");o.addEventListener("input",(function(t){var e=t.currentTarget;""!==e.value.trim()?c.textContent=e.value.trim():c.textContent="Anonymous"}));var r=document.querySelector(".change-color"),u=document.querySelector(".color"),a=document.body;r.addEventListener("click",(function(){u.textContent=a.style.backgroundcolor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}))}();
//# sourceMappingURL=index.8b8aef27.js.map