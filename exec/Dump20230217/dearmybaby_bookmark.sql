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
-- Table structure for table `bookmark`
--

DROP TABLE IF EXISTS `bookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmark` (
  `bookmark_id` bigint NOT NULL,
  `bookmark_address` varchar(255) DEFAULT NULL,
  `bookmark_latitude` varchar(255) DEFAULT NULL,
  `bookmark_longitude` varchar(255) DEFAULT NULL,
  `bookmark_name` varchar(255) DEFAULT NULL,
  `plan_id` bigint DEFAULT NULL,
  `bookmark_category` varchar(255) DEFAULT NULL,
  `bookmark_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bookmark_id`),
  KEY `FKdrm4osyt8iyut264gy9lecsil` (`plan_id`),
  CONSTRAINT `FKdrm4osyt8iyut264gy9lecsil` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`plan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmark`
--

LOCK TABLES `bookmark` WRITE;
/*!40000 ALTER TABLE `bookmark` DISABLE KEYS */;
INSERT INTO `bookmark` VALUES (1501,NULL,'35.82929954620109','129.21812129691938','월정교',1500,'','http://place.map.kakao.com/1839209698'),(1502,NULL,'35.84447287099048','129.28915834783714','경주루지월드',1500,'관광명소','http://place.map.kakao.com/1657883363'),(1503,NULL,'35.849507092525485','129.26166060389696','경주동궁원',1500,'관광명소','http://place.map.kakao.com/19464673'),(1504,NULL,'35.7382615855879','129.486876732783','경주문무대왕릉',1500,'','http://place.map.kakao.com/11276178'),(1505,NULL,'35.8213166189963','129.509520717781','오류고아라해변',1500,'관광명소','http://place.map.kakao.com/11256465'),(1506,NULL,'35.68637508285036','129.4745273618613','경주 양남 주상절리',1500,'','http://place.map.kakao.com/11759373'),(1507,NULL,'36.0016178673101','129.253055918864','경주양동마을',1500,'','http://place.map.kakao.com/27355009'),(1513,NULL,'33.50563877194622','126.4726047828175','올레길 17코스(광령-제주원도심 올레)',1511,'관광명소','http://place.map.kakao.com/12753473'),(1514,NULL,'33.24127212174994','126.59230607000688','올레길 6코스(쇠소깍-서귀포 올레)',1511,'관광명소','http://place.map.kakao.com/8015963'),(1517,NULL,'33.49141839664327','126.54332248814438','리바트키즈 제주점',1511,'','http://place.map.kakao.com/1360512393'),(1522,NULL,'37.796901962032905','127.63972132401358','양평해장국',1521,'음식점','http://place.map.kakao.com/11109731'),(1527,NULL,'33.44437796330059','126.9125690458407','키작은삼촌',1511,'음식점','http://place.map.kakao.com/139370894'),(1528,NULL,'33.5436237200763','126.674516922263','키작은집',1511,'숙박','http://place.map.kakao.com/1155840558'),(1529,NULL,'33.541274383213','126.667135470078','깡촌흑돼지 함덕본점',1511,'음식점','http://place.map.kakao.com/27525363'),(1530,NULL,'33.2430314956821','126.567563246454','바다를본돼지 제주서귀포점',1511,'음식점','http://place.map.kakao.com/1868841420'),(1531,NULL,'33.5110253271905','126.529585101466','오현돼지불백',1511,'음식점','http://place.map.kakao.com/22173396'),(1532,NULL,'33.5554813431981','126.795863378839','멘도롱돈까스',1511,'음식점','http://place.map.kakao.com/27132485'),(1533,NULL,'33.521407984868105','126.85757758353434','호자',1511,'음식점','http://place.map.kakao.com/847412816'),(1534,NULL,'33.4812242739281','126.488224445142','바삭돈가스',1511,'음식점','http://place.map.kakao.com/23118367'),(1535,NULL,'33.2476629471468','126.552461948657','율이네감귤체험농장',1511,'','http://place.map.kakao.com/1424416833'),(1536,NULL,'33.25069565292533','126.4353817961507','제주감귤농협 중문지점',1511,'','http://place.map.kakao.com/15476202'),(1537,NULL,'33.35601232414165','126.86373304959253','신천목장',1511,'','http://place.map.kakao.com/20051916');
/*!40000 ALTER TABLE `bookmark` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:50:57
