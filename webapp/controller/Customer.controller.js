sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("at.clouddna.student04.zhoiu5vn.controller.Customer", {
            onInit: function () {

            },

            genderFormatter: function (sKey) {
                let oView = this.getView();
                let iO18nModel = oView.getModel("i18n");
                let oResoureceBoundle = iO18nModel.getResourceBundle();
                //debugger;
                //console.log( "hello world", sKey);
                let sText = oResoureceBoundle.getText(sKey["value"]);

                return sText;
            },

            onSavePressed: function() {
                let oView = this.getView();
                let oModel = oView.getModel();
                let oData = oModel.getData();

                console.log(oData);
               // alert("hello world");

               MessageBox.success(JSON.stringify(oData));
            }
        });
    });
