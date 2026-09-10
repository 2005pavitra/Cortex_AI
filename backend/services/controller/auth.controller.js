import { getAuth } from "firebase-admin/auth";
import {app} from "../auth/config/firebase.js"
import User from "../models/user.model.js"
import crypto from "crypto"


export const login = async (req, res) =>{
    try {
        const {token} = req.body;
        if(!token){
            return res.status(400).json({success:false, error: "Token not found"})
        }
        const auth =  getAuth(app);
        const decoded = await auth.verifyIdToken(token)
        let user = await User.findOne({
            firebaseUid:decoded.uid
        })

        if(!user){
            user = await User.create({
                firebaseUid: decoded.uid,
                name: decoded.name,
                email:decoded.email,
                avatar: decoded.picture ||""
            });
            console.log(`Create a new user ${user.email}`)
        }

        const sessionId = crypto.randomUUID();
        res.cookie("session", sessionId, {
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })

        return res.status(200).json({
            success: true,
            message:"Authentication successful", 
            user:{
                id: user._id,
                name:user.name,
                email:user.email,
                avatar:user.avatar
            }
        })
    } catch (error) {
        console.log("Error in registering user", error);
        return res.status(500).json({success:false, error:"Auth error",error})
    }
}