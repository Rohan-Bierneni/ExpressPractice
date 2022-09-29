const http = require('http');

const router = require('./routes');

const express = require('express');

const app = express();

app.use(router);

app.listen(3000);