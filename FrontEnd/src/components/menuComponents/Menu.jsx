import { useState } from "react";
import { Heart,User, PlusCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = ({titulo,fotoPerfil}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="flex justify-between items-center p-4 shadow-md bg-white">
            {/* Título */}
            <h1 className="text-2xl font-semibold">{titulo}</h1>

            {/* Avatar y Menú */}
            <div className="relative">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src={fotoPerfil} // Reemplaza con la imagen del usuario
                        alt="Perfil"
                        className="w-10 h-10 rounded-full cursor-pointer"
                    />
                </button>

                {/* Menú desplegable */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                        <ul className="text-sm text-gray-700">
                            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <User className="w-4 h-4 mr-2" />
                                <Link to="/userprofile">Mi perfil</Link>
                            </li>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <PlusCircle className="w-4 h-4 mr-2" /> Crear Post
                            </li>
                            <li className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                                <LogOut className="w-4 h-4 mr-2" /> Cerrar Sesión
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Menu;