const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mapRouter = require('./routes/mapRoutes');
const apiKeysRouter = require('./routes/apiKeysRoutes');
mongoose.connect('mongodb://localhost:27017/mapData');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/v1/posts', mapRouter);
app.use('/api/v1/api_keys', apiKeysRouter);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});