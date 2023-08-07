# project-sports-analytics-NHL-2.0
[Project 3 proposal.docx](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/files/12222431/Project.3.proposal.docx)

![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/f38c5b9e-7594-4f0d-ad95-857a2b5108be)


![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/cead8b13-dcb9-48cb-92b8-19ee070227a9)


# project-sports-analytics-NHL
_(The NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.)_

## Overview
For this project, we are focused on providing the best visuals representing data related to previous Stanley Cup winning teams over the last 30 seasons.   We are providing an enhanced user experience by creating an interactive dashboard that will enable the end user to select various filters to analyze and compare data from each winning team over the course of the last 30 seasons vs the rest of the league, or for informative purposes to analyze player statistics.  The basis of this project, is the evolution of our initial data gathering and analysis on this topic which can be found here: (https://github.com/rbrennan55/project-sports-analytics-NHL.git). 

Note: The 2004-2005 season was player work stopage and therefore the National Hockey League (NHL) suspended the season.  30 Stanley Cup seasons were analysed.

# Technology used:

Python Flask API: Utilised to automatically fetch data from MySQL database and render the template. Powering the dashboard.

JavaScript: Used to plot the interactive charts.

API Ninjas: Used to identify longitute of latitude of a player's birth city.

SQLalchamy with Flask: Utilised to import data from a CSV file obtained from NHL statsapi.

HTML and CSS: Utilised to create the web application, with HTML providing the structure and layout and CSS enhancing the appearance.

Pandas: Used to clean, prepare, and transform the data for analysis by removing unnecessary columns and data.

Numpy: 

Datetime: 

MySQL: Used to house our data.

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

The Stanley Cup is one of the most difficult trophies to win in all of professional sports, awarded annually to the team that emerges victorious in the National Hockey League (NHL) playoffs.  The winning team must qualify for the playoffs and win another 16 games in order to win "The Cup". Understanding the composition of historical winning teams can provide valuable insights into the dynamics and strategies that contribute to success on the ice.

For this project version, we are focused on providing the best visuals representing data related to Stanley Cup winning teams over the last 30 seasons.   We are providing an enhanced user experience by creating an interactive dashboard that will enable the end user to select various filters to analyze and compare data from each winning team over the course of the last 30 seasons vs the rest of the league, or for informative purposes to analyze player statistics.  The basis of this project, is the evolution of our initial data gathering and analysis on this topic which can be found here: (https://github.com/rbrennan55/project-sports-analytics-NHL.git). 


## Limitations
###- Data/API related limitations ***needs updating***.
###- Financials, only free APIs were used as there was not a budget to purchase additional APIs
###- The 2004 - 2005 season was cancelled due to the NHL labour dispute. Hence, although our data pulls over 31 years, there are only 30 actual seasons. 


## Data Collection
###The data used for this analysis was collected from the NHL's free Application Programing Interface (API) which included official NHL records and statistics for each season, team and player. It includes information such as player's name, age, nationality, and team affiliation for each season.  As well as player specific information.  In order to harvest the information needed, the first task was to get a list of all Stanley Cup winners for the past 30 seasons (1992-2023).  To obtain this information, a scrape of:
```
Team Stats per season: 
API Call: https://statsapi.web.nhl.com/api/v1/teams/<Team ID>?expand=team.stats&season=<season>  

Roster per team per season:
API Call: https://statsapi.web.nhl.com/api/v1/teams/<Team ID>?expand=team.roster&season=<season>

Player Stats per season:
API Call: https://statsapi.web.nhl.com/api/v1/people/<Player ID>/stats??stats=statsSingleSeason&season=<season>

Player Stats year by year season:
API Call: https://statsapi.web.nhl.com/api/v1/people/<Player ID>/stats?stats=yearByYear

# Leveraging various datapoints, we were able to create the following interactive web page and dashboard(s):

## Interactive world map

## Winning team comparison

## Player statistics information

## Goalie statistics comparison
![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/deb52ecd-c463-4515-8f09-e4859228c72b)

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

## Future Work
# This project is an ongoing effort, and future updates will include proving our hypothesis and a predictive model.  We will use our model to measure against current NHL rosters to identify what teams have a preferred chance of winning the Stanley Cup for the following year.

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

# Appendix
## Glossary

### Player Statistics per Season:

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


### Team Statistics per Season:

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
