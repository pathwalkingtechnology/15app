import { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';

interface Invitado {
  nombre: string;
  cantidad: number;
}

export default function GuestList() {
  const [invitados, setInvitados] = useState<Invitado[]>([]);

  useEffect(() => {
    const fetchInvitados = async () => {
      const res = await fetch('/public/invitados.json');
      const data: Invitado[] = await res.json();
      setInvitados(data);
    };
    fetchInvitados();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Lista de Invitados', 10, 10);
    invitados.forEach((invitado, index) => {
      doc.text(`${index + 1}. ${invitado.nombre} - ${invitado.cantidad} personas`, 10, 20 + index * 10);
    });
    doc.save('lista_de_invitados.pdf');
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center">Lista de Invitados</h2>
      <button onClick={generatePDF} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Descargar PDF
      </button>
      <ul className="mt-4">
        {invitados.map((invitado, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{invitado.nombre}</span>
            <span>{invitado.cantidad} personas</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
