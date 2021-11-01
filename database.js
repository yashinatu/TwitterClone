const mongoose = require('mongoose');

class Database{

    constructor(){
        this.connect();
    }

    connect() {
    mongoose.connect("mongodb+srv://admin:Sarthak@twitterclonecluster.ltarl.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
.then(()=>{
console.log("Database connection successful!");
})

.catch((err)=>{
    console.log("Database connection Error " + err);
    })
}
}

module.exports = new Database();