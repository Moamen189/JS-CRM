//CRM Crate - JavaScript Snippet
function CallMethod (executionContext) {
    //Reading Attribute Value From The Form.
    var formContext = executionContext.getFormContext();
    var entityID = formContext.data.entity.getId();
    entityID = entityID.replace("{","").replace("}","");
    var Input = formContext.getAttribute("cc_uploadfile").getValue() != null ? formContext.getAttribute("cc_uploadfile").getValue() : null;
    //Validating Form Field Conditions.
    if(Input == true)
    {
    //Invoking pickFile Client API.
    Xrm.Device.pickFile(entityID).then(
     function (data) {
     //Reading Retrieved File.
     var filecontent = data[0].fileContent;
     var mimetype = data[0].mimeType;
     var filename = data[0].fileName;
     //Creating Entity Object.
     var entity = {};
    entity.subject = "CRM Crate Subject";
    entity.documentbody = filecontent;
    entity.filename = filename;
    entity.mimetype = mimetype;
    entity.notetext = "CRM Crate Description";
    entity["objectid_account@odata.bind"] = "/accounts(" + entityID + ")";
    //Using Client API To Create Record In Notes Entity.
    Xrm.WebApi.online.createRecord("annotation", entity).then(
    function success(result) {
    var newEntityId = result.id;
    var alertStrings = { confirmButtonLabel: "OK", text: "CRM Crate Notification - File Attached Succesfully In Notes." };
    var alertOptions = { height: 200, width: 300 };
    Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
    },
    function (error) {
    Xrm.Utility.alertDialog("CRM Crate Notification- Error Occurred While Attaching File In Notes.");
    }
    );
     },
     function (error) {
    Xrm.Utility.alertDialog("CRM Crate Notification - Error Occurred While Uploading The File.");
    }
    );
    }
    else
    {
    }
    }