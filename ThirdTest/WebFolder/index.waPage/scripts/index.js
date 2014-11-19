
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock

		var connectionParams = {
			hostname: 'www.motivps.com',
			port: 3306,
			user: 'aftersale',
			password: 'motiv8ed!',
			database: 'aftersale',
			ssl: false
		};

		mysqlVehicle = rpcHandler.getAllVehicles(connectionParams);
		
		sources.mysqlVehicle.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
