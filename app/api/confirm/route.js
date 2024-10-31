import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/invitados.json');

export async function POST(req) {
  const { nombre } = await req.json();

  // Leer el archivo JSON
  let invitados = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    invitados = JSON.parse(data);
  }

  // Agregar nuevo invitado
  invitados.push({ nombre });

  // Guardar el archivo JSON actualizado
  fs.writeFileSync(filePath, JSON.stringify(invitados, null, 2));

  return new Response(JSON.stringify({ message: 'Confirmación guardada' }), {
    status: 200,
  });
}
