//CRM Crate JavaScript Snippet -
function CallMethod (executionContext) {
    var formContext = executionContext.getFormContext();
    var typefield = formContext.getControl("cc_type");
    var typefieldValue = formContext.getAttribute("cc_type").getValue();
    var quantity = formContext.data.entity.attributes.get("cc_quantity");
    //If Type == Mango.
        if (typefieldValue == 1 )
        {
            var actionsCol = {
                message: 'Do you want to place 100 quantity order?',
                actions: null
            };
            actionsCol.actions = [function() {
                quantity.setValue(100);
                typefield.clearNotification('2002');
            }];
            //Utilizing addNotification client API.
            typefield.addNotification({
                messages: ["Place 100 quantity order"],
                notificationLevel: 'RECOMMENDATION',
                uniqueId: '2002',
                actions: [actionsCol]
            });
        }
    }