"use client"

import { Contexto } from "@/components/context"
import { useRouter } from "next/navigation"
import { useContext } from "react"




export default function Create(){
    const router = useRouter()
    const {userId} = useContext(Contexto)
    console.log(userId)
    
    if(userId==-1){
        router.push("/login")
      }
       

    const  handleClick = async (e)=>{
      
        

        e.preventDefault()
        const nombre =e.target.name.value
        const descripcion = e.target.des.value
        const res =await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tareas/create`,{
           
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({nombre,descripcion,userId})})
       
        router.push("/") 
       
    }


   
    return(
       
        <form onSubmit={handleClick} action="#" className="bg-opacity-60 md:w-1/2 w-2/3 bg-gray-900 w-full flex flex-col gap-3 justify-center items-center h-max p-5 rounded-lg md:m-5">
      <input
       
        id="name"
        className="w-2/3 md:w-1/2 shadow-sky bg-transparent border-y-2 text-zinc-300  rounded-xl p-2 border-sky-300"
        type="text"
        placeholder="Nombre de la tarea"
      />
      <textarea
        
        className="w-2/3 shadow-sky md:w-1/2 bg-transparent border-y-2 rounded-xl p-2 border-sky-300"
        id="des"
        cols="15"
        rows="5"
        placeholder="Descripcion"
        style={{resize:"none"}}
      ></textarea>
      <input className=" rounded-lg p-2 text-sky-300 border-y shadow-sky hover:scale-110 transition-all border-sky-300   text-white  cursor-pointer" type="submit" />
    </form>
       
    )
}