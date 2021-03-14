const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
var { PythonShell } = require('python-shell');
var pyshell = new PythonShell('obj_img.py');
var x = []

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '15MB' }))

app.get('/info', function (req, res) {
	// setTimeout(res.send({ title: x }), 30000);
	res.send({ title: x })
});
app.post('/uploads', (req, res) => {
	let file_name = Math.floor(Math.random() * 50000);
	let file = `${file_name}.png`
	// let x = `./0.png`
	fs.writeFile(file, req.body.imgsource, 'base64', (err) => {
		if (err) throw err
	})
	// file_name = file_name + 1
	res.status(200)
	console.log('received')
	console.log('test input')
	console.log(JSON.stringify(file))
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
console.log('tttttt')
console.log(x)

app.listen(3102, () => {
	console.log('server is ready..')
})

// run .py 
// input --> many images list?
// output 
// if >80% are the same img
// image name and confidence level
// else 
// cant detect display msg








