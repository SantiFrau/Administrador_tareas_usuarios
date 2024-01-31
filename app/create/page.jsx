"use client"

import { useRouter } from "next/navigation"




export default function Create(){
    const router = useRouter()


    const  handleClick = async (e)=>{
     


        e.preventDefault()
        const nombre =e.target.name.value
        const descripcion = e.target.des.value
        const userId = parseInt(localStorage.getItem("userId"))
        const res =await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tareas/create`,{
           
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({nombre,descripcion,userId})})
       
        router.push("/") 
       
    }


   
    return(
       
        <form onSubmit={handleClick} action="#" className="w-1/2 flex flex-col gap-3 justify-center items-center h-max p-5 bg-gray-900">
            <input id="name" className="w-1/2 bg-gray-900 border border-white rounded-xl p-2" type="text" placeholder="Nombre de la tarea" />
            <textarea  className="w-1/2 bg-gray-900 border border-white rounded-xl p-2" name="" id="des" cols="25" rows="10" placeholder="Descripcion" ></textarea>
            <input  type="submit" className="bg-gray-800 rounded-2xl p-3 hover:bg-zinc-600" />
        </form>
       
    )
}