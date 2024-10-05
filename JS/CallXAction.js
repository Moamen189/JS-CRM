//Function to call an action.
var callAction = function () {
    /*Define Record GUID.*/
    var sRecordGUID = "1d856432-d6c1-ea11-a812-000d3a382c70";
    /*Define Action GUID.*/
    var accActionName = "1d856432-d6c1-ea11-a812-000d3a382c70";
    var accActionParameters = {
        "ForecastGuid": sRecordGUID
    };
    /*This will return instance url such as
    "https://crmcratev1.crm.dynamics.com/". */
    var serverURL = parent.Xrm.Page.context.getClientUrl();
    var ActionCallBack;
    //Calling Action Web API with HTTP Request.
    var req = new XMLHttpRequest();
    req.open("POST", serverURL + "/api/data/v8.0/" + accActionName, true);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.onreadystatechange = function () {
        if (this.readyState === 4 /* complete */) {
            req.onreadystatechange = null;
            if (this.status === 200 || this.status === 204) {
                var result = JSON.parse(this.response);
            /*Action Is been successfully called.*/
            /*The below object contains the returning parameter from
            the Action if your Action has output parameters.*/
                ActionCallBack = result.SuccessCallBack;
            }
            else {
                var error = JSON.parse(this.response).error;
            }
        }
    };
    req.send(window.JSON.stringify(accActionParameters));
};