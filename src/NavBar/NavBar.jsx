import React, { useState } from 'react'
import { Logito } from "../data/Logo";
import { ColorCambiante } from "../data/DarkLight";


export const Navbar = () => {
    let Links = [
        {name: "About me", link:"/about"},
        {name: "Projects", link:"/projects"},
        {name: "Skills", link:"/skills"},
        {name: "Contact", link:"/contact"},
    ];

    let [open, setOpen] = useState(false);

  //En la navbar aplicamos los siguientes estilos para la navegacion
  return (
    <>
      <div className="relative z-40 md:flex md:items-center md:justify-between max-w-7xl mx-auto py-10 px-24 p-5 top-3 ">
        <div className="flex justify-between items-center">
          <span className="mx-24 my-6 md:my-0 inline">
            <Logito />
          </span>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        <ul className={`rounded-xl gap-20 font-mono font-black md:flex md:items-center md:mt-0 mt-14 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 hover:-translate-y-1.5 duration-500'>
              <a href={link.link} className=' hover:text-gray-400'>{link.name}</a>
            </li>
          ))
        }
          
          <ColorCambiante />
        </ul>
        
      </div>
    </>
  );
};
