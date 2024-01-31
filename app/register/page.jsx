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
        <h3 className="font-bold text-2xl p-5">Register</h3>
        <form onSubmit={submit} className="w-1/2 bg-gray-900 h-max flex flex-col gap-3 justify-center items-center p-5 rounded-lg">
            <input className="w-1/2 p-2 bg-gray-700" type="text" name="" id="user" />
            <input className="w-1/2 p-2 bg-gray-700" type="password" id="password" />
            <input className="p-2 bg-gray-700 text-white hover:bg-gray-600 cursor-pointer" type="submit" />
            <p onClick={()=>{router.push("/login")}} className="text-sm hover:text-zinc-500 hover:underline cursor-pointer">Iniciar sesion</p>
            
            <p className="text-red">{
                 error ? "Usuario ya existe" : ""
                 }</p>
        </form>
        </>
    )
}