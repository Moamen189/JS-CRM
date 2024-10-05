//CRM Crate JavaScript Snippet -
function CallMethod (executionContext) {
    //Using the setFocus client API.
    var formContext = executionContext.getFormContext();
    formContext.ui.tabs.get("WebService").setFocus();
    }