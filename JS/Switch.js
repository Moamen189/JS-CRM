function CallMethod (executionContext) {
    var formContext = executionContext.getFormContext();
    //Get Field Value.
    var field = formContext.getAttribute("cc_switchbpf").getValue();
    if(field == 1) // Optionset Value From 1st BPF
    {
    formContext.data.process.setActiveProcess("1D11AE47-1458-417E-B5C0-A1D87AFD868E");
    }
    else // Value Equivalent To 2nd BPF
    {
    formContext.data.process.setActiveProcess("A4CDF48D-3B45-4B41-8214-6F268AA5E7D9");
    }
    }