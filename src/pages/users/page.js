import { FaUser } from 'react-icons/fa';

export async function getStaticProps() {
  // Simula fetch a API para obtener usuarios
  const users = [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'María Gómez' },
  ];

  return {
    props: { users },
    revalidate: 10, // ISR: revalida cada 10 segundos (opcional)
  };
}

export default function Users({ users }) {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex items-center mb-2">
            <FaUser className="mr-2 text-blue-600" /> {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
