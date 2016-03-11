var express = require('express');

	var app = express();
	app.use('/src', express.static('src'));
	app.use('/lib', express.static('lib'));
	app.use('/res', express.static('res'));
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/')
	app.get('/whaleeyes', function(req, res) { 
		res.render('WhaleEyes');
	});
	app.get('/heatmap', function(req, res) { 
		res.render('HeatMap');
	});
	app.get('/whaleeyes/hz', function(req, res) { 
		res.render('WhaleEyes_HZ');
	});
	var port = 8183;
	app.listen(port);
	console.log("监听端口： " + port);


