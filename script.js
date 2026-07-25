/* ============ CONTENT DATA ============ */
const SECTIONS = [
  {
    id:'about', label:'About Me',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="3" width="20" height="13"/><rect x="9" y="18" width="6" height="2" fill="#0b0414"/><rect x="6" y="20" width="12" height="2"/><rect x="5" y="5" width="14" height="9" fill="#0b0414"/></svg>`,
    body:`
      <h3>ABOUT_ME.TXT</h3>
      <p>Hey — I'm Ziad El-Habashy. I'm a computer science junior at Misr International University in Cairo, currently working as an Odoo Developer Intern at FlexCode Systems and a Shopify Developer at KRAFT Sportswear.</p>
      <p>I've got hands-on experience in Odoo ERP development and module customization (Python, XML, PostgreSQL), plus a solid foundation in Java, C++, Python, SQL, OOP, and data structures &amp; algorithms. I'm passionate about using software engineering and database optimization to build scalable enterprise solutions.</p>
      <p>Based in Cairo, Egypt. Fluent in Arabic and English.</p>
    `
  },
  {
    id:'education', label:'Education',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,3 22,8 12,13 2,8"/><rect x="6" y="10" width="2" height="7"/><rect x="16" y="10" width="2" height="7"/><rect x="10" y="16" width="4" height="4"/></svg>`,
    body:`
      <h3>EDUCATION.LOG</h3>
      <p><b>Misr International University</b> — Cairo, Egypt<br>Bachelor of Computer Science, 2024 – Present</p>
      <hr class="divider">
      <p><b>Modern Language School</b><br>Thanawia Amma — Science Section, Graduated 2024</p>
    `
  },
  {
    id:'experience', label:'Experience',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="20" height="13"/><rect x="9" y="4" width="6" height="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="2" y="7" width="20" height="4" fill="#0b0414"/></svg>`,
    body:`
      <h3>EXPERIENCE.LOG</h3>
      <div class="job">
        <div class="job-title">Shopify Developer — KRAFT Sportswear</div>
        <div class="job-meta">2025 – Present</div>
        <ul>
          <li><b>Shopify Development:</b> Build and maintain the Shopify storefront, including catalog sync with sales channels, product listings, and abandoned checkout recovery flows.</li>
          <li><b>Quality Control &amp; Fulfillment:</b> Oversee Cash-on-Delivery (COD) order tracking and reconciliation, and manage quality control across product listings and fulfillment for the Egyptian market.</li>
          <li><b>Creative Production &amp; Automation:</b> Built an AI-assisted content pipeline (Higgsfield, Seedance, CapCut) alongside a custom Python/Pillow image-compositing workflow for pixel-accurate logo placement, reducing manual design turnaround.</li>
        </ul>
      </div>
      <div class="job">
        <div class="job-title">Odoo Developer Intern — FlexCode Systems</div>
        <div class="job-meta">June – July 2026</div>
        <ul>
          <li><b>Odoo Development &amp; Customization:</b> Develop and customize Odoo ERP modules using Python, XML, and PostgreSQL, designing tailormade Form, Tree, and Kanban views alongside QWeb reports.</li>
          <li><b>Feature Delivery &amp; Optimization:</b> Collaborate with senior engineers to implement business logic, debug existing code, and optimize database queries across core Odoo applications.</li>
          <li><b>Data Migration &amp; Cleansing:</b> Led large-scale contact deduplication and data cleansing efforts (analyzing 3,000+ duplicate record groups) using Python/pandas, improving data integrity ahead of CRM go-live.</li>
          <li><b>CRM Implementation:</b> Supported end-to-end CRM implementation for a client project, including scope definition, change management (via structured change registers), and cross-functional coordination with client-side technical stakeholders.</li>
          <li><b>Automation &amp; Data Governance:</b> Configured automated data recycling and archival rules to maintain database hygiene and reduce stale record buildup.</li>
          <li><b>Troubleshooting &amp; Debugging:</b> Diagnosed and resolved build-level warnings and model inheritance issues (e.g., recursive field declarations) to maintain deployment stability on Odoo.sh.</li>
        </ul>
      </div>
      <div class="job">
        <div class="job-title">Summer Intern – Generative AI &amp; Banking — Commercial International Bank (CIB)</div>
        <div class="job-meta">May 2026</div>
        <ul>
          <li><b>Emerging Technologies:</b> Explored practical applications of generative AI and modern fintech tools within commercial banking workflows.</li>
          <li><b>Banking Knowledge &amp; Strategy:</b> Participated in training on core banking operations, emerging financial technologies, and future-focused financial skills.</li>
        </ul>
      </div>
      <div class="job">
        <div class="job-title">Frontend Developer Intern — Code Alpha</div>
        <div class="job-meta">Dec 2025 – Jan 2026</div>
        <ul>
          <li>Built 4+ responsive landing pages by translating UI/UX wireframes into interactive interfaces using HTML, CSS, and JavaScript, improving mobile usability across major screen sizes.</li>
        </ul>
      </div>
      <div class="job">
        <div class="job-title">Team Leader — Tickets Marche</div>
        <div class="job-meta">2022 – 2025</div>
        <ul>
          <li>Coordinated on-ground operations for 10+ live events, managing attendee flow and venue logistics for crowds of 500+ attendees.</li>
          <li>Monitored ticket scanning systems across multiple entry points, coordinating with the technical team to minimize gate disruptions during live events.</li>
          <li>Contributed to post-event reporting by documenting operational issues, attendee feedback, and improvement recommendations across 3 years of events.</li>
        </ul>
      </div>
    `
  },
  {
    id:'projects', label:'Projects',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="20" height="14"/><polygon points="2,7 9,7 11,4 2,4"/></svg>`,
    body:`
      <h3>PROJECTS/</h3>
      <div class="project">
        <div class="project-title">E-Commerce Website</div>
        <div class="project-stack"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span><span class="tag">Node.js</span><span class="tag">MongoDB</span></div>
        <p class="project-desc">Full-stack e-commerce web app with responsive frontend and backend integration — product listings, cart functionality, and basic user authentication.</p>
      </div>
      <div class="project">
        <div class="project-title">Recruitment Management System</div>
        <div class="project-stack"><span class="tag">Java</span></div>
        <p class="project-desc">OOP-based recruitment system with role-based logic and data handling to manage candidates and recruitment workflows.</p>
      </div>
      <div class="project">
        <div class="project-title">Graph Traversal Engine</div>
        <div class="project-stack"><span class="tag">C++</span></div>
        <p class="project-desc">BFS and DFS implemented over adjacency matrices, with time-complexity and traversal-efficiency analysis across different graph sizes.</p>
      </div>
      <div class="project">
        <div class="project-title">MIU GPA Calculator</div>
        <div class="project-stack"><span class="tag">C++</span></div>
        <p class="project-desc">Computes student GPA from course credits and grades, using conditional logic, loops, and input validation.</p>
      </div>
    `
  },
  {
    id:'skills', label:'Skills',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13,2 4,14 11,14 9,22 20,9 12,9"/></svg>`,
    body:`
      <h3>SKILLS.SYS</h3>
      <p><b>Programming</b></p>
      <div><span class="tag">Java</span><span class="tag">C++</span><span class="tag">Python</span></div>
      <p><b>Web development</b></p>
      <div><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span><span class="tag">Node.js</span><span class="tag">React</span><span class="tag">Angular</span><span class="tag">Vue.js</span></div>
      <p><b>Concepts</b></p>
      <div><span class="tag">OOP</span><span class="tag">Data Structures &amp; Algorithms</span><span class="tag">Problem Solving</span></div>
      <p><b>Database</b></p>
      <div><span class="tag">SQL</span><span class="tag">Database Design</span></div>
      <p><b>Tools</b></p>
      <div><span class="tag">Git</span><span class="tag">GitHub</span></div>
      <p><b>Other</b></p>
      <div><span class="tag">Computer Networks</span></div>
      <p><b>Languages</b></p>
      <div><span class="tag">Arabic — mother tongue</span><span class="tag">English — excellent</span></div>
    `
  },
  {
    id:'certificates', label:'Certificates',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="6"/><polygon points="8,13 5,21 12,18 19,21 16,13"/></svg>`,
    body:`
      <h3>CERTIFICATES.DAT</h3>
      <p class="placeholder">No certificates listed yet — send me the names, issuers, and dates and I'll drop them in here.</p>
    `
  },
  {
    id:'activities', label:'Activities',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="8" width="20" height="9"/><rect x="5" y="10" width="2" height="2" fill="#0b0414"/><rect x="4" y="11" width="4" height="2" fill="#0b0414"/><rect x="5" y="12" width="2" height="2" fill="#0b0414"/><circle cx="17" cy="11" r="1.4" fill="#0b0414"/><circle cx="19.5" cy="13.5" r="1.4" fill="#0b0414"/></svg>`,
    body:`
      <h3>ACTIVITIES.LOG</h3>
      <p class="placeholder">No clubs, hackathons, or extracurriculars listed yet — tell me about any and I'll add them here.</p>
    `
  },
  {
    id:'contact', label:'Contact',
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="5" width="20" height="14"/><polygon points="2,5 12,13 22,5" fill="#0b0414"/></svg>`,
    body:`
      <h3>CONTACT.INFO</h3>
      <p>Location: Cairo, Egypt</p>
      <p>Email: <a href="mailto:ziadelhabashy5@gmail.com">ziadelhabashy5@gmail.com</a></p>
      <p>Phone: +20 11 1817 2555</p>
      <p>GitHub: <a href="https://github.com/ziadelhabashy" target="_blank">github.com/ziadelhabashy</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/ziadelhabashy" target="_blank">linkedin.com/in/ziadelhabashy</a></p>
    `
  },
];

/* ============ BOOT SEQUENCE ============ */
const bootLines = [
  "ZIAD_OS v1.0 — BIOS INIT",
  "MEMORY CHECK ......... OK",
  "LOADING DEV_STACK .... OK",
  "LOADING NET_STACK .... OK",
  "MOUNTING /PORTFOLIO .. OK",
  "STARTING DESKTOP ENV ...",
];
const bootEl = document.getElementById('boot-lines');
let bootDone = false;
function runBoot(){
  bootLines.forEach((line, i)=>{
    setTimeout(()=>{
      const d = document.createElement('div');
      d.className='line';
      d.textContent = line;
      bootEl.appendChild(d);
      if(i === bootLines.length-1){
        const c = document.createElement('span');
        c.className='cursor';
        d.appendChild(c);
      }
    }, i*260);
  });
  setTimeout(finishBoot, bootLines.length*260 + 500);
}
function finishBoot(){
  if(bootDone) return;
  bootDone = true;
  document.getElementById('boot').style.display='none';
  document.getElementById('desktop').classList.add('on');
}
document.getElementById('boot').addEventListener('click', finishBoot);
runBoot();

/* ============ ICON GRID ============ */
const grid = document.getElementById('icon-grid');
SECTIONS.forEach(sec=>{
  const div = document.createElement('div');
  div.className='icon';
  div.innerHTML = `<div class="icon-glyph">${sec.icon}</div><div class="icon-label">${sec.label}</div>`;
  div.addEventListener('click', ()=>openWindow(sec.id));
  grid.appendChild(div);
});

/* ============ WINDOW MANAGEMENT ============ */
let zTop = 100;
const openWins = new Set();

function createWindowShell(id, icon, label){
  const win = document.createElement('div');
  win.className='win hidden';
  win.id = 'win-'+id;
  win.style.top = (56 + Math.random()*30)+'px';
  win.innerHTML = `
    <div class="win-title">
      <div class="t-left">
        <span class="t-icon">${icon}</span>
        <span class="t-text">${label.toUpperCase()}</span>
      </div>
      <div class="win-btns">
        <button class="min" title="Minimize">_</button>
        <button class="close" title="Close">X</button>
      </div>
    </div>
    <div class="win-body"></div>
  `;
  document.getElementById('desktop').appendChild(win);
  win.querySelector('.close').addEventListener('click', ()=>closeWindow(id));
  win.querySelector('.min').addEventListener('click', ()=>toggleMinimize(id));
  win.querySelectorAll('.win-btns button').forEach(b=>{
    // stop the tap from ever reaching the title bar's drag handler, so a
    // touch that lands a pixel outside the (small) button hitbox can't
    // get mistaken for the start of a window drag
    b.addEventListener('pointerdown', e=>e.stopPropagation());
    b.addEventListener('touchstart', e=>e.stopPropagation(), {passive:true});
  });
  win.addEventListener('mousedown', ()=>focusWindow(id));
  win.addEventListener('touchstart', ()=>focusWindow(id), {passive:true});
  makeDraggable(win, win.querySelector('.win-title'));
  return win;
}

function buildWindow(sec){
  const win = createWindowShell(sec.id, sec.icon, sec.label);
  win.querySelector('.win-body').innerHTML = sec.body;
  return win;
}

function openWindow(id){
  const sec = SECTIONS.find(s=>s.id===id);
  let win = document.getElementById('win-'+id);
  if(!win) win = buildWindow(sec);
  openWins.add(id);
  focusWindow(id);
}
function closeWindow(id){
  const win = document.getElementById('win-'+id);
  if(win) win.classList.add('hidden');
  openWins.delete(id);
  renderTabs();
}
function toggleMinimize(id){
  const win = document.getElementById('win-'+id);
  if(!win) return;
  win.classList.toggle('hidden');
  renderTabs();
}
function focusWindow(id){
  const win = document.getElementById('win-'+id);
  if(!win) return;
  zTop += 1;
  win.style.zIndex = zTop;
  win.classList.remove('hidden');
  renderTabs();
}
function renderTabs(){
  const bar = document.getElementById('task-tabs');
  bar.innerHTML = '';
  openWins.forEach(id=>{
    const sec = SECTIONS.find(s=>s.id===id) || TERMINAL_SECTION;
    const win = document.getElementById('win-'+id);
    const tab = document.createElement('div');
    tab.className = 'task-tab' + (win && !win.classList.contains('hidden') ? ' active':'');
    tab.textContent = (sec.label||id);
    tab.addEventListener('click', ()=>{
      if(win.classList.contains('hidden')) focusWindow(id);
      else toggleMinimize(id);
    });
    bar.appendChild(tab);
  });
}

function makeDraggable(win, handle){
  let dragging=false, offX=0, offY=0;
  handle.addEventListener('pointerdown', (e)=>{
    if(e.target.closest('button')) return;
    dragging=true;
    handle.setPointerCapture(e.pointerId);
    const r = win.getBoundingClientRect();
    offX = e.clientX - r.left;
    offY = e.clientY - r.top;
    win.style.transform='none';
    win.style.left = r.left+'px';
    focusWindow(win.id.replace('win-',''));
  });
  handle.addEventListener('pointermove', (e)=>{
    if(!dragging) return;
    const maxX = window.innerWidth - win.offsetWidth - 4;
    const maxY = window.innerHeight - 60 - win.offsetHeight;
    let nx = e.clientX - offX;
    let ny = e.clientY - offY;
    nx = Math.max(4, Math.min(nx, maxX));
    ny = Math.max(4, Math.min(ny, maxY));
    win.style.left = nx+'px';
    win.style.top = ny+'px';
  });
  handle.addEventListener('pointerup', ()=>{dragging=false;});
  handle.addEventListener('pointercancel', ()=>{dragging=false;});
}

/* ============ START MENU ============ */
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
const smItems = document.getElementById('sm-items');
SECTIONS.forEach(sec=>{
  const b = document.createElement('button');
  b.textContent = sec.label;
  b.addEventListener('click', ()=>{ openWindow(sec.id); startMenu.classList.remove('open'); });
  smItems.appendChild(b);
});
const termBtn = document.createElement('button');
termBtn.textContent = '> Terminal';
termBtn.addEventListener('click', ()=>{ openTerminal(); startMenu.classList.remove('open'); });
smItems.appendChild(termBtn);

startBtn.addEventListener('click', ()=>startMenu.classList.toggle('open'));
document.addEventListener('click', (e)=>{
  if(!startMenu.contains(e.target) && e.target!==startBtn){
    startMenu.classList.remove('open');
  }
});
document.getElementById('sm-shutdown').addEventListener('click', ()=>{
  document.getElementById('shutdown-screen').classList.add('on');
});

/* ============ TERMINAL EASTER EGG ============ */
const TERMINAL_SECTION = {
  id:'terminal', label:'Terminal',
  icon:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="3" width="20" height="18"/><rect x="4" y="6" width="16" height="12" fill="#050208"/></svg>`,
};
function openTerminal(){
  let win = document.getElementById('win-terminal');
  if(!win){
    win = createWindowShell(TERMINAL_SECTION.id, TERMINAL_SECTION.icon, TERMINAL_SECTION.label);
    win.querySelector('.win-body').innerHTML = `
      <div id="term-log">ZIAD_OS Terminal — type "help" and press enter\n</div>
      <div id="term-line"><span class="p">ziad@miu:~$</span><input id="term-input" autocomplete="off" spellcheck="false"></div>
    `;

    const input = win.querySelector('#term-input');
    const log = win.querySelector('#term-log');
    const commands = {
      help: ()=> "commands: whoami, about, skills, projects, contact, clear",
      whoami: ()=> "ziad el-habashy — CS student @ Misr International University, frontend dev intern @ Code Alpha",
      about: ()=> "moving toward Data Science Engineering. strong in Java/C++/Python, OOP, networking, and web dev.",
      skills: ()=> "Java, C++, Python, HTML/CSS/JS, Node.js, SQL, OOP, DS&A, networking (VLANs/OSPF/EIGRP/NAT/IPsec), Git",
      projects: ()=> "E-Commerce Website, Computer Networks Enterprise Project, Recruitment Management System, Graph Traversal Engine, MIU GPA Calculator — see the Projects window for details",
      contact: ()=> "ziadelhabashy5@gmail.com — open the Contact window from the desktop for all links",
      clear: ()=> { log.textContent=''; return null; },
    };
    input.addEventListener('keydown', (e)=>{
      if(e.key !== 'Enter') return;
      const raw = input.value.trim();
      const cmd = raw.toLowerCase();
      log.textContent += `ziad@miu:~$ ${raw}\n`;
      if(cmd.startsWith('sudo')){
        log.textContent += "nice try. access denied.\n";
      } else if(commands[cmd]){
        const out = commands[cmd]();
        if(out) log.textContent += out+'\n';
      } else if(cmd.length){
        log.textContent += `command not found: ${raw}\n`;
      }
      input.value='';
      log.scrollTop = log.scrollHeight;
    });
  }
  openWins.add('terminal');
  focusWindow('terminal');
  setTimeout(()=>win.querySelector('#term-input')?.focus(), 50);
}
