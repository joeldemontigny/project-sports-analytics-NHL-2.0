# project-sports-analytics-NHL-2.0
[Project 3 proposal.docx](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/files/12222431/Project.3.proposal.docx)

# project timelines:
![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/cead8b13-dcb9-48cb-92b8-19ee070227a9)

## Overview
For this project, we are focused on providing the best visuals representing data related to previous Stanley Cup winning teams over the last 30 seasons.   We are providing an enhanced user experience by creating an interactive dashboard that will enable the end user to select various filters to analyze and compare data from each winning team over the course of the last 30 seasons vs the rest of the league, or for informative purposes to analyze player statistics.  The basis of this project, is the evolution of our initial data gathering and analysis on this topic which can be found here: (https://github.com/rbrennan55/project-sports-analytics-NHL.git). 

Note: The 2004-2005 season was player work stopage and therefore the National Hockey League (NHL) suspended the season.  30 Stanley Cup seasons were analysed.

## Technology used:

Python Flask API

JavaScript:  Note, video.min.js is a JS library that has not been covered in our course.  It's specific use enables us to create a video at launch of the HTML page.

API Ninjas

SQLAlchamy

HTML and CSS

Pandas

Numpy

Bootstrap 

Datetime

MySQL-Relational database used.

## Relational Database (ERD):


![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/2ab208c6-1356-467d-af15-ee7fccd62c96)

## External APIs used:

Team Stats per season: 
API Call: https://statsapi.web.nhl.com/api/v1/teams

Roster per team per season:	
API Call: https://statsapi.web.nhl.com/api/v1/teams/<Team ID>?expand=team.stats&season=<season>

Player Stats per season:
API Call: https://statsapi.web.nhl.com/api/v1/teams/<Team ID>?expand=team.roster&season=<season>

Player Stats year by year season:
API Call: https://statsapi.web.nhl.com/api/v1/people/<Player ID>/stats??stats=statsSingleSeason&season=<season>

## Internal APIs created with Flask: 

Season:/api/nhl2.0/season
Players:/api/nhl2.0/players
Player_Stats:/api/nhl2.0/player_stats
Goalie_Stats:/api/nhl2.0/goalie_stats
Teams:/api/nhl2.0/teams
Team_Stats:/api/nhl2.0/team_stats

## Background:

The Stanley Cup is one of the most difficult trophies to win in all of professional sports, awarded annually to the team that emerges victorious in the National Hockey League (NHL) playoffs.  The winning team must qualify for the playoffs and win another 16 games in order to win "The Cup". Understanding the composition of historical winning teams can provide valuable insights into the dynamics and strategies that contribute to success on the ice.

## App set-up: *Needs update

## Data Collection: *Needs update

The data used for this analysis was collected from the NHL's free Application Programing Interface (API) which included official NHL records and statistics for each season, team and player. It includes information such as player's name, age, nationality, and team affiliation for each season.  As well as player specific information.  In order to harvest the information needed, the first task was to get a list of all Stanley Cup winners for the past 30 seasons (1992-2023).  To obtain this information, a scrape of:

## How to access the index.html: *Needs update and do we need this

First download the folder called 'NHLStats'.
Open you terminal and 'cd' into where the 'NHL' folder is located in your computer.
Then in the terminal type in, 'python -m http.server'.
It should show, 'Serving HTTP on :: 8000'.
Go to your browser and type in the search bar, 'localhost8000'.
This will display the dashboard.

## Dashboards:

### Interactive world map:  *Needs image

### Team comparisons per season:

![image](https://github.com/joeldemontigny/project-sports-analytics-NHL-2.0/assets/130711180/0cbda9df-902a-4e34-aaab-7115e4f06193)

### Stanley Cup winning team performance per season:  *Needs image

### Goalie statistics comparison:   *Needs image


## Challenges and Lessons Learned:

Financials, only free APIs were used as there was not a budget to purchase additional APIs.

Data/API related limitations.  APIs used are not locked or static, and therefore updates to the source are made impacting the output of our code.

Underestimating the complexity and skills required to achieve the desired end result.

Need to improve assessing timelines and time constraints.

## Limitations:

The 2004 - 2005 season was cancelled due to the NHL labour dispute. Hence, although our data pulls over 31 years, there are only 30 actual seasons. 

## Future Work:

This project is an ongoing effort, and future updates will include proving our hypothesis and a predictive model.  We will use our model to measure against current NHL rosters to identify what teams have a preferred chance of winning the Stanley Cup for the following year.

## Team Members:

Ravina Kolsawala

Ron Brennan

Gosaye White

Ghislain Nyirumuheto

Joel Demontigny

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


_(The NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.)_
