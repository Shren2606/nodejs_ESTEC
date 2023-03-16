
class EstesController {

    //[GET] /estec
    index(req,res){
        res.render('ESTEC');
    }
}

module.exports = new EstesController;
