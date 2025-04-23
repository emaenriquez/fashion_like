import { Heart, Trash2, Edit, BarChart2 } from "lucide-react";

const feedComponents = ({ usuario, fotoPerfil, fechaPublicacion, likes, fotoFeed, rol }) => {
    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border m-5">
            {/* Usuario y fecha */}
            <div className="flex items-center space-x-2">
                <img
                    src={fotoPerfil}
                    alt="Perfil"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h2 className="font-semibold text-gray-900">{usuario}</h2>
                    <p className="text-sm text-gray-500">{fechaPublicacion}</p>
                </div>
            </div>

            {/* Imagen adjunta */}
            <div className="mt-3">
                <img
                    src={fotoFeed} // Reemplaza con la imagen real
                    alt="Post"
                    className="w-full rounded-lg border"
                />
            </div>

            {/* Sección de interacciones */}
            <div className="flex justify-between items-center mt-3 text-gray-600">
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-1 hover:text-red-500 cursor-pointer">
                        <Heart className="w-5 h-5" />
                        <span>{likes}</span>
                    </button>
                </div>
                {
                    rol === "admin" && (
                        <div className="flex space-x-3">
                            <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                <Edit className="w-5 h-5" />
                            </button>
                            <button className="text-green-500 hover:text-green-700 cursor-pointer">
                                <BarChart2 className="w-5 h-5" />
                            </button>
                            <button className="text-red-500 hover:text-red-700 cursor-pointer">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default feedComponents;