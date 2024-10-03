function SubGridFilterExecution(executionContext) {
    //Create a Form Context.
    var formContext = executionContext.getFormContext();
    //Step 1 - Get the subgrid control.
    var gridContext = formContext.getControl("PayloadAccount");
    //Step 2 - Retrieving Form Attribute Value.
    var PrimaryPhoneNumber = formContext.getAttribute("cc_primarymobilenumber").getValue();
    //Step 3 - Recall the execution method if the subgrid context is null or empty.
    if (gridContext == null) {
        setTimeout(SubGridFilterExecution, 3000);
        return;
    }
    else {
        //Set grid with query A based fetch XML.
        if (PrimaryPhoneNumber != null) {
            //Step 4 - Build a fetch XML in a variable.
            var FetchXmlA = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                "<entity name='cc_payloadaccount'>" +
                "<attribute name='cc_payloadaccountid' />" +
                "<attribute name='cc_name' />" +
                "<attribute name='createdon' />" +
                "<order attribute='cc_name' descending='false' />" +
                "<filter type='and'>" +
                "<condition attribute='cc_name' operator='eq' value='eBook Plugin' />" +
                "</filter>" +
                "</entity>" +
                "</fetch>";
            //Step 5 - Update The Subrid Context
            gridContext.setFilterXml(FetchXmlA);
            //Step 6 - Refresh grid to show filtered records only.
            formContext.getControl("PayloadAccount").refresh();
        }
        //Set grid with query B based fetch XML.
        else {
            //Step 4 - Build a fetch XML in a variable.
            var FetchXmlB = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                "<entity name='cc_payloadaccount'>" +
                "<attribute name='cc_payloadaccountid' />" +
                "<attribute name='cc_name' />" +
                "<attribute name='createdon' />" +
                "<order attribute='cc_name' descending='false' />" +
                "<filter type='and'>" +
                "<condition attribute='cc_name' operator='eq' value='eBook Workflow' />" +
                "</filter>" +
                "</entity>" +
                "</fetch>";
            //Step 5 - Update The Subrid Context
            gridContext.setFilterXml(FetchXmlB);
            //Step 6 - Refresh grid to show filtered records only.
            formContext.getControl("PayloadAccount").refresh();
        }
    }
}