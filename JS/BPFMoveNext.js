function BPFMove(executionContext) {
    //Initiated Form Context.
    var formContext = executionContext.getFormContext();
    //Getting Value From Field Account Closed.
    var AccountClosed = formContext.getAttribute("accountclosed").getValue();
    //Condition If Account Closed Is True.
    if (AccountClosed === true) {
 //Moving Chevron To Next Stage.
        formContext.data.process.moveNext();
    }
}