const db = require("mongoose");

db.Promise = global.Promise;

function connect(pURL){

    db.connect(pURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "telegrom",
    })
      .then(() => {
        console.log("[db connection] Database connected");
      })
      .catch((error) => {
        console.error("[db connection] Connection failed", error.message);
      });
    
}    

module.exports = connect;