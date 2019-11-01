/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hello1/demo2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});