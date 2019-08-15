const { subscribeToTopic } = require('../serviceBusUtil/sb');
const jsonResponse = require('../serviceBusUtil/util');

async function handler(context, req) {
  try {
    console.log('Subscribing to topic.');

    const data = await subscribeToTopic(req.type);

    console.log('Data received from queue: ', data);

    context.res = jsonResponse(data);
  } catch (error) {
    console.error('Error in subscribeToTopic handler: ', error);
  }
}

module.exports = handler;
