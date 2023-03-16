const Photo = require('../models/photoSchema');

const createPhoto = (req,res) => {
    const photo = Photo.create(req.body);
    res.status(201).json({
        succeded : true,
        photo

    });
};

module.exports = {createPhoto};