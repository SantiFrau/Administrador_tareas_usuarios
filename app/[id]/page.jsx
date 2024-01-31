"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Tarea({ params }) {
  const [tarea, setTarea] = useState({})
  const router = useRouter()
  
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
    <form onSubmit={Actualizar} action="#" className="w-1/2 flex flex-col gap-3 justify-center items-center h-max p-5 bg-gray-900">
      <input
        value={tarea.nombre}
        onChange={handleInputChange}
        id="name"
        name="nombre"
        className="w-1/2 bg-gray-900 border border-white rounded-xl p-2"
        type="text"
        placeholder="Nombre de la tarea"
      />
      <textarea
        value={tarea.descripcion}
        onChange={handleInputChange}
        className="w-1/2 bg-gray-900 border border-white rounded-xl p-2"
        name="descripcion"
        id="des"
        cols="25"
        rows="10"
        placeholder="Descripcion"
      ></textarea>
      <input type="submit" className="bg-gray-800 rounded-2xl p-3 hover:bg-zinc-600" />
    </form>
  )
}