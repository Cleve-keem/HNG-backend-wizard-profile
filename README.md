# Backend Wizards — Stage 0 Task

## 🚀 Dynamic Profile Endpoint

### Endpoint

GET `/me`

### Description

Returns your profile details with a dynamically fetched cat fact.

### Dependencies

express
axios
cors
dotenv

### Environment variable

PORT="your preferred port" ==> mine was 5000
USER_EMAIL="my email" ==> use yours in interested
USER_NAME="my name" ==> use your name also in needed

### Instructions to run locally

run the command "npm install" - installs all dependencies
run the command "npm start" - start the server

visit: http://localhost:5000/me

### Example Response

```json
{
  "status": "success",
  "user": {
    "email": "hakeembello983@gmail.com",
    "name": "Bello Hakeem",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "random facts about cats"
}
```
