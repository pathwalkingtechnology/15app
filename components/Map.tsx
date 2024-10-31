export default function Map() {
  return (
    <div className="mt-8 p-4">
      <h3 className="text-center text-2xl">Ubicación</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        className="w-full h-64 mt-4 border"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
