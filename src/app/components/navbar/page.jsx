'use client';

import Link from 'next/link';
import { FaHome, FaBlog, FaUsers } from 'react-icons/fa';
import { BsEarbuds } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-12">
        <div className="flex h-20 items-center">

          <div className="flex items-center flex-shrink-0 text-3xl font-bold tracking-wide -ml-6">
            <BsEarbuds className="mr-3 text-yellow-300 w-8 h-8" />
            Rock Pokémon
          </div>

          <div className="hidden md:flex space-x-10 ml-auto -mr-6">
            <Link
              href="/index"
              className="flex items-center text-xl px-4 py-2 hover:text-purple-300 transition"
            >
              <FaHome className="mr-2 text-2xl" /> Inicio
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-xl px-4 py-2 hover:text-purple-300 transition"
            >
              <FaBlog className="mr-2 text-2xl" /> Blog
            </Link>
            <Link
              href="/users"
              className="flex items-center text-xl px-4 py-2 hover:text-purple-300 transition"
            >
              <FaUsers className="mr-2 text-2xl" /> Usuarios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
