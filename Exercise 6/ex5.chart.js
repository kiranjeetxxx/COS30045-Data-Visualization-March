e;

function buildEx5Charts() {
  if (ex5Built) return;
  ex5Built = true;
  buildScatter();
  buildDonut();
  buildBar55();
  buildLine();
}


function buildScatter() {
  var data = [{"Avg_mode_power":119.92,"Star2":6.0},{"Avg_mode_power":76.0,"Star2":5.0},{"Avg_mode_power":16.2,"Star2":6.0},{"Avg_mode_power":175.4,"Star2":4.5},{"Avg_mode_power":36.5,"Star2":6.0},{"Avg_mode_power":40.4,"Star2":5.5},{"Avg_mode_power":25.23,"Star2":4.5},{"Avg_mode_power":51.49,"Star2":5.5},{"Avg_mode_power":95.9,"Star2":3.5},{"Avg_mode_power":91.0,"Star2":5.0},{"Avg_mode_power":92.0,"Star2":5.0},{"Avg_mode_power":17.15,"Star2":5.5},{"Avg_mode_power":19.8,"Star2":5.5},{"Avg_mode_power":199.69,"Star2":5.0},{"Avg_mode_power":28.0,"Star2":6.0},{"Avg_mode_power":25.68,"Star2":4.5},{"Avg_mode_power":113.0,"Star2":5.5},{"Avg_mode_power":133.93,"Star2":3.0},{"Avg_mode_power":115.84,"Star2":3.5},{"Avg_mode_power":116.25,"Star2":4.5},{"Avg_mode_power":33.5,"Star2":5.0},{"Avg_mode_power":195.0,"Star2":4.0},{"Avg_mode_power":113.0,"Star2":5.5},{"Avg_mode_power":94.43,"Star2":4.5},{"Avg_mode_power":154.0,"Star2":5.0},{"Avg_mode_power":75.0,"Star2":3.5},{"Avg_mode_power":129.15,"Star2":4.5},{"Avg_mode_power":85.0,"Star2":5.0},{"Avg_mode_power":140.0,"Star2":3.0},{"Avg_mode_power":33.0,"Star2":5.0},{"Avg_mode_power":217.0,"Star2":4.5},{"Avg_mode_power":104.8,"Star2":4.0},{"Avg_mode_power":196.0,"Star2":5.0},{"Avg_mode_power":80.7,"Star2":6.0},{"Avg_mode_power":55.0,"Star2":7.0},{"Avg_mode_power":379.07,"Star2":3.5},{"Avg_mode_power":112.38,"Star2":3.5},{"Avg_mode_power":181.0,"Star2":5.5},{"Avg_mode_power":259.29,"Star2":5.0},{"Avg_mode_power":280.0,"Star2":6.0},{"Avg_mode_power":92.0,"Star2":5.0},{"Avg_mode_power":70.0,"Star2":4.0},{"Avg_mode_power":32.0,"Star2":6.0},{"Avg_mode_power":154.0,"Star2":4.0},{"Avg_mode_power":134.0,"Star2":4.5},{"Avg_mode_power":197.27,"Star2":5.0},{"Avg_mode_power":100.2,"Star2":6.0},{"Avg_mode_power":50.6,"Star2":6.0},{"Avg_mode_power":88.0,"Star2":5.0},{"Avg_mode_power":87.0,"Star2":5.0},{"Avg_mode_power":130.69,"Star2":5.5},{"Avg_mode_power":106.0,"Star2":5.5},{"Avg_mode_power":70.0,"Star2":4.0},{"Avg_mode_power":17.77,"Star2":6.0},{"Avg_mode_power":242.0,"Star2":4.0},{"Avg_mode_power":54.8,"Star2":6.0},{"Avg_mode_power":133.0,"Star2":4.5},{"Avg_mode_power":143.0,"Star2":5.5},{"Avg_mode_power":163.0,"Star2":5.0},{"Avg_mode_power":129.96,"Star2":7.0},{"Avg_mode_power":109.0,"Star2":4.0},{"Avg_mode_power":82.7,"Star2":3.0},{"Avg_mode_power":22.3,"Star2":5.0},{"Avg_mode_power":75.0,"Star2":5.5},{"Avg_mode_power":23.0,"Star2":4.5},{"Avg_mode_power":90.11,"Star2":5.0},{"Avg_mode_power":27.1,"Star2":5.5},{"Avg_mode_power":25.21,"Star2":6.0},{"Avg_mode_power":121.59,"Star2":6.0},{"Avg_mode_power":83.6,"Star2":5.0},{"Avg_mode_power":66.4,"Star2":5.0},{"Avg_mode_power":102.0,"Star2":5.0},{"Avg_mode_power":54.39,"Star2":5.0},{"Avg_mode_power":199.69,"Star2":5.0},{"Avg_mode_power":138.0,"Star2":6.0},{"Avg_mode_power":20.83,"Star2":5.0},{"Avg_mode_power":64.6,"Star2":5.0},{"Avg_mode_power":165.0,"Star2":5.0},{"Avg_mode_power":74.0,"Star2":6.0},{"Avg_mode_power":38.7,"Star2":6.0},{"Avg_mode_power":61.3,"Star2":5.5},{"Avg_mode_power":130.8,"Star2":5.5},{"Avg_mode_power":142.0,"Star2":6.0},{"Avg_mode_power":182.87,"Star2":5.5},{"Avg_mode_power":80.0,"Star2":4.5},{"Avg_mode_power":76.0,"Star2":5.0},{"Avg_mode_power":24.1,"Star2":6.0},{"Avg_mode_power":54.5,"Star2":4.5},{"Avg_mode_power":223.0,"Star2":4.5},{"Avg_mode_power":94.37,"Star2":6.0},{"Avg_mode_power":189.0,"Star2":5.0},{"Avg_mode_power":172.13,"Star2":5.5},{"Avg_mode_power":66.4,"Star2":5.0},{"Avg_mode_power":146.0,"Star2":4.0},{"Avg_mode_power":208.5,"Star2":2.5},{"Avg_mode_power":135.5,"Star2":5.5},{"Avg_mode_power":172.0,"Star2":4.5},{"Avg_mode_power":43.0,"Star2":6.0},{"Avg_mode_power":157.47,"Star2":5.0},{"Avg_mode_power":138.82,"Star2":5.0},{"Avg_mode_power":110.0,"Star2":4.0},{"Avg_mode_power":155.0,"Star2":6.0},{"Avg_mode_power":159.1,"Star2":3.0},{"Avg_mode_power":155.0,"Star2":4.0},{"Avg_mode_power":68.0,"Star2":4.0},{"Avg_mode_power":121.1,"Star2":5.0},{"Avg_mode_power":126.0,"Star2":4.0},{"Avg_mode_power":220.0,"Star2":4.0},{"Avg_mode_power":108.56,"Star2":5.5},{"Avg_mode_power":90.42,"Star2":6.0},{"Avg_mode_power":66.8,"Star2":5.0},{"Avg_mode_power":76.5,"Star2":5.5},{"Avg_mode_power":55.02,"Star2":4.5},{"Avg_mode_power":260.0,"Star2":5.5},{"Avg_mode_power":116.0,"Star2":5.0},{"Avg_mode_power":39.8,"Star2":6.0},{"Avg_mode_power":227.8,"Star2":4.5},{"Avg_mode_power":15.1,"Star2":6.0},{"Avg_mode_power":59.02,"Star2":5.5},{"Avg_mode_power":108.02,"Star2":6.0},{"Avg_mode_power":80.0,"Star2":4.5},{"Avg_mode_power":51.64,"Star2":5.0},{"Avg_mode_power":114.0,"Star2":4.0},{"Avg_mode_power":122.0,"Star2":5.0},{"Avg_mode_power":149.34,"Star2":4.5},{"Avg_mode_power":94.37,"Star2":6.0},{"Avg_mode_power":114.0,"Star2":4.0},{"Avg_mode_power":51.2,"Star2":5.0},{"Avg_mode_power":35.8,"Star2":4.5},{"Avg_mode_power":117.04,"Star2":6.0},{"Avg_mode_power":147.21,"Star2":4.0},{"Avg_mode_power":47.02,"Star2":5.0},{"Avg_mode_power":160.3,"Star2":4.5},{"Avg_mode_power":198.0,"Star2":5.0},{"Avg_mode_power":107.18,"Star2":6.0},{"Avg_mode_power":70.0,"Star2":4.0},{"Avg_mode_power":109.04,"Star2":6.0},{"Avg_mode_power":55.02,"Star2":4.5},{"Avg_mode_power":34.48,"Star2":5.0},{"Avg_mode_power":142.0,"Star2":5.5},{"Avg_mode_power":137.0,"Star2":4.0},{"Avg_mode_power":51.03,"Star2":5.0},{"Avg_mode_power":114.0,"Star2":4.0},{"Avg_mode_power":163.7,"Star2":6.0},{"Avg_mode_power":108.0,"Star2":4.0},{"Avg_mode_power":123.0,"Star2":5.0},{"Avg_mode_power":47.23,"Star2":5.5},{"Avg_mode_power":113.0,"Star2":4.0},{"Avg_mode_power":199.69,"Star2":5.0},{"Avg_mode_power":35.8,"Star2":6.0},{"Avg_mode_power":206.62,"Star2":4.0},{"Avg_mode_power":55.52,"Star2":6.0},{"Avg_mode_power":63.2,"Star2":4.5},{"Avg_mode_power":172.1,"Star2":4.5},{"Avg_mode_power":68.9,"Star2":5.5},{"Avg_mode_power":137.2,"Star2":5.5},{"Avg_mode_power":97.0,"Star2":4.5},{"Avg_mode_power":195.0,"Star2":4.5},{"Avg_mode_power":59.97,"Star2":6.0},{"Avg_mode_power":143.0,"Star2":6.0},{"Avg_mode_power":96.0,"Star2":4.5},{"Avg_mode_power":156.29,"Star2":4.5},{"Avg_mode_power":35.2,"Star2":5.0},{"Avg_mode_power":54.84,"Star2":7.0},{"Avg_mode_power":102.36,"Star2":3.5},{"Avg_mode_power":25.92,"Star2":6.0},{"Avg_mode_power":337.0,"Star2":2.5},{"Avg_mode_power":114.0,"Star2":4.0},{"Avg_mode_power":267.0,"Star2":2.5},{"Avg_mode_power":24.01,"Star2":4.5},{"Avg_mode_power":175.0,"Star2":5.0},{"Avg_mode_power":158.0,"Star2":4.0},{"Avg_mode_power":211.0,"Star2":5.0},{"Avg_mode_power":146.0,"Star2":6.0},{"Avg_mode_power":145.4,"Star2":5.0},{"Avg_mode_power":111.0,"Star2":5.5},{"Avg_mode_power":28.0,"Star2":6.0},{"Avg_mode_power":165.8,"Star2":4.5},{"Avg_mode_power":90.1,"Star2":2.5},{"Avg_mode_power":79.1,"Star2":6.0},{"Avg_mode_power":187.0,"Star2":4.0},{"Avg_mode_power":134.0,"Star2":4.5},{"Avg_mode_power":180.0,"Star2":4.5},{"Avg_mode_power":93.1,"Star2":4.5},{"Avg_mode_power":189.0,"Star2":4.0},{"Avg_mode_power":36.4,"Star2":7.0},{"Avg_mode_power":139.61,"Star2":5.0},{"Avg_mode_power":379.07,"Star2":3.5},{"Avg_mode_power":75.0,"Star2":5.0},{"Avg_mode_power":112.09,"Star2":4.0},{"Avg_mode_power":92.9,"Star2":5.5},{"Avg_mode_power":80.0,"Star2":4.5},{"Avg_mode_power":168.3,"Star2":2.0},{"Avg_mode_power":60.48,"Star2":5.5},{"Avg_mode_power":150.64,"Star2":4.0},{"Avg_mode_power":127.0,"Star2":4.5},{"Avg_mode_power":320.0,"Star2":4.0},{"Avg_mode_power":15.1,"Star2":4.5},{"Avg_mode_power":202.84,"Star2":5.0},{"Avg_mode_power":137.0,"Star2":7.0},{"Avg_mode_power":50.0,"Star2":6.0},{"Avg_mode_power":50.28,"Star2":5.0},{"Avg_mode_power":36.4,"Star2":7.0},{"Avg_mode_power":109.48,"Star2":5.5},{"Avg_mode_power":229.8,"Star2":4.5},{"Avg_mode_power":23.55,"Star2":4.5},{"Avg_mode_power":16.33,"Star2":5.5},{"Avg_mode_power":51.64,"Star2":5.0},{"Avg_mode_power":111.93,"Star2":3.5},{"Avg_mode_power":53.0,"Star2":6.0},{"Avg_mode_power":32.46,"Star2":6.0},{"Avg_mode_power":71.0,"Star2":4.0},{"Avg_mode_power":180.0,"Star2":4.5},{"Avg_mode_power":51.44,"Star2":4.5},{"Avg_mode_power":215.0,"Star2":4.5},{"Avg_mode_power":187.9,"Star2":4.0},{"Avg_mode_power":94.2,"Star2":6.0},{"Avg_mode_power":63.12,"Star2":4.0},{"Avg_mode_power":165.0,"Star2":5.0},{"Avg_mode_power":90.08,"Star2":6.0},{"Avg_mode_power":51.64,"Star2":5.0},{"Avg_mode_power":332.0,"Star2":4.0},{"Avg_mode_power":222.34,"Star2":5.5},{"Avg_mode_power":27.0,"Star2":5.5},{"Avg_mode_power":191.4,"Star2":4.0},{"Avg_mode_power":111.0,"Star2":5.5},{"Avg_mode_power":115.68,"Star2":5.0},{"Avg_mode_power":93.0,"Star2":6.0},{"Avg_mode_power":77.0,"Star2":4.5},{"Avg_mode_power":126.0,"Star2":6.0},{"Avg_mode_power":76.1,"Star2":5.0},{"Avg_mode_power":101.3,"Star2":5.5},{"Avg_mode_power":71.0,"Star2":4.0},{"Avg_mode_power":92.33,"Star2":6.0},{"Avg_mode_power":237.4,"Star2":5.5},{"Avg_mode_power":136.6,"Star2":2.5},{"Avg_mode_power":34.7,"Star2":4.5},{"Avg_mode_power":168.0,"Star2":2.0},{"Avg_mode_power":107.4,"Star2":6.0},{"Avg_mode_power":73.0,"Star2":4.0},{"Avg_mode_power":157.32,"Star2":3.5},{"Avg_mode_power":178.0,"Star2":4.5},{"Avg_mode_power":112.33,"Star2":6.0},{"Avg_mode_power":102.0,"Star2":5.0},{"Avg_mode_power":90.0,"Star2":4.0},{"Avg_mode_power":65.0,"Star2":4.5},{"Avg_mode_power":55.9,"Star2":4.5},{"Avg_mode_power":93.0,"Star2":4.0},{"Avg_mode_power":167.0,"Star2":4.5},{"Avg_mode_power":179.1,"Star2":4.5},{"Avg_mode_power":110.0,"Star2":5.5},{"Avg_mode_power":247.0,"Star2":4.0},{"Avg_mode_power":106.0,"Star2":4.0},{"Avg_mode_power":135.9,"Star2":5.5},{"Avg_mode_power":20.24,"Star2":5.5},{"Avg_mode_power":55.0,"Star2":5.0},{"Avg_mode_power":78.3,"Star2":4.5},{"Avg_mode_power":102.0,"Star2":4.5},{"Avg_mode_power":93.0,"Star2":4.0},{"Avg_mode_power":130.5,"Star2":6.0},{"Avg_mode_power":127.74,"Star2":3.5},{"Avg_mode_power":201.0,"Star2":2.5},{"Avg_mode_power":79.0,"Star2":4.5},{"Avg_mode_power":87.2,"Star2":5.0},{"Avg_mode_power":173.0,"Star2":2.0},{"Avg_mode_power":96.3,"Star2":6.0},{"Avg_mode_power":131.33,"Star2":5.5},{"Avg_mode_power":83.0,"Star2":4.5},{"Avg_mode_power":92.1,"Star2":5.0},{"Avg_mode_power":267.0,"Star2":2.5},{"Avg_mode_power":280.55,"Star2":3.5},{"Avg_mode_power":49.0,"Star2":7.0},{"Avg_mode_power":105.8,"Star2":4.0},{"Avg_mode_power":227.8,"Star2":4.5},{"Avg_mode_power":71.35,"Star2":6.0},{"Avg_mode_power":161.64,"Star2":5.0},{"Avg_mode_power":126.7,"Star2":3.5},{"Avg_mode_power":34.3,"Star2":5.0},{"Avg_mode_power":25.92,"Star2":5.5},{"Avg_mode_power":75.48,"Star2":5.5},{"Avg_mode_power":143.0,"Star2":5.5},{"Avg_mode_power":77.5,"Star2":3.5},{"Avg_mode_power":230.0,"Star2":6.0},{"Avg_mode_power":123.02,"Star2":6.0},{"Avg_mode_power":92.0,"Star2":5.0},{"Avg_mode_power":297.5,"Star2":4.0},{"Avg_mode_power":158.0,"Star2":4.0},{"Avg_mode_power":63.7,"Star2":6.0},{"Avg_mode_power":25.92,"Star2":5.5},{"Avg_mode_power":150.64,"Star2":4.0},{"Avg_mode_power":53.0,"Star2":6.0},{"Avg_mode_power":61.7,"Star2":6.0},{"Avg_mode_power":199.69,"Star2":5.0},{"Avg_mode_power":54.04,"Star2":5.0},{"Avg_mode_power":100.0,"Star2":4.0},{"Avg_mode_power":191.3,"Star2":4.0},{"Avg_mode_power":110.15,"Star2":6.0},{"Avg_mode_power":150.59,"Star2":6.0},{"Avg_mode_power":99.42,"Star2":3.5},{"Avg_mode_power":55.49,"Star2":6.0}];

  var wrap = document.getElementById('scatter-wrap');
  var W = wrap.clientWidth || 600;
  var H = Math.round(W * 0.6);
  var m = { top: 30, right: 30, bottom: 54, left: 62 };
  var pw = W - m.left - m.right;
  var ph = H - m.top - m.bottom;

  var svg = d3.select('#scatter-wrap').append('svg')
    .attr('viewBox', '0 0 ' + W + ' ' + H)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  var g = svg.append('g').attr('transform', 'translate(' + m.left + ',' + m.top + ')');

  var xSc = d3.scaleLinear().domain([1, 8]).range([0, pw]);
  var ySc = d3.scaleLinear().domain([0, 400]).range([ph, 0]);

  /* Grid */
  g.selectAll('.gy').data(ySc.ticks(5)).join('line')
    .attr('x1', 0).attr('x2', pw)
    .attr('y1', function(d){ return ySc(d); }).attr('y2', function(d){ return ySc(d); })
    .attr('stroke', '#efefef').attr('stroke-width', 1);

  /* Axes */
  g.append('g').attr('transform', 'translate(0,' + ph + ')')
    .call(d3.axisBottom(xSc).ticks(7).tickFormat(function(d){ return d + '★'; }))
    .call(function(ax){ ax.select('.domain').remove(); ax.selectAll('line').attr('stroke','#ddd'); })
    .selectAll('text').style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  g.append('g').call(d3.axisLeft(ySc).ticks(5).tickFormat(function(d){ return d + 'W'; }))
    .call(function(ax){ ax.select('.domain').remove(); ax.selectAll('line').attr('stroke','#ddd'); })
    .selectAll('text').style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  /* Tooltip */
  var tip = d3.select('body').append('div').attr('class','ex5-tooltip');

  /* Points */
  g.selectAll('circle').data(data).join('circle')
    .attr('cx', function(d){ return xSc(d.Star2); })
    .attr('cy', function(d){ return ySc(d.Avg_mode_power); })
    .attr('r', 4).attr('fill', '#0a0a0a').attr('opacity', 0)
    .on('mouseenter', function(event, d){
      d3.select(this).attr('fill','#d4a843').attr('r', 6).attr('opacity', 1);
      tip.style('opacity', 1)
         .html('<strong>' + d.Avg_mode_power + 'W</strong><br>' + d.Star2 + ' stars')
         .style('left', (event.pageX + 12) + 'px').style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseleave', function(){
      d3.select(this).attr('fill','#0a0a0a').attr('r', 4).attr('opacity', 0.65);
      tip.style('opacity', 0);
    })
    .transition().duration(600).delay(function(d,i){ return i * 2; })
    .attr('opacity', 0.65);

  /* Axis labels */
  g.append('text').attr('x', pw/2).attr('y', ph + 44)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','600')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('STAR RATING');

  g.append('text')
    .attr('transform','rotate(-90)')
    .attr('x', -ph/2).attr('y', -50)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','600')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('POWER (WATTS)');
}


/* ═══════════════════════════════════════════════════════
   CHART 2 — Donut chart: avg power by Screen_Tech
   Data: averaged from full 4840-row dataset
═══════════════════════════════════════════════════════ */
function buildDonut() {
  var data = [
    { tech: 'LCD (LED)', avg: 118.8 },
    { tech: 'LCD',       avg: 87.9  },
    { tech: 'OLED',      avg: 128.7 }
  ];

  var wrap = document.getElementById('donut-wrap');
  var W = Math.min(wrap.clientWidth || 500, 500);
  var H = W;
  var radius = W / 2 - 20;
  var inner  = radius * 0.52;

  var colours = ['#0a0a0a', '#d4a843', '#888888'];

  var svg = d3.select('#donut-wrap').append('svg')
    .attr('viewBox', '0 0 ' + W + ' ' + H)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  var g = svg.append('g').attr('transform', 'translate(' + W/2 + ',' + H/2 + ')');

  var pie = d3.pie().value(function(d){ return d.avg; }).sort(null);
  var arc = d3.arc().innerRadius(inner).outerRadius(radius);
  var arcHover = d3.arc().innerRadius(inner).outerRadius(radius + 8);

  var tip = d3.select('body').select('.ex5-tooltip');
  if (tip.empty()) tip = d3.select('body').append('div').attr('class','ex5-tooltip');

  var slices = g.selectAll('path').data(pie(data)).join('path')
    .attr('fill', function(d,i){ return colours[i]; })
    .attr('stroke', 'white').attr('stroke-width', 3)
    .on('mouseenter', function(event, d){
      d3.select(this).attr('d', arcHover);
      tip.style('opacity',1)
         .html('<strong>' + d.data.tech + '</strong><br>' + d.data.avg + 'W avg')
         .style('left',(event.pageX+12)+'px').style('top',(event.pageY-28)+'px');
    })
    .on('mouseleave', function(event, d){
      d3.select(this).attr('d', arc);
      tip.style('opacity',0);
    })
    .transition().duration(900)
    .attrTween('d', function(d){
      var i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function(t){ return arc(i(t)); };
    });

  /* Centre label */
  g.append('text').attr('text-anchor','middle').attr('dy','-0.3em')
    .attr('font-family','Playfair Display,serif').attr('font-size', W * 0.055)
    .attr('font-weight','600').attr('fill','#0a0a0a').text('Avg Power');
  g.append('text').attr('text-anchor','middle').attr('dy','1.1em')
    .attr('font-family','Syne,sans-serif').attr('font-size', W * 0.038)
    .attr('fill','#888').text('by Screen Tech');

  /* Legend */
  var leg = svg.append('g').attr('transform', 'translate(' + (W * 0.08) + ',' + (H * 0.82) + ')');
  data.forEach(function(d, i){
    var row = leg.append('g').attr('transform', 'translate(0,' + (i * 22) + ')');
    row.append('rect').attr('width',12).attr('height',12).attr('rx',2).attr('fill', colours[i]);
    row.append('text').attr('x',18).attr('y',10)
      .attr('font-family','Syne,sans-serif').attr('font-size','12px').attr('fill','#444')
      .text(d.tech + ' — ' + d.avg + 'W');
  });
}


/* ═══════════════════════════════════════════════════════
   CHART 3 — Bar chart: power by Screen_Tech for 55" TVs
   Data: averaged from models with screensize ~138.783cm
═══════════════════════════════════════════════════════ */
function buildBar55() {
  var data = [
    { tech: 'LCD',       avg: 88.6 },
    { tech: 'LCD (LED)', avg: 95.5 },
    { tech: 'OLED',      avg: 93.8 }
  ].sort(function(a,b){ return b.avg - a.avg; });

  var wrap = document.getElementById('bar55-wrap');
  var W = wrap.clientWidth || 600;
  var H = Math.round(W * 0.52);
  var m = { top: 30, right: 60, bottom: 48, left: 100 };
  var pw = W - m.left - m.right;
  var ph = H - m.top - m.bottom;

  var svg = d3.select('#bar55-wrap').append('svg')
    .attr('viewBox', '0 0 ' + W + ' ' + H)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  var g = svg.append('g').attr('transform', 'translate(' + m.left + ',' + m.top + ')');

  var xSc = d3.scaleLinear().domain([0, 110]).range([0, pw]);
  var ySc = d3.scaleBand().domain(data.map(function(d){ return d.tech; }))
    .range([0, ph]).padding(0.38);

  /* Grid */
  g.selectAll('.gx').data(xSc.ticks(5)).join('line')
    .attr('x1', function(d){ return xSc(d); }).attr('x2', function(d){ return xSc(d); })
    .attr('y1', 0).attr('y2', ph).attr('stroke','#efefef').attr('stroke-width',1);

  /* X axis */
  g.append('g').attr('transform','translate(0,'+ph+')')
    .call(d3.axisBottom(xSc).ticks(5).tickFormat(function(d){ return d+'W'; }))
    .call(function(ax){ ax.select('.domain').remove(); ax.selectAll('line').remove(); })
    .selectAll('text').style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  /* Y axis */
  g.append('g').call(d3.axisLeft(ySc))
    .call(function(ax){ ax.select('.domain').remove(); ax.selectAll('line').remove(); })
    .selectAll('text').style('font-family','Syne,sans-serif').style('font-size','12px').style('font-weight','600').style('fill','#0a0a0a');

  var tip = d3.select('body').select('.ex5-tooltip');
  if (tip.empty()) tip = d3.select('body').append('div').attr('class','ex5-tooltip');

  /* Bars */
  g.selectAll('rect.bar55').data(data).join('rect')
    .attr('class','bar55')
    .attr('y', function(d){ return ySc(d.tech); })
    .attr('height', ySc.bandwidth())
    .attr('x', 0).attr('rx', 3)
    .attr('fill', '#0a0a0a').attr('width', 0)
    .on('mouseenter', function(event, d){
      d3.select(this).attr('fill','#d4a843');
      tip.style('opacity',1).html('<strong>'+d.tech+'</strong><br>'+d.avg+'W avg')
         .style('left',(event.pageX+12)+'px').style('top',(event.pageY-28)+'px');
    })
    .on('mouseleave', function(){
      d3.select(this).attr('fill','#0a0a0a');
      tip.style('opacity',0);
    })
    .transition().duration(800).delay(function(d,i){ return i*120; })
    .attr('width', function(d){ return xSc(d.avg); });

  /* Value labels */
  g.selectAll('text.val55').data(data).join('text')
    .attr('class','val55')
    .attr('y', function(d){ return ySc(d.tech) + ySc.bandwidth()/2; })
    .attr('dominant-baseline','middle')
    .attr('font-family','Syne,sans-serif').attr('font-size','12px').attr('fill','#888')
    .attr('opacity',0).attr('x',4)
    .text(function(d){ return d.avg+'W'; })
    .transition().duration(800).delay(function(d,i){ return i*120+500; })
    .attr('x', function(d){ return xSc(d.avg)+8; }).attr('opacity',1);

  /* Baseline */
  g.append('line').attr('x1',0).attr('x2',0).attr('y1',0).attr('y2',ph)
    .attr('stroke','#0a0a0a').attr('stroke-width',2);

  /* X label */
  g.append('text').attr('x',pw/2).attr('y',ph+40)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','600')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('AVG MODE POWER (WATTS)');
}


/* ═══════════════════════════════════════════════════════
   CHART 4 — Line chart: Australian spot electricity prices
   Source: Australian Energy Regulator / AEMO NEM averages
   1998–2024, annual average spot price AUD/MWh
═══════════════════════════════════════════════════════ */
function buildLine() {
  var data = [
    {year:1998,price:30},{year:1999,price:32},{year:2000,price:35},
    {year:2001,price:42},{year:2002,price:38},{year:2003,price:43},
    {year:2004,price:46},{year:2005,price:49},{year:2006,price:54},
    {year:2007,price:57},{year:2008,price:64},{year:2009,price:48},
    {year:2010,price:55},{year:2011,price:60},{year:2012,price:62},
    {year:2013,price:58},{year:2014,price:59},{year:2015,price:55},
    {year:2016,price:74},{year:2017,price:94},{year:2018,price:97},
    {year:2019,price:90},{year:2020,price:65},{year:2021,price:80},
    {year:2022,price:175},{year:2023,price:120},{year:2024,price:105}
  ];

  var wrap = document.getElementById('line-wrap');
  var W = wrap.clientWidth || 600;
  var H = Math.round(W * 0.52);
  var m = { top: 30, right: 30, bottom: 54, left: 62 };
  var pw = W - m.left - m.right;
  var ph = H - m.top - m.bottom;

  var svg = d3.select('#line-wrap').append('svg')
    .attr('viewBox', '0 0 ' + W + ' ' + H)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  var g = svg.append('g').attr('transform','translate('+m.left+','+m.top+')');

  var xSc = d3.scaleLinear().domain([1998,2024]).range([0,pw]);
  var ySc = d3.scaleLinear().domain([0, 200]).range([ph,0]);

  /* Grid */
  g.selectAll('.gy').data(ySc.ticks(5)).join('line')
    .attr('x1',0).attr('x2',pw)
    .attr('y1',function(d){ return ySc(d); }).attr('y2',function(d){ return ySc(d); })
    .attr('stroke','#efefef').attr('stroke-width',1);

  /* Axes */
  g.append('g').attr('transform','translate(0,'+ph+')')
    .call(d3.axisBottom(xSc).ticks(10).tickFormat(d3.format('d')))
    .call(function(ax){ ax.select('.domain').remove(); ax.selectAll('line').attr('stroke','#ddd'); })
    .selectAll('text').style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  g.append('g').call(d3.axisLeft(ySc).ticks(5).tickFormat(function(d){ return '$'+d; }))
    .call(function(ax){ ax.select('.domain').remove(); ax.selectAll('line').attr('stroke','#ddd'); })
    .selectAll('text').style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  /* Area fill */
  var area = d3.area()
    .x(function(d){ return xSc(d.year); })
    .y0(ph).y1(function(d){ return ySc(d.price); })
    .curve(d3.curveMonotoneX);

  g.append('path').datum(data)
    .attr('fill','#0a0a0a').attr('opacity',0.06)
    .attr('d', area);

  /* Line */
  var line = d3.line()
    .x(function(d){ return xSc(d.year); })
    .y(function(d){ return ySc(d.price); })
    .curve(d3.curveMonotoneX);

  var path = g.append('path').datum(data)
    .attr('fill','none')
    .attr('stroke','#0a0a0a')
    .attr('stroke-width', 2.5)
    .attr('d', line);

  /* Animate line draw */
  var totalLength = path.node().getTotalLength();
  path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition().duration(1400).ease(d3.easeQuadInOut)
      .attr('stroke-dashoffset', 0);

  /* Highlight 2022 spike */
  var spike = data.find(function(d){ return d.year === 2022; });
  g.append('circle')
    .attr('cx', xSc(spike.year)).attr('cy', ySc(spike.price))
    .attr('r', 5).attr('fill','#d4a843').attr('opacity',0)
    .transition().delay(1400).duration(300).attr('opacity',1);
  g.append('text')
    .attr('x', xSc(spike.year)-6).attr('y', ySc(spike.price)-12)
    .attr('text-anchor','end').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','700')
    .attr('fill','#d4a843').text('2022 spike');

  var tip = d3.select('body').select('.ex5-tooltip');
  if (tip.empty()) tip = d3.select('body').append('div').attr('class','ex5-tooltip');

  /* Hover dots */
  g.selectAll('circle.ldot').data(data).join('circle')
    .attr('class','ldot')
    .attr('cx', function(d){ return xSc(d.year); })
    .attr('cy', function(d){ return ySc(d.price); })
    .attr('r', 4).attr('fill','#0a0a0a').attr('opacity',0)
    .attr('style','cursor:pointer')
    .on('mouseenter', function(event,d){
      d3.select(this).attr('fill','#d4a843').attr('r',6).attr('opacity',1);
      tip.style('opacity',1)
         .html('<strong>'+d.year+'</strong><br>$'+d.price+'/MWh')
         .style('left',(event.pageX+12)+'px').style('top',(event.pageY-28)+'px');
    })
    .on('mouseleave', function(){
      d3.select(this).attr('fill','#0a0a0a').attr('r',4).attr('opacity',0);
      tip.style('opacity',0);
    });

  /* Axis labels */
  g.append('text').attr('x',pw/2).attr('y',ph+46)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','600')
    .attr('fill','#888').attr('letter-spacing','0.08em').text('YEAR');

  g.append('text').attr('transform','rotate(-90)')
    .attr('x',-ph/2).attr('y',-50)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','600')
    .attr('fill','#888').attr('letter-spacing','0.08em').text('SPOT PRICE (AUD/MWh)');
}
