import Link from "next/link";
import Image from "next/image";
import AnimatedText from "./animatedText";

export default function Banner() {
  return (
    <div className="relative">
      <div className="container mx-auto flex flex-col md:flex-row py-8 md:py-4 items-center justify-center md:justify-between px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col w-full items-center md:items-start md:w-1/2 mb-8 md:mb-0">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Empieza a <AnimatedText textList={["dinero", "tiempo", "clientes", "ventaja"]} interval={2000} /><br />con nuestros Sistemas
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Potenciamos tus ideas de negocio para que puedas generar ingresos y optimizar tu tiempo.
          </p>
          <Link href="https://calendly.com/vitality-ar/30min" className="bg-violet-600 text-white font-bold py-3 px-4 md:px-6 rounded-lg hover:bg-violet-700 transition duration-300">
              Contáctanos →
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:block">
          <Image src="/img/flying-man.svg" alt="Rocket Man" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}
