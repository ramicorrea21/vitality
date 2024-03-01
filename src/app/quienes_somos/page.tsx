import Image from "next/image";
import Footer from "../components/footer";

export default function AboutUsSection() {
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">

          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-lg mb-4">
              Somos un colectivo de apasionados desarrolladores de software y diseñadores gráficos, unidos por la admiración a los emprendedores visionarios. Aquellos que no se conforman, que siempre buscan ir más allá, que edifican grandes ideas y las transforman en realidades impresionantes.
            </p>
            <p className="text-lg">
              En Vitality, queremos ser el soporte en tu camino hacia el éxito. Creemos en ser ese impulso que te lleve un paso más allá, proporcionándote las herramientas y el expertise necesario para sobresalir. A tu lado, cada desafío se convierte en una oportunidad para innovar y cada idea es un potencial cambio de juego. Estamos aquí para asegurarnos de que estés siempre adelante, liderando el cambio y marcando la diferencia.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/img/Team.webp"
              alt="Equipo de vitality"
              width={500}
              height={300}
              objectFit="cover" 
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
