import { app } from '@azure/functions';

/**
 * HTTP-triggered Azure Function that accepts and processes JSON requests
 * This function accepts POST requests with a JSON body containing a message property
 * 
 * @param {Object} request - The incoming HTTP request object
 * @returns {Object} HTTP response object with JSON payload
 */
export async function thing1(request) {
  // Log the incoming request
  console.log('Thing1 function received a request');
  
  // Initialize response object
  let responseObj = {};
  let statusCode = 200;
  
  try {
    // Parse the request body as JSON
    const requestBody = await request.json();
    
    // Extract message parameter with default empty string
    const message = requestBody.message ?? "";
    
    // Construct the response object
    responseObj = {
      message: message,
      receivedAt: new Date().toISOString(),
      processed: true
    };
    
    console.log(`Successfully processed request with message: "${message}"`);
    
  } catch (error) {
    // Handle JSON parsing errors or other exceptions
    console.error('Error processing request:', error.message);
    
    responseObj = {
      error: "Failed to process the request",
      details: error.message,
      processed: false
    };
    
    // Return 400 status code for bad input (e.g., invalid JSON)
    if (error instanceof SyntaxError) {
      statusCode = 400;
    } else {
      // Return 500 for server errors
      statusCode = 500;
    }
  }
  
  // Return the response with appropriate status code and JSON body
  return {
    status: statusCode,
    jsonBody: responseObj
  };
}

// Register the HTTP-triggered function with the Azure Functions runtime
app.http('thing1', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: thing1
});
