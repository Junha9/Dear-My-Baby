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
-- Table structure for table `tour`
--

DROP TABLE IF EXISTS `tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour` (
  `tour_id` bigint NOT NULL,
  `tour_address` varchar(255) DEFAULT NULL,
  `tour_avl_parking` varchar(255) DEFAULT NULL,
  `tour_avl_stroller_rental` varchar(255) DEFAULT NULL,
  `tour_category` varchar(255) DEFAULT NULL,
  `tour_closed_day` varchar(255) DEFAULT NULL,
  `tour_img_url` varchar(255) DEFAULT NULL,
  `tour_latitude` varchar(255) DEFAULT NULL,
  `tour_longitude` varchar(255) DEFAULT NULL,
  `tour_name` varchar(255) DEFAULT NULL,
  `tour_opening_hours` varchar(255) DEFAULT NULL,
  `tour_outline` varchar(255) DEFAULT NULL,
  `tour_phone_number` varchar(255) DEFAULT NULL,
  `region_id` bigint DEFAULT NULL,
  PRIMARY KEY (`tour_id`),
  KEY `FKdwnpm5e6whgamesk9or4taoty` (`region_id`),
  CONSTRAINT `FKdwnpm5e6whgamesk9or4taoty` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour`
--

LOCK TABLES `tour` WRITE;
/*!40000 ALTER TABLE `tour` DISABLE KEYS */;
INSERT INTO `tour` VALUES (1,'제주특별자치도 제주시 애월읍 어음13길 196','주차 가능','불가능','6','넷째주 월요일','http://tong.visitkorea.or.kr/cms/resource/60/1637460_image2_1.jpg','33.39559763','126.3610674','제주힐링명상센터 ','상시 개방','평화의 섬 제주에 위치한 \'무병장수테마파크\'는 일지기가든 산책을 비롯해서 국궁. 승마. 선상크루즈와 단식을 비롯한 각종 체험프로그램 등을 통해서 건강하고 행복한 장생의 문화를 전하는 테마파크이다. 장생은 단지 오래 사는 것이 아니라 건강하게 행복하게 꿈을 가지고 사는 삶이다. 무병장수테마파크에서는 국궁. 승마. 힐링체험. 섭생체험. 휴양. 가족여행 등 테마명상여행 등을 통해 건강과 행복. 평화를 체험할 수 있다.','064-799-9983. 064-799-7720',8),(4,'제주특별자치도 제주시 원당로16길 41','주차 가능','불가능','8','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/20/1618520_image2_1.jpg','33.52905608','126.5984743','원당사지','상시 개방','원당사지는 보물로 지정된 제주 불탑사 오층 석탑이 남아 있는 절터이다. 고려시대에 탐라가 원나라의 지배하에 있을 때 원나라 사람들이 세운 절 중의 하나가 원당사 였다. 원당사는 현재 없어졌지만. 석탑은 그대로 남아 고려시대 사찰의 면모를 보여주고 있다. 현재 원당사지에는 불탑사가 자리하고 있다. ','064-740-6000',8),(6,'제주특별자치도 서귀포시 대정읍 송악관광로','주차 가능','불가능','4','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/30/1620230_image2_1.jpg','33.19945153','126.2907751','송악산','상시 개방','산방산의 남쪽. 가파도가 손에 잡힐 듯 보이는 바닷가에 불끈 솟은 산이 산방산이다. 99개의 작은 봉우리가 모여 일명 99봉이라고도 한다. 남제주군 산방굴사에서 송악산  초입까지는 풍치 좋기로 소문난 해안도로이다. 그 길을 달려 송악산에 이른다.  송악산은 한라산처럼 웅장하거나 산방산처럼 경치가 빼어나지는 않다. 그러나 송악산 정상에 오르면  누구나 감탄사를 토해낸다. ','064-740-6000',8),(8,'제주특별자치도 서귀포시 칠십리로','주차 가능','불가능','4','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/38/2513538_image2_1.jpg','33.24295715','126.5990252','보목마을','상시 개방','보목마을은 제주도 올레길 6코스의 쇠소깍과 외돌개의 사이에 위치한 작은 어촌 마을이다. 서귀포시 중심에서 동남쪽으로 4km. 걸어서 30분 거리에 자리 잡고 있으며. 마을 포구 동편에 제지기오름이 있다. ','064-740-6000',8),(14,'제주특별자치도 제주시 1100로 3198-8','주차 가능','불가능','6','매주 월요일. 설.추석 당일','http://tong.visitkorea.or.kr/cms/resource/73/2721573_image2_1.png','33.47216336','126.4857715','넥슨컴퓨터박물관','10:00~18:00','넥슨컴퓨터박물관은 인류의 삶을 가장 빠르게 변화시킨 현재 진행형 매체인 \'컴퓨터\'와 그 발전에 기여해 온 \'게임\'의 역사를 함께 조망함으로써 우리의 미래를 상상해 볼 수 있는 체험형 박물관이다. 유리 케이스 너머로 바라보는 전시에서 벗어나. 대부분의 소장품들을 관람객의 직접적인 체험이 가능하도록 전시되어 있으며. 쾌적한 관람 환경을 위해 예약 관람제로 운영하고 있다.','064-745-1994',8),(40,'제주특별자치도 제주시 도공로 2','주차 가능','불가능','1','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/52/2800152_image2_1.jpg','33.5061676','126.4650003','도두항','상시 개방','도두항은 용두암 해안도로와 이호테우 사이에 있는 방파제로. 관탈도와 추자도행 낚시 배들이 출항하는 곳으로 유명하다. 제주 국제공항에서 차로 15분 거리에 있고. 발판도 비교적 좋아 낚시꾼들이 즐겨 찾는다. 제주 시내에서 가깝고. 신선한 해산물이 있는 유명 맛집. 낚시점들이 있어 관광객과 현지인 모두 편리하게 이용할 수 있다. 또한. 유람선과 요트 등 해양 레저 시설도 있어 많은 관광객이 찾는 곳이다.','064-740-6000',8),(41,'제주특별자치도 제주시 서해안로 319','주차 가능','불가능','1','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/29/2800129_image2_1.jpg','33.50962856','126.4795267','사수항','상시 개방','사수항은 제주 국제공항 바로 뒤편에 있는 작은 항이다. 항구의 역할보다는 아름다운 일몰과 카페거리 등 인근 관광지로 더 유명하다. 사수항을 지나는 해안도로를 따라가다 보면 말 모양의 등대가 있는 이호테우 등대와 무지개 해안도로를 만날 수 있다. 근처에는 제주만의 독특한 감성이 묻어나는 카페들이 즐비한 카페거리가 있어 함께 들러보기 좋다. 특히 일몰이 매우 아름다우며. 로맨틱한 분위기를 연출한다.','064-740-6000',8),(48,'제주특별자치도 제주시 사라봉동길 61','주차 가능','불가능','8','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/40/492040_image2_1.JPG','33.5175093','126.546293','보림사','상시 개방','1957년에 창건되었으며 사라봉 입구에 자리 잡고 있다. 절 내에는 대웅전. 법당. 천왕문. 보림사 부도. 보림사 탑 등이 있다. 특히 2002년 5월 15일 제주도 유형문화재로 지정된 목조관음보살좌상이 보림사 본졸불로 봉안되어 있는데. 전라남도 순천 선암사에서 조선 후기에 제작된 불상으로 보림사 창건 당시 제주로 옮겨 온 것이다.','064-721-4767',8),(50,'제주특별자치도 제주시 우도면 삼양고수물길','주차 불가','불가능','2','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/95/2726695_image2_1.jpg','33.49185219','126.9637546','쇠머리오름','상시 개방','제주시 구좌읍 종달리에서 약 2Km 서귀포시 성산항에서 약 3.8Km 떨어진 우도는 유인도로 소가 머리를 들고 누워있는 형태를 띠고 있는데. 머리에 해당하는 부분을 쇠머리오름이라 하며 우도사람들은 \'섬머리\'로 통한다. 성산항에서 우도 동천진항까지 도항선이 운행되고 있으며 시간은 약 15분쯤 걸린다.\n\n','064-740-6000',8),(51,'제주특별자치도 서귀포시 이중섭로 33 3층','주차 가능','불가능','6','토요일. 일요일. 공휴일','http://tong.visitkorea.or.kr/cms/resource/12/1938012_image2_1.jpg','33.24518413','126.5644976','서귀포문화원','상시 개방','서귀포문화원은 역사 유적의 연구 조사활동. 유/무형 문화재를 발굴 보존 전승하는 일과 각종 문화예술 활동 등 지역문화의 창달을 위한 운영을 하고 있다.','064-733-3789',8),(53,'제주특별자치도 서귀포시 막숙포로 70-1','주차 가능','불가능','6','매주 월요일','http://tong.visitkorea.or.kr/cms/resource/56/1938056_image2_1.jpg','33.2355344','126.5141994','법환동 청소년문화의집','09:00 ~ 20:00','법환동 청소년문화의집은 지역청소년들의 건전한 여가생활영위 및 청소년들의 푸른성장을 위하여 다양한 문화교육활동과 청소년활동지원사업을 운영하고 있다.','064-738-4116',8),(55,'제주특별자치도 서귀포시 안덕면 신화역사로 15','주차 불가','불가능','5','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/99/2709799_image2_1.jpg','33.30611196','126.2894034','오설록 티뮤지엄','09:00 ~ 18:00','제주 오설록 서광 차밭과 맞닿아 있는 오설록 티뮤지엄은 아모레퍼시픽이 차와 한국 전통차 문화를 소개하고. 널리 보급하고자 2001년 개관한 국내 최초의 차 박물관이다. 동양과 서양. 전통과 현대가 조화를 이룬 문화공간으로 차 유물관. 자연친화적인 휴식공간. 그리고 차를 활용한 맛있고 다양한 메뉴를 즐길 수 있는 카페 공간 등으로 구성되어 있다.','064-794-5312',8),(60,'제주특별자치도 제주시 우도해안길 32-12','주차 가능','불가능','5','연중 무휴','http://tong.visitkorea.or.kr/cms/resource/06/2811106_image2_1.jpg','33.49304081','126.9549442','훈데르트바서파크','09:30 - 18:00','훈데르트바서파크는 훈데르트바서의 일생과 작품들을 훈데르트바서식 건축물 안에서 오롯하게 관람하고 체험할 수 있는 대한민국 최초의 해외 유명 예술가 상설기념관 . 신진 작가들의 작품을 선보이는 . 그리고 다양한 오리지널 굿즈를 만날 수 있는으로 이루어져 있다.\n또. 뿔소라갈치속젓파스타 등의 이색적인 메뉴를 맛 볼 수 있다.','064-766-6077',8);
/*!40000 ALTER TABLE `tour` ENABLE KEYS */;
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
