import avatar from "../assets/img/Coding.jpeg"
import ts from '../assets/svg/ts.svg'
import react from '../assets/svg/react.svg'
import js from '../assets/svg/js.svg'
import figma from '../assets/svg/figma.svg'

//Componente del logo en donde aplicamos un poco de tailwind
export const Avatar = () => {
    return (
         
        <div className="flex flex-col absolute left-16 top-52 ">
        
            <img src={ts} className="w-16 h-16 border-2 absolute bottom-0.5 right-0.5 -mr-12 " />
            <img src={react} className="w-20 h-20 border-2 absolute bottom-0.5 right-0.5 mb-52 -mr-3"/>
            <img src={js} className="w-16 h-16 border-2 absolute bottom-0.5 right-0.5 mb-52 mr-48" />
            <img src={figma} className="w-20 h-20 border-2 absolute bottom-0.5 right-0.5 mr-52" />
            <div id="box" className={`relative w-60 h-60 bg-sky-100 rounded-full overflow-hidden
                before:content-[''] before:absolute before:bg-gradient-to-r before:from-transparent before:to-red-800 before:-inset-y-4 before:inset-x-20 before:transition-[0.5s]
                hover:before:-inset-y-5 hover:before:inset-x-0 before:animate-[spin_3s_linear_infinite]
                after:content-[] after:absolute after:inset-3 after:rounded-full after:z-10 
                `}>
                <div id="content" className="
                absolute inset-2 border-4 border-gray-50 z-30 rounded-full overflow-hidden flex justify-center items-center flex-col
                ">
                    <img src={avatar} alt="" className="
                object-cover absolute t-0 l-0 w-full h-full transition-[0.5s] z-30
                hover:opacity-40
                "/>
                    <h2 className="
                relative text-2xl text-center font-extrabold text-black uppercase
                ">MontoyitaDev<br /><span>Front-End Developer</span></h2>
                </div>
                
            </div>
            
        </div>

    )
}
