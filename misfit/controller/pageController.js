exports.getIndexPage = (req,res)=> {
    res.status(200).render('index',{
        page_name:"index"
    });
}

exports.getAboutPage = (req,res) => {
    res.status(200).render('about',{
        page_name:"about"
    })
}

exports.getContactPage = (req,res) => {
    res.status(200).render('contact',{
        page_name:"contact"
    })
}

exports.getGalleryPage = (req,res) => {
    res.status(200).render('gallery',{
        page_name:'gallery'
    })
}


exports.getNewsPage = (req,res) => {
    res.status(200).render('news',{
        page_name:'news'
    })
}

exports.getServicePage = (req,res) => {
    res.status(200).render('service',{
        page_name:'service'
    })
}

exports.getTrainerPage = (req,res) => {
    res.status(200).render('trainer',{
        page_name:'trainer'
    })
}


exports.getLoginPage = (req,res) => {
    res.status(200).render('login',{
        page_name:'login'
    })
}

exports.getUploadPage = (req,res) => {
    res.status(200).render('uploadPhoto',{
        page_name:'uploadphoto'
    })
}