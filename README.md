# Backend Wizard Profile

A minimal Node.js + Express API that exposes a single dynamic profile endpoint. The endpoint returns developer metadata (from environment variables) and a cat fact fetched from the public API at https://catfact.ninja.

Demo: https://cleve-keem.github.io/HNG-backend-wizard-profile/

## Features

- Single endpoint: GET /me
- Returns profile information (name, email, stack) and a cat fact
- Uses Axios to fetch the cat fact with a 5s timeout
- CORS enabled for easy local testing
- Configurable via environment variables

## Documentation

- Live demo / hosted docs: https://cleve-keem.github.io/HNG-backend-wizard-profile/
- Local documentation: `index.html` (included in repo)

## Requirements

- Node.js v22+ (recommended: latest LTS)
- npm

## Installation

1. Clone the repository

   git clone https://github.com/Cleve-keem/HNG-backend-wizard-profile

2. Install dependencies

   npm install

3. Create a `.env` file in the project root (see Environment variables)

4. Start the server

   npm start

(or `node server.js`)

The server listens on `PORT` environment variable or defaults to `5000`.

## Environment variables

Create a `.env` file with the following values:

```
USER_NAME=Your Name
USER_EMAIL=you@example.com
PORT=5000
```

## Usage

Once the server is running, open:

http://localhost:5000/me

Example curl:

```
curl -i http://localhost:5000/me
```

### Endpoint: GET /me

Description: Returns developer profile and a cat fact fetched from a third-party API.

Request:

- Method: GET
- Path: `/me`
- Auth: Hakeem Bello

Successful response (HTTP 200):

```json
{
  "status": "success",
  "user": {
    "email": "hakeembello983@gmail.com",
    "name": "Hakeem Bello",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats have five toes on their front paws..."
}
```

Fallback response when the external API fails (HTTP 200 in current implementation):

```json
{
  "status": "success",
  "user": {
    "email": "hakeembello983@gmail.com",
    "name": "Hakeem Bello",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Failed to fetch cat fact"
}
```

Notes:

- The current implementation returns HTTP 200 for both success and fallback responses. Consider returning 5xx codes (e.g., 502) to surface dependency failures.
- CORS is enabled for all origins; restrict in production.

## Development & Recommendations

- Add a health endpoint (e.g., `GET /health`) for readiness/liveness checks
- Add automated tests (Jest + Supertest) for the endpoint
- Use a process manager (PM2) or containerize for production deployment

## Dependencies

- express
- axios
- cors
- dotenv

## Author

Hakeem Bello
