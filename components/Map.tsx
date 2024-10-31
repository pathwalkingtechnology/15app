export default function Map() {
  return (
    <div className="mt-8 p-4">
      <h3 className="text-center text-2xl">Ubicación</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.796668399!2d-65.2141851!3d-24.2488894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0742e3be1523%3A0x42841b1bc02e6114!2sHotel!5e0!3m2!1ses-419!2sar!4v1730394948236!5m2!1ses-419!2sar"
        className="w-full h-64 mt-4 border"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
