import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Card from '../components/card/page'; // Ajusta la ruta según tu estructura

export const revalidate = 10; // ISR cada 10 segundos

async function fetchUsers() {
  // Simula fetch a API para obtener usuarios
  return [
    { id: 1, name: 'Rillaboom' },
    { id: 2, name: 'Toxtricity' },
    { id: 3, name: 'Obstagoon' },
    { id: 4, name: 'Grimmsnarl' },
  ];
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/Iibrz0V.jpg')",
      }}
    >
      <div className="p-6 max-w-3xl mx-auto bg-opacity-80 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-8 text-purple-700 border-b-4 border-purple-600 pb-2">
          Lista de Usuarios
        </h1>

        <ul className="space-y-6">
          {users.map(user => (
            <li key={user.id}>
              <Card>
                <div className="flex items-center space-x-4 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white">
                  <FaUser className="text-purple-600 w-8 h-8" />
                  <span className="text-lg font-medium text-gray-800">{user.name}</span>
                </div>
              </Card>
            </li>
          ))}
        </ul>

        <Link
          href="/index"
          className="inline-block mt-6 px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
        >
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
}
