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
const TZ_BOUNDS={
  "Arabic B HL":{"TZ0":[0,20,41,55,67,76,87]},
  "Arabic B SL":{"TZ0":[0,14,29,44,58,71,88]},
  "Biology HL":{"TZ1":[0,13,25,36,49,62,76],"TZ2":[0,14,25,36,49,62,74],"TZ3":[0,13,23,36,49,63,76]},
  "Biology SL":{"TZ1":[0,13,26,39,52,64,77],"TZ2":[0,13,24,36,48,60,72],"TZ3":[0,11,21,33,46,59,72]},
  "Business Management HL":{"TZ1":[0,12,24,36,48,61,73],"TZ2":[0,14,28,41,52,63,75],"TZ3":[0,12,23,35,47,58,70]},
  "Business Management SL":{"TZ1":[0,13,26,36,48,63,75],"TZ2":[0,16,31,43,55,68,80],"TZ3":[0,14,27,38,50,62,74]},
  "Chemistry HL":{"TZ1":[0,15,26,40,51,63,74],"TZ2":[0,14,25,39,50,62,74],"TZ3":[0,16,28,42,54,64,75]},
  "Chemistry SL":{"TZ1":[0,16,28,38,49,60,71],"TZ2":[0,16,28,38,49,61,72],"TZ3":[0,14,24,36,47,58,70]},
  "Computer Science HL":{"TZ2":[0,15,31,43,53,64,74],"TZ3":[0,17,34,46,55,65,74]},
  "Computer Science SL":{"TZ2":[0,14,29,44,54,64,74],"TZ3":[0,14,29,43,52,62,71]},
  "Design Technology HL":{"TZ1":[0,14,27,37,47,57,69],"TZ2":[0,14,26,36,47,57,69]},
  "Design Technology SL":{"TZ1":[0,17,30,40,50,60,71],"TZ2":[0,17,29,38,51,60,71]},
  "Digital Society HL":{"TZ2":[0,16,32,44,54,63,73],"TZ3":[0,16,32,44,54,63,73]},
  "Digital Society SL":{"TZ2":[0,14,29,41,53,62,74],"TZ3":[0,14,29,41,53,62,74]},
  "ESS SL":{"TZ1":[0,11,22,34,45,56,67],"TZ2":[0,12,23,35,45,56,66],"TZ3":[0,12,23,36,46,57,67]},
  "Economics HL":{"TZ1":[0,15,29,41,53,65,77],"TZ2":[0,15,29,39,51,64,77],"TZ3":[0,14,28,40,52,65,77]},
  "Economics SL":{"TZ1":[0,13,27,40,52,64,76],"TZ2":[0,13,26,37,50,63,76],"TZ3":[0,12,26,40,52,65,77]},
  "English A: Lang & Lit HL":{"TZ1":[0,13,25,38,52,65,78],"TZ2":[0,12,25,41,53,66,79],"TZ3":[0,13,26,40,53,65,78]},
  "English A: Lang & Lit SL":{"TZ1":[0,11,22,34,49,63,78],"TZ2":[0,11,25,38,53,65,78],"TZ3":[0,11,23,36,51,63,78]},
  "English A: Literature HL":{"TZ1":[0,14,27,37,50,62,76],"TZ2":[0,15,29,40,54,66,80],"TZ3":[0,14,28,39,53,64,78]},
  "English A: Literature SL":{"TZ1":[0,13,25,35,49,60,73],"TZ2":[0,13,26,38,51,65,78],"TZ3":[0,10,21,34,47,61,74]},
  "English B HL":{"TZ1":[0,13,28,46,60,76,91],"TZ2":[0,11,24,41,57,73,89],"TZ3":[0,13,25,42,59,74,91]},
  "English B SL":{"TZ1":[0,12,25,39,54,71,86],"TZ2":[0,11,24,39,55,71,87],"TZ3":[0,11,22,37,54,71,88]},
  "Film HL":{"TZ0":[0,15,30,42,56,70,84]},
  "Film SL":{"TZ0":[0,14,27,41,56,69,83]},
  "French AB SL":{"TZ1":[0,9,20,38,52,65,78],"TZ2":[0,11,24,42,55,68,81],"TZ3":[0,10,22,38,52,65,79]},
  "French B HL":{"TZ1":[0,15,30,46,59,72,85],"TZ2":[0,15,29,46,59,71,83],"TZ3":[0,15,29,46,59,70,83]},
  "French B SL":{"TZ1":[0,10,23,36,51,68,82],"TZ2":[0,10,21,35,50,66,80],"TZ3":[0,10,21,34,49,67,82]},
  "Geography HL":{"TZ1":[0,14,30,43,53,64,75],"TZ2":[0,14,30,44,54,65,75],"TZ3":[0,14,29,43,53,64,75]},
  "Geography SL":{"TZ1":[0,13,28,42,53,66,78],"TZ2":[0,13,27,42,53,66,78],"TZ3":[0,12,26,40,52,65,77]},
  "German AB SL":{"TZ2":[0,12,25,43,58,72,87],"TZ3":[0,12,26,42,57,71,87]},
  "German B HL":{"TZ2":[0,12,24,41,57,72,88],"TZ3":[0,11,21,38,54,71,87]},
  "German B SL":{"TZ2":[0,11,22,35,50,67,82],"TZ3":[0,10,19,32,48,64,79]},
  "Global Politics HL":{"TZ1":[0,11,24,36,48,59,71],"TZ2":[0,11,22,34,47,58,71],"TZ3":[0,12,24,37,48,59,70]},
  "Global Politics SL":{"TZ1":[0,11,24,35,44,55,65],"TZ2":[0,10,21,33,43,54,64],"TZ3":[0,12,26,37,46,57,65]},
  "History HL":{"TZ1":[0,11,24,35,48,60,73],"TZ2":[0,11,25,36,49,61,74],"TZ3":[0,12,26,37,49,61,74]},
  "History SL":{"TZ1":[0,11,25,35,49,63,77],"TZ2":[0,11,25,35,49,63,77],"TZ3":[0,13,27,37,50,63,77]},
  "Italian B HL":{"TZ2":[0,11,22,40,56,70,86],"TZ3":[0,11,21,38,54,67,83]},
  "Italian B SL":{"TZ2":[0,8,19,35,51,68,85],"TZ3":[0,9,21,37,52,68,83]},
  "Japanese B HL":{"TZ0":[0,15,29,43,56,68,82]},
  "Japanese B SL":{"TZ1":[0,11,23,37,52,67,83],"TZ2":[0,10,21,33,49,67,83]},
  "Mandarin AB SL":{"TZ1":[0,8,17,32,46,59,74],"TZ2":[0,8,17,32,47,59,73],"TZ3":[0,8,17,31,47,60,75]},
  "Marine Science SL":{"TZ0":[0,14,28,39,48,58,66]},
  "Music HL":{"TZ0":[0,11,22,39,53,67,81]},
  "Music SL":{"TZ0":[0,11,21,39,52,65,78]},
  "Philosophy HL":{"TZ2":[0,15,29,42,54,66,77],"TZ3":[0,15,31,43,55,68,80]},
  "Philosophy SL":{"TZ2":[0,14,28,44,56,67,79],"TZ3":[0,15,30,42,54,67,79]},
  "Physics HL":{"TZ1":[0,13,24,35,45,56,67],"TZ2":[0,14,25,36,46,58,68],"TZ3":[0,14,23,34,46,59,71]},
  "Physics SL":{"TZ1":[0,12,20,32,42,53,63],"TZ2":[0,11,19,30,40,51,61],"TZ3":[0,13,22,35,46,56,67]},
  "Psychology HL":{"TZ1":[0,10,22,34,47,60,73],"TZ2":[0,10,22,33,47,60,73],"TZ3":[0,10,21,34,48,61,74]},
  "Psychology SL":{"TZ1":[0,12,25,36,49,60,73],"TZ2":[0,11,23,36,49,60,73],"TZ3":[0,12,24,36,49,60,73]},
  "Spanish AB SL":{"TZ1":[0,10,20,36,50,66,80],"TZ2":[0,9,20,34,48,64,78],"TZ3":[0,10,20,35,50,66,81]},
  "Spanish B HL":{"TZ1":[0,13,26,39,54,70,88],"TZ2":[0,12,25,37,53,69,84],"TZ3":[0,13,26,39,55,70,85]},
  "Spanish B SL":{"TZ1":[0,9,20,34,49,66,81],"TZ2":[0,9,18,33,49,68,83],"TZ3":[0,9,18,33,49,67,83]},
  "Sports Exercise Science HL":{"TZ1":[0,13,21,33,45,57,69],"TZ2":[0,13,21,33,43,56,68],"TZ3":[0,14,24,35,46,59,71]},
  "Sports Exercise Science SL":{"TZ1":[0,13,25,37,48,60,71],"TZ2":[0,14,26,38,48,60,72],"TZ3":[0,13,23,34,46,59,71]},
  "Theatre HL":{"TZ0":[0,10,21,37,52,69,84]},
  "Theatre SL":{"TZ0":[0,10,20,36,52,70,86]},
  "Visual Arts HL":{"TZ0":[0,11,22,39,53,67,81]},
  "Visual Arts SL":{"TZ0":[0,11,22,34,51,65,81]},
  "World Religions SL":{"TZ0":[0,12,25,41,53,67,80]}
};
const ALL_SUBJECTS=Object.keys(BOUNDS);
const W=[.10,.20,.20,.35,.15];

function catOf(n){for(const[k,v]of Object.entries(CATS))if(v.c.includes(n))return v.i;return 0;}
function colOf(n){return CC[catOf(n)];}
function getGrade(pct,b){for(let i=6;i>=0;i--)if(pct>=b[i])return i+1;return 1;}
function calcW(s){let p=0,w=0;['sa1','sa2','sa3','sa4'].forEach((k,i)=>{if(s[k]!=null&&s[k]!=''){p+=parseFloat(s[k])*W[i];w+=W[i];}});if(s.ia!=null&&s.ia!=''){p+=(parseFloat(s.ia)/20)*100*W[4];w+=W[4];}return w===0?0:p/w;}

function getBounds(name, tz){
  if (tz && TZ_BOUNDS[name] && TZ_BOUNDS[name][tz]) return TZ_BOUNDS[name][tz];
  return BOUNDS[name];
}
function hasTZ(name){ return !!TZ_BOUNDS[name]; }
function availableTZ(name){ return TZ_BOUNDS[name] ? Object.keys(TZ_BOUNDS[name]) : []; }

/* Programme metadata */
const PROGRAMMES = {
  DP: {
    code: 'DP',
    label: 'Diploma Programme',
    minSubjects: 6, maxSubjects: 6,
    hasCore: true,  /* TOK + EE */
    maxSubjectPoints: 42, maxCorePoints: 3, maxTotal: 45,
    passingScore: 24,
    desc: 'Six subjects, three at HL, plus TOK and the Extended Essay.'
  },
  CP: {
    code: 'CP',
    label: 'Career-related Programme',
    minSubjects: 2, maxSubjects: 4,
    hasCore: false,  /* CP core graded separately with letter: A-E Reflective Project */
    hasReflective: true,
    maxSubjectPoints: 28, maxCorePoints: 0, maxTotal: 28,
    passingScore: 0,  /* CP passing is subject-specific, not a simple score */
    desc: 'Two to four DP subjects plus the Reflective Project and career-related study.'
  }
};

/* Reflective Project letter grade -> approx points equivalence (A=7, B=6, C=5, D=3, E=1) */
function rpGradePoints(g){ return {A:7,B:6,C:5,D:3,E:1}[g] || 0; }

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
    {href:'calculator.html',label:'Calculator'},
    {href:'priorities.html',label:'Priorities'},
    {href:'converter.html',label:'Converter'},
    {href:'boundaries.html',label:'Boundaries'},
  ];
  const links=pages.map(p=>`<a href="${p.href}" class="nav-link hide-mobile${activePage===p.href?' active':''}">${p.label}</a>`).join('');
  const toggle=`<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
    <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
    <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  </button>`;
  const stars=`<div class="bg-stars"><div class="star star-1"></div><div class="star star-2"></div><div class="star star-3"></div><div class="star star-4"></div><div class="star star-5"></div></div>`;
  return stars+`<nav><div class="nav-inner">`+
    `<a href="index.html" class="nav-brand" role="button"><span class="nav-mark">i.</span><span class="nav-brand-text">instrument<em>.</em></span></a>`+
    `<div class="nav-right">${links}${toggle}</div></div></nav>`;
}

function toggleTheme(){
  const html=document.documentElement;
  const cur=html.getAttribute('data-theme')||'dark';
  const next=cur==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  try{localStorage.setItem('theme',next);}catch(e){}
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',next==='dark'?'#1c1915':'#f4efe4');
}

/* Load saved theme on page load */
(function(){try{const s=localStorage.getItem('theme');if(s==='light'||s==='dark')document.documentElement.setAttribute('data-theme',s);else document.documentElement.setAttribute('data-theme','dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();

function buildFooter(){
  return`<footer><div class="foot-inner">`+
    `<div class="foot-tag">A <em>quiet</em> toolkit &middot; MMXXVI</div>`+
    `<div class="foot-links">`+
      `<a href="calculator.html" class="foot-pill">Calculator</a>`+
      `<a href="priorities.html" class="foot-pill">Priorities</a>`+
      `<a href="converter.html" class="foot-pill">Converter</a>`+
      `<a href="boundaries.html" class="foot-pill">Boundaries</a>`+
      `<a href="help.html" class="foot-pill">Help</a>`+
      `<a href="socials.html" class="foot-pill">Socials</a>`+
      `<a href="privacy.html" class="foot-pill">Privacy</a>`+
      `<a href="terms.html" class="foot-pill">Terms</a>`+
    `</div>`+
    `</div></footer>`;
}
