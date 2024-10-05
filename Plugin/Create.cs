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
                    if (AccountNumber == 100)
                    {
                        //Stage 3 - Creating New Entity Object
                        Entity eNewContact = new Entity("contact");
                        eNewContact["ContactNumber"] = AccountNumber;
                        //Stage 4 - Send Create Request.
                        service.Create(eNewContact);
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