import Image from 'next/image';

export default function EventDetails() {
  return (
    <section>
      {/* Sección 1: Mensaje de Joselyn */}
      <div
        className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      ></div>
      <div className="bg-transparent text-center">
        <Image
          src="/corona.png"
          alt="Corona"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <div className="bg-transparent py-8 px-4 sm:px-8 md:px-16 lg:px-24 mx-4 text-center">
        <p className="text-3xl sm:text-4xl font-cursive text-titleGreen italic px-4 mt-4">
          &quot;Con la bendición de Dios y mis padres, me siento feliz de llegar a este momento de mi vida, el día que dejaré atrás mi infancia y comenzaré un nuevo viaje.&quot;
        </p>
      </div>
      <div
        className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      ></div>

      {/* Sección 2: Detalles del Evento */}
      <div
        className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center mt-8"
        style={{ backgroundSize: "100% auto" }}
      ></div>
      <div className="bg-transparent py-8 px-4 sm:px-8 md:px-16 lg:px-24 mx-4 text-center">
        <p className="mt-4">
          Sus papás Efraín Daniel Valencia y Melisa Solange Cabana te invitan a compartir este importante acontecimiento...
        </p>
        <h3 className="text-2xl font-semibold">SÁBADO 30 NOV.</h3>
        <p className="text-lg">HOTEL CASINO Gral. San Martín, Palpalá</p>
        <p className="text-lg">21:30 Hrs.</p>
        <p className="text-lg">_________________</p>
        <p className="text-lg">Si deseas Colaborar podes hacerlo al siguiente ALIAS: MCABANA8900.NX.ARS</p>
        <p className="text-lg">O el día de la fiesta podrás depositar en un sobre la colaboración que será bien recibida.</p>
      </div>
      <div
        className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      ></div>
    </section>
  );
}
