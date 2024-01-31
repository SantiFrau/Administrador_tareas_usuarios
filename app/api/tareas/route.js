import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//obtener lista de tareas

export async function POST (request){
    const {userId} = await request.json()
    
    const Tareas = await prisma.tareas.findMany(
        {
            where:{
                userId:userId
            }
        }
    )
       
    return NextResponse.json(Tareas)
}





