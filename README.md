NodeJS REST API for shortening URLS using Express and Sequelize

----------------------------------------------------------------------------------------------
| Type | Endpoint     | Returns | Description                                         | Body |
|------|--------------|---------|-----------------------------------------------------|------|
| POST | /api/create/ | 201     | Creates a new shortened URL                         | url  |
| POST | /api/remove/ | 201     | Removes a created URL                               | id   |
| GET  | /api/list/   | 201     | Lists all shortened URLs                            | /    |
| GET  | /:id/        | 301     | Retrieves full URL from shortened URL and redirects | /    |
