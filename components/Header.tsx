"use client";
import { useRef } from "react";

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <header className="relative text-center bg-white">
      {/* Sección 1: Contenido Principal con Fondo y Superposición */}
      <section className="relative">
        <div
          className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-80 flex flex-col items-center justify-center"
          style={{ backgroundSize: "100% auto" }}
        >
          {/* Texto Inspirador */}
          <p className="text-3xl sm:text-4xl font-cursive text-titleGreen italic mt-4">
            &ldquo;Existen momentos en la vida que imaginamos, soñamos y esperamos,
            uno de esos momentos ha llegado.&rdquo;
          </p>

          {/* Texto "Mis 15" */}
          <h1 className="text-7xl font-cursive text-titleGreen my-4">
            Mis<br />15
          </h1>

          {/* Nombre */}
          <h2 className="text-2xl sm:text-3xl text-primaryGreen">
            Joselyn Natali Valencia
          </h2>

          {/* Imagen de la Princesa, con superposición */}
          <div className="relative mt-8">
            <img
              src="/princesa.png"
              alt="Imagen de la princesa"
              className="w-full max-w-xs mx-auto opacity-90"
              style={{
                position: "absolute",
                top: "-20%", // Ajusta el valor para controlar la superposición vertical
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Comentarios para ajustar padding y margen */}
      {/* 
        - Ajusta 'mt-4' en el texto inspirador para modificar el margen superior.
        - Cambia 'my-4' en "Mis 15" para ajustar márgenes verticales.
        - Modifica 'mt-8' en el contenedor de la imagen de la princesa para ajustar la separación.
        - Para controlar la superposición de la imagen, cambia el valor de 'top' en la propiedad de estilo en línea de la imagen de la princesa.
      */}
    </header>
  );
}
