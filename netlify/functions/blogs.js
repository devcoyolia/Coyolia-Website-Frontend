exports.handler = async function(event, context) {
  // Handle different HTTP methods
  switch (event.httpMethod) {
    case 'GET':
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          data: [] // Empty array for now, we'll add MongoDB connection later
        })
      };

    case 'POST':
      try {
        const data = JSON.parse(event.body);
        return {
          statusCode: 201,
          body: JSON.stringify({
            success: true,
            message: 'Blog post created successfully',
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

    default:
      return {
        statusCode: 405,
        body: JSON.stringify({
          success: false,
          message: 'Method not allowed'
        })
      };
  }
};
