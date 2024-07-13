const mongoose = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        const connection = mongoose.connection
        connection.on('connected', ()=>{
            console.log('Connect To DB');
        })
        connection.on("error", ()=>{
            console.log("Something is wrong in mongodb", error);
        })
    }catch(err){
        console.log("Something is wrong")
    }
}

module.exports = connectDB