/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcHandler' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcHandler.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.getAllVehicles = function (connectionParams) {
	
	var mysql, dbconn, dbquery, res, result;
	
	mysql = require('waf-mysql');
	
	dbconn = mysql.connect(connectionParams);
	
	dbquery = 'SELECT * FROM vehicle';
	res = dbconn.execute(dbquery);
	result = res.getAllRows();
	
	return result;
	
};
