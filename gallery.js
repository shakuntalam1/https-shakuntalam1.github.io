/**
 * gallery.js — Shakuntalites
 *
 * All content data lives here. To update content:
 *  - Add a teacher: push an object into TEACHERS array below.
 *  - Add a video:   push an object into VIDEOS array below.
 *  - Add a timeline event: push into TIMELINE array.
 *  - Add a year gallery: add a key to YEAR_CONTENT.
 *  - Add an event's photos: add an array to BUILT_IN_PHOTOS keyed by eventKey.
 */

'use strict';

/* ============================================================
   ── DATA ────────────────────────────────────────────────────
   ============================================================ */

const BASE_URL = 'https://raw.githubusercontent.com/shakuntalites/shakuntalites.github.io/main/';

/** Gallery cards per year. Each object = one album card. */
const YEAR_CONTENT = {
  '2024-25': [
    { emoji: '🎓', label: 'मंगलकामना समारोह', caption: 'मंगलकामना समारोह · 2024–25', bg: 'linear-gradient(135deg,#2C1A0E,#4A2C0A)', eventKey: 'mangal_202425', coverImg: BASE_URL + 'Mangalkamna.png' },
    { emoji: '🎭', label: 'प्रभांजलि',        caption: 'प्रभांजलि · 2024–25',        bg: 'linear-gradient(135deg,#2C1A2A,#5C305A)', eventKey: 'prabh_202425',  coverImg: BASE_URL + 'prabhanjali.png' },
    { emoji: '📖', label: 'स्मृतिरंजनी संध्या', caption: 'स्मृतिरंजनी संध्या · 2024', bg: 'linear-gradient(135deg,#1E2C1A,#3A5C30)', eventKey: 'smriti_202425', coverImg: BASE_URL + 'smritiranjini.png' },
    { emoji: '🏆', label: 'Sports Day',        caption: 'Sports Day · 2024',          bg: 'linear-gradient(135deg,#1A1E2C,#303A5C)', eventKey: 'sports_202425', coverImg: BASE_URL + 'sports.png' },
    { emoji: '🎈', label: "Children's Day",    caption: "Children's Day · 2024",      bg: 'linear-gradient(135deg,#2C220A,#5C4A10)', eventKey: 'children_202425', coverImg: BASE_URL + 'baldiwas.png' },
    { emoji: '🔬', label: 'Science Exhibition', caption: 'Science Exhibition · 2024–25', bg: 'linear-gradient(135deg,#1A2C2A,#2C5A56)', eventKey: 'science_202425', coverImg: BASE_URL + 'science-exhibition.png' },
    { emoji: '🇮🇳', label: 'Patriotic Days',   caption: 'Patriotic Days · 2024–25',   bg: 'linear-gradient(135deg,#1A2C1A,#138808)', eventKey: 'patriotic_202425', coverImg: BASE_URL + 'patriotic.png' },
  ],
  '2025-26': [
    { emoji: '🎓', label: 'मंगलकामना समारोह', caption: 'मंगलकामना समारोह · 2025–26', bg: 'linear-gradient(135deg,#2C1A0E,#4A2C0A)' },
    { emoji: '🎭', label: 'प्रभांजलि',        caption: 'प्रभांजलि · 2025–26',        bg: 'linear-gradient(135deg,#2C1A2A,#5C305A)' },
    { emoji: '📖', label: 'स्मृतिरंजनी',     caption: 'स्मृतिरंजनी संध्या',         bg: 'linear-gradient(135deg,#1E2C1A,#3A5C30)' },
    { emoji: '🏆', label: 'Sports Day',       caption: 'Sports Day · 2025',            bg: 'linear-gradient(135deg,#1A1E2C,#303A5C)' },
    { emoji: '🎈', label: "Children's Day",   caption: "Children's Day · 2025",        bg: 'linear-gradient(135deg,#2C220A,#5C4A10)', eventKey: 'children_202526' },
    { emoji: '🌸', label: "Teacher's Day",    caption: "Teacher's Day · 2025",         bg: 'linear-gradient(135deg,#2C2210,#5C4A20)', eventKey: 'teachers_202526' },
    { emoji: '🎯', label: 'Activities',       caption: 'Activities · 2025–26',         bg: 'linear-gradient(135deg,#1A2C1A,#2C5C2C)', eventKey: 'activities_202526' },
  ],
};

/** Polaroid snapshots per year. */
const POLAROID_DATA = {
  '2025-26': [
    { emoji: '🎒', bg: 'linear-gradient(135deg,#5C3C1A,#2C1A0E)', note: 'First day of Class 6', rot: '-3deg' },
    { emoji: '🏅', bg: 'linear-gradient(135deg,#7A5C3C,#3C2A1A)', note: 'Sports Day gold',      rot: '2deg'  },
    { emoji: '🌳', bg: 'linear-gradient(135deg,#4A6A3C,#2A3A1E)', note: 'School grounds',        rot: '-2deg' },
    { emoji: '🎨', bg: 'linear-gradient(135deg,#6A3C5C,#3A1E2C)', note: 'Art exhibition',         rot: '4deg'  },
    { emoji: '🔬', bg: 'linear-gradient(135deg,#3C5A6A,#1E2C3A)', note: 'Science fair',           rot: '-1deg' },
    { emoji: '🎤', bg: 'linear-gradient(135deg,#6A5A3C,#3A2E1E)', note: 'Mic drop · प्रभांजलि',  rot: '3deg'  },
    { emoji: '🌟', bg: 'linear-gradient(135deg,#3C6A4A,#1E3A2C)', note: 'Toppers · Class 10',     rot: '-3deg' },
    { emoji: '❤️', bg: 'linear-gradient(135deg,#6A3C3C,#3A1E1E)', note: 'Last day',               rot: '2deg'  },
  ],
  '2024-25': [
    { emoji: '🎒', bg: 'linear-gradient(135deg,#5C3C1A,#2C1A0E)', note: 'First day of Class 6', rot: '-3deg' },
    { emoji: '🏅', bg: 'linear-gradient(135deg,#7A5C3C,#3C2A1A)', note: 'Sports Day',            rot: '2deg'  },
    { emoji: '🌳', bg: 'linear-gradient(135deg,#4A6A3C,#2A3A1E)', note: 'School garden',         rot: '-2deg' },
    { emoji: '🎨', bg: 'linear-gradient(135deg,#6A3C5C,#3A1E2C)', note: 'Art Day',               rot: '4deg'  },
    { emoji: '🔬', bg: 'linear-gradient(135deg,#3C5A6A,#1E2C3A)', note: 'Science fair',           rot: '-1deg' },
    { emoji: '🎤', bg: 'linear-gradient(135deg,#6A5A3C,#3A2E1E)', note: 'प्रभांजलि',             rot: '3deg'  },
    { emoji: '🌟', bg: 'linear-gradient(135deg,#3C6A4A,#1E3A2C)', note: 'Board toppers',          rot: '-3deg' },
    { emoji: '❤️', bg: 'linear-gradient(135deg,#6A3C3C,#3A1E1E)', note: 'Last day together',      rot: '2deg'  },
  ],
};

/**
 * TEACHERS — add/edit objects here.
 * Fields: name, subject, quote, isPrincipal (optional)
 */
const TEACHERS = [
  { name: 'Dr. Nivedita Sharma', subject: 'Principal', quote: '"Shakuntalam is not a school — it is a universe where every child is a star waiting to shine."', isPrincipal: true },
  { name: 'Dr. Asha Raje',        subject: 'Biology',           quote: '"Life is the most beautiful experiment — live it with curiosity."' },
  { name: 'Bharati Saxena',       subject: 'Political Science',  quote: '"A voice raised in truth is worth more than a thousand in silence."' },
  { name: 'Dr. Chanda Mishra',    subject: 'Hindi',              quote: '"भाषा हृदय की आवाज़ है — सुनो, समझो, और बोलो।"' },
  { name: 'Divya',                subject: 'Geography',          quote: '"The world is your textbook — read it carefully."' },
  { name: 'Gayatri Sharma',       subject: 'Accountancy',        quote: '"Balance in accounts, balance in life — both are an art."' },
  { name: 'Dr. Kavita Mishra',    subject: 'Home Science',       quote: '"Science begins at home — master the basics, master the world."' },
  { name: 'Kumud Sharma',         subject: 'History',            quote: '"Those who know history are destined to shape it."' },
  { name: 'Manju Kala',           subject: 'History',            quote: '"Those who know history are destined to shape it."' },
  { name: 'Narendra Kumar',       subject: 'Mathematics',        quote: '"Numbers never lie — and neither does hard work."' },
  { name: 'Dr. Nikita Rani',      subject: 'Drawing',            quote: '"Curiosity is the spark behind every great discovery."' },
  { name: 'Dr. Payel Sharma',     subject: 'Vocal',              quote: '"Your voice is your instrument — sing your story to the world."' },
  { name: 'Pratibha',             subject: 'English',            quote: '"Words have the power to change the world — use them wisely."' },
  { name: 'Dr. Prahlad Kumar Sharma', subject: 'Physical Education', quote: '"A healthy body houses a brilliant mind."' },
  { name: 'Dr. Pyarelal',         subject: 'Physics',            quote: '"The universe is made of stories, not atoms. Go write yours."' },
  { name: 'Dr. Rekha Jain',       subject: 'Music',              quote: '"Music speaks what words cannot. Let your melody resonate forever."' },
  { name: 'Ruchi',                subject: 'Chemistry',          quote: '"Every reaction has a cause. Make your life\'s reaction a beautiful one."' },
  { name: 'Savitri Sharma',       subject: 'Sanskrit',           quote: '"विद्या ददाति विनयम् — Knowledge brings humility."' },
  { name: 'Dr. Shiv Shankar Singh', subject: 'Computer Science', quote: '"In a world of algorithms, be the one who writes the code of change."' },
  { name: 'Seema Parashar',       subject: 'Home Science',       quote: '"The greatest lessons in life are learned at home — and in this classroom."' },
  { name: 'Sulogna Mukherjee',    subject: 'English',            quote: '"You are the author of your own life. Make it a masterpiece."' },
  { name: 'Dr. Sushila Sharma',   subject: 'Hindi',              quote: '"भाषा में वो शक्ति है जो दिलों को जोड़ती है।"' },
  { name: 'Dr. Vijay Kumar Sharma', subject: 'Geography',        quote: '"The world is your classroom — explore every corner of it."' },
];

/**
 * VIDEOS — add/edit objects here.
 * Fields: title, date, embedUrl (YouTube embed URL or null), thumbnail (emoji or image URL)
 */
const VIDEOS = [
  { title: 'मंगलकामना समारोह 2024–25', date: 'Farewell Ceremony', embedUrl: null, emoji: '🎓' },
  { title: 'प्रभांजलि 2024–25',        date: 'Annual Cultural Evening', embedUrl: null, emoji: '🎭' },
  { title: 'Sports Day Highlights',     date: 'December 2024',   embedUrl: null, emoji: '🏆' },
];

/**
 * TIMELINE — add/edit objects here.
 * Fields: year, title, desc
 */
const TIMELINE = [
  { year: '2019', title: 'Class 6 Begins',   desc: 'Nervous smiles, new uniforms, and the first ever roll call. We had no idea what seven years would bring.' },
  { year: '2020', title: 'Year of Silence',  desc: 'Screens replaced classrooms, but our bond refused to break. We learned resilience before we knew the word.' },
  { year: '2021', title: 'Back Together',    desc: 'The corridors echoed again. We walked back with a year of stories no textbook could have taught.' },
  { year: '2022', title: 'Finding Ourselves', desc: 'Sports days, science fairs, art exhibitions — we discovered what we were made of, one event at a time.' },
  { year: '2023', title: 'Board Ambitions',  desc: 'Class 10 boards. Late nights, last-minute revisions, and the quiet promise to make each other proud.' },
  { year: '2024', title: 'The Final Stretch', desc: 'Class 12 begins. We know this is the last chapter — and we choose to make it the most beautiful one.' },
  { year: '2025', title: 'Farewell',         desc: 'मंगलकामना. The last assembly bell. The last prayer. The last time all 280 of us are in the same room.' },
];

/* Built-in event album photos (hosted on GitHub). */
const BUILT_IN_PHOTOS = {
  'mangal_202425': [
    BASE_URL + 'DSC_1488.jpg',  BASE_URL + 'DSC_1530.jpg',  BASE_URL + 'DSC_1585.jpg',
    BASE_URL + 'DSC_1599.jpg',  BASE_URL + 'DSC_1683.jpg',  BASE_URL + 'IMG_20260327_001438.jpg',
    BASE_URL + 'IMG_20260327_001607.jpg', BASE_URL + 'IMG_20260327_001747.jpg',
    BASE_URL + 'IMG_3526.jpg',  BASE_URL + 'IMG_3710.jpg',  BASE_URL + 'IMG_3782.jpg',
    BASE_URL + 'IMG_3856.jpg',
  ],
  'prabh_202425': [
    BASE_URL + 'IMG_20260327_080520.jpg', BASE_URL + '1000169086.jpg', BASE_URL + '1000169087.jpg',
    BASE_URL + '1000169088.jpg', BASE_URL + '1000169089.jpg', BASE_URL + '1000169090.jpg',
    BASE_URL + '1000169091.jpg', BASE_URL + '1000169093.jpg', BASE_URL + '1000169094.jpg',
    BASE_URL + '1000169095.jpg',
  ],
  'smriti_202425': [
    BASE_URL + 'Bhabhi image82.jpg', BASE_URL + 'Bhabhi image34.jpg',
    BASE_URL + 'DSC_6586.jpg', BASE_URL + 'DSC_6637.jpg', BASE_URL + 'DSC_6659.jpg',
    BASE_URL + 'DSC_6701.jpg', BASE_URL + 'DSC_6777.jpg', BASE_URL + 'DSC_6788.jpg',
    BASE_URL + 'DSC_6820.jpg', BASE_URL + 'DSC_6833.jpg', BASE_URL + 'DSC_6966.jpg',
    BASE_URL + 'IMG_1829.jpg',
  ],
  'sports_202425': [
    BASE_URL + 'IMG_1073.jpg', BASE_URL + 'IMG_20241214_163549982.jpg',
    BASE_URL + 'IMG_20241118_163822028_HDR.jpg', BASE_URL + 'IMG_20241117_173944010.jpg',
    BASE_URL + 'IMG_0736.jpg', BASE_URL + 'IMG_0841.jpg', BASE_URL + 'IMG_1177.jpg',
    BASE_URL + 'IMG_1238.jpg', BASE_URL + 'IMG_1340.jpg',
  ],
  'children_202425': [
    BASE_URL + 'IMG_0186.jpg', BASE_URL + 'IMG_0220.jpg', BASE_URL + 'IMG_0210.jpg',
    BASE_URL + 'IMG_0203.jpg', BASE_URL + 'IMG_0185.jpg', BASE_URL + 'IMG_0257.jpg',
    BASE_URL + 'IMG_0224.jpg', BASE_URL + 'IMG_0241.jpg', BASE_URL + 'IMG_0225.jpg',
    BASE_URL + 'IMG_0301.jpg', BASE_URL + 'IMG_0261.jpg', BASE_URL + 'IMG_0265.jpg',
    BASE_URL + 'IMG_0305.jpg', BASE_URL + 'IMG_0303.jpg', BASE_URL + 'IMG_0264.jpg',
    BASE_URL + 'IMG_0332.jpg', BASE_URL + 'IMG_0306.jpg',
  ],
  'science_202425': [
    BASE_URL + '4ca81778-e5ef-405d-8cc1-64ebd59b4a77.jpg',
    BASE_URL + '03eaa5c2-4085-4635-892b-c4f56f1933bc.jpg',
    BASE_URL + '5d97ca4d-bf38-448e-884d-ff33b290ddea.jpg',
    BASE_URL + '3f642212-5c20-48a8-91df-0109cb7fb491.jpg',
    BASE_URL + '2f9bdbf7-4480-4936-9f72-2827a0f23c5c.jpg',
    BASE_URL + '6ee78f86-d130-46d5-8abe-683cfa74a33b.jpg',
    BASE_URL + '88240fcd-ad54-493c-a6aa-9d7cca21c7f9.jpg',
    BASE_URL + '6adedfc9-bb07-4897-ad1c-9a75ba2503bc.jpg',
    BASE_URL + '3c59d485-f5e4-463b-9929-d590fb663c83.jpg',
  ],
  'patriotic_202425': [
    BASE_URL + 'IMG_1565.jpg', BASE_URL + 'IMG_9468.jpg', BASE_URL + 'IMG_1562.jpg',
    BASE_URL + 'IMG_1700.jpg', BASE_URL + 'IMG_1761.jpg', BASE_URL + 'IMG_1463.jpg',
    BASE_URL + 'IMG_1397.jpg',
  ],
};

/** Emoji fallback sets for event albums that have no photos yet. */
const EVENT_SAMPLES = {
  'mangal':    ['🎓','🎊','🙏','✨','🌟','🎉','💐','🎆','🥳','🎑','🪄','🌠'],
  'prabh':     ['🎭','🎤','🎵','🎶','🎼','🎺','🥁','🎻','🎪','🎸','🪗','🎹'],
  'smriti':    ['📖','📸','💫','🕯️','🌸','💝','🎀','📜','🌺','🫶','🌼','💌'],
  'sports':    ['🏆','⚽','🏅','🎯','🏃','💪','🥇','🎽','🏋️','🎖️','🤸','🥊'],
  'children':  ['🎈','🎠','🎡','🎢','🎪','🎨','🪀','🎮','🎁','🧸','🎯','🪁'],
  'teachers':  ['🌸','🍎','📚','✏️','🏫','💡','🌻','🎗️','🌷','🦋','📝','🌈'],
  'science':   ['🔬','🧪','⚗️','🧬','💡','🔭','🧲','⚡','🌡️','🔋','🧫','🔩'],
  'activities':['🎯','🎨','🏃','🎤','🧩','🎭','🌿','🪁','🎪','🏅','🎶','🔬'],
  'patriotic': ['🇮🇳','🏳️','🎺','🥁','🌅','⭐','🕊️','🎗️','🌸','🏅','🎆','✨'],
};

const SLOT_BGS = [
  'linear-gradient(135deg,#2C1A0E,#4A2C0A)', 'linear-gradient(135deg,#1E2C1A,#2C4A30)',
  'linear-gradient(135deg,#1A1E2C,#2C305A)', 'linear-gradient(135deg,#2C1A2A,#4A2C45)',
  'linear-gradient(135deg,#2C2210,#4A3820)', 'linear-gradient(135deg,#1A2C2C,#2C4A4A)',
  'linear-gradient(135deg,#2C1A1A,#4A2C2C)', 'linear-gradient(135deg,#1E1A2C,#3A305C)',
  'linear-gradient(135deg,#2C2A1A,#4A4830)', 'linear-gradient(135deg,#1A2C20,#2C4A38)',
  'linear-gradient(135deg,#2C1E10,#4A3420)', 'linear-gradient(135deg,#1E2A2C,#304A4A)',
];

/* ============================================================
   ── RENDER FUNCTIONS ────────────────────────────────────────
   ============================================================ */

/** Returns initials from a name string. */
function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

/** Render the photo grid for a given year key. */
function renderPhotoGrid(year) {
  const grid = document.getElementById('photoGrid');
  if (!grid) return;
  const cards = YEAR_CONTENT[year] || [];
  const spanClasses = ['pc-1','pc-2','pc-3','pc-4','pc-5','pc-6','pc-7'];
  grid.innerHTML = '';
  cards.forEach((card, i) => {
    const cls = spanClasses[i] || 'pc-4';
    const el = document.createElement('div');
    el.className = `photo-card ${cls}`;
    if (card.eventKey) {
      el.setAttribute('onclick', `openEventAlbum('${card.eventKey}', '${card.caption}')`);
    }
    if (card.coverImg) {
      el.innerHTML = `
        <img src="${card.coverImg}" alt="${card.caption}" loading="lazy" decoding="async"/>
        <div class="photo-caption"><span>${card.caption}</span></div>`;
    } else {
      el.innerHTML = `
        <div class="photo-placeholder">
          <span>${card.emoji}</span>
          <span class="ph-label">${card.label}</span>
        </div>
        <div class="photo-caption"><span>${card.caption}</span></div>`;
    }
    grid.appendChild(el);
  });
  // Re-observe new elements for stagger animation
  if (window._staggerObs) {
    window._staggerObs.disconnect();
    window._staggerObs.observe(grid);
  }
}

/** Render the year tab buttons. */
function renderYearTabs(activeYear) {
  const container = document.getElementById('yearTabsInner');
  if (!container) return;
  const years = Object.keys(YEAR_CONTENT).sort().reverse();
  container.innerHTML = '';
  years.forEach(year => {
    const btn = document.createElement('button');
    btn.className = 'year-tab' + (year === activeYear ? ' active' : '');
    btn.textContent = year;
    btn.setAttribute('aria-pressed', year === activeYear);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.year-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed','true');
      renderPhotoGrid(year);
      renderPolaroids(year);
      updateFooterYear(year);
    });
    container.appendChild(btn);
  });
}

/** Render polaroid row for a given year. */
function renderPolaroids(year) {
  const row = document.getElementById('polaroidRow');
  if (!row) return;
  const data = POLAROID_DATA[year] || POLAROID_DATA['2025-26'];
  row.innerHTML = '';
  data.forEach(p => {
    const el = document.createElement('div');
    el.className = 'polaroid';
    el.style.setProperty('--rot', p.rot);
    el.innerHTML = `
      <div class="polaroid-ph">${p.emoji}</div>
      <div class="polaroid-note">${p.note}</div>`;
    row.appendChild(el);
  });
}

/** Render teacher cards grid. */
function renderTeachers() {
  const grid = document.getElementById('teachersGrid');
  if (!grid) return;
  grid.innerHTML = '';
  TEACHERS.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'teacher-card reveal' + (t.isPrincipal ? ' principal' : '');
    if (t.isPrincipal) {
      el.innerHTML = `
        <div class="teacher-avatar">${initials(t.name)}</div>
        <div>
          <div class="principal-badge">Principal</div>
          <div class="teacher-name">${t.name}</div>
          <div class="teacher-subject">${t.subject}</div>
          <p class="teacher-quote">${t.quote}</p>
        </div>`;
    } else {
      const delay = ['','reveal-delay-1','reveal-delay-2','reveal-delay-3'][i % 4];
      el.classList.add(delay);
      el.innerHTML = `
        <div class="teacher-avatar">${initials(t.name)}</div>
        <div class="teacher-name">${t.name}</div>
        <div class="teacher-subject">${t.subject}</div>
        <p class="teacher-quote">${t.quote}</p>`;
    }
    grid.appendChild(el);
  });
  // Observe newly created reveal elements
  document.querySelectorAll('.teacher-card.reveal').forEach(el => {
    if (window._revealObs) window._revealObs.observe(el);
  });
}

/** Render video cards grid. */
function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  grid.innerHTML = '';
  VIDEOS.forEach(v => {
    const el = document.createElement('div');
    el.className = 'video-card';
    const onClickAttr = v.embedUrl
      ? `onclick="openEmbedVideo('${v.embedUrl}', this)"`
      : '';
    el.innerHTML = `
      <div class="video-thumb" ${onClickAttr}>
        <div class="play-btn">
          <svg width="18" height="18" viewBox="0 0 18 18"><polygon points="6,3 15,9 6,15"/></svg>
        </div>
        <div class="video-thumb-ph">${v.emoji || '🎬'}</div>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <p>${v.date}</p>
      </div>`;
    grid.appendChild(el);
  });
}

/** Render timeline. */
function renderTimeline() {
  const container = document.getElementById('timelineContent');
  if (!container) return;
  container.innerHTML = '';
  TIMELINE.forEach(item => {
    const el = document.createElement('div');
    el.className = 'tl-item reveal';
    el.innerHTML = `
      <div class="tl-year">${item.year}</div>
      <div class="tl-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>`;
    container.appendChild(el);
  });
  document.querySelectorAll('#timelineContent .reveal').forEach(el => {
    if (window._revealObs) window._revealObs.observe(el);
  });
}

/** Update footer year display. */
function updateFooterYear(year) {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = `Class of ${year} · Forever in each other's hearts`;
}

/* ============================================================
   ── EVENT ALBUM ─────────────────────────────────────────────
   ============================================================ */

let currentEventKey = '';
const EVENT_SLOTS = 12;
let evtViewerKey = '';
let evtViewerIdx = 0;

function openEventAlbum(eventKey, title) {
  currentEventKey = eventKey;
  document.getElementById('eventAlbumTitle').textContent = title;
  document.getElementById('eventAlbumOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderEventAlbum(eventKey);
}

function closeEventAlbum() {
  document.getElementById('eventAlbumOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderEventAlbum(key) {
  const grid = document.getElementById('eventAlbumGrid');
  const stored = JSON.parse(localStorage.getItem('evt_' + key) || '[]');
  const photos = stored.length > 0 ? stored : (BUILT_IN_PHOTOS[key] || []);
  const baseKey = key.split('_')[0];
  const samples = EVENT_SAMPLES[baseKey] || Array(12).fill('📷');
  const slotCount = photos.length > 0 ? photos.length : EVENT_SLOTS;

  const countEl = document.getElementById('eventAlbumPhotoCount');
  if (countEl) countEl.textContent = slotCount + (slotCount === 1 ? ' photo' : ' photos');

  grid.innerHTML = '';
  for (let i = 0; i < slotCount; i++) {
    const slot = document.createElement('div');
    slot.className = 'event-album-slot';
    slot.style.animationDelay = (i * 0.03) + 's';
    if (photos[i]) {
      const img = document.createElement('img');
      img.src = photos[i];
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = `Photo ${i + 1}`;
      slot.appendChild(img);
      slot.onclick = (idx => () => openEvtViewer(idx, key))(i);
    } else {
      slot.style.background = SLOT_BGS[i % SLOT_BGS.length];
      slot.innerHTML = `<span style="font-size:2rem">${samples[i]}</span><span class="slot-label">Photo ${i + 1}</span>`;
    }
    grid.appendChild(slot);
  }
}

function openEvtViewer(idx, key) {
  const stored = JSON.parse(localStorage.getItem('evt_' + key) || '[]');
  const photos = stored.length > 0 ? stored : (BUILT_IN_PHOTOS[key] || []);
  if (!photos.length) return;
  evtViewerKey = key;
  evtViewerIdx = idx;
  document.getElementById('evtViewerImg').src = photos[idx];
  document.getElementById('evtViewerCounter').textContent = `${idx + 1} / ${photos.length}`;
  document.getElementById('evtViewer').classList.add('open');
}

function closeEvtViewer() {
  document.getElementById('evtViewer').classList.remove('open');
  document.getElementById('evtViewerImg').src = '';
}

function evtViewerNav(dir) {
  const stored = JSON.parse(localStorage.getItem('evt_' + evtViewerKey) || '[]');
  const photos = stored.length > 0 ? stored : (BUILT_IN_PHOTOS[evtViewerKey] || []);
  if (!photos.length) return;
  evtViewerIdx = (evtViewerIdx + dir + photos.length) % photos.length;
  document.getElementById('evtViewerImg').src = photos[evtViewerIdx];
  document.getElementById('evtViewerCounter').textContent = `${evtViewerIdx + 1} / ${photos.length}`;
}

// Swipe support for event viewer
(function () {
  let sx = 0;
  const v = document.getElementById('evtViewer');
  if (!v) return;
  v.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  v.addEventListener('touchend', e => {
    const diff = sx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) evtViewerNav(diff > 0 ? 1 : -1);
  });
})();

/* ============================================================
   ── MEMORIES ALBUM ──────────────────────────────────────────
   ============================================================ */

let memYear = '2025-26';
let viewerMode = 'mem';
let viewerIdx = 0;
let viewerEventKey = '';

function openMemoriesAlbum(year) {
  memYear = year;
  document.getElementById('memTitle').textContent = `Memories · ${year}`;
  document.getElementById('memoriesOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderMemGrid();
}

function closeMemories() {
  document.getElementById('memoriesOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function getMemPhotos(year) {
  return JSON.parse(localStorage.getItem('mem_' + year) || '[]');
}

function saveMemPhotos(year, photos) {
  try { localStorage.setItem('mem_' + year, JSON.stringify(photos)); } catch(e) {}
}

function renderMemGrid() {
  const grid = document.getElementById('memGrid');
  const photos = getMemPhotos(memYear);
  document.getElementById('memCount').textContent = photos.length + (photos.length === 1 ? ' photo' : ' photos');
  grid.innerHTML = '';
  if (!photos.length) {
    grid.innerHTML = `<div class="mem-empty"><div class="mem-empty-icon">📷</div><p>Tap "+ Add Photos" to upload the first photo!</p></div>`;
    return;
  }
  photos.forEach((src, idx) => {
    const div = document.createElement('div');
    div.className = 'mem-photo-item';
    div.style.animationDelay = (idx * 0.04) + 's';
    div.innerHTML = `<img src="${src}" loading="lazy" decoding="async" alt="Memory ${idx+1}"/>
      <div class="mem-photo-hover"><button class="mem-remove-btn" onclick="event.stopPropagation();removeMemPhoto(${idx})">✕</button></div>`;
    div.onclick = () => openViewer(idx);
    grid.appendChild(div);
  });
}

function handleMemUpload(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  const photos = getMemPhotos(memYear);
  let pending = files.length;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      photos.push(ev.target.result);
      if (--pending === 0) { saveMemPhotos(memYear, photos); renderMemGrid(); }
    };
    reader.readAsDataURL(file);
  });
  e.target.value = '';
}

function removeMemPhoto(idx) {
  if (!confirm('Remove this photo?')) return;
  const photos = getMemPhotos(memYear);
  photos.splice(idx, 1);
  saveMemPhotos(memYear, photos);
  renderMemGrid();
}

function openViewer(idx) {
  viewerMode = 'mem';
  viewerIdx = idx;
  const photos = getMemPhotos(memYear);
  document.getElementById('memViewerImg').src = photos[idx];
  document.getElementById('memViewerCounter').textContent = `${idx + 1} / ${photos.length}`;
  document.getElementById('memViewer').classList.add('open');
}

function closeViewer() {
  document.getElementById('memViewer').classList.remove('open');
  document.getElementById('memViewerImg').src = '';
}

function viewerNav(dir) {
  const photos = getMemPhotos(memYear);
  if (!photos.length) return;
  viewerIdx = (viewerIdx + dir + photos.length) % photos.length;
  document.getElementById('memViewerImg').src = photos[viewerIdx];
  document.getElementById('memViewerCounter').textContent = `${viewerIdx + 1} / ${photos.length}`;
}

// Swipe support for mem viewer
(function () {
  let sx = 0;
  const v = document.getElementById('memViewer');
  if (!v) return;
  v.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  v.addEventListener('touchend', e => {
    const diff = sx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) viewerNav(diff > 0 ? 1 : -1);
  });
})();

/* ============================================================
   ── INLINE VIDEO EMBED ──────────────────────────────────────
   ============================================================ */

function openEmbedVideo(embedUrl, el) {
  const card = el.closest ? el.closest('.video-card') : el.parentElement;
  if (!card) return;
  const thumb = card.querySelector('.video-thumb');
  if (!thumb) return;
  const iframe = document.createElement('iframe');
  iframe.src = embedUrl + '?autoplay=1&rel=0';
  iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
  iframe.allow = 'autoplay; encrypted-media; fullscreen';
  iframe.allowFullscreen = true;
  thumb.innerHTML = '';
  thumb.appendChild(iframe);
  card.onclick = null;
}

/* ============================================================
   ── WISHES ──────────────────────────────────────────────────
   ============================================================ */

const WISHES_PER_PAGE = 9;
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0pj7iwt5jSMrQoBQTXizASEcojEbQ14LKMEXc90ZBLQZhVn5sCCeyT5lKOJu32n3eCQ/exec';
const WISH_COLORS = [
  'linear-gradient(135deg,#D4A843,#8B5E3C)',
  'linear-gradient(135deg,#8B5E3C,#5C3D1E)',
  'linear-gradient(135deg,#A0714F,#4A2C0A)',
];
let allWishesData = [];
let wishesShown = WISHES_PER_PAGE;

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderWishCards(wishes, count) {
  const grid = document.getElementById('wishesGrid');
  if (!grid) return;
  const shown = wishes.slice(0, count);
  grid.innerHTML = shown.map((w, i) => {
    if (!w.name) return '';
    const color = WISH_COLORS[i % WISH_COLORS.length];
    return `<div class="wish-card visible" style="animation:fadeUp 0.6s ease both;animation-delay:${i*0.06}s">
      <p class="wish-quote">${escHtml(w.message)}</p>
      <div class="wish-author">
        <div class="wish-avatar" style="background:${color}">${escHtml(w.name.charAt(0).toUpperCase())}</div>
        <div>
          <div class="wish-name">${escHtml(w.name)}</div>
          <div class="wish-role">${escHtml(w.section || 'Shakuntalite · 2025–26')}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  const countEl = document.getElementById('wishCount');
  if (countEl) countEl.textContent = wishes.length + ' wishes on the wall';
  const moreBtn = document.getElementById('showMoreBtn');
  const lessBtn = document.getElementById('showLessBtn');
  if (moreBtn) moreBtn.style.display = wishes.length > count ? 'block' : 'none';
  if (lessBtn) lessBtn.style.display = count > WISHES_PER_PAGE ? 'block' : 'none';
}

function showMoreWishes() { wishesShown += WISHES_PER_PAGE; renderWishCards(allWishesData, wishesShown); }
function showLessWishes() {
  wishesShown = WISHES_PER_PAGE;
  renderWishCards(allWishesData, wishesShown);
  document.getElementById('wishes').scrollIntoView({ behavior: 'smooth' });
}

function loadWishes() {
  fetch(SCRIPT_URL)
    .then(r => r.json())
    .then(wishes => {
      allWishesData = wishes.reverse().filter(w => w.name);
      renderWishCards(allWishesData, wishesShown);
    })
    .catch(() => { /* Silently fail — no wishes loaded */ });
}

function addWish() {
  const name = document.getElementById('wishName').value.trim();
  const rawSec = document.getElementById('wishSec').value.trim();
  const rawYear = document.getElementById('wishYear').value.trim();
  const text = document.getElementById('wishText').value.trim();
  if (!name || !text) { alert('Please fill in your name and message!'); return; }

  const secPart  = rawSec  ? 'Section-' + rawSec.toUpperCase().replace(/section[-\s]*/i,'') : '';
  const yearPart = rawYear ? 'Batch ' + rawYear : '';
  const section  = [secPart, yearPart].filter(Boolean).join(' · ') || 'Shakuntalite · 2025–26';

  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'Saving...';
  btn.disabled = true;

  const addCard = () => {
    const color = WISH_COLORS[Math.floor(Math.random() * WISH_COLORS.length)];
    const card = document.createElement('div');
    card.className = 'wish-card visible';
    card.style.animation = 'fadeUp 0.6s ease both';
    card.innerHTML = `
      <p class="wish-quote">${escHtml(text)}</p>
      <div class="wish-author">
        <div class="wish-avatar" style="background:${color}">${escHtml(name.charAt(0).toUpperCase())}</div>
        <div>
          <div class="wish-name">${escHtml(name)}</div>
          <div class="wish-role">${escHtml(section)}</div>
        </div>
      </div>`;
    const grid = document.getElementById('wishesGrid');
    grid.prepend(card);
    ['wishName','wishSec','wishYear','wishText'].forEach(id => { document.getElementById(id).value = ''; });
    btn.textContent = 'Pin to the Wall ✦';
    btn.disabled = false;
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({ name, section, message: text }),
    mode: 'no-cors'
  }).then(addCard).catch(addCard);
}

/* ============================================================
   ── LIGHTBOX ────────────────────────────────────────────────
   ============================================================ */

function openLightbox(emoji, caption) {
  document.getElementById('lightbox-img').textContent = emoji;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

/* ============================================================
   ── INIT ────────────────────────────────────────────────────
   ============================================================ */

(function init() {
  const DEFAULT_YEAR = '2025-26';
  renderYearTabs(DEFAULT_YEAR);
  renderPhotoGrid(DEFAULT_YEAR);
  renderPolaroids(DEFAULT_YEAR);
  renderTeachers();
  renderVideos();
  renderTimeline();
  loadWishes();
  updateFooterYear(DEFAULT_YEAR);
})();
