"use client"
import { Contexto } from "@/components/context"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function Tarea({ params }) {
  const [tarea, setTarea] = useState({})
  const router = useRouter()
  const {userId} = useContext(Contexto)

  if(userId==-1){
   router.push("/login")
  }

  
  const Obtener_tarea = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tareas/${params.id}`)
    const res_tarea = await res.json()
    setTarea(res_tarea)
  }

  useEffect(() => {
    Obtener_tarea()
  }, [])

  const Actualizar = async (e) => {
    e.preventDefault()
    const nombre = e.target.name.value
    const descripcion = e.target.des.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tareas/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, descripcion }),
    })

    router.push("/")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTarea((prevTarea) => ({ ...prevTarea, [name]: value }))//[] para que sea dinbamico el valor si colocamos
    //name: la propiedad a la que estamos accediendo para modificar es name y no nombre o descrpicion segun corresponda
    //name: es un propiedad fija en cmabio si name es nombre por ej sera nombre:value
  }

  return (
    <form onSubmit={Actualizar} action="#" className="bg-opacity-60 md:w-1/2 w-2/3 bg-gray-900 w-full flex flex-col gap-3 justify-center items-center h-max p-5 rounded-lg md:m-5">
      <input
        value={tarea.nombre}
        onChange={handleInputChange}
        id="name"
        name="nombre"
        className="w-2/3 md:w-1/2 shadow-sky bg-transparent border-y-2 text-zinc-300  rounded-xl p-2 border-sky-300"
        type="text"
        placeholder="Nombre de la tarea"
      />
      <textarea
        value={tarea.descripcion}
        onChange={handleInputChange}
        className="w-2/3 shadow-sky md:w-1/2 bg-transparent border-y-2 rounded-xl p-2 border-sky-300"
        name="descripcion"
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