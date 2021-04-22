const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
/* const pool = require("./db"); */
const pool = require('./db')
var { PythonShell } = require('python-shell');
const { query } = require('./db')
var pyshell = new PythonShell('obj_img.py');
let uploadImageName
let ImageUrl
var x = []

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '100MB' }))

app.get('/info', function (req, res) {
	// setTimeout(res.send({ title: x }), 30000);
	res.send({ title: x })
});

app.get('/gameImageData', function (req, res) {
	// setTimeout(res.send({ title: x }), 30000);
	res.send({ data: x })
});


app.get('/uploadedImage', (req, res) => {
	res.send({ uploadImageName: uploadImageName })
})


const getPlantIndex = plantName => {
	if (plantName === "Musa Sapientum") return 1
	else if (plantName === "Oryza Sativa") return 2
	else if (plantName === "Ixora Coccinea") return 3
	else if (plantName === "Bougainvillea") return 4
	else if (plantName === "Mucuna Pruriens") return 5
	else if (plantName === "Cocos Nucifera") return 6
}


app.get('/getPlantName/:plantName', async (req, res) => {

	let plantCharacter
	let root
	let stem
	let leaf
	let flower
	let fruit
	let environment
	try {
		const { plantName } = req.params;
		const plant_index = getPlantIndex(plantName)
		const query_plantCharacter = `SELECT DISTINCT p."P_ID" AS "Plant ID", p."P_NAME" AS "Plant Name", p."CHA_HEIGHT" AS "Plant Height", string_agg(DISTINCT cl."CHA_LOC",', ') AS "Local Location", p."CHA_PRICE" AS "Market Price",string_agg(DISTINCT ct."CHA_TOXIC", ', ') AS "Toxicity" FROM "PLANT_INFO" p LEFT JOIN "CHA_LOCATION" cl ON p."P_ID" = cl."P_ID" LEFT JOIN "CHA_TOXICITY" ct ON p."P_ID" = ct."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const query_root = `SELECT DISTINCT 	p."P_ID" AS "Plant ID", 	p."P_NAME" AS "Plant Name", 	p."ROOT_TYPE" AS "Root Type", 	p."ROOT_TYPE_AD" AS "Adventitious Root Type", 	string_agg(DISTINCT rm."ROOT_PRO", ', ') AS "Root Medical Property" FROM "PLANT_INFO" p LEFT JOIN "ROOT_MED_PRO" rm ON p."P_ID" = rm."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const query_stem = `SELECT DISTINCT 	p."P_ID" AS "Plant ID", 	p."P_NAME" AS "Plant Name", 	p."STEM_TYPE" AS "Stem Type", 	p."STEM_TYPE_AE" AS "Aerial Stem Type", 	p."STEM_TYPE_UN" AS "Underground Stem Type", 	string_agg(DISTINCT sm."STEM_PRO", ', ') AS "Stem Medical Property" FROM "PLANT_INFO" p LEFT JOIN "STEM_MED_PRO" sm ON p."P_ID" = sm."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const query_leaf = `SELECT DISTINCT 	p."P_ID" AS "Plant ID", 	p."P_NAME" AS "Plant Name", 	p."LEAF_TYPE" AS "Leaf Type", 	p."LEAF_LEN" AS "Leaf Length", 	p."LEAF_VENE" AS "Leaf Venetion", 	string_agg(DISTINCT ls."LEAF_SHA", ', ') AS "Leaf Shape", 	string_agg(DISTINCT lb."LEAF_BASE", ', ') AS "Leaf Base", 	string_agg(DISTINCT la."LEAF_APEX", ', ') AS "Leaf Apex", 	string_agg(DISTINCT lm."LEAF_MAR", ', ') AS "Leaf Margin", 	p."LEAF_PHY" AS "Leaf Phyllotaxy", 	string_agg(DISTINCT lp."LEAF_PRO", ', ') AS "Leaf Medical Property" FROM "PLANT_INFO" p LEFT JOIN "LEAF_SHAPE" ls ON p."P_ID" = ls."P_ID" LEFT JOIN "LEAF_BASE" lb ON p."P_ID" = lb."P_ID" LEFT JOIN "LEAF_APEX" la ON p."P_ID" = la."P_ID" LEFT JOIN "LEAF_MARGIN" lm ON p."P_ID" = lm."P_ID" LEFT JOIN "LEAF_MED_PRO" lp ON p."P_ID" = lp."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const query_flower = `SELECT DISTINCT 	p."P_ID" AS "Plant ID", 	p."P_NAME" AS "Plant Name", 	string_agg(DISTINCT ft."FLOWER_TYPE", ', ') AS "Flower Type", 	string_agg(DISTINCT fs."FLOWER_SEX_TYPE", ', ') AS "Flower Sexuality Type", 	p."FLOWER_AES" AS "Aestivation", 	p."FLOWER_POS" AS "Position of Ovary", 	p."FLOWER_PLA" AS "Placentation", 	p."FLOWER_TYPE_CYM" AS "Cymose Type", 	p."FLOWER_TYPE_RAC" AS "Racemose Type", 	string_agg(DISTINCT fp."FLOWER_PE_COLOR", ', ') AS "Petal Color", 	p."FLOWER_SYM_TYPE" AS "Flower Symmetry Type", 	string_agg(DISTINCT fm."FLOWER_PRO", ', ') AS "Flower Medical Property" FROM "PLANT_INFO" p LEFT JOIN "FLOWER_TYPE" ft ON p."P_ID" = ft."P_ID" LEFT JOIN "FLOWER_SEX_TYPE" fs ON p."P_ID" = fs."P_ID" LEFT JOIN "FLOWER_PE_COLOR" fp ON p."P_ID" = fp."P_ID" LEFT JOIN "FLOWER_MED_PRO" fm ON p."P_ID" = fm."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const query_fruit = `SELECT DISTINCT 	p."P_ID" AS "Plant ID", 	p."P_NAME" AS "Plant Name", 	p."FRUIT_CRE_TYPE" AS "Fruit Type by Creation Process", 	p."FRUIT_CHA_TYPE" AS "Fruit Type by Characteristic", 	p."FRUIT_TYPE_FLE" AS "Fleshy Fruit Type", 	p."FRUIT_TYPE_DRY_DE" AS "Dry Dehiscent Type", 	p."FRUIT_TYPE_DRY_IN" AS "Dry Indehiscent Type", 	string_agg(DISTINCT f."FRUIT_PRO", ', ') AS "Fruit Medical Property" FROM "PLANT_INFO" p LEFT JOIN "FRUIT_MED_PRO" f ON p."P_ID" = f."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const query_environment = `SELECT DISTINCT 	p."P_ID" AS "Plant ID", 	p."P_NAME" AS "Plant Name", 	string_agg(DISTINCT em."EN_MOIST", ', ') AS "Moisture", 	string_agg(DISTINCT et."EN_TEM", ', ') AS "Temperature", 	string_agg(DISTINCT ei."EN_ILLU", ', ') AS "Illumination", 	string_agg(DISTINCT en."EN_SOIL_NUTRI", ', ') AS "Soil Nutrition", 	string_agg(DISTINCT ep."EN_SOIL_PH", ', ') AS "Soil pH" FROM "PLANT_INFO" p LEFT JOIN "EN_MOIST" em ON p."P_ID" = em."P_ID" LEFT JOIN "EN_TEMPERATURE" et ON p."P_ID" = et."P_ID" LEFT JOIN "EN_ILLUMINATION" ei ON p."P_ID" = ei."P_ID" LEFT JOIN "EN_SOIL_NUTRITION" en ON p."P_ID" = en."P_ID" LEFT JOIN "EN_SOIL_PH" ep ON p."P_ID" = ep."P_ID" WHERE p."P_ID" = $1 GROUP BY p."P_ID"`
		const values = [plant_index]

		await pool.query(query_plantCharacter, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				plantCharacter = res.rows[0]

			}
		});
		await pool.query(query_root, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				root = res.rows[0]

			}
		});
		await pool.query(query_stem, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				stem = res.rows[0]

			}
		});
		await pool.query(query_leaf, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				leaf = res.rows[0]

			}
		});
		await pool.query(query_flower, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				flower = res.rows[0]

			}
		});
		await pool.query(query_fruit, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				fruit = res.rows[0]

			}
		});
		await pool.query(query_environment, values, (err, res) => {
			if (err) {
				console.log(err.stack)
			} else {

				console.log(res.rows[0])
				environment = res.rows[0]

			}
		});

	} catch (err) {
		console.error(err.message);
	}
	setTimeout(function () {

		let obj = Object.assign(plantCharacter, root, stem, leaf, flower, fruit, environment);
		console.log(obj)
		console.log('test')
		console.log(obj['Plant Name'])
		console.log(obj['Toxicity'])
		console.log(obj['Moisture'])
		res.send(obj)


	}, 500);
	/* res.status(200) */

})

// p.2
app.post('/uploadImageGame', (req, res) => {
	/* 	for (let i = 0; i < req.body.length; i++) { */
	console.log('xxxxx')
	console.log(req.body.imgsource.length)
	/* 	console.log(req.body.imgsource[0])
		console.log(req.body.imgsource) */
	let ImageURL = []
	for (let i = 0; i < req.body.imgsource.length; i++) {
		let file_name = Math.floor(Math.random() * 50000);
		let file = `./upload/${file_name}.png`



		fs.writeFile(file, req.body.imgsource[i], 'base64', (err) => {
			if (err) throw err
		})
		// ImageURL keeps all the file's paths 
		ImageURL.push(file)
	}


	// file_name = file_name + 1
	res.status(200)

	console.log('received')
	console.log('test input')
	/* console.log(file) */
	// 
	/* console.log(JSON.stringify(file)) */
	// send as a list instead
	for (let i = 0; i < ImageURL.length; i++) {
		pyshell.send(JSON.stringify(ImageURL[i]));

	}
	// pyshell.send(JSON.stringify([1, 2, 3, 4, 5]));
	// console.log('test print from node')
	// console.log(JSON.stringify([1, 2, 3, 4, 5]))
	pyshell.on('message', function (message) {
		// received a message sent from the Python script (a simple "print" statement)
		console.log('msg?');
		console.log(message);
		x.push(message)
	});

	// end the input stream and allow the process to exit
	pyshell.end(function (err) {
		if (err) {
			throw err;
		};

		console.log('finished');
		console.log('test x');
		console.log(x);
		console.log('test ImageURL');
		console.log(ImageURL)
		/* 		x = []
				ImageURL = [] */
	}
	)

})


app.post('/uploadImageSearch', (req, res) => {
	/* 	for (let i = 0; i < req.body.length; i++) { */
	/* console.log('55') */

	/* console.log(req.body) */

	/* console.log(req.body.imgsource.length) */
	/* console.log('xxxxx') */
	/* console.log(req.body.imgsource[0]) */
	/* for (let i = 0; i < req.body.imgsource.length; i++) { */
	let file_name = Math.floor(Math.random() * 50000);
	let file = `./upload/upload_img.png`

	// let x = `./0.png`


	fs.writeFile(file, req.body.imgsource, 'base64', (err) => {
		if (err) throw err
	})
	/* } */

	/* } */
	// file_name = file_name + 1
	uploadImageName = file_name


	/* c */
	console.log('receiveddwdw')
	console.log('test input')
	console.log(file)
	// 
	console.log(JSON.stringify(file))
	// send as a list instead
	// get all the file's name in an array
	pyshell.send(JSON.stringify(file));
	/* pyshell.send(JSON.stringify(file)); */

	// pyshell.send(JSON.stringify([1, 2, 3, 4, 5]));
	// console.log('test print from node')
	// console.log(JSON.stringify([1, 2, 3, 4, 5]))
	pyshell.on('message', function (message) {
		// received a message sent from the Python script (a simple "print" statement)
		console.log('msg?');
		console.log(message);
		x.push(message)
	});

	// end the input stream and allow the process to exit
	pyshell.end(function (err) {
		if (err) {
			throw err;
		};

		console.log('finished');
		console.log('test x');
		console.log(x);
	}
	)
	res.status(200)

})



//get all plant LEAF_MED_PRO

app.get("/test", async (req, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM "LEAF_MED_PRO"');
		console.log(allTodos)
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});


app.get("/test2", async (req, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM "PLANT_INFO"');
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/test3", async (req, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM "PLANT_INFO"');
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});


// p.1
console.log('starting')
console.log('test x')
console.log(x)

// always run , kinda p.2
app.listen(3100, () => {

	console.log('server is ready..')
})

// run .py 
// input --> many images list?
// output 
// if >80% are the same img
// image name and confidence level
// else 
// cant detect display msg








