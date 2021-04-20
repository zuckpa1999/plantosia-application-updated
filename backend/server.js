const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
/* const pool = require("./db"); */
const pool = require('./db')
var { PythonShell } = require('python-shell');
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



app.get('/getPlantName/:plantName', (req, res) => {
	const { plantName } = req.params;
	console.log(plantName)
	res.json(plantName)
	/* res.send({ plantName: plantName, bla: '1', test: '2' }) */
	res.status(200)
})


app.post('/uploadImageGame', (req, res) => {
	/* 	for (let i = 0; i < req.body.length; i++) { */
	console.log('xxxxx')
	console.log(req.body.length)
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
	// get all the file's name in an array
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
	res.status(200)

	/* c */
	console.log('receiveddwdw')
	console.log('test input')
	console.log(file)
	// 
	console.log(JSON.stringify(file))
	// send as a list instead
	// get all the file's name in an array
	pyshell.send(JSON.stringify(file));
	pyshell.send(JSON.stringify(file));

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


})



//get all plant LEAF_MED_PRO

app.get("/test", async (req, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM "LEAF_MED_PRO"');
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




/* console.log('tttttt')
console.log('test') */
console.log('starting')
console.log('test x')
console.log(x)

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








