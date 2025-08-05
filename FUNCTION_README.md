# Azure Function App

This is an Azure Function App project with a single HTTP-triggered function called `thing1`.

## Project Structure

```
/
├── package.json (ES modules configuration)
├── host.json (Azure Functions configuration)
├── local.settings.json (local development settings)
├── src/
│   ├── index.js (barrel file importing all functions)
│   └── functions/
│       └── thing1.js (HTTP-triggered function implementation)
└── README.md (this file)
```

## Function: thing1

An HTTP-triggered function that accepts POST requests with JSON content.

### Configuration Parameters

The function accepts a JSON object with these properties:

- `message` (default: "") - Message to return in response

### Example Request

```json
POST /api/thing1
Content-Type: application/json

{
  "message": "howdy"
}
```

### Example Response

```json
{
  "message": "howdy",
  "receivedAt": "2025-08-04T12:00:00.000Z",
  "processed": true
}
```

### Error Handling

- JSON parsing errors return a 400 status code with specific error messages
- Other errors return a 500 status code with error details

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Run the function locally:
   ```
   npm start
   ```

3. The function will be available at:
   ```
   http://localhost:7071/api/thing1
   ```

## Deployment

To deploy to Azure:

1. Create a Function App in Azure Portal or using Azure CLI
2. Deploy using Azure Functions Core Tools:
   ```
   func azure functionapp publish <YourFunctionAppName>
   ```

## Requirements

- Node.js 18.x or later
- Azure Functions Core Tools v4
