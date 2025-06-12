// components/Navbar.jsx
import { Home, Folder, FileText, Book } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-purple-950 text-white px-4 py-3 shadow">
      <ul className="flex items-center justify-center gap-6">
        <li>
          <Link href="/" className="flex items-center gap-2 hover:text-gray-300 transition">
            <Home className="w-5 h-5" />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link href="/proyectos" className="flex items-center gap-2 hover:text-gray-300 transition">
            <Folder className="w-5 h-5" />
            <span>Proyectos</span>
          </Link>
        </li>
        <li>
          <Link href="/hoja-de-vida" className="flex items-center gap-2 hover:text-gray-300 transition">
            <FileText className="w-5 h-5" />
            <span>CV</span>
          </Link>
        </li>
        <li>
          <Link href="/educacion" className="flex items-center gap-2 hover:text-gray-300 transition">
            <Book className="w-5 h-5" />
            <span>Educación</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
