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
-- Table structure for table `baby_favorite_spot`
--

DROP TABLE IF EXISTS `baby_favorite_spot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baby_favorite_spot` (
  `baby_baby_id` bigint NOT NULL,
  `favorite_spot` varchar(255) DEFAULT NULL,
  KEY `FKgbgpvghkih2hay7yuq3gmvtd4` (`baby_baby_id`),
  CONSTRAINT `FKgbgpvghkih2hay7yuq3gmvtd4` FOREIGN KEY (`baby_baby_id`) REFERENCES `baby` (`baby_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baby_favorite_spot`
--

LOCK TABLES `baby_favorite_spot` WRITE;
/*!40000 ALTER TABLE `baby_favorite_spot` DISABLE KEYS */;
INSERT INTO `baby_favorite_spot` VALUES (1473,'1'),(1473,'2'),(1473,'3'),(1473,'5'),(1473,'6'),(1473,'7'),(1473,'8'),(1478,'1'),(1478,'2'),(1478,'3'),(1478,'4'),(1478,'5'),(1478,'6'),(1478,'7'),(1478,'8'),(1482,'1'),(1482,'2'),(1482,'4'),(1482,'5'),(1482,'6'),(1482,'7'),(1482,'8');
/*!40000 ALTER TABLE `baby_favorite_spot` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:50:53
