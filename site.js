
const esc=s=>String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm=s=>String(s||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();
async function articles(){return (await fetch("/articles/index.json",{cache:"no-store"})).json()}
function card(a){return `<a class="article-card" href="${esc(a.url)}"><img src="${esc(a.image)}" alt="${esc(a.title)}"><div><small>GUIDE</small><h2>${esc(a.title)}</h2><p>${esc(a.description)}</p><span class="more">View more →</span></div></a>`}
async function loadHomeArticles(){let e=document.getElementById("articles");try{let x=await articles();e.innerHTML=x.length?x.map(card).join(""):`<div class="empty">No guides published yet.</div>`}catch(_){e.innerHTML='<div class="empty">Guides could not be loaded.</div>'}}
function score(a,q){
 q=norm(q);let t=norm(a.title),b=norm(a.content),d=norm(a.description);
 if(t.includes(q))return 1000;                    // exact phrase anywhere in title
 let ws=q.split(" ").filter(Boolean);
 if(ws.length&&ws.every(w=>t.includes(w)))return 900;// title words
 if(t.slice(0,Math.max(30,q.length*3)).includes(q))return 800;// beginning
 let m=t.slice(Math.floor(t.length/3),Math.ceil(t.length*2/3));
 if(m.includes(q))return 700;                     // middle
 if(t.slice(Math.floor(t.length/2)).includes(q))return 600;// end
 if(b.includes(q))return 500;                      // full content
 if(d.includes(q)||ws.some(w=>b.includes(w)))return 300;
 return 0;
}
async function loadSearch(){let q=new URLSearchParams(location.search).get("q")||"",r=document.getElementById("results"),n=document.getElementById("note"),input=document.getElementById("headerQ");input.value=q;if(!q){n.textContent="Search article titles first, then full content.";return}try{let x=await articles();let y=x.map(a=>({...a,rank:score(a,q)})).filter(a=>a.rank).sort((a,b)=>b.rank-a.rank);n.textContent=`${y.length} result${y.length==1?"":"s"} for “${q}”`;r.innerHTML=y.length?y.map(a=>`<a class="search-result" href="${esc(a.url)}"><img src="${esc(a.image)}" alt=""><div><span class="score">${a.rank>=900?"TITLE MATCH":"CONTENT MATCH"}</span><h2>${esc(a.title)}</h2><p>${esc(a.description)}</p><span class="more">View more →</span></div></a>`).join(""):'<div class="empty">No matching guide found. Try a broader search.</div>'}catch(_){r.innerHTML='<div class="empty">Search is temporarily unavailable.</div>'}}
