# Import the dependencies.
import numpy as np
import pandas as pd
import datetime as dt
import sqlalchemy as sa
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, distinct
from sqlalchemy.pool import NullPool
from sqlalchemy import create_engine, MetaData, Table
#from flask_cors import CORS
from flask import Flask, jsonify


#################################################
# Database Setup
#################################################

from sqlalchemy import create_engine
# Replace these values with your actual database information
hostname = "gator3228.hostgator.com"
username = "rbrennan_nhl_rk"
password = "this_is_the_password"
database = "rbrennan_nhl_project_2.0"
# Create a database connection
db_url = f"mysql+mysqlconnector://{username}:{password}@{hostname}/{database}"
engine = create_engine(db_url)
# Test the connection
try:
    connection = engine.connect()
    print("Connected to MySQL database")
except Exception as e:
    print("Error:", e)

#engine = sa.create_engine('mssql+pyodbc://rbrennan_nhl_rk:this_is_the_password@gator3228.hostgator.com/rbrennan_nhl_project_2.0')


# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Create our session (link) from Python to the DB
session = Session(engine)
# Access the MetaData from the engine's underlying MetaData
metadata = MetaData(bind=engine)
# Load the existing table information
metadata.reflect()
# Print the table names
for table_name in metadata.tables.keys():
    print(table_name)
# Save references to each table
Season = Base.classes.season
#print(Season)
Player = Base.classes.player
#print(Player)
Player_stats =Base.classes.player_stats
print(Player_stats)
Goalie_stats =Base.classes.goalie_stats
print(Goalie_stats)
Teams = Base.classes.team
#print(Teams)
Team_stats = Base.classes.team_stats
#print(Team_stats)




#################################################
# Flask Setup
#################################################
app = Flask (__name__)

#################################################
# Flask Routes
#################################################
# Home page with list of APIs
@app.route("/")
def homepage():
    #list of all APIs
    return( f' -:Project_sports_analytics-NHL-2.0:-<br/>'
            f' Season:/api/nhl2.0/season<br/>'
            f' Players:/api/nhl2.0/players<br/>'
            f' Player_Stats:/api/nhl2.0/player_stats <br/>'
            f' Goalie_Stats:/api/nhl2.0/goalie_stats <br/>'
            f' Teams:/api/nhl2.0/teams <br/>'
            f' Team_Stats:/api/nhl2.0/team_stats <br/>')
#Append precippitation data, zip into dictionary and jasonify it.
@app.route("/api/nhl2.0/season")
def get_season():
    session = Session(engine)

    season_info = session.query(Season).all()
    season_list = []
    for data in season_info:
        season_dict = {"season_year":data.season_year,
                        "season_winner":data.season_winner,
                        "season_loser":data.season_loser

        }
        season_list.append(season_dict)
    return jsonify(season_list)


@app.route("/api/nhl2.0/players")
def get_player():
    session = Session(engine)
    
    player_info = session.query(Player).all()
    player_list = []
    for player in player_info:
        player_dict = {
            "player_id":player.player_id, 
            "player_name":player.player_name,  
            "player_firstName":player.player_firstName, 
            "player_lastName":player.player_lastName,  
            "player_birthDate":player.player_birthDate,  
            "player_birthCity":player.player_birthCity,
            "player_birthCity_Lat":player.player_birthCity_Lat, 
            "player_birthCity_Long":player.player_birthCity_Long,    
            "player_birthStateProvince":player.player_birthStateProvince,  
            "player_birthCountry":player.player_birthCountry,  
            "player_nationality":player.player_nationality,  
            "player_height":player.player_height,  
            "player_weight":player.player_weight,   

            # Include other attributes here
        }
        player_list.append(player_dict)

    return jsonify(player_list)

@app.route("/api/nhl2.0/teams")
def get_teams():
    session = Session(engine)

    teams_info = session.query(Teams).all()
    teams_list = []
    for team in teams_info:
        team_dict = {"team_id":team.team_id,
                        "team_name":team.team_name,
                        "team_location":team.team_location

        }
        teams_list.append(team_dict)
    return jsonify(teams_list)

@app.route("/api/nhl2.0/team_stats")
def get_team_stats():
    session = Session(engine)
    
    # Join the TeamStat and Team tables using SQLAlchemy's ORM
    team_stats_info = (
        session.query(Team_stats, Teams.team_name)
        .join(Teams, Team_stats.team_id == Teams.team_id)
        .all()
    )

    team_stats_list = []
    for team_stat, team_name in team_stats_info:
        team_stat_dict = {
            #"id": team_stat.id,
            "team_name": team_name,
            "team_stats_season_id":team_stat.season_id,
            "team_stats_pts": team_stat.team_stats_pts,
            "team_stats_wins": team_stat.team_stats_wins, 
            "team_stats_goalsPerGame": team_stat.team_stats_goalsPerGame,
            "team_stats_goalsAgainstPerGame": team_stat.team_stats_goalsAgainstPerGame,
            "team_stats_shotsPerGame": team_stat.team_stats_shotsPerGame,
            "team_stats_shotsAllowed": team_stat.team_stats_shotsAllowed
            # Include other attributes here from team_stat
        }
        team_stats_list.append(team_stat_dict)

    return jsonify(team_stats_list)

@app.route("/api/nhl2.0/player_stats")
def get_player_stats():
    session = Session(engine)
    
    # Join the PlayerStat and Player tables using SQLAlchemy's ORM
    player_stats_info = (
        session.query(Player_stats, Player.player_name)
        .join(Player, Player_stats.player_id == Player.player_id)
        .all()
    )

    player_stats_list = []
    for player_stat, player_name in player_stats_info:
        player_stat_dict = {
            "player_name": player_name,
            "player_stats_season_id":player_stat.season_id,
            "player_stats_pim": player_stat.player_stats_pim,
            "player_stats_assists": player_stat.player_stats_assists, 
            "player_stats_goals": player_stat.player_stats_goals,
            "player_stats_shots": player_stat.player_stats_shots,
            "player_stats_penaltyMinutes": player_stat.player_stats_penaltyMinutes,
            "player_stats_plusMinus": player_stat.player_stats_plusMinus,
            "player_stats_points": player_stat.player_stats_points
            # Include other attributes here from team_stat
        }
        player_stats_list.append(player_stat_dict)

    return jsonify(player_stats_list)

@app.route("/api/nhl2.0/goalie_stats")
def get_goalie_stats():
    session = Session(engine)
    
    # Join the PlayerStat and Player tables using SQLAlchemy's ORM
    goalie_stats_info = (
        session.query(Goalie_stats, Player.player_name)
        .join(Player, Goalie_stats.player_id == Player.player_id)
        .all()
    )

    goalie_stats_list = []
    for goalie_stat, player_name in goalie_stats_info:
        goalie_stat_dict = {
            "player_name": player_name,
            "goalie_stats_goalie_season_id":goalie_stat.season_id,
            "goalie_stats_goalie_shutouts": goalie_stat.goalie_stats_goalie_shutouts,
            "goalie_stats_shortHandedSavePercentage": goalie_stat.goalie_stats_shortHandedSavePercentage, 
            "goalie_stats_wins": goalie_stat.goalie_stats_wins,
            "goalie_stats_goalie_losses": goalie_stat.goalie_stats_goalie_losses,
            "goalie_stats_saves": goalie_stat.goalie_stats_saves,
         
            # Include other attributes here from team_stat
        }
        goalie_stats_list.append(goalie_stat_dict)

    return jsonify(goalie_stats_list)
 

# Run the APIs.
if __name__ == "__main__":
    #CORS(app)
    app.run(debug= True)
    