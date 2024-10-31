"use client";
import { useRef } from "react";

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <header className="relative text-center bg-white">
      {/* Sección 1: Frase Inspiradora con Encabezado y Pie */}
      <section className="mb-8">
        <div
          className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-60 flex items-center justify-center"
          style={{ backgroundSize: "100% auto" }}
        >
          <div className="mt-20">
            <p className="text-4xl sm:text-5xl font-cursive text-titleGreen italic px-4 leading-relaxed">
              &ldquo;Existen momentos en la vida que imaginamos, soñamos y esperamos,
              uno de esos momentos ha llegado.&ldquo;
            </p>
          </div>
        </div>
        <div
          className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-60 flex items-center justify-center"
          style={{ backgroundSize: "100% auto" }}
        ></div>
      </section>

      {/* Sección 2: Imagen de la Princesa y Detalles con Encabezado y Pie */}
      <section ref={ref}>
        <div
          className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-60 flex items-center justify-center"
          style={{ backgroundSize: "100% auto" }}
        >
          <div className="mt-20">
            <div className="mb-6 mt-4">
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
          </div>
        </div>
        <div
          className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-60 flex items-center justify-center"
          style={{ backgroundSize: "100% auto" }}
        ></div>
      </section>
    </header>
  );
}
