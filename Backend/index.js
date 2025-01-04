const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/login', require('./routes/LoginRoute'));
app.use('/user', require('./routes/UserRoute'));
app.use('/grade', require('./routes/GradesRoute'));
app.use('/specialties', require('./routes/SpecialtiesRoute'));

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});