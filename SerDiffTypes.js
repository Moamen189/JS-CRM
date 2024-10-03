function GetSetValue(executionContext) {
    //Initiated Form Context.
    var formContext = executionContext.getFormContext();
    //Setting & Getting Value In String Field - Enter The Set Value Parameter As Any Text Value.
    formContext.getAttribute("fieldname").setValue("My Text Valye");
    var variable1 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Option Set Field - Enter The Set Value Parameter As Option Set Value.
    formContext.getAttribute("fieldname").setValue(100000);
    var variable2 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Date Field - Enter The Set Value Parameter In Date Format.
    var strDt = "18-Aug-2015";
    var dt = strDt.split('-');
    var day = dt[0];
    var month = dt[1].toLocaleLowerCase();
    var year = dt[2];
    if (month === "jan")
        month = 1;
    else if (month === "feb")
        month = 2;
    else if (month === "mar")
        month = 3;
    else if (month === "apr")
        month = 4;
    else if (month === "may")
        month = 5;
    else if (month === "jun")
        month = 6;
    else if (month === "jul")
        month = 7;
    else if (month === "aug")
        month = 8;
    else if (month === "sep")
        month = 9;
    else if (month === "oct")
        month = 10;
    else if (month === "nov")
        month = 11;
    else if (month === "dec")
        month = 12;
    var actualDate = month + "/" + day + "/" + year;
    var dateData = new Date(actualDate);
    formContext.getAttribute("fieldname").setValue(dateData);
    var variable3 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Lookup Field - Enter The Set Value Parameter As Lookup Value.
    var lookUpItem = new Object();
    lookUpItem.id = '7b624C940A-49FF-E711-80FC-XXXXXXXXXXXX';
    lookUpItem.name = 'mycontactname';
    lookUpItem.entityType = 'account';
    Xrm.Page.getAttribute("fieldname").setValue([{ id: lookUpItem.id, name: lookUpItem.name, entityType: lookUpItem.entityType }]);
    var variable4 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Multiselect Field - Enter The Set Value Parameter As Multiselect Optionset Value.
    formContext.getAttribute("fieldname").setValue([1003, 1004, 1006]);
    var variable5 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Two Option Field - Enter The Set Value Parameter As Boolean Value.
    formContext.getAttribute("fieldname").setValue(true);
    var variable6 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Whole Number Field - Enter The Set Value Parameter As Whole Number Value.
    formContext.getAttribute("fieldname").setValue(12345);
    var variable7 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Floating Number Field - Enter The Set Value Parameter As Floating Number Value.
    formContext.getAttribute("fieldname").setValue(12345.5555);
    var variable8 = formContext.getAttribute("fieldname").getValue();
    //Setting & Getting  Value In Currency Field - Enter The Set Value Parameter As Currency Value.
    formContext.getAttribute("fieldname").setValue(parseFloat(100.12));
    var variable9 = formContext.getAttribute("fieldname").getValue();
}