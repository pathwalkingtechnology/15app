"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

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

        if (window.scrollY + windowHeight * offset > top + height / 2) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);
  
  return (
    <header className="text-center p-6 relative">
      
      {/* Sección 1: Citas */}
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/encabezado.png"
          alt="Imagen de encabezado"
          width={200}
          height={100}
          className="mx-auto mb-4"
        />
        <p className="text-4xl mb-4 font-cursive text-titleGreen">&quot;Existen momentos en la vida que imaginamos, soñamos y esperamos, uno de esos momentos ha llegado.&quot;</p>
        <Image
          src="/cuerpo_pie.png"
          alt="Imagen de pie"
          width={200}
          height={100}
          className="mx-auto mt-4"
        />
      </div>
      
      {/* Sección 2: Contenido principal */}
      <div
        ref={ref}
        className={`flex flex-col items-center ${visible ? 'animate-fadeIn' : 'animate-fadeOut'}`}
      >
        <Image
          src="/encabezado.png"
          alt="Imagen de encabezado"
          width={200}
          height={100}
          className="mx-auto mb-4"
        />
        <div className="mb-6">
          <Image
            src="/princesa.png"
            alt="Imagen de la princesa"
            width={200}
            height={150}
            className="mx-auto"
          />
        </div>
        <h1 className="text-6xl mb-4 font-cursive text-titleGreen">Mis 15 Años</h1>
        <h2 className="text-2xl mt-2">Joselyn Natali Valencia</h2>
        <Image
          src="/cuerpo_pie.png"
          alt="Imagen de pie"
          width={200}
          height={100}
          className="mx-auto mt-4"
        />
      </div>
    </header>
  );
}
