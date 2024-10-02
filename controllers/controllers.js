const crypto = require('crypto');

const generateApiKey = async (req, res) => {
    try {
        const size = 32;
        const format = 'base64';
        const buffer = crypto.randomBytes(size);
        //console.log(buffer.toString(format));
        res.status(201).json({apiKey: buffer.toString(format)});
    }catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    generateApiKey
};