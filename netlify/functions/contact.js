exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed'
      })
    };
  }

  try {
    const data = JSON.parse(event.body);
    // Here you can add email sending logic later
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Message received successfully',
        data: data
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        message: 'Invalid request data'
      })
    };
  }
};
