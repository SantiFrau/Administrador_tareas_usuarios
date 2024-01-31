import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET(){
    
    const users = await prisma.users.findMany()
    return NextResponse.json(users)
}