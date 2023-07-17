import { Request,Response } from "express";
import Gastos,{IGastos} from "../models/gastos";
import User, {IsUser} from "../models/user";

export const addGastos = async (req:Request, res:Response)=>{

    const {email} = req.params
    try{
        const gastosData :IGastos = req.body
        const userEmail: IsUser | null = await User.findOne({email:email})

        if (!userEmail){
            res.json({ msj:"No se encontro el Usuario"})
            return
        }

        await User.updateOne({email:email} , {$push : {gastos:gastosData}})
        res.json( { msj:"El gasto fue agregado correctamente"} )
    }catch(error){
        res.json(error)
    }
    
}