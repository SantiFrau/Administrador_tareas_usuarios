"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register(){
   
    const router = useRouter()
    const [error,setError] = useState(false)

    const submit = async (e)=>{

        e.preventDefault()
        const res = await fetch (`${process.env.NEXT_PUBLIC_URL}/api/users`)
        const users = await res.json()

       const usuario =e.target.user.value
       const password= e.target.password.value

       const validacion = users.findIndex((user)=>{return user.usuario === usuario})

       if(validacion==-1){

       setError(false)

       const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/create`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({usuario,password})
       })
        
       router.push("/login")

       } else{


        setError(true)
        return
       }


    }

    return (<>
        <h3 className="font-bold text-2xl p-2">Registrarse</h3>
        <form className=" bg-opacity-60 md:w-1/2 w-2/3 bg-gray-900 h-full md:gap-7 md:py-10 flex flex-col gap-3 justify-center items-center p-5 rounded-lg" onSubmit={submit}>
            <input autoComplete="off" placeholder="Nombre de ususario" className=" hover:scale-110 transition-all rounded-lg md:w-1/2 w-2/3 p-2 bg-transparent border-b border-sky-900" type="text" name="" id="user" />
            <input placeholder="Contraseña" className="hover:scale-110 transition-all rounded-lg md:w-1/2 w-2/3 p-2 bg-transparent border-b border-sky-900" type="password" id="password" />
            <div className="flex flex-row justify-between items-center  md:w-1/2 w-2/3">
            <input className=" rounded-lg p-2 text-sky-300 border-y shadow-sky hover:scale-110 transition-all border-sky-300   text-white  cursor-pointer" type="submit" />
            <p onClick={()=>{router.push("/login")}} className="text-zinc-300 text-sm hover:text-zinc-500 hover:underline cursor-pointer">Iniciar sesion</p>
            </div>
            
            <p className="text-red-600 text-sm">{
                 error ? "El Usuario ya existe" : ""
                 }</p>
        </form>
        </>
    )
}