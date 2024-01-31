import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST (request){
    const {nombre,descripcion,userId} = await request.json()
    
   const nueva_tarea =await prisma.tareas.create({
        data:{
            nombre,
            descripcion,
            userId
        }
    })
    
    return NextResponse.json(nueva_tarea)
}