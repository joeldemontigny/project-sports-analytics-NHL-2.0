// const url = "http://127.0.0.1:5000/api/nhl2.0/team_stats";

// Fetch data and populate dropdown
d3.json(url).then(data => {
  const seasonDropdownss = d3.select("#selSeasonPerform");
  const teamStatsListss = data;

  // Extract unique season IDs
  
  const seasonIds = teamStatsListss.map(stats => stats.season_id);
  const uniqueSeasonIdsss = seasonIds.filter((seasonId, index) => seasonIds.indexOf(seasonId) === index);

  // Populate the dropdown with season IDs
  uniqueSeasonIdsss.forEach(seasonId => {
    seasonDropdownss
      .append("option")
      .attr("value", seasonId)
      .text(seasonId);
  });
 
  // Initialize the graph with the first season
  updateTeamPerform(uniqueSeasonIdsss[0]);
});

// Function to update team stats graph based on selected season
function updateTeamPerform(selectedSeasonId) {
  d3.json(url).then(data => {
    // Filter team stats for the selected season
    const selectedTeamStatsss = data.filter(stats => stats.season_id === parseInt(selectedSeasonId));
    console.log("Updating team stats for season:", selectedSeasonId);

    // Define an array of team stat attributes
    const statAttributesss = [
      { key: "team_stats_pts", name: "Points" },
      { key: "team_stats_powerPlayGoals", name: "Power Play Goals" },
      { key: "team_stats_powerPlayGoalsAgainst", name: "Power Play Goals Against" },
      { key: "team_stats_powerPlayPercentage", name: "Power Play %" },
      { key: "team_stats_penaltyKillPercentage", name: "Penalty Kill %" }
    
    ];

    // Create traces for different team values
    const tracess = statAttributesss.map(attr => createTrace(selectedTeamStatsss, attr.key, attr.name));

    const layoutss = {
      title: `Team Stats for Season ${selectedSeasonId}`,
      xaxis: {
        title: "Team Name",
        tickangle: -45,
        automargin: true,
      },
      yaxis: {
        title: "Value"
      },
      barmode: "group" // Display bars in grouped mode
    };

    // Plot the bar chart
    Plotly.newPlot("perform-stats-bar", tracess, layoutss);
  });
}

// Function to create a trace for the bar chart
function createTrace(data, key, name) {
  const teamNamesss = data.map(stats => stats.team_name);
  const teamValuesss = data.map(stats => stats[key]);

  return {
    x: teamNamesss,
    y: teamValuesss,
    type: "bar",
    name: name
  };
}