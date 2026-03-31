/* =============================================
   APP.JS — IJN Portfolio Interactive Logic
   ============================================= */

// ─── Data ────────────────────────────────────────
const SKILLS = [
  { name: 'Visual Basic .NET', level: 91 },
  { name: 'Graphic Design', level: 85 },
  { name: 'MySQL / Database', level: 80 },
  { name: 'PHP / Laravel', level: 75 },
  { name: 'Tailwind CSS', level: 45 },
  { name: 'HTML / CSS', level: 78 },
  { name: 'JavaScript', level: 45 },
];

const TIMELINE = [
  {
    year: '2010 – Present',
    role: 'IT Technician / Graphic Designer',
    company: 'Local Government Unit of Quezon, Bukidnon',
    desc: 'Building full-stack web applications with Laravel and modern JavaScript frameworks. Leading development of enterprise-grade systems.',
    tags: ['Laravel', 'VB.Net', 'MySQL', 'Tailwind', 'Technician', 'Graphic Designer'],
    icon: '💻'
  },
  {
    year: '2020 – 2021',
    role: 'Certificate of Teaching',
    company: 'Valencia Colleges (Buk), Inc.',
    desc: 'This certificate is typically granted to graduates of non-education degree programs who have pursued additional academic units in education to qualify for teaching positions or eligibility requirements, such as those set by educational institutions or licensure examinations.',
    tags: ['Education', 'Teaching'],
    icon: '🚀'
  },
  {
    year: '2015 – 2019',
    role: 'B.S. Information Technology',
    company: 'Philippine Countryville College, Inc.',
    desc: 'Graduated with a degree in Information Technology. Focused on desktop application development, databases, and software engineering.',
    tags: ['IT Graduate', 'Web Dev', 'Database'],
    icon: '🎓'
  }
];

const PROJECTS = [
  // ── Web App (Laravel) ───────────────────────────
  {
    title: 'Employee Record Management System',
    desc: 'ERM 2.0 is a robust, localized web platform designed for human resources and administrative oversight. Operating entirely offline using Laravel 12 and Tailwind CSS v4, ERM bridges identity tracking with live organizational hierarchies, delivering complex statistical dashboards and completely segregated Guest Self-Service environments',
    img: 'images/erm/erm1.jpg',
    images: [
      'images/erm/erm1.jpg',
      'images/erm/erm2.jpg',
      'images/erm/erm3.jpg',
      'images/erm/erm4.jpg',
      'images/erm/erm5.jpg',
      'images/erm/erm6.jpg',
    ],
    tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine JS'],
    filter: 'laravel',
    label: 'Web App',
    color: '#0ea5e9',
    code: '#'
  },
  // ── Visual Basic .NET ────────────────────────────
  {
    title: 'Business Permits and Licensing Issuance System',
    desc: 'Desktop application The Business Permits Issuance System is designed to streamline the process of issuing various permits and certificates required for businesses and individuals. This system ensures efficient, accurate, and transparent permit issuance while reducing manual workload and processing time.',
    img: 'images/bpls/bpls1.jpg',
    images: [
      'images/bpls/bpls1.jpg',
      'images/bpls/bpls2.jpg',
      'images/bpls/bpls3.jpg',
      'images/bpls/bpls4.jpg',
      'images/bpls/bpls5.jpg',
      'images/bpls/bpls6.jpg',
    ],
    tags: ['VB.Net', 'MySQL', 'WinForms'],
    filter: 'vbnet',
    label: 'VB.Net',
    color: '#0d9488',
    code: '#'
  },
  {
    title: 'Barangay Management Information System',
    desc: 'The Barangay Management Information System is a desktop-based application developed using VB.NET, MySQL, and Crystal Reports. It is designed to streamline the management of barangay records, improve service delivery, and enhance data organization within the barangay office. This system provides a centralized and computerized platform for storing, updating, and retrieving resident information, barangay transactions, and official records. It minimizes manual paperwork, reduces processing time, and ensures accuracy and security of data.',
    img: 'images/bmis/bmis1.jpg',
    images: [
      'images/bmis/bmis1.jpg',
      'images/bmis/bmis2.jpg',
      'images/bmis/bmis3.jpg',
      'images/bmis/bmis4.jpg',
      'images/bmis/bmis5.jpg',
      'images/bmis/bmis6.jpg',
    ],
    tags: ['VB.Net', 'MySQL', 'WinForms', 'Crystal Reports'],
    filter: 'vbnet',
    label: 'VB.Net',
    color: '#10b981',
    code: '#'
  },
  {
    title: 'Quezon Vaccination Records Management System',
    desc: 'The Quezon Vaccination Records Management System is a desktop-based application developed using VB.NET, MySQL, and Crystal Reports. This system is designed to efficiently manage, store, and generate vaccination records related to COVID-19 within the Municipality/Province of Quezon. The application provides a centralized platform for encoding, tracking, and retrieving vaccination data of individuals.It aims to improve the accuracy, accessibility, and security of health records while reducing manual processes and paperwork.',
    img: 'images/qvr/qvr1.jpg',
    images: [
      'images/qvr/qvr1.jpg',
      'images/qvr/qvr2.jpg',
      'images/qvr/qvr3.jpg',
      'images/qvr/qvr4.jpg',
    ],
    tags: ['VB.Net', 'MySQL', 'WinForms', 'Crystal Reports'],
    filter: 'vbnet',
    label: 'VB.Net',
    color: '#10b981',
    code: '#'
  },
  // ── Graphic Design (Photoshop) ───────────────────
  {
    title: 'Basketball Jersey Design',
    desc: 'Official Jersey Design for the Local Government of Quezon, Bukidnon basketball team during Kaamulan Festival 2023',
    img: 'images/graphdesign/graph1.jpg',
    images: [
      'images/graphdesign/graph1.jpg',
      'images/graphdesign/graph2.jpg'
    ],
    tags: ['Photoshop', 'Branding'],
    filter: 'design',
    label: 'Design',
    color: '#38bdf8',
    code: '#'
  }
];

// ─── Typed Text ──────────────────────────────────
const roles = ['Desktop Application Developer', 'Web Developer', 'Graphic Designer', 'Freelancer'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
function typeWriter() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeWriter, 500); return; }
  } else {
    el.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) { isDeleting = true; setTimeout(typeWriter, 2000); return; }
  }
  setTimeout(typeWriter, isDeleting ? 60 : 110);
}

// ─── Splash Screen ────────────────────────────────
function initSplash() {
  const splash = document.getElementById('splash');
  const bar = document.getElementById('splash-bar');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    bar.style.width = progress + '%';
  }, 120);
  setTimeout(() => {
    splash.style.opacity = '0';
    splash.style.transform = 'scale(1.05)';
    splash.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => { splash.style.display = 'none'; }, 700);
  }, 2000);
}

// ─── Theme Toggle ─────────────────────────────────
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('ijn-theme') || 'dark';
  applyTheme(saved);
  btn.addEventListener('click', () => {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('ijn-theme', next);
  });
}
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark', 'bg-slate-950', 'text-slate-100');
    document.body.classList.remove('bg-slate-50', 'text-slate-900');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark', 'bg-slate-950', 'text-slate-100');
    document.body.classList.add('bg-slate-50', 'text-slate-900');
  }
}

// ─── Navbar ───────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const bot = top + sec.offsetHeight;
      const links = document.querySelectorAll(`.nav-link[href="#${sec.id}"]`);
      links.forEach(l => l.classList.toggle('active', window.scrollY >= top && window.scrollY < bot));
    });
  });
  mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  document.querySelectorAll('.mobile-nav-link').forEach(l => {
    l.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

// ─── Scroll to Top ────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 500;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'translateY(0)' : 'translateY(16px)';
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── Reveal on Scroll ─────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ─── Skills ───────────────────────────────────────
function renderSkills() {
  const container = document.getElementById('skills-list');
  if (!container) return;
  SKILLS.forEach(s => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="flex justify-between mb-1.5">
        <span class="text-sm font-medium dark:text-slate-300 text-slate-700">${s.name}</span>
        <span class="text-sm font-bold text-sky-400">${s.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>`;
    container.appendChild(div);
  });
  // Animate bars when in view
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  obs.observe(container);
}

// ─── Timeline ─────────────────────────────────────
function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  TIMELINE.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    div.innerHTML = `
      <div class="timeline-dot hidden md:block"></div>
      <div class="glass-card p-6 rounded-2xl hover-lift mb-2">
        <div class="flex flex-wrap items-center gap-3 mb-3">
          <span class="text-2xl">${item.icon}</span>
          <div>
            <h3 class="font-display font-bold dark:text-white text-slate-900">${item.role}</h3>
            <p class="text-sm text-sky-400 font-medium">${item.company}</p>
          </div>
          <span class="ml-auto text-xs dark:text-slate-500 text-slate-400 font-mono bg-slate-100/5 px-3 py-1 rounded-full border border-slate-700/30">${item.year}</span>
        </div>
        <p class="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4">${item.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${item.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
      </div>`;
    container.appendChild(div);
  });
}

// ─── Projects ─────────────────────────────────────
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.filter === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card reveal';
    card.style.transitionDelay = `${i * 80}ms`;
    card.onclick = () => openProjectModal(p);
    card.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${p.img}" alt="${p.title}" class="card-img w-full h-full object-cover" loading="lazy" />
        <div class="project-overlay"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background:${p.color}88">${p.label}</span>
        </div>
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
           <span class="px-4 py-2 bg-sky-500 text-white rounded-full text-xs font-bold shadow-lg">View Details</span>
        </div>
        <!-- Source code link removed -->
      </div>
      <div class="p-5">
        <h3 class="font-display font-bold dark:text-white text-slate-900 mb-2">${p.title}</h3>
        <p class="dark:text-slate-400 text-slate-500 text-sm leading-relaxed mb-4">${p.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
      </div>`;
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 80 + 100);
  });
}

// ─── Modal Logic ─────────────────────────────────
let currentSlide = 0;
let modalProject = null;

function openProjectModal(project) {
  modalProject = project;
  currentSlide = 0;

  const modal = document.getElementById('project-modal');
  const slides = document.getElementById('modal-slides');
  const indicators = document.getElementById('slide-indicators');

  // Fill text content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-desc').textContent = project.desc;
  document.getElementById('modal-label').textContent = project.label;
  // modal-code href update removed

  // Fill tags
  const tagsCont = document.getElementById('modal-tags');
  tagsCont.innerHTML = project.tags.map(t => `<span class="tech-chip">${t}</span>`).join('');

  // Fill slides
  slides.innerHTML = (project.images || [project.img]).map(img => `
    <div class="modal-slide">
      <img src="${img}" alt="${project.title}" />
    </div>
  `).join('');

  // Fill indicators
  const imgCount = (project.images || [project.img]).length;
  indicators.innerHTML = Array.from({ length: imgCount }).map((_, i) => `
    <div class="slide-indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
  `).join('');

  // Update navigation visibility
  document.getElementById('prev-slide').style.display = imgCount > 1 ? 'flex' : 'none';
  document.getElementById('next-slide').style.display = imgCount > 1 ? 'flex' : 'none';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateSlidePosition();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateSlidePosition() {
  const slides = document.getElementById('modal-slides');
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll('.slide-indicator').forEach((ind, i) => {
    ind.classList.toggle('active', i === currentSlide);
  });
}

function goToSlide(n) {
  currentSlide = n;
  updateSlidePosition();
}

function nextSlide() {
  const count = (modalProject.images || [modalProject.img]).length;
  currentSlide = (currentSlide + 1) % count;
  updateSlidePosition();
}

function prevSlide() {
  const count = (modalProject.images || [modalProject.img]).length;
  currentSlide = (currentSlide - 1 + count) % count;
  updateSlidePosition();
}

function initModal() {
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeProjectModal);
  });

  document.getElementById('next-slide').addEventListener('click', nextSlide);
  document.getElementById('prev-slide').addEventListener('click', prevSlide);

  // Keyboard nav
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('project-modal').classList.contains('active')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
}

// Filter Buttons
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ─── Contact Form — sends via Web3Forms ─────────────
function initForm() {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  const btn = form ? form.querySelector('button[type="submit"]') : null;
  if (!form) return;

  // IMPORTANT: Replace this with your own Access Key from https://web3forms.com/
  // It's free, instant, and no-code.
  const ACCESS_KEY = 'f3100e67-49be-47e3-926b-de5a0a6439af';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Portfolio Contact';
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showFormMsg(msg, 'error', '⚠️ Please fill in all required fields.');
      return;
    }

    // Update UI to Loading
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin text-sm"></i> Sending...';
    }
    showFormMsg(msg, 'info', 'Sending your message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: name,
          email: email,
          subject: subject,
          message: message,
          from_name: 'Portfolio Contact'
        })
      });

      const result = await response.json();

      if (result.success) {
        showFormMsg(msg, 'success', '✅ Message sent successfully! I will get back to you soon.');
        form.reset();
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-check text-sm"></i> Sent!';
          setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-paper-plane text-sm"></i> Send Message';
          }, 3000);
        }
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form Error:', error);
      showFormMsg(msg, 'error', `❌ Error: ${error.message || 'Could not send message. Please try again later.'}`);
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane text-sm"></i> Send Message';
      }
    }
  });
}

function showFormMsg(el, type, text) {
  if (!el) return;
  let colorClass = 'text-red-400';
  if (type === 'success') colorClass = 'text-green-400';
  if (type === 'info') colorClass = 'text-sky-400';

  el.className = `text-center text-sm mt-4 ${colorClass}`;
  el.textContent = text;
  el.classList.remove('hidden');
}

// ─── Boot ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  initTheme();
  initNavbar();
  initScrollTop();
  renderSkills();
  renderTimeline();
  renderProjects();
  initFilters();
  initForm();
  initModal();
  typeWriter();
  // Trigger reveal after splash
  setTimeout(initReveal, 2200);
  // Scroll-based reveal for late sections
  window.addEventListener('scroll', initReveal, { passive: true, once: true });
});
