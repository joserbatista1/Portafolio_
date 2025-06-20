// app/layout.jsx

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Head from './components/Head'

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Desarrollador web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head />
      <body className="bg-white text-black bg-purple-900 dark:text-white transition-colors duration-300">
        {/* Layout en columna */}
        <div className="bg-purple-950 flex flex-col min-h-screen">
          <Logo />
          <Navbar />

          {/* Contenido que crece */}
          <main className="bg-white text-black flex-1 px-4 py-8 m-0">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
