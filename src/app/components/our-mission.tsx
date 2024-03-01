import React from 'react';
import Image from 'next/image';

export default function MissionSection() {
    return (
        <div className=" text-gray-800 py-12 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/img/dashboard-man.webp"
                        alt="Nuestra Misión"
                        width={500}
                        height={500}
                    />
                </div>

                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-3xl font-bold">Nuestra misión.</h2>
                    <p className='mb-4 text-xl font-semibold'>Hacerte Crecer</p>
                    <p className="mb-4 text-lg">
                    En Vitality, impulsamos el potencial de tu emprendimiento. Nuestras soluciones a medida y estrategias innovadoras están diseñadas para maximizar tus ganancias y eficiencia. Comprometidos con tu éxito, transformamos tus ideas en realidades destacadas en el mercado. Únete a nosotros y lleva tu negocio al frente de la innovación y el crecimiento.

                    </p>
                </div>
            </div>
        </div>
    );
};

