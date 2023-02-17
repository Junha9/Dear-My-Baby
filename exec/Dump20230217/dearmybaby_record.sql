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
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `record_id` bigint NOT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `record_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `record_text` varchar(255) DEFAULT NULL,
  `record_type` int NOT NULL,
  `day_id` bigint DEFAULT NULL,
  `record_name` varchar(255) NOT NULL,
  PRIMARY KEY (`record_id`),
  KEY `FKeeael7nu2o283sk9jfo3xuadf` (`day_id`),
  CONSTRAINT `FKeeael7nu2o283sk9jfo3xuadf` FOREIGN KEY (`day_id`) REFERENCES `day` (`day_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (1524,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/ea3556ce-a9d0-46f0-8aff-c7f36b037c6dfiles8cceef10-f3fd-4ad1-bff0-825f054c2be3.jpg','37.501758826932','127.03939510482735','2023-02-17 11:06:48','ㅋ',0,1497,'2반'),(1525,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/714fa17d-30b8-42aa-b5a7-da2e2454b6a2filesa331e320-6dcd-44ed-a5fe-d73af8b714be.jpg','37.501758826932','127.03939510482735','2023-02-17 11:06:50','ㅋ',0,1497,'2반'),(1526,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/62a7e3f2-f52c-4cd5-a191-a3ea3efa62bdfiles2f2b6dbe-669f-4b63-9bc0-738023d51362.MOV','37.50171034062305','127.03931150466121','2023-02-17 11:08:26','',1,1518,''),(1538,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/ed0cb2fe-4cd1-4b13-a9b3-7cfd60eb5175filesbcd70739-88ec-4ae1-bdca-24a43012ac18.MOV','37.50171034062305','127.03931150466121','2023-02-17 11:18:22','대희야 너무 즐거워보인다ㅎㅎㅎㅎ 승태 오빠가 고생하네^^',1,1518,'아빠와 즐거워하는 대희'),(1554,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/6d0f56e0-21b3-4528-8166-e6e48b6ff8fdfilesf12a934c-c917-4bfc-bd6d-58f8ffe5767e.MOV','33.4996213','126.5311884','2023-02-17 11:20:58','대희 너무 재밌어하네 ㅎㅎㅎ 승태 오빠가 고생이 많다^^',1,1550,'너무 즐거워하는 대희^^'),(1555,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/91f29cf0-b0da-4f1d-93e8-f7274a92b3eefilesf7165c65-818e-44b8-959a-81a587f5744a.mp4','37.5062528','127.0185984','2023-02-17 11:32:26','멋쟁이',1,1508,'승태'),(1556,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/78d51f44-5443-48b3-bd8d-66b4aa4afa6bfiles739b8afa-e769-4866-83a7-4fc94a8ef8e3.png','37.5062528','127.0185984','2023-02-17 11:40:22','2',0,1509,'2'),(1557,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/a16cadea-f1f2-4668-88eb-dffe81609bcffiles8fe714ef-f051-46c3-9dd2-d5da6ce70bbd.png','37.5062528','127.0185984','2023-02-17 11:40:33','3',0,1510,'3'),(1562,'https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/cb0ee606-688e-41f7-97b1-9aea2b52e552filesbdb12f50-1579-47cb-87c5-b7f99702d511.jpeg','37.501862609435264','127.0395673237903','2023-02-17 11:48:28',' 치아가 있지만 없다',0,1558,'썬구리');
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
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
