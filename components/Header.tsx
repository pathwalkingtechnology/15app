"use client";
import Image from "next/image";
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
    <header className="text-center p-6 bg-white relative">
      {/* Sección 1: Cita inspiradora */}
      <section className="flex flex-col items-center mb-12">
        <Image
          src="/encabezado.png"
          alt="Encabezado decorativo"
          width={800}
          height={150}
          className="w-full max-w-md mx-auto mb-4"
        />
        <p className="text-3xl sm:text-4xl font-cursive text-titleGreen italic px-4">
          &ldquo;Existen momentos en la vida que imaginamos, soñamos y esperamos,
          uno de esos momentos ha llegado.&ldquo;
        </p>
        <Image
          src="/cuerpo_pie.png"
          alt="Pie decorativo"
          width={800}
          height={150}
          className="w-full max-w-md mx-auto mt-4"
        />
      </section>

      {/* Sección 2: Detalle de los 15 años */}
      <section
        ref={ref}
        className={`flex flex-col items-center transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/encabezado.png"
          alt="Encabezado decorativo"
          width={800}
          height={150}
          className="w-full max-w-md mx-auto mb-4"
        />
        <div className="mb-6">
          <Image
            src="/princesa.png"
            alt="Imagen de la princesa"
            width={400}
            height={300}
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl font-cursive text-titleGreen mb-4">
          Mis 15 Años
        </h1>
        <h2 className="text-xl sm:text-2xl text-primaryGreen mt-2">
          Joselyn Natali Valencia
        </h2>
        <Image
          src="/cuerpo_pie.png"
          alt="Pie decorativo"
          width={800}
          height={150}
          className="w-full max-w-md mx-auto mt-4"
        />
      </section>
    </header>
  );
}
