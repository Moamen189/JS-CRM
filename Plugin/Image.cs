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
                    //Stage 1 - Entity Variable Creation.
                    Entity preTarget = new Entity();
                    Entity postTarget = new Entity();
                    Entity preImage = new Entity();
                    Entity postImage = new Entity();
                    //Stage 2 - Validating & Declaring Images.
                    if (context.PreEntityImages.Contains("PreEntityImage"))
                    {
                        preImage = context.PreEntityImages["PreEntityImage"];
                        preTarget.Attributes = preImage.Attributes;
                    }
                    if (context.PostEntityImages.Contains("PostEntityImage"))
                    {
                        postImage = context.PostEntityImages["PostEntityImage"];
                        postTarget.Attributes = postImage.Attributes;
                    }
                    //Stage 3 - Retrieving Data Stored In Pre-Image & Post Image.
                    string preAccountName = preTarget.GetAttributeValue<string>("accountname");
                    string postAccountName = postTarget.GetAttributeValue<string>("accountname");
                }
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException(ex.Message);
            }
        }
    }
}