-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: gator3228.hostgator.com    Database: rbrennan_nhl_project_2.0_test
-- ------------------------------------------------------
-- Server version	5.6.41-84.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `conference`
--

DROP TABLE IF EXISTS `conference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conference` (
  `conference_id` int(11) NOT NULL,
  `conference_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`conference_id`),
  UNIQUE KEY `conference_id_UNIQUE` (`conference_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conference`
--

LOCK TABLES `conference` WRITE;
/*!40000 ALTER TABLE `conference` DISABLE KEYS */;
/*!40000 ALTER TABLE `conference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `division`
--

DROP TABLE IF EXISTS `division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `division` (
  `division_id` int(11) NOT NULL,
  `division_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`division_id`),
  UNIQUE KEY `division_id_UNIQUE` (`division_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division`
--

LOCK TABLES `division` WRITE;
/*!40000 ALTER TABLE `division` DISABLE KEYS */;
/*!40000 ALTER TABLE `division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `player_id` int(11) NOT NULL,
  `player_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_firstName` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_lastName` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_primaryNumber` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_birthDate` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_birthCity` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_birthStateProvince` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_birthCountry` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_nationality` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_height` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_weight` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_active` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_rookie` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_shootsCatches` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_rosterStatus` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `player_primaryPositionCode` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`player_id`),
  UNIQUE KEY `player_id_UNIQUE` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_stats`
--

DROP TABLE IF EXISTS `player_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_stats` (
  `player_stats_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `season_id` int(11) NOT NULL,
  `player_stats_timeOnIce` int(11) NOT NULL DEFAULT '0',
  `player_stats_assists` int(11) NOT NULL DEFAULT '0',
  `player_stats_goals` int(11) NOT NULL DEFAULT '0',
  `player_stats_pim` int(11) NOT NULL DEFAULT '0',
  `player_stats_shots` int(11) NOT NULL DEFAULT '0',
  `player_stats_games` int(11) NOT NULL DEFAULT '0',
  `player_stats_hits` int(11) NOT NULL DEFAULT '0',
  `player_stats_powerPlayGoals` int(11) NOT NULL DEFAULT '0',
  `player_stats_powerPlayPoints` int(11) NOT NULL DEFAULT '0',
  `player_stats_powerPlayTimeOnIce` int(11) NOT NULL DEFAULT '0',
  `player_stats_evenTimeOnIce` int(11) NOT NULL DEFAULT '0',
  `player_stats_penaltyMinutes` int(11) NOT NULL DEFAULT '0',
  `player_stats_faceOffPct` int(11) NOT NULL DEFAULT '0',
  `player_stats_shotPct` int(11) NOT NULL DEFAULT '0',
  `player_stats_gameWinningGoals` int(11) NOT NULL DEFAULT '0',
  `player_stats_overTimeGoals` int(11) NOT NULL DEFAULT '0',
  `player_stats_shortHandedGoals` int(11) NOT NULL DEFAULT '0',
  `player_stats_shortHandedPoints` int(11) NOT NULL DEFAULT '0',
  `player_stats_shortHandedTimeOnIce` int(11) NOT NULL DEFAULT '0',
  `player_stats_blocked` int(11) NOT NULL DEFAULT '0',
  `player_stats_plusMinus` int(11) NOT NULL DEFAULT '0',
  `player_stats_points` int(11) NOT NULL DEFAULT '0',
  `player_stats_shifts` int(11) NOT NULL DEFAULT '0',
  `player_stats_timeOnIcePerGame` int(11) NOT NULL DEFAULT '0',
  `player_stats_evenTimeOnIcePerGame` int(11) NOT NULL DEFAULT '0',
  `player_stats_shortHandedTimeOnIcePerGame` int(11) NOT NULL DEFAULT '0',
  `player_stats_powerPlayTimeOnIcePerGame` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`player_stats_id`),
  UNIQUE KEY `player_stats_id_UNIQUE` (`player_stats_id`),
  KEY `FK_player_id_idx` (`player_id`),
  KEY `FK_team_id_idx` (`team_id`),
  KEY `FK_season_id_idx` (`season_id`),
  CONSTRAINT `FK_player_stats_player_id` FOREIGN KEY (`player_id`) REFERENCES `player` (`player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_player_stats_season_id` FOREIGN KEY (`season_id`) REFERENCES `season` (`season_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_player_stats_team_id` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_stats`
--

LOCK TABLES `player_stats` WRITE;
/*!40000 ALTER TABLE `player_stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `season`
--

DROP TABLE IF EXISTS `season`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `season` (
  `season_id` int(11) NOT NULL,
  `season_years` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `season_winner` int(11) NOT NULL,
  `season_loser` int(11) NOT NULL,
  PRIMARY KEY (`season_id`),
  UNIQUE KEY `season_id_UNIQUE` (`season_id`),
  KEY `FK_season_winner_idx` (`season_winner`),
  KEY `FK_season_loser_idx` (`season_loser`),
  CONSTRAINT `FK_season_loser` FOREIGN KEY (`season_loser`) REFERENCES `team` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_season_winner` FOREIGN KEY (`season_winner`) REFERENCES `team` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `season`
--

LOCK TABLES `season` WRITE;
/*!40000 ALTER TABLE `season` DISABLE KEYS */;
/*!40000 ALTER TABLE `season` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_id` int(11) NOT NULL,
  `team_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `team_location` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `team_division_id` int(11) NOT NULL,
  `team_conference_id` int(11) NOT NULL,
  `team_franchise_id` int(11) NOT NULL,
  `team_active` tinyint(4) NOT NULL,
  PRIMARY KEY (`team_id`),
  UNIQUE KEY `team_id_UNIQUE` (`team_id`),
  KEY `FK_team_conference_id_idx` (`team_conference_id`),
  KEY `FK_team_division_id_idx` (`team_division_id`),
  CONSTRAINT `FK_team_conference_id` FOREIGN KEY (`team_conference_id`) REFERENCES `conference` (`conference_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_team_division_id` FOREIGN KEY (`team_division_id`) REFERENCES `division` (`division_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_stats`
--

DROP TABLE IF EXISTS `team_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_stats` (
  `team_stats_id` int(11) NOT NULL,
  `team_stats_team_id` int(11) NOT NULL,
  `team_stats_season_id` int(11) NOT NULL,
  `team_stats_gamesPlayed` int(11) NOT NULL,
  `team_stats_wins` int(11) NOT NULL,
  `team_stats_losses` int(11) NOT NULL,
  `team_stats_ot` int(11) NOT NULL,
  `team_stats_pts` int(11) NOT NULL,
  `team_stats_ptPctg` int(11) NOT NULL,
  `team_stats_goalsPerGame` int(11) NOT NULL,
  `team_stats_goalsAgainstPerGame` int(11) NOT NULL,
  `team_stats_evGGARatio` int(11) NOT NULL,
  `team_stats_powerPlayPercentage` int(11) NOT NULL,
  `team_stats_powerPlayGoals` int(11) NOT NULL,
  `team_stats_powerPlayGoalsAgainst` int(11) NOT NULL,
  `team_stats_powerPlayOpportunities` int(11) NOT NULL,
  `team_stats_penaltyKillPercentage` int(11) NOT NULL,
  `team_stats_shotsPerGame` int(11) NOT NULL,
  `team_stats_shotsAllowed` int(11) NOT NULL,
  `team_stats_winScoreFirst` int(11) NOT NULL,
  `team_stats_winOppScoreFirst` int(11) NOT NULL,
  `team_stats_winLeadFirstPer` int(11) NOT NULL,
  `team_stats_winLeadSecondPer` int(11) NOT NULL,
  `team_stats_winOutshootOpp` int(11) NOT NULL,
  `team_stats_winOutshotByOpp` int(11) NOT NULL,
  `team_stats_faceOffsTaken` int(11) NOT NULL,
  `team_stats_faceOffsWon` int(11) NOT NULL,
  `team_stats_faceOffsLost` int(11) NOT NULL,
  `team_stats_faceOffWinPercentage` int(11) NOT NULL,
  `team_stats_shootingPctg` int(11) NOT NULL,
  `team_stats_savePctg` int(11) NOT NULL,
  `team_statscol` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`team_stats_id`),
  UNIQUE KEY `team_stats_id_UNIQUE` (`team_stats_id`),
  KEY `FK_team_id_idx` (`team_stats_team_id`),
  KEY `FK_team_stats_season_id_idx` (`team_stats_season_id`),
  CONSTRAINT `FK_team_stats_season_id` FOREIGN KEY (`team_stats_season_id`) REFERENCES `season` (`season_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_team_stats_team_id` FOREIGN KEY (`team_stats_team_id`) REFERENCES `team` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_stats`
--

LOCK TABLES `team_stats` WRITE;
/*!40000 ALTER TABLE `team_stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_stats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-29 21:43:40
