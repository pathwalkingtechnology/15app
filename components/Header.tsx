"use client";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.offsetTop;
        const height = ref.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const offset = 0.5;

        setVisible(window.scrollY + windowHeight * offset > top + height / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <header className="relative text-center bg-white">
      {/* Sección 1: Encabezado como fondo */}
      <section
        className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      >
        <p className="text-3xl sm:text-4xl font-cursive text-titleGreen italic px-4">
          &ldquo;Existen momentos en la vida que imaginamos, soñamos y esperamos,
          uno de esos momentos ha llegado.&ldquo;
        </p>
      </section>

      {/* Contenido Central */}
      <section
        ref={ref}
        className={`flex flex-col items-center bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-24 shadow-lg mx-4 rounded-lg transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-6">
          <img
            src="/princesa.png"
            alt="Imagen de la princesa"
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl font-cursive text-titleGreen mb-4">
          Mis 15 Años
        </h1>
        <h2 className="text-xl sm:text-2xl text-primaryGreen mt-2">
          Joselyn Natali Valencia
        </h2>
      </section>

      {/* Sección 2: Pie como fondo */}
      <section
        className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      >
        <p className="text-xl text-primaryGreen font-light px-4">
          &ldquo;Te esperamos en esta ocasión tan especial.&ldquo;
        </p>
      </section>
    </header>
  );
}

