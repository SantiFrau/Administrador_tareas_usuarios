import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function DELETE (request,{params}){
    
  

   const user = await prisma.users.delete({
       where:{
           id:Number(params.id)
       }
   })
 if(user){
   return NextResponse.json(user)}
   else{
       return NextResponse("Not found")
   }
}