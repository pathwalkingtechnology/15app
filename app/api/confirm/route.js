import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    try {
      const { error } = await supabase
        .from('invitados')
        .insert([{ nombre, confirmacion: true }]);

      if (error) {
        throw error;
      }

      res.status(200).json({ mensaje: 'Confirmación de asistencia registrada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar la confirmación' });
    }
  } else {
    res.status(405).json({ mensaje: 'Método no permitido' });
  }
}
