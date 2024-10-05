function CallMethod (executionContext) {
    //CRM Crate JavaScript Snippet -
    //Declare Form ID and Entity Schema Name.
    var formId = "3d77A72F99-B266-4771-B89A-453E0CEDDD3C"; //Pass the Form ID.
    var entityName = "cc_researchdevelopment"; //Pass the Entity Schema Name.
    // Utilize the getEntityMainFormDescriptor client API.
    Xrm.Utility.getEntityMainFormDescriptor(entityName, formId).then(function
    (response) {
    var entityFormSections = response.Sections;
    console.log(entityFormSections);
    }, function(error) {
    console.log(error.message);
    });
    }