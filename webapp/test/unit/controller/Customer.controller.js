/*global QUnit*/

sap.ui.define([
	"atclouddnastudent04/zhoiu5_vn/controller/Customer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Customer Controller");

	QUnit.test("I should test the Customer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
