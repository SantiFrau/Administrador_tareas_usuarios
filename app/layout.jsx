
import Nombre from "@/components/Nombre";
import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

   


  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="w-full flex flex-row items-center justify-center gap-5 bg-gray-800 p-2">
          <Nombre>

          </Nombre>
          <div className="h-max p-1 flex flex-row gap-3">
          <Link className="bg-zinc-900 p-3 rounded-xl " href="/create" >Crear Tarea</Link>
          <Link className="bg-zinc-900 p-3 rounded-xl " href="/">Lista de tareas</Link>
          <Link className="bg-zinc-900 p-3 rounded-xl " href="/login">Cambiar cuenta</Link>
          </div>
        </nav>
        <div className="w-full flex flex-col gap-3 items-center justify-center mt-10">
        {children}
        </div>
      
      </body>

    </html>
  );
}
