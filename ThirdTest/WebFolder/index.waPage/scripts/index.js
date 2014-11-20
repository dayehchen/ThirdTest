
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button.click = function button_click (event)// @startlock
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
	WAF.addListener("button", "click", button.click, "WAF");
// @endregion
};// @endlock
