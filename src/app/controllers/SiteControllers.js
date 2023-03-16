
const Course = require('../models/Course')

class SiteController {

    //[GET] /
    index(req,res,next){
       
        // function callback()
        // Course.find({}, function(err, course){
        //     if(!err){
        //         res.json(course);
        //     }else{
        //         res.status(400).json({error: "error!!!!"})
        //     }
        // })

        //promise js
        // Course.find({})
        //     .then(courses => res.json(courses))
        //     .catch(next)

        // send data cho handlebars tham khảo ở handlebars.js
        // Course.find({})
        //     .then(courses => res.render('home',{"object"}))
        //     .catch(next)

        Course.find({})
            .then(courses => {

                courses = courses.map(course => course.toObject())
                res.render('home',{courses})
            })
            .catch(next)
            
    }

    //[GET] /search
    search(req,res){
        res.render("search")
    }
}

module.exports = new SiteController;
