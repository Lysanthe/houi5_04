sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("at.clouddna.student04.zhoiu5vn.controller.Customer", {
            onInit: function () {

            },

            genderFormatter: function (sKey) {
                let oView = this.getView();
                let iO18nModel = oView.getModel("i18n");
                let oResoureceBoundle = iO18nModel.getResourceBundle();
                //debugger;
                console.log( "hello world", sKey);
                let sText = oResoureceBoundle.getText(sKey["value"]);

                return sText;
            }
        });
    });
