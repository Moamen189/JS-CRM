using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
namespace CRM_Crate___My_Sample_Plugin
{
    public class Plugin : IPlugin
    {
        //Main Execute Method.
        public void Execute(IServiceProvider serviceProvider)
        {
            //Initializing Service Context.
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = factory.CreateOrganizationService(context.UserId);
            try
            {
                //Defining Entity Object.
                Entity eTarget = null;
                if (context.MessageName == "Create")
                {
                    //Stage 1 - Retrieving Target Entity.
                    eTarget = (context.InputParameters.Contains("Target") && context.InputParameters["Target"] != null) ?
                    context.InputParameters["Target"] as Entity : null;
                    //Stage 2 - Read Record Scenario.
                    string AccountName = eTarget.GetAttributeValue("accountname");
                    int AccountNumber = eTarget.GetAttributeValue("accountnumber");
                    EntityReference ContactLookup = eTarget.GetAttributeValue("contact");
                    DateTime AccountDate = eTarget.GetAttributeValue("accountdate");
                    Money AccountRevenue = eTarget.GetAttributeValue("accountrevenue");
                    int  AccountOptionset = eTarget.GetAttributeValue("accountrevenue").Value;
                    //Stage 3 - Creating Query Expression.
                    QueryExpression qeContactUpdate = new QueryExpression("contact");
                    qeContactUpdate.ColumnSet.AddColumns("contactnumber", "contactname", "contactid");
                    FilterExpression filterUpdate = new FilterExpression(LogicalOperator.And);
                    filterUpdate.AddCondition("contactnumber", ConditionOperator.Equal, AccountNumber);
                    qeContactUpdate.Criteria.AddFilter(filterUpdate);
                    EntityCollection entityCollectionUpdate = service.RetrieveMultiple(qeContactUpdate);
                    if (entityCollectionUpdate.Entities.Count == 0)
                    {
                        // No Contact Found.
                    }
                    else
                    {
                        //Stage 4 - Fetched Entity Object Record.
                        foreach (var entity in entityCollectionUpdate.Entities)
                        {
                            Entity eContactUpdate = new Entity("contact");
                            //Stage 5 - Mapping Entity Id
                            eContactUpdate.Id = entity.Id;
                            eContactUpdate["contactname"] = "Test 1234";
                            //Stage 6 - Generating Update Request.
                            service.Update(eContactUpdate);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException(ex.Message);
            }
        }
    }
}