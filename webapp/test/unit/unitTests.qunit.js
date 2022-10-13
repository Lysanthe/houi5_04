/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"atclouddnastudent04/zhoiu5_vn/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
