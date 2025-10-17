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
