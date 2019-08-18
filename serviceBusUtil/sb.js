const { ServiceBusClient, ReceiveMode } = require('@azure/service-bus');

// Define connection string and related Service Bus entity names here
const connectionString =
  'Endpoint=sb://callidus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=RFvjeP19OsVwxZT3Nur5NjRJNHJFmILxA7czOETPStI=';

async function publishToTopic(data) {
  console.log('Data received from request: ', data);

  const { type } = data;

  const topicName = `${type}`;

  console.log('publishToTopic topicName: ', topicName);

  const sbClient = ServiceBusClient.createFromConnectionString(
    connectionString
  );
  const topicClient = sbClient.createTopicClient(topicName);
  const sender = topicClient.createSender();

  try {
    const message = {
      body: data,
      label: topicName
    };

    console.log(`Sending message: ${message.body}`);

    await sender.send(message);
  } catch (error) {
    console.error('Error in publishToTopic: ', error);
  } finally {
    await topicClient.close();
    await sbClient.close();
  }
}

async function subscribeToTopic(type) {
  const sbClient = ServiceBusClient.createFromConnectionString(
    connectionString
  );

  const topicName = type;
  const subscriptionName = `${type}-sub`;

  console.log('subscribeToTopic topicName: ', topicName);
  console.log('subscriptionName: ', subscriptionName);

  const subscriptionClient = sbClient.createSubscriptionClient(
    topicName,
    subscriptionName
  );
  const receiver = subscriptionClient.createReceiver(
    ReceiveMode.ReceiveAndDelete
  );

  try {
    const messages = await receiver.receiveMessages(10);
    console.log('Received messages:', messages);

    return messages.map(message => message.body);
  } catch (error) {
    console.error('Error in subscribeTopic: ', error);
  } finally {
    await subscriptionClient.close();
    await sbClient.close();
  }
}

module.exports = { publishToTopic, subscribeToTopic };
