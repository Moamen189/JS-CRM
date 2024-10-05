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
                        //Reading Value From Lookup Field.
                        EntityReference readField = eTarget.GetAttributeValue<EntityRefrence>("fieldschemaname");
                        //Setting Value In Lookup Field.
                        Guid recordId = new Guid("8a2eab03-faa6-ea11-a812-000d3a8b66df");
                        eTarget.Attributes.Add("fieldschemaname", new EntityReference("entityschemaname", recordId));
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