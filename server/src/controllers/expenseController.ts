import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma = new PrismaClient();

export const getExpenseByCategory = async(req:Request,res:Response):Promise<void>=>{
    try{

        const expenseByCategory = await prisma.expenseByCategory.findMany({
            orderBy:{
                date:'desc',
            },
        })
        const expenseCategorySummary = expenseByCategory.map((item)=>({
            ...item,
            amount:item.amount.toString()
        }))
        res.status(200).json(expenseCategorySummary);

    }catch(error){
         res.status(500).json({'message':'Error Fetching Expense Data.'})
    }
}