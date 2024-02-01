"use client"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { Contexto } from "@/components/context"
import { useRouter } from "next/navigation"



export default  function Home() {
   
  const router = useRouter()
  const [tareas , setTareas] = useState([])
  const {userId} = useContext(Contexto)
  

  if(userId==-1){
    router.push("/login")
  }
   

   const Actualizar_tareas = async () =>{
    const res = await fetch (`${process.env.NEXT_PUBLIC_URL}/api/tareas`,{
      method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({userId})})
        
        console.log(userId)
    if(res.ok){
     const res_tareas = await res.json()
     setTareas(res_tareas)
     
    }
  }

  useEffect(()=>{
    Actualizar_tareas()
  },[])

  const remove = async (id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tareas/${id}` ,{
      method:"DELETE",
    })
    Actualizar_tareas()
  }

  return (
   <div className="flex flex-col w-full items-center justify-center gap-5">
    <h1 className="text-3xl font-bold p-5">Lista de Tareas</h1>
    <section className="bg-opacity-70 p-5 w-full md:w-4/6 flex flex-col bg-gray-900 gap-3 rounded-lg">
      {
        tareas.map((tarea)=>{
          return(
            <div className="bg-opacity-20 rounded-lg w-full bg-blue-600 flex justify-between items-center flex-row " key={tarea.id}>
              <Link className="w-full" href={`${tarea.id}`}>
               <p className="font-bold text-xl p-3 w-full">{tarea.nombre}</p>
               <p className="p-3 text-zinc-400 text-lg">{tarea.descripcion}</p>
               </Link>
                <button onClick={()=>{remove(tarea.id)}} className="m-3 hover:text-zinc-400">Eliminar</button>
            </div>
          )
        })
      }


    </section>

    
   </div>
  );
}
