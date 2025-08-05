# Azure Function App Generator - Project Generation Prompt

Use this prompt to generate a complete Azure Function App:

---

## Project Requirements

Create an Azure Function App project with the following specifications:

### Core Setup
- **Framework**: JavaScript with ES modules syntax (latest)
- **Azure Functions**: Programming Model v4
- **Structure**: Modern barrel file pattern with src/index.js as entry point

### Function Specifications

Create a single HTTP-triggered function called `thing1` with these requirements:

#### Basic Configuration
- **Method**: POST only
- **Auth Level**: Anonymous
- **Content Type**: Accepts JSON request body
- **Response**: Returns JSON object with message

#### Configuration Parameters (JSON Input)

The function should accept a JSON object with these configurable properties:

**Positioning Controls:**
- `message` (default: "") - Message to return in response

#### Technical Implementation Details

**Error Handling:**
- JSON parsing error handling with specific error messages
- Proper HTTP status codes (400 for bad input, 500 for server errors)

**Code Quality:**
- Use meaningful variable names (no single-letter variables)
- Comprehensive comments explaining calculations
- Modern ES modules syntax throughout
- Proper async/await patterns

#### Example Usage JSON

```json
{
  "message": "howdy"
}
```

#### Project Structure Expected

```
/
├── package.json (ES modules, PDFKit dependency)
├── host.json (Azure Functions configuration)
├── local.settings.json (local development settings)
├── src/
│   ├── index.js (barrel file importing all functions)
│   └── functions/
│       └── thineOne.js (first function implementation)
└── README.md (documentation)
```

#### Key Features to Implement

7. **Modern Code**: ES modules, meaningful variable names, proper async patterns

Generate a complete, production-ready Azure Function that meets all these specifications and can be deployed locally or to Azure.
