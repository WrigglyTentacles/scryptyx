var express = require('express');
var router = express.Router();

const { exec } = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
	exec('ls -lh \| awk \'{print $9}\'', function(err,stdout,stderr){
		data = stdout.trim(' ').split('\n');
		console.log(data);
		res.render('index', { dirs: data });
	});

});

module.exports = router;
