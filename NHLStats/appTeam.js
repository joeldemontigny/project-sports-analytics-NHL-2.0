// 1.Use the D3 library to read in samples.json from the URL 
// Creating variable for URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// C:\Users\joeld\cu\homework\project-sports-analytics-NHL-2.0-1\schema\team_stats.csv
// f"mysql+mysqlconnector://{username}:{password}@{hostname}/{database}"
// Get data ready for when we run the code
const dataReady = d3.json(url);
console.log("Get Data: ", dataReady);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

// Create a horizontal bar chart with a dropdownMenu menu to display the relevant stats for that individual

d3.json(url).then(function(data) {
  
// Select the dropdownMenu menu element (the HTML element is a dropdown menu (a <select> element)) and populate it with options
let dropdownMenu = d3.select("#selDataset");
// Extract the values in the data
let names = data.names;
// Use 'forEach' method to loop through the 'names'
names.forEach(function(name) {
  dropdownMenu.append("option")
          .text(name)
          .property("value", name);
});

// Set the default ID (first value within 'names')
let defaultID = names[0];

// Call the updateBarChart
updateBarChart(defaultID);

// Define the updateBarChart function to update the plot when the dropdownMenu is changed
function updateBarChart(id) {
  
  // Filter the data to get 10 selected sample's OTUs and sort them in descending order
  let sample = data.samples.filter(function(s) { return s.id === id; })[0];
  let teamStatistics = ['points', 'wins', 'goals_per_game', 'goals_against_per_game', 'shots_per_game', 'shots_allowed'];
  let sample_values = sample.sample_values.slice(0, 10).reverse();
  let otu_labels = sample.otu_labels.slice(0, 10).reverse();
  
  // Create the trace for the horizontal bar chart
  let trace1 = {
    x: teamStatistics,
    y: sample_values,
    text: otu_labels,
    type: "bar",
    orientation: "v"
  };

  // Create the trace for the overall numbers
  let trace2 = {
    x: teamStatistics,
    y: overall_values,
    name: 'Overall Numbers',
    type: 'bar',
    marker: { color: 'gray' } // Customize the color if needed
  };

// Combine the traces
let data = [trace1, trace2];
  
  // Chart layout
  let layout = {
    title: "Team Statistics Comparison",
    xaxis: { title: "KPI" },
    yaxis: { title: "" },
    barmode: 'group'
  };
  
  // Plot the chart
  Plotly.newPlot("bar", data, layout);
}

// On change to the dropdown, call dropdownMenuChanged()
d3.select("#selDataset").on("change", dropdownMenuChanged);

// update output when option changed

function updateMetadata(id) {

  // Filter the data to get the metadata for the selected sample
  let metadata = data.metadata.filter(function(sample) { return sample.id.toString() === id; })[0];

  // Select the new data and clear any existing metadata
  let newdata = d3.select("#sample-metadata");
  newdata.html("");

  // Use Object.entries to add each key-value pair to the panel-body
  Object.entries(metadata).forEach(function([key, value]) {
    newdata.append("p").text(`${key}: ${value}`);
  });
}

  
// Call the updateMetadata function to display the initial demographic info
updateMetadata(defaultID);
// Call the updateBubbleChart function to create the initial plot
// updateBubbleChart(defaultID);
  
 // Define the function to handle dropdownMenu changes
 function dropdownMenuChanged() {
   let id = d3.select("#selDataset").property("value");
   updateBarChart(id);
 }
 });