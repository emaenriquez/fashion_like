import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 p-6">
            {/* Contenido principal */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Navbar */}
                <nav className="w-full max-w-2xl flex justify-between items-center py-4">
                    <h1 className="text-3xl font-bold text-gray-900">FashionLike<span className="text-green-700">.</span></h1>
                </nav>
                
                {/* Hero Section */}
                <div className="w-full max-w-2xl mt-10">
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                        Encuentra tu <span className="text-green-700">estilo</span> ideal
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Descubre las últimas tendencias de moda que encajan con tu personalidad.
                    </p>
                    <div className="mt-6 flex gap-3 justify-center md:justify-start">
                        <Link to="/login" className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition">Iniciar sesión</Link>
                        <Link to="/register" className="bg-gray-900 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">Registrarme</Link>
                    </div>
                </div>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img src="/model.jpg" alt="Fashion Model" className="rounded-lg shadow-md w-3/4 md:w-full max-h-96 object-center" />
            </div>
        </div>
    );
};

export default Home;