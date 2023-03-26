

const Query = require('../models/Query');
class EstesController{
    index(req,res){
        const nodes7 = require('nodes7'); 
        var conn = new nodes7;

        conn.initiateConnection({ 
        port: 102,
        host: '192.168.0.150', 
        rack: 0, 
        slot: 1, 
        debug: false ,
        timeout: 8000},connected);


        var variables = {
            LevelTank : 'DB1,INT4',
            Start : 'I0.0',
            Sensor : 'I0.4',
            ResetCounter : 'I0.3'
        };

        function connected(err) {

            if (typeof(err) !== "undefined") {
            console.log(err);
            process.exit();
            }
            conn.setTranslationCB(function(tag) { return variables[tag]; });
            conn.addItems(['Start', 'LevelTank','Sensor','ResetCounter']);
            conn.readAllItems(valuesReady);
        }
       // setInterval(connected,2000)
        
        function valuesReady(anythingBad, values){
            if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
            console.log('Done reading')
            console.log(values)
            controller(values)
            
        }

        function valuesWritten(anythingBad) {
            if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
            //console.log("Done writing.");
            //if (doneReading) { process.exit(); }
        }

        function controller(values){

            if(values.LevelTank >= 15){
                conn.writeItems(['Sensor','ResetCounter'], [true,true], valuesWritten)
               // conn.writeItems('ResetCounter', true, valuesWritten)
               values.LevelTank=0
            }

            if(values.LevelTank< 15){
                conn.writeItems(['ResetCounter','Sensor'], [false,false], valuesWritten)
                // conn.writeItems('Sensor', false, valuesWritten) 
            }
            var setPointReal = 20
            var LevelTankReal = values.LevelTank//values.LevelTank
            values = [{
                LevelTank : LevelTankReal*10,
                SetPoint : 250+(200-setPointReal*10),
                SetPointText : 250+(200-setPointReal*10)-5,
                SensorLine : 275 + (155-LevelTankReal*7.75),
            }]
            console.log(values)
            res.render('ESTEC',{values})
        }
    }
}
module.exports = new EstesController;
