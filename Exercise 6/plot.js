

function drawScatterplot(data) {

  const svg = d3.select('#scatterplot')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  innerChartS = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  xScaleS.domain([0, d3.max(data, d => d.star) + 0.5]);
  yScaleS.domain([0, d3.max(data, d => d.energyConsumption) * 1.05]);

  /* Grid */
  innerChartS.selectAll('.sgrid')
    .data(yScaleS.ticks(6)).join('line')
    .attr('x1',0).attr('x2',innerWidth)
    .attr('y1', d => yScaleS(d)).attr('y2', d => yScaleS(d))
    .attr('stroke','#f0f0f0').attr('stroke-width',1);

  /* Circles */
  innerChartS.selectAll('circle.sdot')
    .data(data).join('circle')
    .attr('class','sdot')
    .attr('cx', d => xScaleS(d.star))
    .attr('cy', d => yScaleS(d.energyConsumption))
    .attr('r', 4)
    .attr('fill', d => colorScale(d.screenTech))
    .attr('opacity', 0)
    .attr('stroke','none')
    .transition().duration(800).delay((d,i) => i * 0.3)
    .attr('opacity', 0.45);

  /* Bottom axis */
  innerChartS.append('g').attr('class','axis')
    .attr('transform', `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScaleS).ticks(8).tickFormat(d => d + '★'))
    .call(ax => ax.select('.domain').remove())
    .selectAll('text')
      .style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  innerChartS.append('text')
    .attr('x', innerWidth/2).attr('y', innerHeight + 46)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','700')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('STAR RATING');

  /* Left axis */
  innerChartS.append('g').attr('class','axis')
    .call(d3.axisLeft(yScaleS).ticks(6).tickFormat(d => d + ' kWh'))
    .call(ax => { ax.select('.domain').remove(); ax.selectAll('.tick line').attr('stroke','#eee'); })
    .selectAll('text')
      .style('font-family','Syne,sans-serif').style('font-size','11px').style('fill','#888');

  innerChartS.append('text')
    .attr('transform','rotate(-90)')
    .attr('x',-innerHeight/2).attr('y',-54)
    .attr('text-anchor','middle').attr('font-size','11px')
    .attr('font-family','Syne,sans-serif').attr('font-weight','700')
    .attr('fill','#888').attr('letter-spacing','0.08em')
    .text('ANNUAL ENERGY CONSUMPTION (kWh/year)');

  /* Legend */
  const legData = ['LED','LCD','OLED'];
  const leg = innerChartS.append('g')
    .attr('transform', `translate(${innerWidth - 92}, 8)`);
  leg.append('rect')
    .attr('width',86).attr('height', legData.length * 22 + 12)
    .attr('rx',6).attr('fill','white').attr('stroke','#efefef');
  legData.forEach((t, i) => {
    const r = leg.append('g').attr('transform',`translate(8,${i*22+10})`);
    r.append('circle').attr('cx',6).attr('cy',6).attr('r',5)
     .attr('fill', colorScale(t)).attr('opacity',0.85);
    r.append('text').attr('x',16).attr('y',10)
     .attr('font-family','Syne,sans-serif').attr('font-size','11px').attr('fill','#444')
     .text(t);
  });
}
