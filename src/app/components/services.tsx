import React from 'react';
import Link from 'next/link';
import {services} from '../utils/services'
import { CiCircleCheck } from "react-icons/ci";


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
                <p className="text-3xl font-semibold mb-4 text-white">{service.price}<span className='text-lg'> /año</span></p>
                <ul className="mb-4 text-white text-start ml-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-4 flex"><CiCircleCheck size={25} className='mr-1'/>{feature}</li>
                  ))}
                </ul>
                <p className="mb-4 mt-8 text-white text-sm px-2">{service.description}</p>
                <Link href="https://calendly.com/vitality-ar/30min" className="inline-block w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300 text-center">
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
