var express = require('express');
var router = express.Router();

const { exec } = require('child_process');

require('dotenv').config()


/* GET home page. */
router.get('/', function(req, res, next) {
	exec('ls -lh scripts \| awk \'{print $9}\'', function(err,stdout,stderr){
		data = stdout.trim(' ').split('\n');
		console.log(data);
		res.render('index', { dirs: data, ip: process.env.IP, port: process.env.PORT });
	});

});

router.post('/run_script', function(req, res, next){
	const script = req.body.Script;
	console.log("Script to run: "+script);
	 var added = encodeURIComponent('?CommandComplete=True');
	exec('scripts/'+script, function(err,stdout,stderr){
		data = stdout.trim(' ').split('\n');
		console.log(data);
		//res.append('Access-Control-Allow-Origin',['*']);
		res.send(data);
	});
	//res.redirect('/'+added);
	//res.send("good");
});

module.exports = router;
