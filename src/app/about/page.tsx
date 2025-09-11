// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Acerca de Nosotros</h1>
      <p className="text-gray-700 mb-4">
        En <span className="font-semibold">Bicicletas</span>, somos una empresa apasionada por el mundo
        del ciclismo. Nuestro objetivo es ofrecer a cada cliente la mejor experiencia sobre dos ruedas,
        brindando bicicletas de alta calidad, accesorios innovadores y un servicio excepcional.
      </p>

      <p className="text-gray-700 mb-4">
        Fundada en 2020, hemos crecido para convertirnos en un referente en la venta de bicicletas tanto
        para principiantes como para ciclistas profesionales. Contamos con una amplia gama de modelos:
        <span className="font-medium"> de montaña, ruta, urbanas y eléctricas</span>.
      </p>

      <p className="text-gray-700 mb-4">
        Creemos que montar en bicicleta no es solo un deporte o un medio de transporte,
        sino un estilo de vida saludable, ecológico y lleno de libertad.
      </p>

      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">Nuestra Misión</h2>
      <p className="text-gray-700 mb-4">
        Promover la movilidad sostenible y el bienestar de las personas ofreciendo bicicletas y accesorios
        de excelente calidad al mejor precio.
      </p>

      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">Nuestra Visión</h2>
      <p className="text-gray-700">
        Ser la tienda líder en venta de bicicletas en Latinoamérica, inspirando a más personas a descubrir
        la pasión por el ciclismo.
      </p>
    </section>
  );
}
