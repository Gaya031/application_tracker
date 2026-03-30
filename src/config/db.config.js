import mongoose from "mongoose";
import User from "../models/User.model.js"
export const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected");
        // const testUser = new User({
        //     name: "gaya",
        //     email: "gaya@email.com",
        //     password: "gaya123",
        //     authProvider: "jwt"
        // });
        // await testUser.save();
        // console.log("UserSaved: ", testUser);
    }catch(err){
        console.error("DB Error: ", err.message);
    }
};