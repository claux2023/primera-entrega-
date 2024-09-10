export default function Footer() {
    return (
        <div className="w-full bg-black text-white py-5 flex justify-center text-center absolute">
            <ul className="flex flex-col items-center">
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">contactanos</li>
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">terminos y condiciones</li>
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">politicas de devolucion</li>
                <li className="text-lg mb-2 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">horario de atencion</li>
                <div className="mt-2 text-sm text-white-400">© 2024 todos los derechos reservados a claxinformatic</div>
            </ul>
        </div>
    )
}
