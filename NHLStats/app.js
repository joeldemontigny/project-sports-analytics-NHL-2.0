const url = "http://127.0.0.1:5000/api/nhl2.0/team_stats";

// Fetch data and populate dropdown
d3.json(url).then(data => {
  const seasonDropdown = d3.select("#selSeason");
  const teamStatsList = data;

  // Extract unique season IDs
  
  const seasonIds = teamStatsList.map(stats => stats.season_id);
  const uniqueSeasonIds = seasonIds.filter((seasonId, index) => seasonIds.indexOf(seasonId) === index);

  // Populate the dropdown with season IDs
  uniqueSeasonIds.forEach(seasonId => {
    seasonDropdown
      .append("option")
      .attr("value", seasonId)
      .text(seasonId);
  });

  // Initialize the graph with the first season
  updateTeamStats(uniqueSeasonIds[0]);
});

// Function to update team stats graph based on selected season
function updateTeamStats(selectedSeasonId) {
  d3.json(url).then(data => {
    // Filter team stats for the selected season
    const selectedTeamStats = data.filter(stats => stats.season_id === parseInt(selectedSeasonId));
    console.log("Updating team stats for season:", selectedSeasonId);

    // Define an array of team stat attributes
    const statAttributes = [
      { key: "team_stats_pts", name: "Points" },
      { key: "team_stats_wins", name: "Wins" },
      { key: "team_stats_goalsPerGame", name: "Goals Per Game" },
      { key: "team_stats_goalsAgainstPerGame", name: "Goals Against Per Game" },
      { key: "team_stats_shotsAllowed", name: "Shots Allowed" },
      { key: "team_stats_shotsPerGame", name: "Shots Per Game" }
    ];

    // Create traces for different team values
    const traces = statAttributes.map(attr => createTrace(selectedTeamStats, attr.key, attr.name));

    const layout = {
      title: `Team Stats for Season ${selectedSeasonId}`,
      xaxis: {
        title: "Team Name"
      },
      yaxis: {
        title: "Value"
      },
      barmode: "group" // Display bars in grouped mode
    };

    // Plot the bar chart
    Plotly.newPlot("team-stats-bar", traces, layout);
  });
}

// Function to create a trace for the bar chart
function createTrace(data, key, name) {
  const teamNames = data.map(stats => stats.team_name);
  const teamValues = data.map(stats => stats[key]);

  return {
    x: teamNames,
    y: teamValues,
    type: "bar",
    name: name
  };
}