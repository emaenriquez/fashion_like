import { useState } from "react";

function UserProfile() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Datos guardados:", formData);
    alert("¡Datos guardados exitosamente!");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg">
      {/* Banner */}
      <div className="relative">
        <div className="h-32 bg-blue-500 rounded-t-2xl"></div>
        {/* Imagen de perfil */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src="/foto_perfil.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Espaciado debajo del avatar */}
      <div className="mt-16 space-y-4">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            className="w-full mt-1 p-2 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            className="w-full mt-1 p-2 border rounded-lg"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full mt-1 p-2 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Guardar datos
        </button>
      </div>
    </div>
  );
}

export default UserProfile;