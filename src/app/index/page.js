'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar/page';
import Button from '../components/button/page';
import Card from '../components/card/page';

const images = [
  '/img/banda.jpg',
  '/img/rillaboom2.jpg',
  '/img/toxtricity3.jpg',
  '/img/obstagoon2.jpg',
  '/img/grimmsnarl2.jpg',
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/Iibrz0V.jpg')",
      }}
    >
      <Navbar />

      <main className="p-2 max-w-4xl mx-auto mt-10 bg-opacity-80 rounded-lg shadow-lg">
        <Card title="Bienvenidos entrenadores!" className="mb-8">
          <p className="mb-4 text-black-900">
            Aquí conocerás todo sobre la mejor banda Pokémon, sus historias, aventuras y mucho más.
          </p>
          <Button onClick={() => alert('¡Bienvenido a la banda Pokémon!')}>
            Haz clic aquí
          </Button>
        </Card>

        {/* Card con carrusel */}
        <Card title="Conoce la banda!">
          <div className="relative w-full h-90 overflow-hidden rounded-lg">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-purple-700' : 'bg-purple-300'
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
