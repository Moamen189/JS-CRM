var formContext = primaryControl.getFormContext();
        var entityId = formContext.data.entity.getId();
        var workflowId = "82CE4F9C-F9DC-482E-1F08-12CD969410C4";
        var query = "";
        try {
            //Define the query to execute the worklfow.
            query = "workflows(" + workflowId.replace("}", "").replace("{",
             "") + ")/Microsoft.Dynamics.CRM.ExecuteWorkflow";
            var data = {
                "EntityId": entityId
            };
            //Create a request
            var req = new XMLHttpRequest();
            req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.0/" + query, false);
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.onreadystatechange = function () {
                if (this.readyState == 4 /* complete */) {
                    req.onreadystatechange = null;
                    if (this.status == 200) {
                        //success callback this returns null since no return value available.
                        var result = JSON.parse(this.response);
                    } else {
                        //error callback
                        var error = JSON.parse(this.response).error;
                    }
                }
            };
            req.send(JSON.stringify(data));
        } catch (e) {
            alert(e)
        }