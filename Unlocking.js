function LockUnlock(executionContext) {
    //Initiated Form Context.
    var formContext = executionContext.getFormContext();
    //Getting Value From Field Account Name.
    var AccountName = formContext.getAttribute("accountname").getValue();
    //Condition If Account Name Is Null.
    if (AccountName !== null || AccountName !== undefined) {
        //Using SetVisible propertly for unlocking field Account Address.
        formContext.getControl("accountaddress").setDisabled(false);
    }
}