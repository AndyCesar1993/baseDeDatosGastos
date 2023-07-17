import express,{ Express } from "express";
import userRoutes from "../routes/userRoutes";
import { conectBD } from "../database/config";

export class Server{
    app:Express

    constructor(){
        this.app = express();
        this.conexiosaDB();
        this.middlewares();
        this.routes();
    }

    async conexiosaDB():Promise<void>{
        await conectBD()
    }

    middlewares():void{
        this.app.use(express.json())
    }

    routes():void{
        this.app.use('/users', userRoutes)
    }

    listen():void{
        this.app.listen(8080, ()=>{
            console.log('corriendo en el puerto 8080')
        })
    }
}