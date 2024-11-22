import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";


const prisma = new PrismaClient();

export const getUsers = async(req:Request,res:Response)=>{
    try{
        const data =await prisma.users.findMany();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({'Message':"Error Retrieving data."})
    }
}
