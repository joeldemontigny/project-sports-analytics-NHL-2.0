const urlTeam = "http://127.0.0.1:5000/api/nhl2.0/goalie_stats";

// Fetch data and populate dropdown
d3.json(urlTeam).then(dataGoalie => {
  var seasonDropdownGoalie = d3.select("#selSeasonPerform");
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
  updateTeamPerform(uniqueSeasonIds[0]);
});

// Function to update team stats graph based on selected season
function updateTeamPerform(selectedSeasonId) {
  d3.json(urlTeam).then(dataGoalie => {
    // Filter team stats for the selected season
    var selectedGoalieStats = dataGoalie.filter(row => row.season_id === parseInt(selectedSeasonId));
  
    // "player_name": player_name,
    // "season_id":goalie_stat.season_id,
    // "goalie_stats_goalie_shutouts": goalie_stat.goalie_stats_goalie_shutouts,
    // "goalie_stats_shortHandedSavePercentage": float(goalie_stat.goalie_stats_shortHandedSavePercentage), 
    // "goalie_stats_wins": goalie_stat.goalie_stats_wins,
    // "goalie_stats_goalie_losses": goalie_stat.goals_against,
    // "goalie_stats_saves": goalie_stat.goalie_stats_saves,
    // "goalie_stats_goalie_goalsAgainst": float(goalie_stat.goalie_stats_goalie_goalsAgainst)
    // ];
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
      Plotly.newPlot('perform-stats-bar', bubbleData, layout); 
  });    
}
    // Create traces for different team values
//     var traces = statAttributes.map(attr => createTrace(selectedGoalieStats, attr.key, attr.name));

//     var layout = {
//       title: `Goalie Stats for Season ${selectedSeasonId}`,
//       xaxis: {
//         title: "Team Name"
//       },
//       yaxis: {
//         title: "Value"
//       },
//       barmode: "group" // Display bars in grouped mode
//     };

//     // Plot the bar chart
//     Plotly.newPlot("goalie-stats-bar", traces, layout);
//   });
// }

// // Function to create a trace for the bar chart
// function createTrace(data, key, name) {
//   const teamNames = data.map(stats => stats.team_name);
//   const teamValues = data.map(stats => stats[key]);

//   return {
//     x: teamNames,
//     y: teamValues,
//     type: "bar",
//     name: name
//   };
// }
