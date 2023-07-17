import { Model, Schema, model } from "mongoose";

export interface IsUser{
    dni:number;
    name: string;
    surname: string;
    email:string;
    password: string;
    gastos: [Object];
}

const UserSchema = new Schema<IsUser>({
    dni:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gastos:{
        type: [Object],
    }
})

const User: Model<IsUser>= model<IsUser>('User', UserSchema)

export default User