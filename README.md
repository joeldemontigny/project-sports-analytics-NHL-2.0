# project-sports-analytics-NHL-2.0
[Project 3 proposal.docx](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/files/12222431/Project.3.proposal.docx)

![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/f38c5b9e-7594-4f0d-ad95-857a2b5108be)


![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/cead8b13-dcb9-48cb-92b8-19ee070227a9)


# project-sports-analytics-NHL
_(The NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.)_

## Overview
For this version of our project, we are focused on validating our model by cross-referencing the makeup of the top potential performing teams, as per our model, prior to the 2022-2023 season vs the actual top performing teams (Stanley Cup Playoffs/Finals/etc... need to review and finalize).  We will be using statistics and data from previous Stanley Cup winning teams over the last 30 years from our initial project, (https://github.com/rbrennan55/project-sports-analytics-NHL.git).
We will leverage player statistics such as Age, Height, Nationality, and Right-handed vs Left-handed.  Additionally, we will leverage team statistics such as +/-, Points (pts), Points Per Game (ppg), Penalty Infraction Minutes (PIM), Overtime Goals (OT Goals), Powerplay Goals (PPG), and Location (successful goals vs misses).  Once our model has been validated for the 2022-2023 season, we will be able to leverage this model to review the makeup of the 2023 NHL teams and predict which team has the best chance to win the Stanley Cup in 2024 based on current rosters.

Note: The 2004-2005 season was player work stopage and therefore the National Hockey League (NHL) suspended the season.  Only 29 Stanley Cup seasons were analysed

# Technology used:

Python Flask API: Utilised to automatically fetch data from MySQL database and render the template. Powering the dashboard.

JavaScript: Used to plot the interactive charts.

MySQL with Flask: Utilised to import data from a CSV file obtained from NHL statsapi.

HTML and CSS: Utilised to create the web application, with HTML providing the structure and layout and CSS enhancing the appearance.

Bootstrap: Utilised alongside HTML and CSS for navigation bars and buttons??

Pandas: Used to clean, prepare, and transform the data for analysis by removing unnecessary columns and data.

## Table of Contents

- [Background](#background)
- [Limitations](#limitations)
- [Data Collection](#data-collection)
- [Analysis](#analysis)
- [Conclusion](#conclusion) 
- [Future Work](#future-work)
- [Team Members](#team-members)
- [Appendix](#appendix)


## Background
The Stanley Cup is the hardest trophy to win in all of professional sports, awarded annually to the team that emerges victorious in the National Hockey League (NHL) playoffs.  The winning team must win 16 games in order to win "The Cup". Understanding the composition of winning and losing teams can provide valuable insights into the dynamics and strategies that contribute to success on the ice.

## Limitations
###- A few limitations were identified from the beginning of this project.
###- This is an enhanced version of our initial project in an attempt to prove our hypothesis and needed to reserve predictive modeling for a future version.
###- Financials, only free APIs were used as there was not a budget to purchase additional APIs
###- The 2004 - 2005 season was cancelled due to the NHL labour dispute. Hence, although our data pulls over 31 years, there are only 30 actual seasons. 


## Data Collection
###The data used for this analysis was collected from the NHL's free Application Programing Interface (API) which included official NHL records and statistics for each season, team and player. It includes information such as player's name, age, nationality, and team affiliation for each season.  As well as ###all the statistical information for each player and team.  In order to harvest the information needed, the first task was to get a list of all Stanley Cup winners for the past 30 years (1992-2023).  To obtain this information, a scrape of:
```
Team Stats per season: 
API Call: https://statsapi.web.nhl.com/api/v1/teams/<Team ID>?expand=team.stats&season=<season>  
API Example: https://statsapi.web.nhl.com/api/v1/teams/1?expand=team.stats&season=20142015 


Roster per team per season:
API Call: https://statsapi.web.nhl.com/api/v1/teams/<Team ID>?expand=team.roster&season=<season>
API Example: https://statsapi.web.nhl.com/api/v1/teams/1?expand=team.roster&season=20142015

Player Stats per season:
API Call: https://statsapi.web.nhl.com/api/v1/people/<Player ID>/stats??stats=statsSingleSeason&season=<season>
API Example: https://statsapi.web.nhl.com/api/v1/people/8477474/stats?stats=statsSingleSeason&season=19801981


Player Stats year by year season:
API Call: https://statsapi.web.nhl.com/api/v1/people/<Player ID>/stats?stats=yearByYear
API Example: https://statsapi.web.nhl.com/api/v1/people/8477474/stats?stats=yearByYear
###url = "https://en.wikipedia.org/wiki/List_of_Stanley_Cup_champions"
```

>_stanleycup_winner_cleaned_df.head()/stanleycup_losing_cleaned_df.head()_
>
>![](images/winninglosingteams.png)

Due to the format of the "season" needed as a parameter used by the NHL API, the dates were formated from '1991' to '19911992' 

Once the winning teams we identified the 30 Stanley Cup winning teams from 1991-2022, the following NHL API's were used

```
Teams Information
GET https://statsapi.web.nhl.com/api/v1/teams

Returns a list of data about all teams including their ID's, venue details, division, conference and franchise information.
```

The Team ID's were used to construct two (2) dataframes to associate the Team ID with the Winning teams and losing teams

>_stanleycup_winning_merge_byname_ID.head()/stanleycup_losing_merge_byname_ID.head()_
>
>![](images/winninglosingteamswithids.png)

Using the Team IDs and the seasons, the winning and losing dataframes could be expanded to include the rosters and player IDs 
```
Team Roster
GET https://statsapi.web.nhl.com/api/v1/team/<ID>?expand=team.roster&season=<seasom>

Returns the roster for the specified season
```
>_winning_df.head()/losing_df.head()_
>
>![](images/winninglosingteamsplayerids.png)


The player ID was used to get the player characteristics using the player ID and appended to the winning and losing dataframes 
```
Player Details and Characteristics
GET https://statsapi.web.nhl.com/api/v1/people/<ID>

Returns details for a player, such as birth year and Nationality. 

The birthyear was used to extrapolate the age of the player the season the player won/lost the Stanley Cup.
```
>_winning_df.head()/losing_df.head()_
>
>![](images/winninglosingteamsplayeridsdetails.png)

New dataframes were created for both the winning and losing Stanley Cup teams to hold the average age per season of the team(s).  

>avg_player_age_winning_df.head()/avg_player_age_losing_df
>
>![](images/winninglosingteamsavgageperseason.png)

Nationalities of the Stanley Cup Winning Team in 1991 and 2022 dataframes were generated in order to evaluate a trend in the nationality make-up of the teams in the 30 year span.

>player_nat_1992.value_counts()/player_nat_2022.value_counts()
>
>![](images/winningteamnationality19912022.png)

Statistics of all the players were then compiled and appended to the winning and losing dataframes

```
Player Statistics
GET https://statsapi.web.nhl.com/api/v1/people/<ID>/stats?stats=statsSingleSeason&season=<SEASON>

Returns all statistics for that player from specified season
```

The stats that were compiled from the winning teams are:
- Penalty Minutes (PIM)
- PowerPlay Goals (PPG)
- Over Time Winning Gola (OTG)
- Plus/Minus (+/-)
- Point (Pts)

>winning_df.head()/losing_df.head()
>
>![](images/playerstatswinninglosingperseason.png)

# Hypothesis
All teams are created equal and there are no KPIs that indicate a material difference
# Null Hypothesis
There are KPIs that have a material influence on the odds of a hockey team winning the Stanley Cup.  If a top performer in this KPI, the team will then be favored to win.

## Analysis
The main focus of this project is to compile and analyze the nationality distributions, player statistics, and team statistics of the Stanley Cup winning teams over the past 30 seasons. By examining these variables, we can gain a deeper understanding of the factors that may contribute to a team's success or failure in the pursuit of the Stanley Cup.  Our analysis is as follows:
- Player distribution by nationality.  When selecting a particular year's winners from the applicable dropdown, you can see the headcount of the player distribution. 
- The Canadian player reduction in representation was most significant impacted in the decade of 2003-2012 and has remained consistent since.
- The majority of the goals scored are shots taken in the XXX quadrant of the defending team's ice area.
- YOY we see a consistent increase in representation of European born players.  As seen from the interactive map, Russia was heavily represented in the first 2 decades of data, however as of late we now see greater talent and representation from locations Sweden, Finland, and Czech Republic.
- The KPI with the greatest differential when comparing Stanley Cup winning teams vs others, are +/-, and PPK.

## Conclusion
This project aims to provide insights into the factors that contribute to success in hockey. The findings of this analysis may be valuable for coaches, players, and fans alike, as they shed light on the characteristics of championship teams.  These characteristics may be consider the makeup of a Stanley Cup winning team:  
- Within the European market, we see a shift in players from home countries with smaller population numbers then some of it's other representing countries with strong hockey programs.
- Consistency amongst player performance holds greater value then a couple of superstars.  The sum of the team's performance is greater than that of an elite player.  I.E. Vegas Golden Knights vs Edmonton Oilers.  As per our ideal makeup and criteria, 60% of Vegas players fell within the idea range for performance where has Edmonton only had 10% (McDavid and Drisital).

## Future Work
#This project is an ongoing effort, and future updates may include additional seasons, and more in-depth analysis on suplimentary statistics. We welcome contributions and suggestions from the community to further enhance this repository.  We have outlined areas of work that are most important:

## How to access the index.html
First download the folder called 'NHLStats'.
Open you terminal and 'cd' into where the 'NHL' folder is located in your computer.
Then in the terminal type in, 'python -m http.server'.
It should show, 'Serving HTTP on :: 8000'.
Go to your browser and type in the search bar, 'localhost8000'.
This will display the dashboard.

## Team Members

Ravina Kolsawala

Ron Brennan

Gosaye White

Ghislain Nyirumuheto

Joel Demontigny

## Appendix
Glossary

## Player Statistics per Season:
timeOnIce  - Time One Ice
assists - Assists
goals - Goals
pim – Penalty Infraction Minutes
shots – Shots on Goal
games – Number of Games
hits – Number of Hits Given
powerPlayGoals – Power Play Goals
powerPlayPoints – Power Play Goals
powerPlayTimeOnIce – Total Power Play Time On Ice
evenTimeOnIce – Even Strength Time On Ice
faceOffPct – Face-off Winning Percentage
shotPct – Shot of Goal Percentage
gameWinningGoals – Number of Game Winning Goals
overTimeGoals – Number of Over-Time Goals
shortHandedGoals – Number of Short-Handed Goals
shortHandedPoints – Number of Short-Handed Points
shortHandedTimeOnIce – Total Short-Handed Time On Ice
blocked - Total Number of Blocked Shots
plusMinus – Plus - Minus
points – Total Points
shifts – Total Number of Shifts per season
timeOnIcePerGame – Total Time on Ice per Each Game
evenTimeOnIcePerGame – Total Even Strength Time On Ice
shortHandedTimeOnIcePerGame – Total Short-Handed Time On Ice
powerPlayTimeOnIcePerGame –Total Power Play Time On Ice

## Team Statistics per Season:
gamesPlayed – Total Number of Games Played in Specified Season
wins – Total Team Wins in Specified Season
losses – Total Team Losses
ot – Total Number of Over-Time(s) in Specified Season
pts – Total Number of Points in Specified Season
ptPctg – TotalPoint Percentage
goalsPerGame – Average Goals per Game
goalsAgainstPerGame - Average Goals Against Per Game
evGGARatio – Ratio of Goals Scored In an Even Strength Game
powerPlayPercentage – Power Play Goals Percentage
powerPlayGoals – Number of Power Play Goals
powerPlayGoalsAgainst – Number of Power Play Goals Against
powerPlayOpportunities – Total Number of Power Play
penaltyKillPercentage – Total Number of Penalty Kills
shotsPerGame – Average Shots per Game
shotsAllowed – Average Shots per Game
winScoreFirst – Total Games Won when Team Scores First
winOppScoreFirst – Total Number of Games Lost when Opposing Team Scores First
winLeadFirstPer - Total Number of Games Won when Team Leads after the 1st Period
winLeadSecondPer - Total Number of Games Won when Team Leads after the 2nd Period
winOutshootOpp – Total Wins when Team Out-Shoots Opponents
winOutshotByOpp – Tota Wins when Opposing Team Out-Shoots Team
faceOffsTaken – Total Number of Faceoffs Taken
faceOffsWon – Total Number of Faceoffs Won
faceOffsLost - Total Number of Faceoffs Lost
faceOffWinPercentage – Faceoff Win Percentage
shootingPctg – Shooting Faceoff Percentage
savePctg – Average Save Percentage
