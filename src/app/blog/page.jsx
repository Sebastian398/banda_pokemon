import Card from '../components/card/page'; // Ajusta la ruta según tu estructura
import Link from 'next/link';

const posts = [
  {
    id: 'rillaboom',
    title: 'Rillaboom',
    excerpt:
      'Especialista en el ritmo y percusión, Rillaboom marca el tempo de la banda con sus tambores naturales.',
  },
  {
    id: 'toxtricity',
    title: 'Toxtricity',
    excerpt:
      'Encargado de la energía eléctrica y la distorsión, Toxtricity aporta el sonido punk y la electricidad con su guitarra.',
  },
  {
    id: 'obstagoon',
    title: 'Obstagoon',
    excerpt:
      'Con su actitud desafiante, Obstagoon lidera la banda con fuerza y presencia, aportando el toque rebelde y rockero.',
  },
  {
    id: 'grimmsnarl',
    title: 'Grimmsnarl',
    excerpt:
      'Maestro de la atmósfera y efectos oscuros, Grimmsnarl crea la ambientación única con sus habilidades sombrías.',
  },
];

export default function BlogPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/Iibrz0V.jpg')",
      }}
    >
      <main className="max-w-3xl mx-auto p-3.5 bg-opacity-80 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-8 text-purple-700 border-b-4 border-purple-600 pb-3">
          Blog Rock Pokémon
        </h1>

        <ul className="space-y-6 mb-8">
          {posts.map((post) => (
            <li key={post.id}>
              <Card>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-2xl font-semibold text-purple-700 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-black-900 text-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </Card>
            </li>
          ))}
        </ul>

        <Link
          href="/index"
          className="inline-block px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
        >
          Volver a Inicio
        </Link>
      </main>
    </div>
  );
}
