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
-- Table structure for table `family_user`
--

DROP TABLE IF EXISTS `family_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family_user` (
  `family_user_id` bigint NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `family_id` bigint DEFAULT NULL,
  `member_no` bigint DEFAULT NULL,
  PRIMARY KEY (`family_user_id`),
  KEY `FKf7g1y0xdwhdgws9yy2c19q129` (`family_id`),
  KEY `FKknp61ih87pejlr6lkrjnm1j98` (`member_no`),
  CONSTRAINT `FKf7g1y0xdwhdgws9yy2c19q129` FOREIGN KEY (`family_id`) REFERENCES `family` (`family_id`),
  CONSTRAINT `FKknp61ih87pejlr6lkrjnm1j98` FOREIGN KEY (`member_no`) REFERENCES `member` (`member_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_user`
--

LOCK TABLES `family_user` WRITE;
/*!40000 ALTER TABLE `family_user` DISABLE KEYS */;
INSERT INTO `family_user` VALUES (1472,'FAMILYLEADER',1471,1470),(1477,'FAMILYLEADER',1476,1475),(1481,'FAMILYLEADER',1480,1479),(1516,'FAMILYLEADER',1515,1512),(1549,'FAMILYLEADER',1548,1547);
/*!40000 ALTER TABLE `family_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:50:58
