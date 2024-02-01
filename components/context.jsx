"use client"
import { createContext, useState } from 'react';

export const Contexto = createContext();
 

export default function ContextoProvider ({ children }) {
   
    const [userId , setUserId] = useState(-1)
    const setU = (id)=>{
      setUserId(id)
    }
    const [name , setName] = useState("")

    const setN = (n)=>{
      setName(n)
    }
  
    return (
      <Contexto.Provider value={
        {
            setU,
            userId,
            name,
            setN

        }
      }>
        {children}
      </Contexto.Provider>
    );
  };