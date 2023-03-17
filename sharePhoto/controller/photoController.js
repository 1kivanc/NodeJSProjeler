const Photo = require('../models/photoSchema');

const createPhoto = async(req,res) => {
    try{
        const photo = await Photo.create(req.body);
        res.status(201).json({
            succeded:true,
            photo
        });

    }catch(err){
        res.status(500).json({
            succeded:false,
            err
    })
    }
}

const getAllPhotos = async(req,res) => {
    try{
        const photos = await Photo.find({});
        res.status(200).render("photos",{
            photos,
            page_name:'photos'
        
        });
    }
    catch (err){
        res.status(500).json({
            succeded:false,
            err
        })
    }
}

const getAPhoto = async(req,res) => {
    try{
        const photo = await  Photo.findById({_id: req.params.id})
        res.status(200).render('photo',{
            photo,
            page_name:'photo'
        })

    }catch(err){
        res.status(500).json({
            succeded:false,
            err
        })

    }
    
    
}

module.exports = {createPhoto,getAllPhotos,getAPhoto};