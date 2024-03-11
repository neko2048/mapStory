const dotenv = require('dotenv');

dotenv.config();

exports.getMapboxAPI = async (req, res) => {
    try {
        const api = process.env.MAPBOX_API;
        res.status(200).json({
            status: 'success',
            data: {
                data: api,
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            message: error,
        });
    }
}