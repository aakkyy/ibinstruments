/* shared.js  -  data and utilities used across all pages */
const CATS={Math:{i:0,c:["Math AA HL","Math AA SL","Math AI HL","Math AI SL"]},Science:{i:1,c:["Physics HL","Physics SL","Chemistry HL","Chemistry SL","Biology HL","Biology SL","ESS SL","Marine Science SL","Sports Exercise Science HL","Sports Exercise Science SL"]},Individuals:{i:2,c:["Business Management HL","Business Management SL","Economics HL","Economics SL","History HL","History SL","Geography HL","Geography SL","Psychology HL","Psychology SL","Global Politics HL","Global Politics SL","Philosophy HL","Philosophy SL","World Religions SL"]},Technology:{i:3,c:["Design Technology HL","Design Technology SL","Digital Society HL","Digital Society SL","Computer Science HL","Computer Science SL"]},Language:{i:4,c:["English A: Lang & Lit SL","English A: Lang & Lit HL","English A: Literature SL","English A: Literature HL","Spanish AB SL","Spanish B SL","Spanish B HL","French AB SL","French B SL","French B HL","German AB SL","German B SL","German B HL","Japanese B HL","Japanese B SL","Italian B HL","Italian B SL","Arabic B HL","Arabic B SL","Mandarin AB SL"]},Arts:{i:5,c:["Visual Arts HL","Visual Arts SL","Film HL","Film SL","Theatre HL","Theatre SL","Music HL","Music SL"]}};
const CAT_NAMES=["Math","Science","Individuals","Technology","Language","Arts"];
const CC=[
  {bg:"rgba(167,139,250,0.14)",bo:"rgba(167,139,250,0.38)",tx:"#c4b5fd",fi:"rgba(167,139,250,0.55)"},
  {bg:"rgba(52,211,153,0.11)",bo:"rgba(52,211,153,0.32)",tx:"#6ee7b7",fi:"rgba(52,211,153,0.45)"},
  {bg:"rgba(251,191,36,0.11)",bo:"rgba(251,191,36,0.32)",tx:"#fcd34d",fi:"rgba(251,191,36,0.45)"},
  {bg:"rgba(96,165,250,0.11)",bo:"rgba(96,165,250,0.32)",tx:"#93c5fd",fi:"rgba(96,165,250,0.45)"},
  {bg:"rgba(244,114,182,0.11)",bo:"rgba(244,114,182,0.32)",tx:"#f9a8d4",fi:"rgba(244,114,182,0.45)"},
  {bg:"rgba(251,146,60,0.11)",bo:"rgba(251,146,60,0.32)",tx:"#fdba74",fi:"rgba(251,146,60,0.45)"},
];
const BOUNDS={"Math AA HL":[0,12,24,34,48,60,73],"Math AA SL":[0,15,30,42,56,67,79],"Math AI HL":[0,14,28,41,54,66,78],"Math AI SL":[0,15,31,44,56,67,78],"Physics HL":[0,13,24,35,45,56,67],"Physics SL":[0,12,20,32,42,53,63],"Chemistry HL":[0,15,26,40,51,63,74],"Chemistry SL":[0,16,28,38,49,60,71],"Biology HL":[0,13,25,36,49,62,76],"Biology SL":[0,13,23,32,41,53,63],"ESS SL":[0,11,22,34,45,56,67],"Marine Science SL":[0,14,28,39,48,58,66],"Sports Exercise Science HL":[0,13,21,33,45,57,69],"Sports Exercise Science SL":[0,13,25,37,48,60,71],"Business Management HL":[0,12,24,36,48,61,73],"Business Management SL":[0,13,26,36,48,63,75],"Economics HL":[0,14,28,42,55,68,80],"Economics SL":[0,15,30,45,58,71,82],"History HL":[0,13,27,40,53,65,77],"History SL":[0,13,27,40,53,65,77],"Geography HL":[0,13,26,38,49,60,71],"Geography SL":[0,13,25,37,48,60,71],"Psychology HL":[0,13,27,40,53,66,78],"Psychology SL":[0,13,26,38,51,64,77],"Global Politics HL":[0,11,24,36,48,59,71],"Global Politics SL":[0,11,24,35,44,55,65],"Philosophy HL":[0,15,29,42,54,66,77],"Philosophy SL":[0,14,28,44,56,67,79],"World Religions SL":[0,12,25,41,53,67,80],"Design Technology HL":[0,14,27,37,47,57,69],"Design Technology SL":[0,17,30,40,50,60,71],"Digital Society HL":[0,16,32,44,54,63,73],"Digital Society SL":[0,14,29,41,53,62,74],"Computer Science HL":[0,15,29,42,55,67,79],"Computer Science SL":[0,16,30,42,54,66,77],"English A: Lang & Lit SL":[0,11,22,34,49,63,78],"English A: Lang & Lit HL":[0,12,24,37,52,66,80],"English A: Literature SL":[0,11,22,35,49,63,77],"English A: Literature HL":[0,13,26,39,53,66,80],"Spanish AB SL":[0,10,20,36,50,66,80],"Spanish B SL":[0,12,24,36,48,61,73],"Spanish B HL":[0,12,24,38,51,63,76],"French AB SL":[0,9,20,38,52,65,78],"French B SL":[0,12,24,36,48,61,73],"French B HL":[0,12,24,38,51,63,76],"German AB SL":[0,10,20,36,50,66,80],"German B SL":[0,11,22,35,50,67,82],"German B HL":[0,12,24,41,57,72,88],"Japanese B HL":[0,15,29,43,56,68,82],"Japanese B SL":[0,11,23,37,52,67,83],"Italian B HL":[0,11,22,40,56,70,86],"Italian B SL":[0,11,23,37,51,65,79],"Arabic B HL":[0,20,41,55,67,76,87],"Arabic B SL":[0,11,23,37,51,65,79],"Mandarin AB SL":[0,10,20,36,50,66,80],"Visual Arts HL":[0,13,26,38,52,65,78],"Visual Arts SL":[0,12,24,36,50,63,76],"Film HL":[0,15,30,42,56,70,84],"Film SL":[0,14,27,41,56,69,83],"Theatre HL":[0,10,21,37,52,69,84],"Theatre SL":[0,10,20,36,52,70,86],"Music HL":[0,11,22,39,53,67,81],"Music SL":[0,11,21,39,52,65,78]};
const ALL_SUBJECTS=Object.keys(BOUNDS);
const W=[.10,.20,.20,.35,.15];

function catOf(n){for(const[k,v]of Object.entries(CATS))if(v.c.includes(n))return v.i;return 0;}
function colOf(n){return CC[catOf(n)];}
function getGrade(pct,b){for(let i=6;i>=0;i--)if(pct>=b[i])return i+1;return 1;}
function calcW(s){let p=0,w=0;['sa1','sa2','sa3','sa4'].forEach((k,i)=>{if(s[k]!=null&&s[k]!=''){p+=parseFloat(s[k])*W[i];w+=W[i];}});if(s.ia!=null&&s.ia!=''){p+=(parseFloat(s.ia)/20)*100*W[4];w+=W[4];}return w===0?0:p/w;}
function tokPts(t,e){const m={A:1,B:2,C:3,D:4,E:5};const tv=m[t]||3,ev=m[e]||3;if(tv<=1&&ev<=1)return 3;if((tv<=1&&ev<=2)||(tv<=2&&ev<=1))return 3;if((tv<=1&&ev<=3)||(tv<=3&&ev<=1))return 2;if(tv<=2&&ev<=2)return 2;if((tv<=2&&ev<=3)||(tv<=3&&ev<=2))return 1;if(tv<=3&&ev<=3)return 1;return 0;}
function clamp(v,mn,mx){const n=parseFloat(v);return isNaN(n)?'':`${Math.min(mx,Math.max(mn,n))}`;}

/* Revision priority: given current weighted score and grade boundaries,
   calculate how many IB total points you gain per 10% improvement in SA4 */
function calcPriority(sub){
  if(!sub.name||!BOUNDS[sub.name])return null;
  const b=BOUNDS[sub.name];
  const curPct=calcW(sub);
  const curG=getGrade(curPct,b);

  /* Simulate +10% on SA4 (biggest remaining lever) */
  const sa4Boost=Math.min(100,parseFloat(sub.sa4||0)+10);
  const boosted={...sub,sa4:sa4Boost.toString()};
  const newPct=calcW(boosted);
  const newG=getGrade(newPct,b);
  const gradeGain=newG-curG;

  /* Points to next grade */
  const nextGBound=curG<7?b[curG]:null;
  const ptsToNext=nextGBound!==null?Math.max(0,nextGBound-curPct):0;

  /* Effort score = grade gain / effort (how far is 100% SA4 from current SA4) */
  const sa4Current=parseFloat(sub.sa4||0);
  const headroom=Math.max(1,100-sa4Current);
  const efficiency=(gradeGain/headroom)*100;

  return{name:sub.name,curG,newG,gradeGain,ptsToNext:parseFloat(ptsToNext.toFixed(1)),efficiency:parseFloat(efficiency.toFixed(2)),curPct:parseFloat(curPct.toFixed(1))};
}

/* Nav HTML  -  injected by each page */
function buildNav(activePage){
  const pages=[
    {href:'index.html',label:'Calculator',icon:'<path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>'},
    {href:'priorities.html',label:'Revision Priority',icon:'<path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2h-2a2 2 0 0 0-2-2z"/>',badge:'New'},
    {href:'converter.html',label:'Grade Converter',icon:'<path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>'},
  ];
  const links=pages.map(p=>`<a href="${p.href}" class="nav-link${activePage===p.href?' active':''}">`+
    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${p.icon}</svg>`+
    `<span>${p.label}</span>`+(p.badge?`<span class="nav-badge">${p.badge}</span>`:'')+
    `</a>`).join('');
  return`<nav><div class="nav-inner">`+
    `<a href="index.html" class="nav-logo"><div class="nav-logo-icon">IB</div><div class="nav-logo-name">IBDP Tools</div></a>`+
    `<div class="nav-links">${links}</div></div></nav>`;
}

function buildFooter(){
  return`<footer><div class="foot-inner">`+
    `<div class="foot-left">Made with <span class="heart">&#9829;</span> by Akshaj Velpula</div>`+
    `<div class="foot-right">`+
    `<a class="foot-link" href="https://instagram.com/akshajvelpula" target="_blank" rel="noopener"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>@akshajvelpula</a>`+
    `<a class="foot-link" href="mailto:akshajvelpula@gmail.com" target="_blank" rel="noopener"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>akshajvelpula@gmail.com</a>`+
    `</div></div></footer>`;
}
