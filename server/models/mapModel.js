const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    mapName: {
        type: String,
        required: [true, 'A map must have a name'],
        unique: true,
        default: 'No name',
    },
    mapDescription: {
        type: String,
        default: 'No description',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    mapImage: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png',
    }
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;