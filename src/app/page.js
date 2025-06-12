import Image from "next/image";
import RootLayout from "./layout";
import Foto from "./components/Foto";

export default function Home() {
  return (
<section className="max-w-3xl mx-auto py-12 px-4">
      
      <h1 className="md:text-4xl lg:text-6xl font-bold mb-6 max-w ">Hola, soy Jose Batista</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      
          <p className="text-2xl lg:text-justify mb-4 leading-relaxed max-w-md">
        Soy un desarrollador web apasionado por crear experiencias digitales
        intuitivas y eficientes. Me especializo en tecnologías modernas como React, Next.js y Tailwind CSS, y disfruto resolver 
        problemas complejos con código limpio y escalable. Siempre adaptando las necesidades de mis clientes a cualquier tecnología
          </p>
              <Foto />
      </div>
      
      <p className="text-2xl lg:text-justify mb-4 leading-relaxed">
        Mi objetivo es construir aplicaciones que no solo funcionen bien,
        sino que también ofrezcan una excelente experiencia de usuario. Siempre estoy aprendiendo y explorando nuevas herramientas para mantenerme a la vanguardia en el desarrollo web.
      </p>
      <p className="text-2xl lg:text-justify">
        ¡Gracias por visitar mi portafolio! Te invito a explorar mis proyectos y a contactarme si querés trabajar juntos.
      </p>
    </section>
  );
}
