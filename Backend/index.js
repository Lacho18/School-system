const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;     

app.use(cors());

app.use(bodyParser.json());
