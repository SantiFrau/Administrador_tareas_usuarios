import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET (request,{params}){
    
    const tarea = await prisma.tareas.findUnique({
        where:{
            id:Number(params.id)
        }
    })
  if(tarea){
    return NextResponse.json(tarea)}
    else{
        return NextResponse("Not found")
    }
}

export async function DELETE (request,{params}){
    
    const tarea = await prisma.tareas.delete({
        where:{
            id:Number(params.id)
        }
    })
  if(tarea){
    return NextResponse.json(tarea)}
    else{
        return NextResponse("Not found")
    }
}

export async function PUT (request,{params}){
    const data  = await request.json()
    
    const tarea = await prisma.tareas.update({
        where:{
            id:Number(params.id)
        },
        data:data
    
    })
  if(tarea){
    return NextResponse.json(tarea)}
    else{
        return NextResponse("Not found")
    }
}
