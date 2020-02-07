# everhour-core

This is a wrapper for the Everhour API.

## Features

This supports CRUD operations for the following:

- Projects
- Tasks

## Installation

```
npm install everhour-core
```

## Usage

```javascript
const everhourCore = require("everhour=core")
const apiKey = process.env.EVERHOUR_API_KEY
const taskId = process.env.TASK_ID

everhourCore
  .getTask(apiKey, taskId)
  .then(res => {
    someFunction(res.data)
  })
  .catch(err => {
    someErrorHandler(err)
  })
```
