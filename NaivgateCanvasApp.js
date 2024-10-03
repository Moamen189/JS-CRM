//CRM Crate - JavaScript Snippet.
function callMethod (executionContext) {
    //Initiating Web Resource Parameter.
    var pageInput = {
        pageType: "webresource",
        webresourceName: "cc_html"
    };
    //Declaring HTML Page Dimensions.
    var navigationOptions = {
        target: 2,
        width: 1050, // value specified in pixel
        height: 900, // value specified in pixel
        position: 1
    };
    //Using navigateTo Client API.
    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function success() {
                // Run code on success
        },
        function error() {
                // Handle errors
        }
    );
    }