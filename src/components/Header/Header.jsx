import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Menu() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
};

    return (
        <div className="w-full h-[90px] bg-black">
        <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center h-full">
            <div>
            <h1 className="text-blue-500 font-bold text-2xl hover:scale-105 duration-400"> CLAX  <span className="text-blue-300 bg-blue-1000 rounded-full">INFORMATIC</span></h1>
            </div>
            <div className="hidden md:flex">
                <ul className="flex text-white items-center gap-10">
                    <li className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">computacion</li>
                    <li className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">tv&video</li>
                    <li className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">seguridad</li>
                    <li className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">telefonia</li>
                    <li className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">audio</li>
                    <button className="bg-yellow-600 p-2 rounded-xl hover:scale-105 duration-700">registrate</button>
                </ul>
            </div>
            {/*clax menu celular*/}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-white hover:scale-105 hover:text-blue-500 duration-500 cursor-pointer" /> 
                : <AiOutlineMenu size={30} className="text-white hover:scale-105 hover:texte-blue-500 duration-500 cursor-pointer" />}
            </div>
            {/*mobile menu*/}
            <div className={nav ? 'w-full h-full bg-black/80 text-white absolute top-[90px] pt-5 left-0 flex justify-center text-center duration-700' :
            'fixed w-full h-full left-[100%] duration-700'}>
                <ul>
                    <li className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">computacion</li>
                    <li className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">tv&video</li>
                    <li className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">seguridad</li>
                    <li className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">telefonia</li>
                    <li className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">audio</li>
                    <button className="m-2 bg-yellow-600 p-2 rounded-xl hover:scale-105 duration-700">inscribirse</button>
                </ul>
            </div>
        </div>
        </div>
        );
    }
    
