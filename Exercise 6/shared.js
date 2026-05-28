

:root {
  --black:      #0a0a0a;
  --off-black:  #141414;
  --gray-900:   #1f1f1f;
  --gray-700:   #444444;
  --gray-500:   #888888;
  --gray-300:   #c8c8c8;
  --gray-100:   #efefef;
  --gray-50:    #f7f7f7;
  --white:      #ffffff;

  --accent:     #d4a843;   
  --accent-dim: #8a6c28;

  --serif:  'Playfair Display', Georgia, serif;
  --sans:   'Syne', system-ui, sans-serif;

  --radius: 10px;
  --ease:   0.22s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--sans);
  background: var(--white);
  color: var(--black);
  font-size: 16px;
  line-height: 1.65;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}



header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--gray-100);
}

.navbar {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: var(--black);
  transition: opacity var(--ease);
  user-select: none;
}
.nav-logo:hover { opacity: 0.5; }

.logo-svg {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}
.nav-logo:hover .logo-svg { transform: rotate(20deg); }

.logo-text {
  font-family: var(--serif);
  font-size: 1.2rem;
  letter-spacing: -0.02em;
  font-weight: 600;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 4px;
}

.nav-btn {
  background: none;
  border: 1px solid transparent;
  font-family: var(--sans);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gray-500);
  cursor: pointer;
  padding: 6px 16px;
  border-radius: 100px;
  transition: all var(--ease);
}
.nav-btn:hover {
  color: var(--black);
  border-color: var(--gray-300);
  background: var(--gray-50);
}
.nav-btn.active {
  color: var(--white);
  background: var(--black);
  border-color: var(--black);
}



.page { display: none; flex: 1; }
.page.active { display: block; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page.active > * {
  animation: fadeUp 0.4s ease both;
}
.page.active > *:nth-child(2) { animation-delay: 0.07s; }
.page.active > *:nth-child(3) { animation-delay: 0.13s; }
.page.active > *:nth-child(4) { animation-delay: 0.19s; }



.hero {
  max-width: 760px;
  margin: 0 auto;
  padding: 96px 2rem 80px;
  text-align: center;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gray-500);
  border: 1px solid var(--gray-300);
  padding: 5px 16px;
  border-radius: 100px;
  margin-bottom: 2rem;
}

.hero-title {
  font-family: var(--serif);
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.03em;
  color: var(--black);
  margin-bottom: 1.5rem;
}
.hero-title em {
  font-style: italic;
  font-weight: 400;
  color: var(--accent-dim);
}

.hero-sub {
  font-size: 1rem;
  color: var(--gray-500);
  max-width: 540px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}

.cta-btn {
  background: var(--black);
  color: var(--white);
  border: 2px solid var(--black);
  padding: 13px 32px;
  border-radius: 100px;
  font-family: var(--sans);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--ease);
}
.cta-btn:hover {
  background: var(--white);
  color: var(--black);
  transform: translateY(-2px);
}

/* ═══ HOME — STATS BAND ═══ */

.stats-band {
  background: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 52px 2rem;
  gap: 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 48px;
}

.stat-number {
  font-family: var(--serif);
  font-size: 2.6rem;
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 0.72rem;
  color: var(--gray-500);
  max-width: 130px;
  line-height: 1.45;
  letter-spacing: 0.02em;
}

.stat-divider {
  width: 1px;
  height: 56px;
  background: var(--gray-700);
}



.cards-section {
  max-width: 1080px;
  margin: 0 auto;
  padding: 88px 2rem;
}

.section-title {
  font-family: var(--serif);
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--black);
  margin-bottom: 1rem;
}

.section-desc {
  font-size: 0.9rem;
  color: var(--gray-500);
  margin-bottom: 2.5rem;
  max-width: 640px;
  line-height: 1.7;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1px;
  border: 1px solid var(--black);
}

.card {
  padding: 36px 28px;
  border: none;
  background: var(--white);
  transition: background var(--ease);
  cursor: default;
}
.card:hover { background: var(--gray-50); }

.card-invert {
  background: var(--black);
  color: var(--white);
}
.card-invert:hover { background: var(--gray-900); }
.card-invert h3 { color: var(--white); }
.card-invert p  { color: var(--gray-300); }
.card-invert .card-tag {
  background: var(--gray-700);
  color: var(--gray-100);
}

.card-num {
  font-family: var(--serif);
  font-size: 2.6rem;
  font-weight: 400;
  color: var(--gray-100);
  line-height: 1;
  margin-bottom: 1rem;
}
.card-invert .card-num { color: var(--gray-700); }

.card h3 {
  font-family: var(--serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--black);
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
}

.card p {
  font-size: 0.85rem;
  color: var(--gray-700);
  line-height: 1.65;
  margin-bottom: 1.4rem;
}

.card-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--gray-100);
  color: var(--gray-700);
  padding: 4px 12px;
  border-radius: 100px;
}



.insight-strip {
  background: var(--gray-50);
  border-top: 1px solid var(--gray-100);
  border-bottom: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 68px 10%;
  flex-wrap: wrap;
}

.insight-text { max-width: 560px; }

.insight-text h2 {
  font-family: var(--serif);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.insight-text p {
  font-size: 0.9rem;
  color: var(--gray-700);
  line-height: 1.75;
}

.star-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.star-row {
  font-size: 3rem;
}

.star-block small {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray-500);
}



.page-header {
  background: var(--black);
  color: var(--white);
  padding: 84px 2rem 72px;
  text-align: center;
}

.page-eyebrow {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.page-title {
  font-family: var(--serif);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 400;
  color: var(--white);
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.page-intro {
  font-size: 0.95rem;
  color: var(--gray-500);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.75;
}


.story-body {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 2rem 80px;
}

.story-chapter {
  padding: 72px 0 56px;
  border-bottom: 1px solid var(--gray-100);
}

.story-chapter.alt-bg {
  margin: 0 -2rem;
  padding: 72px 2rem 56px;
  background: var(--gray-50);
  border-bottom: 1px solid var(--gray-100);
}

.story-chapter.conclusion-chapter {
  border-bottom: none;
  text-align: center;
}
.story-chapter.conclusion-chapter .chapter-content {
  max-width: 640px;
  margin: 0 auto 2.5rem;
}

.chapter-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-dim);
  margin-bottom: 0.75rem;
}

.chapter-title {
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--black);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.chapter-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chapter-content p {
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.85;
}

.chapter-content strong { color: var(--black); }

.chapter-content em {
  font-style: italic;
  color: var(--gray-700);
}

.story-callout {
  margin-top: 2rem;
  background: var(--black);
  color: var(--gray-300);
  padding: 20px 24px;
  border-radius: var(--radius);
  font-size: 0.88rem;
  line-height: 1.65;
  border-left: 4px solid var(--accent);
}
.story-callout strong { color: var(--accent); }

.story-callout.warning {
  background: #1a1200;
  border-left-color: #d4a843;
}

/* Mini tech frequency chart on story page */
.story-viz-wrap {
  margin-top: 2.5rem;
}

.mini-chart-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-500);
  margin-bottom: 1.25rem;
}

.tech-bar-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech-bar-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tech-bar-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--black);
  width: 80px;
  flex-shrink: 0;
}

.tech-bar-track {
  flex: 1;
  height: 28px;
  background: var(--gray-100);
  border-radius: 4px;
  overflow: hidden;
}

.tech-bar-fill {
  height: 100%;
  background: var(--black);
  border-radius: 4px;
  width: 0;
  transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
}

.tech-bar-fill span {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--white);
}

/* Brand pills */
.brand-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 2rem;
}

.brand-pill {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 100px;
  letter-spacing: 0.02em;
}

.brand-pill.tier-1 { background: var(--black); color: var(--white); }
.brand-pill.tier-2 { background: var(--gray-700); color: var(--white); }
.brand-pill.tier-3 { background: var(--gray-200); color: var(--black); border: 1px solid var(--gray-300); }

/* Story table */
.tech-power-table { margin-top: 2rem; }

.story-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.story-table thead th {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-500);
  text-align: left;
  padding: 0 14px 14px;
  border-bottom: 2px solid var(--black);
}

.story-table tbody tr {
  border-bottom: 1px solid var(--gray-100);
  transition: background var(--ease);
}
.story-table tbody tr:hover { background: var(--gray-50); }
.story-table tbody td { padding: 16px 14px; }

.verdict {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
}
.verdict.best  { background: #0a0a0a; color: var(--accent); }
.verdict.good  { background: var(--gray-700); color: var(--white); }
.verdict.mid   { background: var(--gray-100); color: var(--gray-700); }



.tv-section {
  max-width: 1080px;
  margin: 0 auto;
  padding: 72px 2rem 56px;
}

.alt-bg-section {
  background: var(--gray-50);
  max-width: 100%;
  border-top: 1px solid var(--gray-100);
  border-bottom: 1px solid var(--gray-100);
}

.alt-bg-section > * {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}


.chart-section {
  margin-top: 2rem;
}

.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  height: 240px;
  margin-bottom: 14px;
  border-bottom: 2px solid var(--black);
  padding: 0 4px;
}

.bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 8px;
}

.bar-fill {
  width: 100%;
  background: var(--black);
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: background var(--ease);
  position: relative;
}
.bar-fill:hover { background: var(--accent-dim); }

.bar-fill::after {
  content: attr(title);
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--black);
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.bar-fill:hover::after { opacity: 1; }

.bar-value {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--black);
}

.bar-label {
  font-size: 0.72rem;
  color: var(--gray-500);
  text-align: center;
}

.chart-legend {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--gray-500);
  margin-top: 12px;
}

.legend-swatch {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: var(--black);
  border-radius: 3px;
}

/* Scatter Plot */
.scatter-wrap {
  margin-top: 2rem;
  border: 1px solid var(--gray-100);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
}

.scatter-svg {
  width: 100%;
  display: block;
}

/* Data Table */
.table-wrap { overflow-x: auto; margin-top: 1rem; }

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.data-table thead th {
  font-family: var(--sans);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-500);
  text-align: left;
  padding: 0 16px 16px;
  border-bottom: 2px solid var(--black);
}

.data-table tbody tr {
  border-bottom: 1px solid var(--gray-100);
  transition: background var(--ease);
}
.data-table tbody tr:hover { background: var(--gray-50); }
.data-table tbody td { padding: 18px 16px; }

.tech-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 100px;
  background: var(--gray-100);
  color: var(--gray-700);
}
.tech-badge.b-mid {
  background: var(--gray-700);
  color: var(--white);
}
.tech-badge.b-dark {
  background: var(--black);
  color: var(--white);
}

.table-note {
  margin-top: 14px;
  font-size: 0.75rem;
  color: var(--gray-500);
  line-height: 1.6;
}


.tips-section {
  background: var(--gray-50);
  border-top: 1px solid var(--gray-100);
  padding: 72px 2rem;
}
.tips-section .section-title {
  max-width: 1080px;
  margin: 0 auto 2.5rem;
}

.tips-grid {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  border: 1px solid var(--gray-300);
  background: var(--gray-300);
}

.tip-card {
  background: var(--white);
  padding: 32px 26px;
  transition: background var(--ease);
}
.tip-card:hover { background: var(--black); }
.tip-card:hover .tip-num { color: var(--gray-700); }
.tip-card:hover h3 { color: var(--accent); }
.tip-card:hover p  { color: var(--gray-300); }

.tip-num {
  font-family: var(--serif);
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--gray-100);
  line-height: 1;
  margin-bottom: 1rem;
  transition: color var(--ease);
}

.tip-card h3 {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--black);
  margin-bottom: 10px;
  transition: color var(--ease);
}

.tip-card p {
  font-size: 0.82rem;
  color: var(--gray-700);
  line-height: 1.65;
  transition: color var(--ease);
}


.about-grid {
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 56px 64px;
}

.about-block h2 {
  font-family: var(--serif);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--black);
}

.about-block p {
  font-size: 0.875rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 0.8rem;
}

.src-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0.5rem;
}

.src-list li {
  font-size: 0.875rem;
  color: var(--gray-700);
  padding-left: 18px;
  position: relative;
  line-height: 1.5;
}
.src-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--gray-300);
}

.tech-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: var(--gray-700);
}

.tech-pill {
  display: inline-block;
  background: var(--black);
  color: var(--white);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 4px 11px;
  border-radius: 4px;
  min-width: 82px;
  text-align: center;
  flex-shrink: 0;
}



footer {
  background: var(--black);
  color: var(--gray-700);
  padding: 40px 2rem;
  margin-top: auto;
}

.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 40px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 600;
}

.footer-copy { font-size: 0.78rem; }

.footer-ai {
  font-size: 0.75rem;
  line-height: 1.55;
  margin-left: auto;
  max-width: 440px;
  text-align: right;
}
.footer-ai em {
  font-style: normal;
  font-weight: 600;
  color: var(--gray-300);
}


@media (max-width: 700px) {
  .stats-band    { flex-direction: column; gap: 32px; }
  .stat-divider  { width: 50px; height: 1px; }
  .stat-item     { padding: 0; }
  .insight-strip { flex-direction: column; padding: 48px 6%; }
  .footer-ai     { margin-left: 0; text-align: left; }
  .navbar        { padding: 0 1rem; }
  .nav-btn       { padding: 6px 10px; font-size: 0.72rem; }
  .cards-grid    { grid-template-columns: 1fr; }
  .tips-grid     { grid-template-columns: 1fr; }
  .story-chapter.alt-bg { margin: 0 -1rem; padding-left: 1rem; padding-right: 1rem; }
  .about-grid    { grid-template-columns: 1fr; gap: 40px; }
  .bar-chart     { height: 180px; gap: 8px; }
}

/* ═══════════════════════════════════════════════════
   EXERCISE 4.1 — House SVG page
═══════════════════════════════════════════════════ */
.ex41-wrap {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 2rem 80px;
}
.house-svg {
  width: 100%;
  display: block;
  border-radius: 10px;
  border: 1px solid #efefef;
}

/* ═══════════════════════════════════════════════════
   EXERCISES 4.3–4.6 — D3 chart page
═══════════════════════════════════════════════════ */
.ex43-wrap {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 2rem 80px;
}

/* Ex 4.3: responsive container */
.responsive-svg-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid #efefef;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.responsive-svg-container svg {
  display: block;
  width: 100%;
}

/* D3 bar rects */
.d3bar {
  fill: #0a0a0a;
  cursor: pointer;
  transition: fill 0.2s;
}
.d3bar:hover { fill: #d4a843; }

/* Brand labels */
.d3label-brand {
  font-family: 'Syne', sans-serif;
  font-size: 13px;
  font-weight: 600;
  fill: #0a0a0a;
}

/* Count labels */
.d3label-count {
  font-family: 'Syne', sans-serif;
  font-size: 12px;
  fill: #888;
}

/* Chart title */
.d3-title {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 700;
  fill: #888;
  letter-spacing: 0.08em;
}


/* ═══════════════════════════════════════════════════
   EXERCISE 5 — Multi-chart page
═══════════════════════════════════════════════════ */

.ex5-grid {
  max-width: 1080px;
  margin: 0 auto;
  padding: 56px 2rem 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 720px) {
  .ex5-grid { grid-template-columns: 1fr; }
}

.ex5-card {
  border: 1px solid var(--gray-100);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
  transition: box-shadow var(--ease);
}
.ex5-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}

.ex5-card-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid var(--gray-100);
}

.ex5-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--black);
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 0.75rem;
}

.ex5-chart-title {
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--black);
  margin-bottom: 0.4rem;
  letter-spacing: -0.01em;
}

.ex5-chart-desc {
  font-size: 0.82rem;
  color: var(--gray-500);
  line-height: 1.6;
}

.ex5-chart-wrap {
  padding: 16px;
  background: var(--white);
}
.ex5-chart-wrap svg {
  width: 100%;
  display: block;
}

/* Shared tooltip */
.ex5-tooltip {
  position: fixed;
  pointer-events: none;
  background: var(--black);
  color: var(--white);
  padding: 8px 14px;
  border-radius: 6px;
  font-family: var(--sans);
  font-size: 0.82rem;
  line-height: 1.5;
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: 999;
  border-left: 3px solid var(--accent);
}
.ex5-tooltip strong { color: var(--accent); }
