const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mapData');


const app = express();
app.use(cors());
app.use(express.json());

const Map = require('./models/mapModel');

app.post('/api/v1/posts', async (req, res) => {
    try {
        const map = await Map.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                map,
            },
        });
    } catch (error) {
        console.log(req.body);
        console.log(error);
        res.json({
            status: 'error',
            message: error,
        });
}});

app.get('/api/v1/posts', async (req, res) => {
    try {
        const map = await Map.find();
        res.status(200).json({
            status: 'success',
            data: {
                data: map,
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            message: error,
        });
    }
});

app.get('/api/v1/posts/:id', async (req, res) => {
    try {
        const map = await Map.findById(req.params.id);
        console.log(map);
        res.status(200).json({
            status: 'success',
            data: {
                data: map,
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            message: error,
        });
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});