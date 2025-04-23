import { useState } from "react";
import { X, ImagePlus, SendHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (image) {
      console.log("Imagen publicada:", image);
      alert("¡Post publicado!");
      setImage(null);
    } else {
      alert("Primero debes subir una imagen");
    }
  };

  const handleClose = () => {
    navigate("/postfeed");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-md relative">
        {/* Botón de cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Crear nuevo post</h2>

        {/* Vista previa de imagen */}
        {image ? (
          <img src={image} alt="preview" className="rounded-lg w-full mb-4" />
        ) : (
          <div className="w-full h-48 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 rounded-lg mb-4">
            <ImagePlus className="w-10 h-10" />
            <p className="text-sm">Sube una imagen</p>
          </div>
        )}

        {/* Input oculto y botón de subir */}
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          className="hidden"
          onChange={handleImageChange}
        />
        <label
          htmlFor="image-upload"
          className="block w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white py-2 text-center rounded-lg cursor-pointer transition"
        >
          Seleccionar imagen
        </label>

        {/* Botón de publicar */}
        <button
          onClick={handlePost}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2"
        >
          <SendHorizontal className="w-4 h-4" />
          Publicar
        </button>
      </div>
    </div>
  );
}

export default CreatePost;