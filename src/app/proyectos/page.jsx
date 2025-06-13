import Imagen from "../components/Imagen";

export default function Proyectos() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4 text-center">POS SYSTEM</h1>

      <Imagen src="/menuBienvenida.png" title="Menú de Bienvenida" />
      <Imagen src="/ventanaVentas.png" title="Pantalla de Ventas" />
      <Imagen src="/inventarioProductos.png" title="Inventario" />

    </div>
  );
}
