

/**
 * @param {string} pageId
 */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function (p) {
    p.classList.remove('active');
  });

  var target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.page === pageId);
  });

  if (pageId === 'televisions') {
    buildSizeBarChart();
    buildTechBarChart();
    buildScatterPlot();
  }

  if (pageId === 'story') {
    buildTechFreqChart();
  }
}


var tvSizeData = [
  { label: '32"',  watts: 40  },
  { label: '43"',  watts: 65  },
  { label: '55"',  watts: 95  },
  { label: '65"',  watts: 130 },
  { label: '75"',  watts: 165 },
  { label: '85"',  watts: 210 }
];


var tvTechData = [
  { label: 'OLED',     watts: 80  },
  { label: 'LED',      watts: 95  },
  { label: 'QLED',     watts: 110 },
  { label: 'Mini-LED', watts: 120 }
];


var techFreqData = [
  { label: 'LED',      pct: 68 },
  { label: 'QLED',     pct: 15 },
  { label: 'OLED',     pct: 10 },
  { label: 'Mini-LED', pct: 5  },
  { label: 'Other',    pct: 2  }
];


var scatterData = [
  { size: 32, watts: 38 }, { size: 32, watts: 40 }, { size: 32, watts: 35 },
  { size: 40, watts: 55 }, { size: 40, watts: 58 },
  { size: 43, watts: 60 }, { size: 43, watts: 65 }, { size: 43, watts: 70 }, { size: 43, watts: 63 },
  { size: 50, watts: 80 }, { size: 50, watts: 85 },
  { size: 55, watts: 90 }, { size: 55, watts: 95 }, { size: 55, watts: 100 }, { size: 55, watts: 88 },
  { size: 58, watts: 105 },
  { size: 65, watts: 120 }, { size: 65, watts: 130 }, { size: 65, watts: 125 }, { size: 65, watts: 140 },
  { size: 70, watts: 145 },
  { size: 75, watts: 155 }, { size: 75, watts: 165 }, { size: 75, watts: 160 }, { size: 75, watts: 175 },
  { size: 85, watts: 200 }, { size: 85, watts: 210 }, { size: 85, watts: 195 }
];


var sizeChartRendered = false;

function buildSizeBarChart() {
  if (sizeChartRendered) return;
  sizeChartRendered = true;
  buildBarChart('barChart', tvSizeData);
}



var techChartRendered = false;

function buildTechBarChart() {
  if (techChartRendered) return;
  techChartRendered = true;
  buildBarChart('techChart', tvTechData);
}

/**
 * Generic animated bar chart builder.
 * @param {string} containerId  
 * @param {Array}  data         
 */
function buildBarChart(containerId, data) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var maxWatts   = Math.max.apply(null, data.map(function (d) { return d.watts; }));
  var chartHeight = 200;

  container.innerHTML = '';

  data.forEach(function (item, index) {
    var targetHeight = Math.round((item.watts / maxWatts) * chartHeight);

    var col      = document.createElement('div');
    col.className = 'bar-col';

    var valueEl   = document.createElement('div');
    valueEl.className  = 'bar-value';
    valueEl.textContent = item.watts + 'W';

    var fill      = document.createElement('div');
    fill.className     = 'bar-fill';
    fill.style.height  = '0px';
    fill.setAttribute('title', item.label + ' — ' + item.watts + 'W');

    var labelEl   = document.createElement('div');
    labelEl.className  = 'bar-label';
    labelEl.textContent = item.label;

    col.appendChild(valueEl);
    col.appendChild(fill);
    col.appendChild(labelEl);
    container.appendChild(col);

    setTimeout(function () {
      fill.style.transition = 'height 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      fill.style.height = targetHeight + 'px';
    }, 100 + index * 80);
  });
}



var scatterRendered = false;

function buildScatterPlot() {
  if (scatterRendered) return;
  scatterRendered = true;

  var svg    = document.getElementById('scatterPlot');
  if (!svg) return;

  var vw     = 680, vh = 300;
  var pad    = { top: 24, right: 24, bottom: 48, left: 52 };
  var plotW  = vw - pad.left - pad.right;
  var plotH  = vh - pad.top  - pad.bottom;

  var minSize = 30,  maxSize = 90;
  var minWatt = 30,  maxWatt = 220;

  function scaleX(size)  { return pad.left  + ((size  - minSize) / (maxSize - minSize)) * plotW; }
  function scaleY(watts) { return pad.top   + plotH - ((watts - minWatt) / (maxWatt - minWatt)) * plotH; }

  function el(tag, attrs) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }

  [50, 100, 150, 200].forEach(function (w) {
    var y = scaleY(w);
    svg.appendChild(el('line', { x1: pad.left, y1: y, x2: pad.left + plotW, y2: y,
      stroke: '#efefef', 'stroke-width': 1 }));
    svg.appendChild(el('text', { x: pad.left - 6, y: y + 4, 'text-anchor': 'end',
      'font-size': '10', fill: '#888', 'font-family': 'Syne, sans-serif' }))
      .textContent = w + 'W';
  });

  
  [32, 43, 55, 65, 75, 85].forEach(function (s) {
    var x = scaleX(s);
    svg.appendChild(el('text', { x: x, y: pad.top + plotH + 18, 'text-anchor': 'middle',
      'font-size': '10', fill: '#888', 'font-family': 'Syne, sans-serif' }))
      .textContent = s + '"';
  });

  
  var n    = scatterData.length;
  var sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
  scatterData.forEach(function (d) {
    sumX  += d.size;
    sumY  += d.watts;
    sumXY += d.size * d.watts;
    sumX2 += d.size * d.size;
  });
  var slope     = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  var intercept = (sumY - slope * sumX) / n;

  var x1 = minSize, y1 = slope * x1 + intercept;
  var x2 = maxSize, y2 = slope * x2 + intercept;

  svg.appendChild(el('line', {
    x1: scaleX(x1), y1: scaleY(y1), x2: scaleX(x2), y2: scaleY(y2),
    stroke: '#d4a843', 'stroke-width': 2, 'stroke-dasharray': '6 4', opacity: 0.8
  }));

  /* Data points */
  scatterData.forEach(function (d, i) {
    var cx = scaleX(d.size);
    var cy = scaleY(d.watts);

    var circle = el('circle', {
      cx: cx, cy: cy, r: 5,
      fill: '#0a0a0a', opacity: 0,
      style: 'cursor:pointer;transition:opacity 0.3s,r 0.2s'
    });
    svg.appendChild(circle);

    setTimeout(function () {
      circle.setAttribute('opacity', '0.75');
    }, 50 + i * 20);

    circle.addEventListener('mouseenter', function () {
      this.setAttribute('r', '7');
      this.setAttribute('opacity', '1');
    });
    circle.addEventListener('mouseleave', function () {
      this.setAttribute('r', '5');
      this.setAttribute('opacity', '0.75');
    });
  });

  /* Axis labels */
  var xlabel = el('text', {
    x: pad.left + plotW / 2, y: vh - 4, 'text-anchor': 'middle',
    'font-size': '10', fill: '#888', 'font-family': 'Syne, sans-serif',
    'font-weight': '600', 'letter-spacing': '0.08em'
  });
  xlabel.textContent = 'SCREEN SIZE (INCHES)';
  svg.appendChild(xlabel);

  var ylabel = el('text', {
    x: 12, y: pad.top + plotH / 2, 'text-anchor': 'middle',
    'font-size': '10', fill: '#888', 'font-family': 'Syne, sans-serif',
    'font-weight': '600', 'letter-spacing': '0.08em',
    transform: 'rotate(-90, 12, ' + (pad.top + plotH / 2) + ')'
  });
  ylabel.textContent = 'POWER (WATTS)';
  svg.appendChild(ylabel);

  /* Legend */
  var lg = el('g', { transform: 'translate(' + (pad.left + plotW - 140) + ',' + (pad.top + 10) + ')' });
  lg.appendChild(el('rect', { width: 130, height: 48, rx: 6, fill: 'white', stroke: '#efefef' }));

  var dot = el('circle', { cx: 16, cy: 16, r: 5, fill: '#0a0a0a' });
  lg.appendChild(dot);
  var dotLabel = el('text', { x: 28, y: 20, 'font-size': '10', fill: '#444', 'font-family': 'Syne, sans-serif' });
  dotLabel.textContent = 'TV Model';
  lg.appendChild(dotLabel);

  var tl = el('line', { x1: 8, y1: 36, x2: 24, y2: 36, stroke: '#d4a843', 'stroke-width': 2, 'stroke-dasharray': '4 3' });
  lg.appendChild(tl);
  var tlLabel = el('text', { x: 28, y: 40, 'font-size': '10', fill: '#444', 'font-family': 'Syne, sans-serif' });
  tlLabel.textContent = 'Trend Line';
  lg.appendChild(tlLabel);

  svg.appendChild(lg);
}



var techFreqRendered = false;

function buildTechFreqChart() {
  if (techFreqRendered) return;
  techFreqRendered = true;

  var container = document.getElementById('techFreqChart');
  if (!container) return;

  container.innerHTML = '';

  techFreqData.forEach(function (item, index) {
    var row = document.createElement('div');
    row.className = 'tech-bar-row';

    var name = document.createElement('div');
    name.className   = 'tech-bar-name';
    name.textContent = item.label;

    var track = document.createElement('div');
    track.className = 'tech-bar-track';

    var fill = document.createElement('div');
    fill.className = 'tech-bar-fill';
    fill.style.width = '0%';

    var label = document.createElement('span');
    label.textContent = item.pct + '%';
    fill.appendChild(label);

    track.appendChild(fill);
    row.appendChild(name);
    row.appendChild(track);
    container.appendChild(row);

    setTimeout(function () {
      fill.style.width = item.pct + '%';
    }, 150 + index * 100);
  });
}



document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && document.activeElement.classList.contains('nav-btn')) {
    document.activeElement.click();
  }
});



(function init() {
  var params     = new URLSearchParams(window.location.search);
  var page       = params.get('page');
  var validPages = ['home', 'story', 'televisions', 'about'];

  if (validPages.indexOf(page) !== -1) {
    showPage(page);
  } else {
    showPage('home');
  }
})();
