import { Request, Response } from "express";
import User, {IsUser} from "../models/user";

export const createUser = async (req:Request, res:Response)=>{
    try{
        const userData:IsUser = req.body
        const user = new User(userData)

        await user.save()
        
        res.json({
            msj:'Usuario creado correctamente',
            user
        })
    }catch(error){
        res.json(error)
    }
}

export const getUsers = async ( {}, res:Response)=>{
    try{
        const condicion = { }
        const users: IsUser[] = await User.find(condicion)

        res.json({
            users
        })
    }catch(error){
        res.json(error)
    }
}

export const getUserEmail = async (req:Request, res:Response)=>{
    try{
        const {email} = req.params
        const userEmail: IsUser | null = await User.findOne({email:email})

        res.json({
            userEmail
        })
    }catch(error){
        res.json(error)
    }
}

export const getId = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const userId: IsUser | null = await User.findOne({_id:id})

        res.json({
            userId
        })
    }catch(error){
        res.json(error)
    }
}