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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_no` bigint NOT NULL,
  `join_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `member_email` varchar(255) NOT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  `member_img` varchar(255) DEFAULT NULL,
  `member_name` varchar(255) NOT NULL,
  `member_password` varchar(255) NOT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`member_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1470,'2023-02-17 10:25:20','djsk@naver.com','dohyun','https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/920af092-5313-44db-918d-f58fd19386b6files2ad2839d-e9e6-4752-8549-0cd99a0dcb19.blob','모현','1234',NULL),(1474,'2023-02-17 10:32:33','a@naver.com','testid','https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/433d94a9-45a6-44be-a2ea-27e026503952files84301ed0-aa05-4377-8aab-d548e8c33610.blob','테스트','1234','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0aWQiLCJleHAiOjE2NzcyMDIzNTZ9.4neYpkzaVTzZp8nLXnBApRTJOMHfFTQ4_PXlLROefew'),(1475,'2023-02-17 10:33:17','a@naver.com','test1','https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/e196705e-e67a-409a-bec9-f93944ae8bd6files4d47b0f2-1f6b-42a3-9211-5f1834d80592.blob','dkdkdk','1234','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsImV4cCI6MTY3NzIwNDE2MX0.w7BB75k_NIa06UxxvHz2WW9hdZgJjGy7G3IbqKOh6yQ'),(1479,'2023-02-17 10:51:45','ssafy@ssafy.com','ssafygood','https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/25047985-bdfe-40ec-af25-188c17bf56ecfilesdfd96054-e0e5-4321-b413-754640b1c908.blob','김호정','ssafy12!','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzc2FmeWdvb2QiLCJleHAiOjE2NzcyMDM1MTN9.3thUf_Aqh2LsSMR80U2jA1AAEVjxEuk7RhvrOvHXLF4'),(1512,'2023-02-17 11:04:50','ss@naver.com','kkkkk','https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/fb30eb05-775e-499e-b962-9cb5800b6485files60b7690f-18c5-400f-90a6-018a653833e4.blob','Zz','1234',NULL),(1547,'2023-02-17 11:19:38','ssafy@ssafy.com','hoguangel','https://dearmybucket.s3.ap-northeast-2.amazonaws.com/dmb/5bc1f9b4-b8d1-43a8-85f5-8ccd59cd7436files072d9dfe-74c5-4622-9939-3d0d92ded377.blob','김호정','1234','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJob2d1YW5nZWwiLCJleHAiOjE2NzcyMDUxODZ9.P50KZRKBXqgXvtiHd8l8pOPQaTDtgK6RGIF3NUd4O5s');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:50:54
