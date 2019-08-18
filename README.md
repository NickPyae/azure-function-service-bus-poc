# azure-function-service-bus-poc
POC for azure function with service bus

Prerequisite:
    
  - [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
  - Azure Functions extention from VSCode Marketplace 
  - [Quickstart: Use the Azure portal to create a Service Bus topic and subscriptions to the topic](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal)
  - [@azure/service-bus](https://www.npmjs.com/package/@azure/service-bus) Node.js package which uses the faster [AMQP 1.0 protocol](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-amqp-overview)

# Important Readings!

  - [Service Bus quotas](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas)
  - [Service Bus pricing](https://azure.microsoft.com/en-gb/pricing/details/service-bus/)


You can also:
  - [Follow Azure Service Bus Node.js quickstart using Topics and Subscriptions](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-nodejs-how-to-use-topics-subscriptions-new-package)

### Development

To create a new project:
- Ctrl + Shift +  P > Azure Functions: Create New Project
- Choose .NET Framework V2 standard if you are creating new project on Windows OS. (Optional)
- Choose JavaScript
- Choose HttpTrigger > Provide Function Name for example: *publish*
- Authorization level > Anonymous

Add new function to existing project:
- Ctrl + Shift +  P > Azure Functions: Create Function
- Choose HttpTrigger > Provide Function Name for example: *publish*
- Authorization level > Anonymous

Deploy local project to Azure Function App in Cloud: 
- Ctrl + Shift +  P > Azure Functions: Deploy to Function App
- Get URL for each function either from console output after deployment or from Azure Function App from Azure Portal by clicking specific function name for example: *publish* </> Get function URL which is under Functions section in Function App

