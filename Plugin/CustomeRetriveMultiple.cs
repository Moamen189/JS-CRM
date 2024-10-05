using System;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System.Diagnostics;
namespace CRM_Crate_Console_Application
{
    class Execution
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Console Application Started!");
            try
            {
                //Step 1 - Retrieving CRM Essential Information.
                string sEnvironment = System.Configuration.ConfigurationManager.AppSettings["Environment"].ToString();
                string sUserKey = System.Configuration.ConfigurationManager.AppSettings["UserKey"].ToString();
                string sUserPassword = System.Configuration.ConfigurationManager.AppSettings["UserPassword"].ToString();
                //Step 2- Creating A Connection String.
                string conn = $@" Url = {sEnvironment};AuthType = OAuth;UserName = {sUserKey}; Password = {sUserPassword};AppId = 51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri = app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto; RequireNewInstance = True";
                Console.WriteLine("Operating Environment : " + sEnvironment);
                //Step 3 - Obtaining CRM Service.
                using (var service = new CrmServiceClient(conn))
                {
                    if (service != null)
                    {
                        //Step 4 - Creating A Query Expression On Account Entity.
                        var queryExpression = new QueryExpression("account");
                        queryExpression.ColumnSet.AddColumns("accountid", "accountname", "createdon", "ownerid", "modifiedon", "modifiedby", "createdby");
                        queryExpression.AddOrder("createdon", OrderType.Ascending);
                        //Step 5- Call The Custom Method To Retrieve +5000 records.
                        EntityCollection entityCollection = RetrieveAllRecords(queryExpression, service);
                        if (entityCollection.Entities.Count == 0)
                        {
                            Console.WriteLine("Warning: No Record Found In : " + sEnvironment);
                        }
                        else
                        {
                            Console.WriteLine(" Found In : " + sEnvironment + " With Count : " + entityCollection.Entities.Count);
                            foreach (var entity in entityCollection.Entities)
                            {
                                try
                                {
                                    //Perform The CRM Operations As Per Your Need.
                                }
                                catch (Exception ex)
                                {
                                    Console.WriteLine("Error Occured : " + ex.Message);
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error Occured : " + ex.Message);
            }
        }
        //Method Used For Retrieving Bulk CRM Records.
        public static EntityCollection RetrieveAllRecords(QueryExpression query, IOrganizationService _service, int count = 5000)
        {
            query.PageInfo = new PagingInfo();
            query.PageInfo.Count = count;
            query.PageInfo.PageNumber = 1;
            query.PageInfo.ReturnTotalRecordCount = true;
            EntityCollection entityCollection = _service.RetrieveMultiple(query);
            EntityCollection ecFinal = new EntityCollection();
            foreach (Entity i in entityCollection.Entities)
            {
                ecFinal.Entities.Add(i);
            }
            do
            {
                query.PageInfo.PageNumber += 1;
                query.PageInfo.PagingCookie = entityCollection.PagingCookie;
                entityCollection = _service.RetrieveMultiple(query);
                foreach (Entity i in entityCollection.Entities)
                    ecFinal.Entities.Add(i);
            }
            while (entityCollection.MoreRecords);
            return ecFinal;
        }
    }
}