import express from 'express';
import UserModel from '../models/User.model.js';
import {generateToken} from "../utils/generateToken.js"

export const registerController = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required."});
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be atleast 6 character long"});
        }

        const existingUser = await UserModel.findOne({email});
        if(existingUser) return res.status(409).json({message: "email already registered"});

        const user = await UserModel.create({
            name, email, password, authProvider: "jwt"
        });

        const token = generateToken(user._id);

        res.status(201).json({
            message: "Account created successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            }
        });
    }catch(err){
        console.error("Register Error: ", err.message);
        res.status(500).json({message: "Something went wrong"});
    }
}