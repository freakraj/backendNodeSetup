// require('dotenv').config({path : './env'})
import connectDb from "./db/index.js";
import dontenv from 'dotenv';

dontenv.config({
    path: './env'
})



connectDb();












// import express from "express"
// const app = express()

// // effy function
// ( async ()=>{
//    try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("Error : ", (error) => {
//     console.log("Error :", error);
//     throw error
//    })
//    app.listen(process.env.PORT, () => {
//     console.log(`App is listening on port ${process.env.PORT}`);
//    })
//    } catch (error) {
//     console.error("Error:", error);
//     throw error
//    }
// })()