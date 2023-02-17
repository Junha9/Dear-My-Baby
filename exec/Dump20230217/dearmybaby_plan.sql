-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: i8a206.p.ssafy.io    Database: dearmybaby
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

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
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `plan_id` bigint NOT NULL,
  `end_date` date NOT NULL,
  `plan_destination` varchar(255) NOT NULL,
  `plan_name` varchar(255) NOT NULL,
  `plan_period` int NOT NULL,
  `start_date` date NOT NULL,
  `family_id` bigint DEFAULT NULL,
  `plan_state` int NOT NULL,
  `current_day` int NOT NULL,
  `plan_latitude` varchar(255) DEFAULT NULL,
  `plan_longitude` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`plan_id`),
  KEY `FKrbi86qwemcle928vbn4km5ley` (`family_id`),
  CONSTRAINT `FKrbi86qwemcle928vbn4km5ley` FOREIGN KEY (`family_id`) REFERENCES `family` (`family_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (1500,'2023-02-18','경주','경주 여행',3,'2023-02-16',1476,2,3,'35.84406257','129.3122708'),(1511,'2023-02-18','제주','제주 여행',3,'2023-02-16',1480,2,3,'33.35648516254793','126.46454584465897'),(1521,'2023-02-18','가평 양평','가평 양평 여행',3,'2023-02-16',1515,1,1,'37.794925','127.43003'),(1553,'2023-02-18','제주','제주 여행',3,'2023-02-16',1548,1,1,'33.35648516254793','126.46454584465897'),(1561,'2023-02-18','전주','전주 여행',3,'2023-02-16',1476,1,1,'35.83400122960501','127.11543703651175');
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:50:55
