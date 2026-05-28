

let allData = [];

d3.csv('Ex6_TVdata.csv', d => ({
  brand:             d.brand,
  model:             d.model,
  screenSize:        +d.screenSize,          /* + converts string -> number */
  screenTech:        d.screenTech,
  energyConsumption: +d.energyConsumption,
  star:              +d.star
})).then(data => {

  allData = data;

  /* Verify data loaded correctly */
  console.log('Data loaded:', data.length, 'rows');
  console.log('Sample row:', data[0]);
  console.log('Energy range:', d3.min(data, d => d.energyConsumption),
              '–', d3.max(data, d => d.energyConsumption));

  /* Draw both charts */
  drawHistogram(data);
  drawScatterplot(data);

  /* Set up interactions */
  populateFilters(data);
  createTooltip();

}).catch(err => {
  console.error('Error loading CSV:', err);
  document.getElementById('histogram').innerHTML =
    '<p style="color:red;padding:20px">Could not load Ex6_TVdata.csv — make sure it is in the same folder as index.html.</p>';
});
