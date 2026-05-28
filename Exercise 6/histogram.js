

function drawHistogram(data) {

  const svg = d3.select('#histogram')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  /* innerChart assigned to shared let */
  innerChart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  /* Bins */a
  const bins = binGenerator(data);

  /* Scales */
  xScale.domain([bins[0].x0, bins[bins.length - 1].x1]);
  yScale.domain([0, d3.max(bins, d => d.length) * 1.08]);

  /* Grid lines */
  innerChart.selectAll('.hgrid')
    .data(yScale.ticks(6)).join('line')
    .attr('class','hgrid')
    .attr('x1', 0).attr('x2', innerWidth)
    .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
    .attr('stroke', '#f0f0f0').attr('stroke-width', 1);

  /* Bars */
  innerChart.selectAll('rect.hbar')
    .data(bins).join('rect')
    .attr('class', 'hbar')
    .attr('x',      d => xScale(d.x0) + 1)
    .attr('width',  d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 2))
    .attr('y', innerHeight).attr('height', 0)
    .attr('fill', barColor).attr('rx', 2)
    .on('mouseenter', function(event, d) {
      d3.select(this).attr('fill', barColorHover);
      d3.select('#hist-tip')
        .style('opacity', 1)
        .style('left', (event.clientX + 14) + 'px')
        .style('top',  (event.clientY - 40) + 'px')
        .html(`<strong>${Math.round(d.x0)}–${Math.round(d.x1)} kWh</strong><br>${d.length} TV models`);
    })
    .on('mouseleave', function() {
      d3.select(this).attr('fill', barColor);
      d3.select('#hist-tip').style('opacity', 0);
    })
    .transition().duration(700).delay((d, i) => i * 16)
    .attr('y',      d => yScale(d.length))
    .attr('height', d => innerHeight - yScale(d.length));

  /* Bar hover tooltip */
  d3.select('body').append('div')
    .attr('id', 'hist-tip').attr('class', 'ex6-tooltip');

  /* Bottom axis */
  innerChart.append('g').attr('class', 'axis')
    .attr('transform', `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(10).tickFormat(d => d))
    .call(ax => ax.select('.domain').remove())
    .selectAll('text')
      .style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  innerChart.append('text')
    .attr('x', innerWidth / 2).attr('y', innerHeight + 46)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','700')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('ANNUAL ENERGY CONSUMPTION (kWh/year)');

  /* Left axis — stored as classed g so interactions.js can update it */
  innerChart.append('g').attr('class', 'axis y-axis')
    .call(d3.axisLeft(yScale).ticks(6))
    .call(ax => { ax.select('.domain').remove(); ax.selectAll('.tick line').attr('stroke','#eee'); })
    .selectAll('text')
      .style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  innerChart.append('text')
    .attr('transform','rotate(-90)')
    .attr('x', -innerHeight / 2).attr('y', -52)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','700')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('NUMBER OF TV MODELS');
}
