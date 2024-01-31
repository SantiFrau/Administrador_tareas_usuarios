"use client"
import { useEffect, useState } from 'react';

export default function Nombre() {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const nombreGuardado = localStorage.getItem('name');
    setUsuario(nombreGuardado || ''); 
  }, []);

  return (
    <h3 className='font-bold text-xl'>
      {usuario}
    </h3>
  );
}