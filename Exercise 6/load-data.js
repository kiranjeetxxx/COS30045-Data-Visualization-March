
let allData = [];
let ex6Loaded = false;

function initEx6() {
  if (ex6Loaded) return;
  ex6Loaded = true;

  
  try {
    allData = ex6InlineData;

    console.log('Data loaded:', allData.length, 'rows');
    console.log('Sample row:', allData[0]);
    console.log('Energy range:', d3.min(allData, d => d.energyConsumption),
                '–', d3.max(allData, d => d.energyConsumption));

    drawHistogram(allData);
    drawScatterplot(allData);
    populateFilters(allData);
    createTooltip();

  } catch(err) {
    console.error('Error initialising Ex6:', err);
    document.getElementById('histogram').innerHTML =
      '<p style="color:red;padding:20px">Error loading chart data: ' + err.message + '</p>';
  }
}
