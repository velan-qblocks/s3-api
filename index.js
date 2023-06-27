require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/s3', require('./routes/s3Routes'));

app.listen(8000, () => {
   console.log('✔ Server started!');
});
