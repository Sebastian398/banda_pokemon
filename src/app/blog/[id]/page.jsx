import { FaRegClock } from 'react-icons/fa';
import PostContent from '../../components/PostContent/page';
import Card from '../../components/card/page';

// Cambia las fechas a formato ISO real
const postData = {
  rillaboom: {
    title: 'Rillaboom',
    content:
      'Rillaboom es un Pokémon de tipo Planta conocido por su poderoso ritmo y su habilidad para controlar la naturaleza con sus tambores.',
    publishedAt: '2025-06-14T10:00:00Z',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png',
  },
  toxtricity: {
    title: 'Toxtricity',
    content:
      'Toxtricity es un Pokémon de tipo Eléctrico/Veneno que destaca por su estilo punk y su capacidad para generar electricidad con su guitarra.',
    publishedAt: '2025-06-13T09:00:00Z',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
  },
  obstagoon: {
    title: 'Obstagoon',
    content:
      'Obstagoon es un Pokémon de tipo Siniestro/Normal que se caracteriza por su actitud desafiante y su apariencia de estrella de rock.',
    publishedAt: '2025-06-15T12:00:00Z',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png',
  },
  grimmsnarl: {
    title: 'Grimmsnarl',
    content:
      'Grimmsnarl es un Pokémon de tipo Siniestro/Hada, conocido por su aspecto intimidante y sus habilidades para manipular sombras.',
    publishedAt: '2025-06-12T08:00:00Z',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png',
  },
};

// Función para mostrar fecha relativa en español
function getRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  const rtf = new Intl.RelativeTimeFormat('es-ES', { numeric: 'auto' });

  if (diffDay > 0) {
    return `Publicado ${rtf.format(-diffDay, 'day')}`;
  } else if (diffHour > 0) {
    return `Publicado ${rtf.format(-diffHour, 'hour')}`;
  } else if (diffMin > 0) {
    return `Publicado ${rtf.format(-diffMin, 'minute')}`;
  } else {
    return 'Publicado hace unos segundos';
  }
}

export async function generateStaticParams() {
  const posts = [
    { id: 'rillaboom' },
    { id: 'toxtricity' },
    { id: 'obstagoon' },
    { id: 'grimmsnarl' },
  ];
  return posts.map(post => ({ id: post.id }));
}

export default function BlogPost({ params }) {
  const { id } = params;
  const post = postData[id] || {
    title: 'Post no encontrado',
    content: 'Lo sentimos, este post no existe.',
    publishedAt: '',
    image: null,
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/Iibrz0V.jpg')",
      }}
    >
      <main className="max-w-3xl mx-auto">
        <Card className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <FaRegClock className="mr-2" />
            <span>
              {post.publishedAt ? getRelativeDate(post.publishedAt) : ''}
            </span>
          </div>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-40 h-40 object-contain mb-4 mx-auto"
              loading="lazy"
            />
          )}
          <PostContent content={post.content} />
        </Card>
      </main>
    </div>
  );
}
