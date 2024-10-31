// app/api/confirm/route.js
import { supabase } from '../../../supabaseClient';

export const POST = async (req) => {
  const { nombre } = await req.json();

  if (!nombre) {
    return new Response(JSON.stringify({ error: 'El nombre es obligatorio' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await supabase
      .from('invitados')
      .insert([{ nombre, confirmacion: true }]);

    return new Response(JSON.stringify({ mensaje: 'Confirmación de asistencia registrada' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Error al registrar la confirmación' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
