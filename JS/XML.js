//CRM Crate - JavaScript Snippet
function CallMethod (executionContext) {
    //Reading Attribute Value From The Form.
    var formContext = executionContext.getFormContext();
    var Input = formContext.getAttribute("cc_input").getValue() != null ? formContext.getAttribute("cc_input").getValue() : null;
    //Validating Form Field Conditions.
    if(Input == true)
    {
    //Using getDataXML Client API.
    var XMLData = formContext.data.entity.getDataXml();
    //Setting Value In Form's Field.
    formContext.getAttribute("cc_xmldata").setValue(XMLData)
    }
    else
    {
    formContext.getAttribute("cc_xmldata").setValue("")
    }
    }