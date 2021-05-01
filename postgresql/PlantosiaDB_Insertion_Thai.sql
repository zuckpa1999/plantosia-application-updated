--Insert Banana
INSERT INTO "PLANT_INFO" VALUES (
	1,
	'กล้วยหอม',
	'Musa Sapientum',
	'รากพิเศษ',
	NULL,
	'ลำต้นใต้ดิน',
	NULL,
	'รากเหง้า',
	'ใบเดี่ยว',
	'100 - 300 ซม.',
	'เส้นใบขนานแบบขนนก',
	'แบบเรียงเวียน',
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	'ผลกลุ่ม',
	'ผลมีเนื้อสด',
	'ผลแบบมีเนื้อหลายเมล็ด',
	NULL,
	NULL,
	'5 - 9 ม.',
	'80.00 - 90.00 บาท/หวี'
);

INSERT INTO "ROOT_MED_PRO" VALUES
(1,'หอบหืด'),
(1,'ยาถ่ายพยาธิ'),
(1,'ยากระตุ้นความต้องการทางเพศ'),
(1,'ยาระบาย'),
(1,'ยาชูกำลัง');

INSERT INTO "STEM_MED_PRO" VALUES
(1,'โรคงูสวัด');

INSERT INTO "LEAF_SHAPE" VALUES
(1,'รูปขอบขนาน');

INSERT INTO "LEAF_MARGIN" VALUES
(1,'ขอบเรียบ'),
(1,'เป็นคลื่น');

INSERT INTO "LEAF_MED_PRO" VALUES
(1,'ความดันโลหิตสูง'),
(1,'แผลหนอง');

INSERT INTO "FRUIT_MED_PRO" VALUES
(1,'แผลในกระเพาะอาหาร'),
(1,'แผลในลำไส้เล็กส่วนต้น'),
(1,'โรคเบาหวาน');

INSERT INTO "FLOWER_TYPE" VALUES
(1,'ดอกสมบูรณ์'),
(1,'ดอกไม่สมบูรณ์');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(1,'ดอกสมบูรณ์เพศ'),
(1,'ดอกไม่สมบูรณ์เพศ');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(1,'สีขาวอมเหลือง');

INSERT INTO "FLOWER_MED_PRO" VALUES
(1,'โรคบิด'),
(1,'ยาขับระดู'),
(1,'ยาสีฟัน'),
(1,'ปวดหัว'),
(1,'โรคไขข้อ');

INSERT INTO "CHA_LOCATION" VALUES
(1, 'อินโดมาลายัน');

INSERT INTO "CHA_TOXICITY" VALUES
(1, 'ไม่มี');

INSERT INTO "EN_MOIST" VALUES
(1,'ปานกลาง');

INSERT INTO "EN_TEMPERATURE" VALUES
(1, 'ร้อน'),
(1, 'อบอุ่น');

INSERT INTO "EN_ILLUMINATION" VALUES
(1,'แสงแดดเต็มที่'),
(1,'แสงแดดบางส่วน');

INSERT INTO "EN_SOIL_NUTRITION" VALUES
(1,'ฮิวมัส');

INSERT INTO "EN_SOIL_PH" VALUES
(1,'กรด'),
(1,'ด่าง'),
(1,'กลาง');

--Insert Rice
INSERT INTO "PLANT_INFO" VALUES (
	2,
	'ข้าว',
	'Oryza Sativa',
	'รากพิเศษ',
	'รากฝอย',
	'ลำต้นเหนือดิน',
	NULL,
	NULL,
	'ใบเดี่ยว',
	'12 - 65 ซม.',
	'เส้นใบขนาน',
	'แบบสลับ',
	NULL,
	NULL,
	NULL,
	NULL,
	'ช่อแยกแขนง',
	NULL,
	NULL,
	NULL,
	'ผลแห้ง',
	NULL,
	NULL,
	'ผลแบบธัญพืช',
	'0.3 - 1.8 ม.',
	'15.00 - 16.00 บาท/กก.'
);

INSERT INTO "STEM_MED_PRO" VALUES
(2,'เหงื่อออกตอนกลางคืน'),
(2,'วัณโรค'),
(2,'โรคปอดบวมเรื้อรัง');

INSERT INTO "LEAF_APEX" VALUES
(2,'รูปแหลม');

INSERT INTO "LEAF_MARGIN" VALUES
(2,'ขอบเรียบ'),
(2,'แหว่ง');

INSERT INTO "FRUIT_MED_PRO" VALUES
(2,'ยาชูกำลัง'),
(2,'ยาขับปัสสาวะ'),
(2,'ปัสสาวะผิดปกติ'),
(2,'การหลั่งน้ำนมมากเกินไป'),
(2,'ท้องอืดท้องเฟ้อ'),
(2,'ท้องอืด');

INSERT INTO "FLOWER_TYPE" VALUES
(2,'ดอกสมบูรณ์');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(2,'ดอกสมบูรณ์เพศ');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(2,'สีครีม'),
(2,'สีน้ำตาลอมเหลือง');

INSERT INTO "CHA_LOCATION" VALUES
(2, 'จีนกลางตอนเหนือ'),
(2, 'จีนกลางตอนใต้'),
(2, 'จีนตะวันออกเฉียงใต้');

INSERT INTO "CHA_TOXICITY" VALUES
(2, 'ไม่มี');

INSERT INTO "EN_MOIST" VALUES
(2,'ปานกลาง'),
(2,'ชื้น'),
(2,'น้ำชุ่มจนท่วม');

INSERT INTO "EN_TEMPERATURE" VALUES
(2,'อบอุ่น');

INSERT INTO "EN_ILLUMINATION" VALUES
(2,'แสงแดดเต็มที่');

INSERT INTO "EN_SOIL_NUTRITION" VALUES
(2,'ไนโตรเจน');

INSERT INTO "EN_SOIL_PH" VALUES
(2,'กรด'),
(2,'ด่าง'),
(2,'กลาง');

--Insert West Indian Jasmine
INSERT INTO "PLANT_INFO" VALUES (
	3,
	'ดอกเข็ม',
	'Ixora Coccinea',
	'รากพิเศษ',
	NULL,
	'ลำต้นเหนือดิน',
	'ไม้พุ่ม',
	NULL,
	'ใบเดี่ยว',
	'7 - 15 ซม.',
	'เส้นใบร่างแห',
	'แบบตรงข้าม',
	'ดอกบิดเกลียว',
	'รังไข่ใต้วงกลีบ',
	NULL,
	NULL,
	'ช่อเชิงหลัน',
	'ดอกสมมาตรตามรัศมี',
	NULL,
	NULL,
	'ผลมีเนื้อสด',
	'ผลแบบมีเนื้อหลายเมล็ด',
	NULL,
	NULL,
	'1.2 - 1.8 ม.',
	NULL
);

INSERT INTO "ROOT_MED_PRO" VALUES
(3,'คลื่นไส้'),
(3,'สะอึก'),
(3,'เบื่ออาหาร'),
(3,'แผลเรื้อรัง');

INSERT INTO "STEM_MED_PRO" VALUES
(3,'เคล็ดขัดยอก'),
(3,'กลาก'),
(3,'แผลหนอง'),
(3,'ฟกช้ำ');

INSERT INTO "LEAF_SHAPE" VALUES
(3,'รูปไข่'),
(3,'รูปรี');

INSERT INTO "LEAF_APEX" VALUES
(3,'รูปแหลม');

INSERT INTO "LEAF_MARGIN" VALUES
(3,'ขอบเรียบ');

INSERT INTO "LEAF_MED_PRO" VALUES
(3,'เคล็ดขัดยอก'),
(3,'กลาก'),
(3,'แผลหนอง'),
(3,'ฟกช้ำ');

INSERT INTO "FLOWER_TYPE" VALUES
(3,'ดอกสมบูรณ์');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(3,'ดอกสมบูรณ์เพศ');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(3,'เหลือง'),
(3,'ส้ม'),
(3,'ชมพู'),
(3,'แดง');

INSERT INTO "FLOWER_MED_PRO" VALUES
(3,'หลอดลมอักเสบจากโรคหวัด'),
(3,'โรคบิด');

INSERT INTO "CHA_LOCATION" VALUES
(3, 'อินเดีย'),
(3, 'ศรีลังกา'),
(3, 'เอเชียตะวันออกเฉียงใต้');

INSERT INTO "CHA_TOXICITY" VALUES
(3, 'ไม่มี');

INSERT INTO "EN_MOIST" VALUES
(3,'ปานกลาง'),
(3,'ชื้น'),
(3,'น้ำชุ่มจนท่วม');

INSERT INTO "EN_TEMPERATURE" VALUES
(3, 'ร้อน'),
(3, 'อบอุ่น');

INSERT INTO "EN_ILLUMINATION" VALUES
(3,'แสงแดดเต็มที่'),
(3,'แสงแดดบางส่วน');

INSERT INTO "EN_SOIL_PH" VALUES
(3,'กรด');

--Insert Paper Flower
INSERT INTO "PLANT_INFO" VALUES (
	4,
	'ดอกเฟื่องฟ้า',
	'Bougainvillea Glabra',
	'รากแก้ว',
	NULL,
	'ลำต้นเหนือดิน',
	'ไม้เลื้อย',
	NULL,
	'ใบเดี่ยว',
	'5 - 10 ซม.',
	'เส้นใบแบบขนนก',
	'แบบสลับ',
	NULL,
	NULL,
	NULL,
	NULL,
	'ช่อแยกแขนง',
	NULL,
	NULL,
	NULL,
	'ผลแห้ง',
	NULL,
	NULL,
	'ผลแห้งเมล็ดอ่อน',
	'6 - 12 ม.',
	NULL
);

INSERT INTO "LEAF_SHAPE" VALUES
(4,'รูปรี'),
(4,'รูปไข่'),
(4,'รูปหัวใจ');

INSERT INTO "LEAF_BASE" VALUES
(4,'รูปสอบเรียว'),
(4,'รูปป้าน'),
(4,'รูปกลม');

INSERT INTO "LEAF_APEX" VALUES
(4,'รูปเรียวแหลม'),
(4,'รูปแหลม'),
(4,'รูปป้าน');

INSERT INTO "LEAF_MARGIN" VALUES
(4,'เป็นคลื่น');

INSERT INTO "LEAF_MED_PRO" VALUES
(4,'แผลอักเสบ'),
(4,'โรคเบาหวาน'),
(4,'ไขมันในเลือดสูง'),
(4,'ท้องร่วง'),
(4,'แผลเปิด'),
(4,'ป้องกันการตายของเซลล์ประสาท');

INSERT INTO "FLOWER_TYPE" VALUES
(4,'ดอกสมบูรณ์');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(4,'ดอกสมบูรณ์เพศ');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(4,'ม่วง'),
(4,'แดง'),
(4,'ชมพู'),
(4,'ส้ม');

INSERT INTO "CHA_LOCATION" VALUES
(4, 'บราซิล');

INSERT INTO "CHA_TOXICITY" VALUES
(4, 'ไม่มี');

INSERT INTO "EN_MOIST" VALUES
(4,'ปานกลาง'),
(4,'น้ำน้อย');

INSERT INTO "EN_TEMPERATURE" VALUES
(4, 'ร้อน'),
(4, 'อบอุ่น');

INSERT INTO "EN_ILLUMINATION" VALUES
(4,'แสงแดดเต็มที่');

INSERT INTO "EN_SOIL_PH" VALUES
(4,'กรด');

--Insert Velvet Bean
INSERT INTO "PLANT_INFO" VALUES (
	5,
	'หมามุ้ย',
	'Mucuna Pruriens',
	'รากแก้ว',
	NULL,
	'ลำต้นเหนือดิน',
	'ไม้เลื้อย',
	NULL,
	'ใบประกอบ',
	'5 - 15 ซม.',
	NULL,
	'แบบสลับ',
	NULL,
	NULL,
	NULL,
	NULL,
	'ช่อกระจะ',
	NULL,
	NULL,
	NULL,
	'ผลแห้ง',
	NULL,
	'ฝักแบบถั่ว',
	NULL,
	'5 - 7 ม.',
	NULL
);

INSERT INTO "ROOT_MED_PRO" VALUES
(5,'โรคพาร์กินสัน'),
(5,'ต่อต้านอนุมูลอิสระ'),
(5,'ความดันโลหิตสูง'),
(5,'โรคเบาหวาน');

INSERT INTO "STEM_MED_PRO" VALUES
(5,'โรคพาร์กินสัน'),
(5,'ต่อต้านอนุมูลอิสระ'),
(5,'ความดันโลหิตสูง'),
(5,'โรคเบาหวาน');

INSERT INTO "LEAF_SHAPE" VALUES
(5,'มีสามใบย่อย'),
(5,'รูปสี่เหลี่ยมข้าวหลามตัด'),
(5,'รูปไข่');

INSERT INTO "LEAF_BASE" VALUES
(5,'รูปป้าน'),
(5,'รูปกลม'),
(5,'รูปลิ่ม');

INSERT INTO "LEAF_APEX" VALUES
(5,'รูปแหลม'),
(5,'รูปป้าน'),
(5,'รูปติ่งหนาม');

INSERT INTO "LEAF_MARGIN" VALUES
(5,'เว้าเป็นคลื่น');

INSERT INTO "LEAF_MED_PRO" VALUES
(5,'โรคพาร์กินสัน'),
(5,'ต่อต้านอนุมูลอิสระ'),
(5,'สารต้านจุลินทรีย์');

INSERT INTO "FRUIT_MED_PRO" VALUES
(5,'โรคพาร์กินสัน'),
(5,'ต่อต้านอนุมูลอิสระ'),
(5,'ความดันโลหิตสูง'),
(5,'โรคเบาหวาน');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(5,'ขาว'),
(5,'ม่วงเข้ม');

INSERT INTO "CHA_LOCATION" VALUES
(5, 'จีนใต้'),
(5, 'อินเดียตะวันออก');

INSERT INTO "CHA_TOXICITY" VALUES
(5, 'สารพิษทำร้ายพืชข้างเคียง'),
(5, 'ระคายเคือง');

INSERT INTO "EN_MOIST" VALUES
(5,'ชื้น');

INSERT INTO "EN_TEMPERATURE" VALUES
(5, 'อบอุ่น');

INSERT INTO "EN_ILLUMINATION" VALUES
(5,'แสงแดดเต็มที่');

INSERT INTO "EN_SOIL_NUTRITION" VALUES
(5,'ไนโตรเจน');

INSERT INTO "EN_SOIL_PH" VALUES
(5,'กรด'),
(5,'กลาง');

--Insert Coconut
INSERT INTO "PLANT_INFO" VALUES (
	6,
	'มะพร้าว',
	'Cocos Nucifera',
	'รากพิเศษ',
	'รากฝอย',
	'ลำต้นเหนือดิน',
	'ต้นไม้',
	NULL,
	'ใบประกอบ',
	'60 - 90 ซม.',
	'เส้นในแบบขนนก',
	'แบบสลับ',
	'ดอกซ้อนทับ',
	NULL,
	NULL,
	NULL,
	'ช่อแยกแขนง',
	NULL,
	NULL,
	NULL,
	'ผลมีเนื้อ',
	'ผลเมล็ดเดียวแข็ง',
	NULL,
	NULL,
	'9 - 18 ม.',
	'10.00 - 19.00 บาท/ลูก'
);

INSERT INTO "ROOT_MED_PRO" VALUES
(6,'ท้องร่วง'),
(6,'ปวดท้อง'),
(6,'ไข้');

INSERT INTO "STEM_MED_PRO" VALUES
(6,'การขาดประจำเดือน'),
(6,'ปวดประจำเดือน'),
(6,'กามโรค');

INSERT INTO "LEAF_SHAPE" VALUES
(6,'รูปใบหอก');

INSERT INTO "LEAF_MED_PRO" VALUES
(6,'ท้องร่วง'),
(6,'ปวดท้อง'),
(6,'หอบหืด'),
(6,'ยาขับปัสสาวะ'),
(6,'หนองใน');

INSERT INTO "FRUIT_MED_PRO" VALUES
(6,'โรคไต'),
(6,'ยากระตุ้นความต้องการทางเพศ'),
(6,'มาลาเรีย'),
(6,'ยาขับปัสสาวะ');

INSERT INTO "FLOWER_TYPE" VALUES
(6,'ดอกไม่สมบูรณ์');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(6,'ดอกไม่สมบูรณ์เพศ');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(6,'ขาวอมเหลือง');

INSERT INTO "CHA_LOCATION" VALUES
(6, 'เอเชียตะวันออกเฉียงใต้');

INSERT INTO "CHA_TOXICITY" VALUES
(6, 'ไม่มี');

INSERT INTO "EN_MOIST" VALUES
(6,'ปานกลาง'),
(6,'ชื้น');

INSERT INTO "EN_TEMPERATURE" VALUES
(6, 'อบอุ่น');

INSERT INTO "EN_ILLUMINATION" VALUES
(6,'แสงแดดเต็มที่');

INSERT INTO "EN_SOIL_PH" VALUES
(6,'กรด'),
(6,'ด่าง'),
(6,'กลาง');
