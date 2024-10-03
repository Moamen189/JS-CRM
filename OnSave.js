//CRM Crate - Promise Implementation.
function ExecutionMethod(executionContext) {
    //Input Parameter For Our Web Service
    var parameters = {
        InputParam: "Which is the best CRM?"
    };
    var webserviceData = new actionProcessingMethod(parameters.InputParam);
    try {
        //Step 1 - Call The Promise Method.
        var PromiseReturn = ImplementPromise(webserviceData, executionContext);
        //Step 2 - Bind The Promise Function.
        PromiseReturn.then(function (response) {
            if (response != null) {
                //Display The Promise Output From Async Web Service.
                console.log("Webservice Output Parameter : " + response);
            }
        });
    }
    catch (e) {
        console.log("Error Occured in while calling process : " + JSON.stringify(e));
    }
};
var ImplementPromise = function (actionData, executionContext) {
    //Step 3 - Initiate The Promise Function.
    return new Promise(function (resolve) {
        //Step 4 - Call The Async Web Service.
        Xrm.WebApi.online.execute(actionData).then(
            function (data) {
                if (data.ok) {
                    data.json().then(function (response) {
                        //Step 5 - Resolve The Promise On Valid Webservice Response.
                        if (response.OutputParam != null) {
                            PromiseOutput = response.OutputParam;
                            resolve(PromiseOutput);
                        }
                        else {
                            resolve(false);
                            console.log("Error Occured While Calling Web Service : " + response.SuccessCallBack);
                        }
                    });
                }
            },
            function (error) { alert(error.message || error.description); }
        );
    });
};
//Method To Process Our Web Service.
var actionProcessingMethod = function (InputParam) {
    this.InputParam = InputParam;
    this.getMetadata = function () {
        return {
            boundParameter: null,
            parameterTypes: {
                "InputParam": {
                    "typeName": "Edm.String",
                    "structuralProperty": 1
                }
            },
            operationType: 0,
            operationName: "cc_DemoAction"
        };
    };
};