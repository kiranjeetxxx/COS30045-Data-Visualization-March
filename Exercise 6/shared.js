
const margin      = { top: 20, right: 30, bottom: 56, left: 64 };
const width       = 800;
const height      = 420;
const innerWidth  = width  - margin.left - margin.right;
const innerHeight = height - margin.top  - margin.bottom;

const barColor      = '#0a0a0a';
const barColorHover = '#d4a843';


const filters_screen = [
  { id: 'all',  label: 'All',  isActive: true  },
  { id: 'LED',  label: 'LED',  isActive: false },
  { id: 'LCD',  label: 'LCD',  isActive: false },
  { id: 'OLED', label: 'OLED', isActive: false }
];

const filters_size = [
  { id: 'all', label: 'All',  isActive: true  },
  { id: '32',  label: '32"',  isActive: false },
  { id: '43',  label: '43"',  isActive: false },
  { id: '55',  label: '55"',  isActive: false },
  { id: '65',  label: '65"',  isActive: false },
  { id: '85',  label: '85"',  isActive: false },
  { id: '98',  label: '98"',  isActive: false }
];


const binGenerator = d3.bin()
  .value(d => d.energyConsumption)
  .domain([0, 2800])
  .thresholds(30);

/* Shared scales — assigned in histogram.js / scatterplot.js */
let xScale  = d3.scaleLinear().range([0, innerWidth]);
let yScale  = d3.scaleLinear().range([innerHeight, 0]);
let xScaleS = d3.scaleLinear().range([0, innerWidth]);
let yScaleS = d3.scaleLinear().range([innerHeight, 0]);

/* Shared inner chart groups — assigned in histogram.js / scatterplot.js */
let innerChart;
let innerChartS;

/* Tooltip dimensions */
const tooltipWidth  = 160;
const tooltipHeight = 48;

/* Colour scale for screen tech */
const colorScale = d3.scaleOrdinal()
  .domain(['LED', 'LCD', 'OLED'])
  .range(['#0a0a0a', '#d4a843', '#888888']);
