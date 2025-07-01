import{S as u,i as n,a as d}from"./assets/vendor-D8_O3--j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51088577-7b521529318281431558696f8",l=document.getElementById("form"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",async i=>{i.preventDefault(),c.innerHTML="";const r=i.target.elements.search.value;if(r===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}m.style.display="block";try{const{data:o}=await d.get("https://pixabay.com/api",{params:{key:f,q:r,image_type:"photo"}});if(m.style.display="none",o.hits.length===0){n.info({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=o.hits.map(e=>`<li class="gallery-item">
                <a href="${e.largeImageURL}">
                  <img src="${e.webformatURL}" width='360' height='200' alt="${e.tags}">
                </a>
                
                <ul>
                    <li><b>Likes</b> ${e.likes}</li>
                    <li><b>Views</b> ${e.views}</li>
                    <li><b>Comments</b> ${e.comments}</li>
                    <li><b>Downloads</b> ${e.downloads}</li>
                </ul>
                
                
            </li>`).join("");c.insertAdjacentHTML("beforeend",s),p.refresh()}catch(o){n.error({title:"Error",message:o.message,position:"topRight"})}l.reset()});
//# sourceMappingURL=index.js.map
