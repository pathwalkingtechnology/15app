export default function Map() {
  return (
    <section>
      {/* Sección del Mapa */}
      <div
        className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      ></div>
      <div className="bg-transparent py-8 px-4 sm:px-8 md:px-16 lg:px-24 mx-4 text-center">
        <h3 className="text-2xl font-semibold">Ubicación</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.796668399!2d-65.2141851!3d-24.2488894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0742e3be1523%3A0x42841b1bc02e6114!2sHotel!5e0!3m2!1ses-419!2sar!4v1730394948236!5m2!1ses-419!2sar"
          className="w-full h-64 mt-4 border border-gray-300 rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div
        className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      ></div>

      {/* Sección Final */}
      <div
        className="bg-[url('/encabezado.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center mt-8"
        style={{ backgroundSize: "100% auto" }}
      ></div>
      <div className="bg-transparent py-8 px-4 sm:px-8 md:px-16 lg:px-24 mx-4 text-center">
        <p className="text-5xl font-cursive text-titleGreen italic px-4 mt-4">
          Te esperamos!!
        </p>
      </div>
      <div
        className="bg-[url('/cuerpo_pie.png')] bg-cover bg-center bg-no-repeat h-40 flex items-center justify-center"
        style={{ backgroundSize: "100% auto" }}
      ></div>
    </section>
  );
}
