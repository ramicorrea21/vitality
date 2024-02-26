import React from 'react';
import Link from 'next/link';

const services = [
  {
    name: 'Landing Page',
    price: '$99/año',
    features: [
      'Diseño Responsivo',
      'Optimizado para SEO',
      'Seguimiento de Rendimiento'
    ],
    bgColor: 'bg-blue-500 hover:bg-blue-600',
    description: 'Atrae a tu audiencia con una landing page impresionante diseñada para la conversión y la experiencia del usuario.'
  },
  {
    name: 'Solución Ecommerce con Shopify',
    price: '$299/año',
    features: [
      'Temas de Shopify Personalizados',
      'Integración con Next.js',
      'Analítica Avanzada'
    ],
    bgColor: 'bg-yellow-500 hover:bg-yellow-600',
    description: 'Lanza tu tienda en línea con una solución personalizada de Shopify, potenciada con Next.js.'
  },
  {
    name: 'Aplicaciones Web a Medida',
    price: '$499/año',
    features: [
      'Soluciones de Extremo a Extremo',
      'Arquitectura Escalable',
      'Soporte Continuo'
    ],
    bgColor: 'bg-pink-500 hover:bg-pink-600',
    description: 'Da vida a tus ideas de software complejas con nuestros servicios de desarrollo full stack integrales.'
  },
];

export default function ServicesSection() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col items-center justify-between p-6 rounded-lg shadow-lg ${service.bgColor} transition duration-300`}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                <p className="text-xl font-semibold mb-4 text-white">{service.price}</p>
                <ul className="mb-4 text-white">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-1">{feature}</li>
                  ))}
                </ul>
                <p className="mb-4 text-white text-sm px-2">{service.description}</p>
                <Link href="/contact" className="inline-block w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300 text-center">
                    Comenzar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
