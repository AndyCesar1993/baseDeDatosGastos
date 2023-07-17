import mongoose from "mongoose";

export const conectBD = async():Promise<void>=>{
    try{
        await mongoose.connect('mongodb+srv://baseDeDatos:Cuh3QWYxxqaZx9X6@cluster0.kdenobu.mongodb.net/')
        console.log('Base de datos Online!!')
    }catch(error){
        console.error(error)
        throw new Error('Error al conectarse con la base de datos')
    }
}