function BPFMove(executionContext) {
    //Initiated Form Context.
    var formContext = executionContext.getFormContext();
    //Getting Value From Field Account Closed.
    var AccountClosed = formContext.getAttribute("accountclosed").getValue();
    //Condition If Account Closed Is False.
    if (AccountClosed === false) {
        //Moving Chevron To Previous Stage.
        formContext.data.process.movePrevious();
    }
}