//CRM Crate JavaScript Snippet -
function CallMethod (executionContext) {
    var formContext = executionContext.getFormContext();
//Using getOption control for field "Optionset B".
    var mango = formContext.getAttribute("cc_optionsetb").getOption(1); // Mango = 1
    var banana = formContext.getAttribute("cc_optionsetb").getOption(2); // Banana = 2
    var spinach = formContext.getAttribute("cc_optionsetb").getOption(3); // Spinach = 3
    var ladyfinger = formContext.getAttribute("cc_optionsetb").getOption(4); // Ladyfinger = 4
    //Using removeOption control for removing all the optionset values by default.
                formContext.getControl("cc_optionsetb").removeOption(1);
                formContext.getControl("cc_optionsetb").removeOption(2);
                formContext.getControl("cc_optionsetb").removeOption(3);
                formContext.getControl("cc_optionsetb").removeOption(4);
//Conditional logic for field "Optionset A".
    var optionsetA = formContext.getAttribute("cc_optionseta").getValue();
    if(optionsetA = 1)
    {
    //Using addOption control for adding optionset value.
                    formContext.getControl("cc_optionsetb").addOption(mango);
                    formContext.getControl("cc_optionsetb").addOption(banana);
    }
    else
    {
    //Using addOption control for adding optionset value.
     formContext.getControl("cc_optionsetb").addOption(spinach);
                    formContext.getControl("cc_optionsetb").addOption(ladyfinger);
    }
}