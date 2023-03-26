
const Course = require('../models/Course');
class SiteController {

    //[GET] /
    index(req,res,next){

        Course.find({name: 'Xây dựng web với Nodejs & ExpresJS'})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                console.log(courses)
                res.render('home',{courses});
            })
            .catch(next)
    }

    //[GET] /search
    search(req,res){
        res.render("search")
    }
}

module.exports = new SiteController;
