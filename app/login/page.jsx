"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Login (){
  
   const [error,setError] = useState(false)
   const [errorPassword , setErrorPassword] = useState(false)
   const router = useRouter()

    const submit = async (e)=>{
        e.preventDefault()
        const res = await fetch (`${process.env.NEXT_PUBLIC_URL}/api/users`)
        const users = await res.json()

       const usuario =e.target.user.value
       const password= e.target.password.value

       const validacion = users.findIndex((user)=>{return user.usuario === usuario})

       if(validacion!==-1){
       setError(false)

       if(password===users[validacion].password){

        setErrorPassword(false)
        localStorage.setItem('name',usuario);
        localStorage.setItem('userId',users[validacion].id);
         router.push("/")

       } else{
        setErrorPassword(true)
       }

       } else{
        setError(true)
        return
       }


    }



    return (<>
        <h3 className="font-bold text-2xl p-5">Login</h3>
        <form className="w-1/2 bg-gray-900 h-max flex flex-col gap-3 justify-center items-center p-5 rounded-lg" onSubmit={submit}>
            <input className="w-1/2 p-2 bg-gray-700" type="text" name="" id="user" />
            <input className="w-1/2 p-2 bg-gray-700" type="password" id="password" />
            <input className="p-2 bg-gray-700 text-white hover:bg-gray-600 cursor-pointer" type="submit" />
            <p onClick={()=>{router.push("/register")}} className="text-sm hover:text-zinc-500 hover:underline cursor-pointer">Registrarse</p>

            <p className="text-red">{
                 error ? "Usuario no existe" : ""
                 }</p>
                  <p className="text-red">{
                 errorPassword ? "Contraseña no valida" : ""
                 }</p>
        </form>
        </>
    )
}