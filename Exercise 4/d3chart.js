/**
 * d3_chart.js — Exercises 4.3 to 4.6
 * Data embedded directly — no CSV file path dependency
 */

var d3ChartBuilt = false;

function buildD3Chart() {
  if (d3ChartBuilt) return;
  d3ChartBuilt = true;

  /* ── Ex 4.3: append svg into the responsive container ── */
  var svg = d3.select('#d3-chart-container')
    .append('svg')
    .attr('viewBox', '0 0 900 480');

  /* ── Ex 4.4: data from real CSV (tvBrandCount.csv), typed as numbers ── */
  var data = [
    { brand: 'SAMSUNG', count: 1187 },
    { brand: 'KOGAN',   count: 769  },
    { brand: 'LG',      count: 683  },
    { brand: 'HISENSE', count: 326  },
    { brand: 'EKO',     count: 191  },
    { brand: 'JVC',     count: 136  },
    { brand: 'SYLVOX',  count: 132  },
    { brand: 'PHILIPS', count: 117  }
  ];

  /* sort descending */
  data.sort(function (a, b) { return b.count - a.count; });

  createBarChart(svg, data);
}

function createBarChart(svg, data) {

  var margin = { top: 52, right: 90, bottom: 32, left: 110 };
  var width  = 900 - margin.left - margin.right;
  var height = 480 - margin.top  - margin.bottom;

  var chart = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  /* ── Ex 4.6 Step 1: scaleLinear — maps count values to pixel widths ── */
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return d.count; })])
    .range([0, width]);

  /* ── Ex 4.6 Step 2: scaleBand — maps brand names to vertical positions ── */
  var yScale = d3.scaleBand()
    .domain(data.map(function (d) { return d.brand; }))
    .range([0, height])
    .padding(0.35);

  /* Light grid lines */
  chart.selectAll('.grid-line')
    .data(xScale.ticks(5))
    .join('line')
    .attr('x1', function (d) { return xScale(d); })
    .attr('x2', function (d) { return xScale(d); })
    .attr('y1', 0)
    .attr('y2', height)
    .attr('stroke', '#efefef')
    .attr('stroke-width', 1);

  /* ── Ex 4.5: bind data — one <g> per brand, placed on y-axis ── */
  var barGroup = chart.selectAll('g.bar-g')
    .data(data)
    .join('g')
    .attr('class', 'bar-g')
    .attr('transform', function (d) {
      return 'translate(0,' + yScale(d.brand) + ')';
    });

  /* ── Ex 4.5: rect — width driven by xScale, height by bandwidth ── */
  barGroup.append('rect')
    .attr('class', 'd3bar')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', yScale.bandwidth())
    .attr('width', 0)
    .attr('rx', 3)
    .transition()
    .duration(800)
    .delay(function (d, i) { return i * 80; })
    .attr('width', function (d) { return xScale(d.count); });

  /* Brand label on left */
  barGroup.append('text')
    .attr('class', 'd3label-brand')
    .attr('x', -10)
    .attr('y', yScale.bandwidth() / 2)
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .text(function (d) { return d.brand; });

  /* Count label after bar end */
  barGroup.append('text')
    .attr('class', 'd3label-count')
    .attr('y', yScale.bandwidth() / 2)
    .attr('dominant-baseline', 'middle')
    .attr('opacity', 0)
    .attr('x', 4)
    .text(function (d) { return d.count; })
    .transition()
    .duration(800)
    .delay(function (d, i) { return i * 80 + 500; })
    .attr('x', function (d) { return xScale(d.count) + 8; })
    .attr('opacity', 1);

  /* Baseline axis */
  chart.append('line')
    .attr('x1', 0).attr('x2', 0)
    .attr('y1', 0).attr('y2', height)
    .attr('stroke', '#0a0a0a')
    .attr('stroke-width', 2);

  /* Chart title */
  svg.append('text')
    .attr('class', 'd3-title')
    .attr('x', margin.left)
    .attr('y', 30)
    .text('NUMBER OF TV MODELS PER BRAND — AUSTRALIAN REGISTER');
}
