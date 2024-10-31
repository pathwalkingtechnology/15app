import Image from 'next/image';

export default function Header() {
  return (
    <header className="text-center p-6">
      <p className="text-4xl mb-4 font-cursive text-titleGreen">&quot;Existen momentos en la vida que imaginamos, soñamos y esperamos, uno de esos momentos ha llegado.&quot;</p>
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
    </header>
  );
}
