//CRM Crate - JavaScript Snippet
function CallMethod (executionContext) {
    var formContext = executionContext;
    //Start The Progress Indicator.
    Xrm.Utility.showProgressIndicator("CRM Crate Progress Indicator");
    //Delay Of 5 Seconds.
     setTimeout(function(){
     //Stopping The Progress Indicator.
    Xrm.Utility.closeProgressIndicator();
            }, 5000);
    }