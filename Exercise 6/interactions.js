
function populateFilters(data) {

  /* ── Screen Technology filters ── */
  const techContainer = d3.select('#filters-tech');

  const techButtons = techContainer.selectAll('button')
    .data(filters_screen)
    .join('button')
    .attr('class', d => 'filter-btn' + (d.isActive ? ' active' : ''))
    .text(d => d.label)
    .on('click', function(event, d) {

      /* Toggle isActive: only one button active at a time */
      filters_screen.forEach(f => f.isActive = false);
      d.isActive = true;

      /* Update button styles */
      techButtons.attr('class', f => 'filter-btn' + (f.isActive ? ' active' : ''));

      /* Update histogram with filtered data */
      updateHistogram(d.id, data);
    });

  /* ── Screen Size filters ── */
  const sizeContainer = d3.select('#filters-size');

  const sizeButtons = sizeContainer.selectAll('button')
    .data(filters_size)
    .join('button')
    .attr('class', d => 'filter-btn' + (d.isActive ? ' active' : ''))
    .text(d => d.label)
    .on('click', function(event, d) {

      filters_size.forEach(f => f.isActive = false);
      d.isActive = true;

      sizeButtons.attr('class', f => 'filter-btn' + (f.isActive ? ' active' : ''));

      /* Filter by screen size */
      const filtered = d.id === 'all'
        ? data
        : data.filter(row => row.screenSize === +d.id);
      const newBins = binGenerator(filtered);
      redrawBars(newBins);
    });


  /* ── updateHistogram: filter by screenTech ── */
  function updateHistogram(techId, data) {
    const filtered = techId === 'all'
      ? data
      : data.filter(d => d.screenTech === techId);

    const updatedBins = binGenerator(filtered);
    redrawBars(updatedBins);
  }


  /* ── redrawBars: update bars with transition ── */
  function redrawBars(newBins) {
    const newYMax = d3.max(newBins, d => d.length) || 1;
    yScale.domain([0, newYMax * 1.05]);

    /* Update y-axis */
    innerChart.select('g.y-axis')
      .transition().duration(400)
      .call(d3.axisLeft(yScale).ticks(6))
      .selectAll('text')
        .style('font-family', 'Syne, sans-serif')
        .style('font-size', '11px')
        .style('fill', '#888');

    /* Bind updated bins to existing bars */
    innerChart.selectAll('rect.hbar')
      .data(newBins)
      .join('rect')
      .attr('class', 'hbar')
      .attr('x',     d => xScale(d.x0) + 1)
      .attr('width', d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 2))
      .attr('fill',  barColor)
      .attr('rx', 2)
      .on('mouseenter', function(event, d) {
        d3.select(this).attr('fill', barColorHover);
        d3.select('#hist-tooltip')
          .style('opacity', 1)
          .style('left', (event.pageX + 12) + 'px')
          .style('top',  (event.pageY - 36) + 'px')
          .html(`<strong>${Math.round(d.x0)}–${Math.round(d.x1)} kWh</strong><br>${d.length} TVs`);
      })
      .on('mouseleave', function() {
        d3.select(this).attr('fill', barColor);
        d3.select('#hist-tooltip').style('opacity', 0);
      })
      .transition().duration(500).ease(d3.easeCubicOut)
      .attr('y',      d => yScale(d.length))
      .attr('height', d => innerHeight - yScale(d.length));
  }
}


/* ════════════════════════════════════════════════════
   6.2 — TOOLTIP for scatterplot
════════════════════════════════════════════════════ */

function createTooltip() {

  /* ── Append tooltip group to scatterplot inner chart ── */
  const tooltip = innerChartS.append('g')
    .attr('class', 'scatter-tooltip')
    .style('opacity', 0)
    .style('pointer-events', 'none');

  /* Background rectangle */
  tooltip.append('rect')
    .attr('width',  tooltipWidth)
    .attr('height', tooltipHeight)
    .attr('rx', 6)
    .attr('fill', '#0a0a0a')
    .attr('opacity', 0.88);

  /* Left gold accent bar */
  tooltip.append('rect')
    .attr('width', 3).attr('height', tooltipHeight)
    .attr('rx', 2).attr('fill', '#d4a843');

  /* Tooltip text — line 1: screen size */
  tooltip.append('text')
    .attr('class', 'tt-size')
    .attr('x', 12).attr('y', 16)
    .attr('font-family', 'Syne, sans-serif').attr('font-size', '11px')
    .attr('font-weight', '700').attr('fill', '#d4a843');

  /* Tooltip text — line 2: brand + model */
  tooltip.append('text')
    .attr('class', 'tt-brand')
    .attr('x', 12).attr('y', 32)
    .attr('font-family', 'Syne, sans-serif').attr('font-size', '10px')
    .attr('fill', '#cccccc');

  /* ── HandleMouseEvents — outside createTooltip so it's accessible ── */
  handleMouseEvents(tooltip);
}


function handleMouseEvents(tooltip) {

  /* Select all circles in the scatterplot */
  innerChartS.selectAll('circle.sdot')
    .on('mouseenter', function(event, d) {
      console.log('Mouse enter:', d);

      /* Get circle position */
      const cx = +this.getAttribute('cx');
      const cy = +this.getAttribute('cy');

      /* Populate tooltip text */
      tooltip.select('.tt-size')
        .text(`${d.screenSize}" — ${d.energyConsumption} kWh`);
      tooltip.select('.tt-brand')
        .text(`${d.brand} ${d.model}`);

      /* Position tooltip — offset so it doesn't cover the point */
      let tx = cx + 10;
      let ty = cy - tooltipHeight - 6;
      /* Clamp to chart bounds */
      if (tx + tooltipWidth > innerWidth)  tx = cx - tooltipWidth - 10;
      if (ty < 0)                           ty = cy + 10;

      tooltip
        .attr('transform', `translate(${tx}, ${ty})`)
        .transition().duration(150)
        .style('opacity', 1);
    })
    .on('mouseleave', function() {
      tooltip
        .transition().duration(200)
        .style('opacity', 0)
        .on('end', () => tooltip.attr('transform', 'translate(-999,-999)'));
    });
}
