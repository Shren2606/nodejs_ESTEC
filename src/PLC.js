const nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var conn = new nodes7;
var doneReading = false;
var doneWriting = false;
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

  // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
  // conn.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected);
  // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
  function connected(err) {
    if (typeof(err) !== "undefined") {
      // We have an error. Maybe the PLC is not reachable.
      console.log(err);
      process.exit();
    }
    conn.setTranslationCB(function(tag) { return variables[tag]; }); // This sets the "translation" to allow us to work with object names
    conn.addItems(['Start', 'LevelTank','Sensor','ResetCounter']);
   // conn.addItems('TEST6');
    // conn.removeItems(['TEST2', 'TEST3']); // We could do this.
    // conn.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
    // conn.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
    //conn.writeItems('Start', true, valuesWritten); // This writes a single boolean item (one bit) to true
    conn.readAllItems(valuesReady);
  }


setInterval(connected,1000)
  
  function valuesReady(anythingBad, values){
    if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
    console.log('Done reading')
    console.log(values);
    doneReading = true;
    //if (doneWriting) { process.exit(); }
    Control(values.LevelTank)
  }

  function Control(LevelTank){
    if(LevelTank >= 15){
      //console.log("nguuuuuuuuuu")
      return  conn.writeItems('Sensor', true, valuesWritten);
    }
    if(LevelTank< 15){
      //console.log("Thieenj nguuuuuuuuuu")
      return  function reload(){
        [conn.writeItems('ResetCounter', true, valuesWritten),
        conn.writeItems('Sensor', false, valuesWritten)]
        setTimeout(reload)
      }
    }
  }



  //console.log(timeout)
  function valuesWritten(anythingBad) {
    if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
    //console.log("Done writing.");
    doneWriting = true;
    //if (doneReading) { process.exit(); }
  }

