"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient'; // Ajusta la ruta si es necesario
import { jsPDF } from 'jspdf';

interface Invitado {
  id: number;
  nombre: string;
  confirmacion: boolean;
  fecha: string;
}

export default function Listado() {
  const [invitados, setInvitados] = useState<Invitado[]>([]);

  useEffect(() => {
    const fetchInvitados = async () => {
      const { data, error } = await supabase
        .from('invitados')
        .select('id, nombre, confirmacion, fecha')
        .eq('confirmacion', true)
        .order('fecha', { ascending: true });

      if (error) {
        console.error('Error al obtener los invitados:', error.message);
      } else {
        setInvitados(data || []);
      }
    };

    fetchInvitados();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Lista de Invitados Confirmados', 10, 10);
    
    invitados.forEach((invitado, index) => {
      doc.text(
        `${index + 1}. ${invitado.nombre} - Confirmado el: ${new Date(invitado.fecha).toLocaleDateString()}`,
        10,
        20 + index * 10
      );
    });

    doc.save('lista_de_invitados.pdf');
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center">Lista de Invitados Confirmados</h2>
      <button
        onClick={generatePDF}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Descargar PDF
      </button>
      
      <ul className="mt-4">
        {invitados.map((invitado) => (
          <li key={invitado.id} className="p-2 border-b">
            <span className="font-semibold">{invitado.nombre}</span>
            <span className="ml-4">
              Confirmado el: {new Date(invitado.fecha).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
