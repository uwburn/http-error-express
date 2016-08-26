# HTTP error middlweare

A simple Express middleware to deal coherently with HTTP errors in Express, expecially useful when creating web APIs. See `http-error` for the companion error module.

### Usage

```javascript
var Express = require('express');
var httpErrorExpress = require('http-error-express');

var express = Express();
express.use(httpErrorExpress());
```

### Notes
It's reccomended to use `http-error-express` as the last middleware. Errors without status property will be treated as `HTPP 500 - Internal server error`. Given `err` the incoming error, it will render a message as:
```json
{
    message: err.message,
    data: err.data
}
```
