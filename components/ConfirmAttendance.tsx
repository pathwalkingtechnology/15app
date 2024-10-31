"use client"
import { useState } from "react";

export default function ConfirmAttendance() {
  const [isOpen, setIsOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleConfirmacion = async (e: React.FormEvent) => {
    e.preventDefault();
    const confirmacion = window.confirm(`¿Confirmar asistencia para ${nombre}?`);

    if (confirmacion) {
      const response = await fetch("/api/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }),
      });

      if (response.ok) {
        setMensaje("Gracias por tu confirmación. ¡Te espero, Joselyn!");
        setNombre("");
      } else {
        setMensaje("Hubo un error al guardar la confirmación. Inténtalo nuevamente.");
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-titleGreen text-white py-2 px-4 rounded transition duration-300 hover:bg-primaryGreen"
      >
        Confirmar Asistencia
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl mb-4 font-cursive text-titleGreen">Confirmación de Asistencia</h2>
            <form onSubmit={handleConfirmacion}>
              <input
                type="text"
                placeholder="Nombre o Familia"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="border p-2 w-full mb-4 rounded"
              />
              <button
                type="submit"
                className="bg-titleGreen text-white py-2 px-4 rounded transition duration-300 hover:bg-primaryGreen"
              >
                Confirmar
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-white py-2 px-4 ml-2 rounded"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      {mensaje && <p className="mt-4 text-primaryGreen font-cursive">{mensaje}</p>}
    </div>
  );
}
