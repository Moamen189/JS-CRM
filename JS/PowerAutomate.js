function CRMCrate_CallPowerAutomate (executionContext) {
    var formContext = executionContext.getFormContext();
    //Read Value From The Field.
    var account = formContext.getAttribute("FieldSchemaName").getValue();
    if (account != null) {
      var req = new XMLHttpRequest();
      //Power Automate HTTP URL.
      var url = "<Paste Your Flow URL>";
      req.open("POST", url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify({
        "account": account}));
     }
    }