import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export  async function POST (request){
   const {usuario,password} = await request.json()

   const res = await prisma.users.create(
    {
        data:{
            usuario,
            password
        }
    }
   )
   return NextResponse.json(res)
 
}