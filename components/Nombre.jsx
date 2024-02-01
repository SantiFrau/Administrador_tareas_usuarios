"use client"
import { useContext, useEffect, useState } from 'react';
import { Contexto } from './context';
export default function Nombre() {
  
  const {name} = useContext(Contexto)

 
  return (
    <h3 className='p-2 font-bold text-xl'>
      {name}
    </h3>
  );
}