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
                    //Retrieving Target Entity.
                    eTarget = (context.InputParameters.Contains("Target") && context.InputParameters["Target"] != null) ?
                    context.InputParameters["Target"] as Entity : null;
                    //Triggering The Logic If Target Is Not Null.
                    if (eTarget != null)
                    {
                        //Stage 1.
                        QueryExpression qeAccount = new QueryExpression("account");
                        //Stage 2.
                        qeAccount.ColumnSet.AddColumns("accountnumber", "accountname", "accountid");
                        //Stage 3.
                        FilterExpression filter = new FilterExpression(LogicalOperator.And);
                        filter.AddCondition("accountnumber", ConditionOperator.Equal, eTarget.GetAttributeValue("accountnumber"));
                        filter.AddCondition("accountname", ConditionOperator.NotNull);
                        qeAccount.Criteria.AddFilter(filter);
                        //Stage 4.
                        EntityCollection entityCollection = service.RetrieveMultiple(qeAccount);
                        if (entityCollection.Entities.Count == 0)
                        {
                            // No Account Found With Similar Account Number.
                        }
                        else
                        {
                            //Stage 5.
                            int TotalAccountCount = entityCollection.Entities.Count;
                            //Account Records Found With Similar Account Number.
                            foreach (var entity in entityCollection.Entities)
                            {
                                //Stage 6.
                                Entity eAccountNew = new Entity("account");
                                eAccountNew.Id = entity.Id;
                            }
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