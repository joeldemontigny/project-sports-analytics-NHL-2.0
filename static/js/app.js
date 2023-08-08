
// Set Variables

const url = "http://127.0.0.1:5000/api/nhl2.0/goalie_stats/";


const jsonData = d3.json(url);

let testSubjectDropDownID = d3.select("#selDataset");
let metaDataTag = d3.select("#sample-metadata");

//For Testing Purposes
console.log("Getting Data: ",jsonData);

// Use callback funtion for the selection of the drop down


function init() {
   
// Initialization function to:
//  - Create Test Subject ID no. dropdown list
//  - Create Demographic Data table and Bubble and Bar charts


// Grab json data from 'https://2u-data-curriculum-team'

    d3.json(url).then(function(jsonData) {
        console.log("Loading Data");
        data = jsonData;
        console.log("Keys: " + Object.keys(data));
        names = data.names;

        // Create and populate the Test Subject ID
        names.forEach(function(element){
            testSubjectDropDownID.append("option").text(element).property("value", element); 
        });
                    
        // Create the charts with first ID number
        let id_num = names[0];

       
        demographyTable(id_num);
        // barGraphDraw(id_num)
        // bubbleGraphDraw(id_num);
    });
}

function demographyTable(id_num){
    // Clean table
    metaDataTag.html("");

    // Populate Demographic table
    var meta_data = data.metadata.filter(row => row.id == id_num);
        Object.entries(meta_data[0]).forEach(([key, value]) => { 
            metaDataTag.append("h6").text(`${key.toUpperCase()}: ${value}`)
        });
}
       
function barGraphDraw(id_num){
    // Create bar graph with ID number that was passed

    d3.json(url).then((data) => {
        var selectionID = data.samples;
        var filterRow = selectionID.filter(row => row.id == id_num);
        var results = filterRow[0];
        var sample_values = results.sample_values;
        var otu_ids = results.otu_ids;
        var otu_labels = results.otu_labels;   
        
           
        var trace = {
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            name: "Greek",
            type: "bar",
            orientation: "h"
        };
        var barData = [trace];
        var layout = {
            title: "Top 10 Bacterial Cultures Found",                     
        }; 
   
    Plotly.newPlot("bar", barData, layout);
    });
}      

function bubbleGraphDraw(id_num){
    // Create bubble graph with ID number that was passed

    d3.json(url).then((data) => {
        var selectionID = data.samples;
        var filterRow = selectionID.filter(row => row.id == id_num);
        var results = filterRow[0];
        var sample_values = results.sample_values;
        var otu_ids = results.otu_ids;
        var otu_labels = results.otu_labels;
        
        
        var trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
            size: sample_values,
            color: otu_ids,
            colorscale:"Portland"
            }
        };
        var bubbleData = [trace];
        var layout = {
            showlegend: false,
            title: "Bacteria Cultures Per Sample",
            hovermode: 'closest',
            xaxis: {title:"OTU ID"},
        };
        Plotly.newPlot('bubble', bubbleData, layout); 
    });    
}
 
function optionChanged(selection){
    // On dropdown change call the graph and demographic functions with selected
    // value

        demographyTable(selection);
        barGraphDraw(selection);
        bubbleGraphDraw(selection);
}
// Call initial function  
init();
