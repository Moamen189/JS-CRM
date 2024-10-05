using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
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
                        //Reading Value From Money Field.
                        Money readField = eTarget.GetAttributeValue<Money>("fieldschemaname");
                        Decimal readFieldInDecimal = eTarget.GetAttributeValue<Money>("fieldschemaname").Value;
                        //Setting Value In Money Field.
                        Money anyMoneyValue = new Money(1000);
                        eTarget.Attributes.Add("fieldschemaname", anyMoneyValue);
                        //Sending Update Request.
                        service.Update(eTarget);
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