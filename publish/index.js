const { publishToTopic } = require('../serviceBusUtil/sb');
const jsonResponse = require('../serviceBusUtil/util');

async function handler(context, req) {
  try {
    console.log('====sendMessage====');
    console.log('request body: ', req.body);

    await publishToTopic(req.body);

    context.res = jsonResponse(req.body);
  } catch (error) {
    console.error('Error in publishToTopic handler: ', error);
  }
}

module.exports = handler;
