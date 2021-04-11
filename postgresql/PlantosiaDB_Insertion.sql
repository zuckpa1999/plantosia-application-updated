--Insert Banana
INSERT INTO "PLANT_INFO" VALUES (
	1,
	'Banana',
	'Musa Sapientum',
	'Adventitious Root',
	NULL,
	'Underground Stem',
	NULL,
	'Rhizome',
	'Simple',
	'100 - 300 cm',
	'Parallel Pinnate',
	'Spiral',
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	'Aggregate',
	'Fleshy Fruit',
	'Berry',
	NULL,
	NULL,
	'5 - 9 m',
	'80.00 - 90.00 Baht/Bunch'
);

INSERT INTO "ROOT_MED_PRO" VALUES
(1,'Asthma'),
(1,'Anthelmintic'),
(1,'Aphrodisiac'),
(1,'Laxative'),
(1,'Tonic')

INSERT INTO "STEM_MED_PRO" VALUES
(1,'Shingles')

INSERT INTO "LEAF_SHAPE" VALUES
(1,'Oblong')

-- A reminder of need to implement for the case that there is some table with no value for that P_ID
--INSERT INTO "LEAF_BASE" VALUES
--(1,NULL)

INSERT INTO "LEAF_MARGIN" VALUES
(1,'Entire'),
(1,'Undulate')

INSERT INTO "LEAF_MED_PRO" VALUES
(1,'Hypertension'),
(1,'Boils')

INSERT INTO "FRUIT_MED_PRO" VALUES
(1,'Peptic Ulcer'),
(1,'Duodenal Ulcer'),
(1,'Diabetes');

INSERT INTO "FLOWER_TYPE" VALUES
(1,'Complete'),
(1,'Incomplete');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(1,'Perfect'),
(1,'Imperfect');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(1,'Yellowish White');

INSERT INTO "FLOWER_MED_PRO" VALUES
(1,'Dysentery'),
(1,'Emmenagogue'),
(1,'Dentifrice'),
(1,'Headache'),
(1,'Rheumatism');

INSERT INTO "CHA_LOCATION" VALUES
(1, 'Indomalayan');

INSERT INTO "CHA_TOXICITY" VALUES
(1, 'None');

INSERT INTO "EN_MOIST" VALUES
(1,'Average');

INSERT INTO "EN_TEMPERATURE" VALUES
(1, 'Hot')
(1, 'Warm');

INSERT INTO "EN_ILLUMINATION" VALUES
(1,'Full Sun'),
(1,'Partial Shade');

INSERT INTO "EN_SOIL_NUTRITION" VALUES
(1,'Humus');

INSERT INTO "EN_SOIL_PH" VALUES
(1,'Acid'),
(1,'Alkaline'),
(1,'Neutral');

--Insert Rice
INSERT INTO "PLANT_INFO" VALUES (
	2,
	'Rice',
	'Oryza Sativa',
	'Adventitious Root',
	'Fibrous Root',
	'Aerial Stem',
	NULL,
	NULL,
	'Simple',
	'12 - 65 cm',
	'Parallel',
	'Alternate',
	NULL,
	NULL,
	NULL,
	NULL,
	'Panicle',
	NULL,
	NULL,
	NULL,
	'Dry Fruit',
	NULL,
	NULL,
	'Caryopsis',
	'0.3 - 1.8 m',
	'15.00 - 16.00 Baht/kg'
);

INSERT INTO "STEM_MED_PRO" VALUES
(2,'Night Sweats'),
(2,'Tuberculosis'),
(2,'Chronic Pneumonia');

INSERT INTO "LEAF_APEX" VALUES
(2,'Acute');

INSERT INTO "LEAF_MARGIN" VALUES
(2,'Entire'),
(2,'Lacerate');

INSERT INTO "FRUIT_MED_PRO" VALUES
(2,'Tonic'),
(2,'Diuretic'),
(2,'Urinary Dysfunction'),
(2,'Excessive Lactation'),
(2,'Indigestion Abdominal Discomfort'),
(2,'Bloating');

INSERT INTO "FLOWER_TYPE" VALUES
(2,'Complete');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(2,'Perfect');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(2,'Cream'),
(2,'Yellowish Brown');

INSERT INTO "CHA_LOCATION" VALUES
(2, 'North-Central China'),
(2, 'South-Central China'),
(2, 'Southeast China');

INSERT INTO "CHA_TOXICITY" VALUES
(2, 'None');

INSERT INTO "EN_MOIST" VALUES
(2,'Average'),
(2,'Moist'),
(2,'Flood');

INSERT INTO "EN_TEMPERATURE" VALUES
(2, 'Warm');

INSERT INTO "EN_ILLUMINATION" VALUES
(2,'Full Sun');

INSERT INTO "EN_SOIL_NUTRITION" VALUES
(2,'Nitrogen');

INSERT INTO "EN_SOIL_PH" VALUES
(2,'Acid'),
(2,'Alkaline'),
(2,'Neutral');


--Insert West Indian Jasmine
INSERT INTO "PLANT_INFO" VALUES (
	3,
	'West Indian Jasmine',
	'Ixora Coccinea',
	'Adventitious Root',
	NULL,
	'Aerial Stem',
	'Shrub',
	NULL,
	'Simple',
	'7 - 15 cm',
	'Reticulate',
	'Opposite',
	'Twisted',
	'Epigynous',
	NULL,
	NULL,
	'Corymb',
	'Actinomorphic',
	NULL,
	NULL,
	'Fleshy Fruit',
	'Berry',
	NULL,
	NULL,
	'1.2 - 1.8 m',
	NULL
);

INSERT INTO "ROOT_MED_PRO" VALUES
(3,'Nausea'),
(3,'Hiccups'),
(3,'Anorexia'),
(3,'Chronic Ulcers');

INSERT INTO "STEM_MED_PRO" VALUES
(3,'Sprains'),
(3,'Eczema'),
(3,'Boils'),
(3,'Contusions');

INSERT INTO "LEAF_SHAPE" VALUES
(3,'Ovate'),
(3,'Elliptic');

INSERT INTO "LEAF_APEX" VALUES
(3,'Acute');

INSERT INTO "LEAF_MARGIN" VALUES
(3,'Entire');

INSERT INTO "LEAF_MED_PRO" VALUES
(3,'Sprains'),
(3,'Eczema'),
(3,'Boils'),
(3,'Contusions');

INSERT INTO "FLOWER_TYPE" VALUES
(3,'Complete');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(3,'Perfect');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(3,'Yellow'),
(3,'Orange'),
(3,'Pink'),
(3,'Red');

INSERT INTO "FLOWER_MED_PRO" VALUES
(3,'Catarrhal Bronchitis'),
(3,'Dysentery');

INSERT INTO "CHA_LOCATION" VALUES
(3, 'India'),
(3, 'Sri Lanka'),
(3, 'Southeast Asia');

INSERT INTO "CHA_TOXICITY" VALUES
(3, 'None');

INSERT INTO "EN_MOIST" VALUES
(3,'Average'),
(3,'Moist'),
(3,'Flood');

INSERT INTO "EN_TEMPERATURE" VALUES
(3, 'Hot'),
(3, 'Warm');

INSERT INTO "EN_ILLUMINATION" VALUES
(3,'Full Sun'),
(3,'Partial Shade');

INSERT INTO "EN_SOIL_PH" VALUES
(3,'Acid');

--Insert Paper Flower
INSERT INTO "PLANT_INFO" VALUES (
	4,
	'Paper Flower',
	'Bougainvillea Glabra',
	'Tap Root',
	NULL,
	'Aerial Stem',
	'Climber',
	NULL,
	'Simple',
	'5 - 10 cm',
	'Pinnate',
	'Alternate',
	NULL,
	NULL,
	NULL,
	NULL,
	'Panicle',
	NULL,
	NULL,
	NULL,
	'Dry Fruit',
	NULL,
	NULL,
	'Achene',
	'6 - 12 m',
	NULL
);

INSERT INTO "LEAF_SHAPE" VALUES
(4,'Elliptic'),
(4,'Ovate'),
(4,'Cordate');

INSERT INTO "LEAF_BASE" VALUES
(4,'Attenuate'),
(4,'Obtuse'),
(4,'Rounded');

INSERT INTO "LEAF_APEX" VALUES
(4,'Acuminate'),
(4,'Acute'),
(4,'Obtuse');

INSERT INTO "LEAF_MARGIN" VALUES
(4,'Undulate');

INSERT INTO "LEAF_MED_PRO" VALUES
(4,'Inflammatory'),
(4,'Diabetes'),
(4,'Hyperlipidemia'),
(4,'Diarrhea'),
(4,'Ulcer'),
(4,'Neuroprotective');

INSERT INTO "FLOWER_TYPE" VALUES
(4,'Complete');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(4,'Perfect');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(4,'Purple'),
(4,'Red'),
(4,'Pink'),
(4,'Orange');

INSERT INTO "CHA_LOCATION" VALUES
(4, 'Brazil');

INSERT INTO "CHA_TOXICITY" VALUES
(4, 'None');

INSERT INTO "EN_MOIST" VALUES
(4,'Average'),
(4,'Little');

INSERT INTO "EN_TEMPERATURE" VALUES
(4, 'Hot'),
(4, 'Warm');

INSERT INTO "EN_ILLUMINATION" VALUES
(4,'Full Sun');

INSERT INTO "EN_SOIL_PH" VALUES
(4,'Acid');

--Insert Velvet Bean
INSERT INTO "PLANT_INFO" VALUES (
	5,
	'Velvet Bean',
	'Mucuna Pruriens',
	'Tap Root',
	NULL,
	'Aerial Stem',
	'Climber',
	NULL,
	'Compound',
	'5 - 15 cm',
	NULL,
	'Alternate',
	NULL,
	NULL,
	NULL,
	NULL,
	'Raceme',
	NULL,
	NULL,
	NULL,
	'Dry Fruit',
	NULL,
	'Legume',
	NULL,
	'5 - 7 m',
	NULL
);

INSERT INTO "ROOT_MED_PRO" VALUES
(5,'Parkinson'),
(5,'Anti-Oxidant'),
(5,'Hypertension'),
(5,'Diabetes');

INSERT INTO "STEM_MED_PRO" VALUES
(5,'Parkinson'),
(5,'Anti-Oxidant'),
(5,'Hypertension'),
(5,'Diabetes');

INSERT INTO "LEAF_SHAPE" VALUES
(5,'Trifoliate'),
(5,'Rhomboid'),
(5,'Ovate');

INSERT INTO "LEAF_BASE" VALUES
(5,'Obtuse'),
(5,'Rounded'),
(5,'Cuneate');

INSERT INTO "LEAF_APEX" VALUES
(5,'Acute'),
(5,'Obtuse'),
(5,'Mucronate');

INSERT INTO "LEAF_MARGIN" VALUES
(5,'Sinuate');

INSERT INTO "LEAF_MED_PRO" VALUES
(5,'Parkinson'),
(5,'Anti-Oxidant'),
(5,'Antimicrobial');

INSERT INTO "FRUIT_MED_PRO" VALUES
(5,'Parkinson'),
(5,'Anti-Oxidant'),
(5,'Hypertension'),
(5,'Diabetes');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(5,'White'),
(5,'Dark Purple');

INSERT INTO "CHA_LOCATION" VALUES
(5, 'Southern China'),
(5, 'Eastern India');

INSERT INTO "CHA_TOXICITY" VALUES
(5, 'Allelopathic'),
(5, 'Irritation');

INSERT INTO "EN_MOIST" VALUES
(5,'Moist');

INSERT INTO "EN_TEMPERATURE" VALUES
(5, 'Warm');

INSERT INTO "EN_ILLUMINATION" VALUES
(5,'Full Sun');

INSERT INTO "EN_SOIL_NUTRITION" VALUES
(5,'Nitrogen');

INSERT INTO "EN_SOIL_PH" VALUES
(5,'Acid'),
(5,'Neutral');

--Insert Coconut
INSERT INTO "PLANT_INFO" VALUES (
	6,
	'Coconut',
	'Cocos Nucifera',
	'Adventitious Root',
	'Fibrous Root',
	'Aerial Stem',
	'Tree',
	NULL,
	'Compound',
	'60 - 90 cm',
	'Pinnate',
	'Alternate',
	'Imbricate',
	NULL,
	NULL,
	NULL,
	'Panicle',
	NULL,
	NULL,
	NULL,
	'Fleshy Fruit',
	'Drupe',
	NULL,
	NULL,
	'9 - 18 m',
	'10.00 - 19.00 Baht/Coconut'
);

INSERT INTO "ROOT_MED_PRO" VALUES
(6,'Diarrhea'),
(6,'Stomachache'),
(6,'Fever');

INSERT INTO "STEM_MED_PRO" VALUES
(6,'Amenorrhea'),
(6,'Dysmenorrhea'),
(6,'Venereal Disease');

INSERT INTO "LEAF_SHAPE" VALUES
(6,'Lanceolate');

INSERT INTO "LEAF_MED_PRO" VALUES
(6,'Diarrhea'),
(6,'Stomachache'),
(6,'Asthma'),
(6,'Diuretic'),
(6,'Gonorrhea');

INSERT INTO "FRUIT_MED_PRO" VALUES
(6,'Renal Disease'),
(6,'Aphrodisiac'),
(6,'Malaria'),
(6,'Diuretic');

INSERT INTO "FLOWER_TYPE" VALUES
(6,'Incomplete');

INSERT INTO "FLOWER_SEX_TYPE" VALUES
(6,'Imperfect');

INSERT INTO "FLOWER_PE_COLOR" VALUES
(6,'Yellowish White');

INSERT INTO "CHA_LOCATION" VALUES
(6, 'Southeast Asia');

INSERT INTO "CHA_TOXICITY" VALUES
(6, 'None');

INSERT INTO "EN_MOIST" VALUES
(6,'Average'),
(6,'Moist');

INSERT INTO "EN_TEMPERATURE" VALUES
(6, 'Warm');

INSERT INTO "EN_ILLUMINATION" VALUES
(6,'Full Sun');

INSERT INTO "EN_SOIL_PH" VALUES
(6,'Acid'),
(6,'Alkaline'),
(6,'Neutral');

