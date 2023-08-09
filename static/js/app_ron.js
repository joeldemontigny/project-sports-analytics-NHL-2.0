const urlGoalie = "http://127.0.0.1:5000/api/nhl2.0/goalie_stats";

// Fetch data and populate dropdown
d3.json(urlGoalie).then(dataGoalie => {
  var seasonDropdownGoalie = d3.select("#selSeasonGoalie");
  var goalieStatsList = dataGoalie;

  // Extract unique season IDs
  
  var seasonIds = goalieStatsList.map(row => row.season_id);
  var uniqueSeasonIds = seasonIds.filter((seasonId, index) => seasonIds.indexOf(seasonId) === index);

  // Populate the dropdown with season IDs
  uniqueSeasonIds.forEach(seasonId => {
    seasonDropdownGoalie
      .append("option")
      .attr("value", seasonId)
      .text(seasonId);
  });
 
  // Initialize the graph with the first season
  updateGoalieStats(uniqueSeasonIds[0]);
});

// Function to update team stats graph based on selected season
function updateGoalieStats(selectedSeasonId) {
  d3.json(urlGoalie).then(dataGoalie => {
    // Filter team stats for the selected season
    var selectedGoalieStats = dataGoalie.filter(row => row.season_id === parseInt(selectedSeasonId));
  
      var playerName = selectedGoalieStats[0].player_name;
      var shutouts = selectedGoalieStats[0].goalie_stats_goalie_shutouts;
      var wins = selectedGoalieStats[0].goalie_stats_wins;
      var losses = selectedGoalieStats[0].goalie_stats_goalie_losses;
      var goals_against = selectedGoalieStats[0].goalie_stats_goalie_goalsAgainst;
      var saves = selectedGoalieStats[0].goalie_stats_saves;
     
      console.log("Current Player:", playerName)
      console.log("Wins:", wins)
      console.log("Losses:", losses)
      console.log("Goals Against:", goals_against)
      console.log("Saves:", saves)
      console.log("Shutouts:", shutouts)
      
      var trace = {
          x: [goals_against],
          y: [losses],
          text: "losses",
          type: "scatter",
          mode: 'markers',
          marker: {
          size: wins,
          color: goals_against,
          colorscale:"Portland"
          }
      };
      var bubbleData = [trace];
      var layout = {
          showlegend: false,
          title: `${playerName} statistics for Season ${selectedSeasonId}`,
          hovermode: 'closest',
          xaxis: {title:"Goals Against",
          range: [0, 500]},
          yaxis: {range: [0, 50]}
      };
      Plotly.newPlot('goalie-stats-bubble', bubbleData, layout); 
  });    
}