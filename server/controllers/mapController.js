const Map = require('../models/mapModel');

exports.createMap = async (req, res) => {
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
    }
};

exports.getAllMaps = async (req, res) => {
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
};

exports.getOneMap = async (req, res) => {
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
};