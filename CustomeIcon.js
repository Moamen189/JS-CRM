//CRM Crate JavaScript Snippet.
function CallMethod (rowData, userLCID) {
    //Reading Value From View's Row Data.
    var row = JSON.parse(rowData);
    //Reading Value Of Columns.
    var subscriberType = row.cc_subscribertype_Value
    //Declaring Variables.
    var imgName = "";
    var tooltip = "";
    //A Switch Case For Assiging Icons According To The Column Data.
    switch (subscriberType) {
    case 948120000: // Optionset Value
    imgName = "cc_WebsiteLogo"; // Name Of The PNG Web Resource.
    tooltip = "Website User"; //Tool Tip To Be Displayed On Icon
    break;
    case 948120001: // Optionset Value
    imgName = "cc_SupportLogo"; // Name Of The PNG Web Resource.
    tooltip = "Support User"; //Tool Tip To Be Displayed On Icon
    break;
    case 948120002: // Optionset Value
    imgName = "cc_ProductLogo"; // Name Of The PNG Web Resource.
    tooltip = "Product User"; //Tool Tip To Be Displayed On Icon
    break;
    }
    //Creating Result Array,
    var resultarray = [imgName, tooltip];
    //Returning View Row Data Array In Return.
    return resultarray;
    }