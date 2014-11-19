/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('showmesomedata').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
//exports.helloWorld = function helloWorld () {
//	return ('Hello world');
//};

var mysql, dbconn, dbquery, res;

mysql = require('waf-mysql');

var connectionParams = {
	hostname: 'www.motivps.com',
	port: 3306,
	user: 'aftersale',
	password: 'motiv8ed!',
	database: 'aftersale',
	ssl: false
};

dbconn = mysql.connect(connectionParams);

dbquery = 'SELECT * FROM vehicle';

res = dbconn.execute(dbquery);
result = res.getAllRows();

dbconn.close();

result;