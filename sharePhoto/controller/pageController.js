const getIndexPage = (req,res) => {
    console.log('REQUEST USER:::',req.user);
    res.render('index',{
        page_name:'index'
    });
}

const getAboutPage = (req,res) => {
    res.render('about',{
        page_name:'about'
    });
}

const getBlogPage = (req,res) => {
    res.render('blog',{
        page_name:'blog'
    });
}
const getContactPage = (req,res) => {
    res.render('contact',{
        page_name:'contact'
    });
}


const getProjectsPage = (req,res) => {
    res.render('projects',{
        page_name:'projects'
    });
}

const getServicesPage = (req,res) => {
    res.render('services',{
        page_name:'services'
    });
}

const getRegisterPage = (req,res) => {
    res.render('register',{
        page_name:'register'
    })
}

const getLoginPage = (req,res) => {
    res.render('login',{
        page_name:'login'
    })
}

module.exports = {getIndexPage,getAboutPage,getBlogPage,getContactPage,getProjectsPage,getServicesPage,getRegisterPage,getLoginPage};