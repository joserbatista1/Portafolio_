import Imagen from "../components/Imagen";

export default function Proyectos() {
  return (
    <div className="p-4 space-y-10">
      {/* Proyecto 1 - POS SYSTEM */}
      <section>
        <h1 className="text-2xl mb-6 text-center text-blue-400 font-bold">POS SYSTEM</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Imagen src="/menuBienvenida.png" title="Menú de Bienvenida" />
          <Imagen src="/ventanaVentas.png" title="Pantalla de Ventas" />
          <Imagen src="/inventarioProductos.png" title="Inventario" />
        </div>
      </section>

      {/* Proyecto 2 - INVENTARIO */}
      <section>
        <h1 className="text-2xl mb-6 text-center text-red-400 font-bold">INVENTARIO</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Imagen src="/categorias.png" title="Categorías" />
          <Imagen src="/productos.png" title="Listado de Productos" />
          <Imagen src="/stockAlertas.png" title="Alertas de Stock" />
        </div>
      </section>

      {/* Proyecto 3 - FACTURACIÓN */}
      <section>
        <h1 className="text-2xl mb-6 text-center text-green-400 font-bold">FACTURACIÓN</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Imagen src="/facturaNueva.png" title="Nueva Factura" />
          <Imagen src="/facturaHistorial.png" title="Historial" />
          <Imagen src="/facturaPDF.png" title="Generación PDF" />
        </div>
      </section>
    </div>
  );
}
