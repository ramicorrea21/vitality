import Link from "next/link"
import Image from "next/image"
export default function Banner(){
    return(
            <div className="relative bg-white">
              <div className="container mx-auto flex py-16 md:py-24 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full md:w-1/2">
                  <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
                    Save a <span className="text-violet-600">lot of Money</span><br/>With Our System
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <Link href="/learn-more" className="inline-block bg-violet-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-700 transition duration-300">
                      Leer más →
                  </Link>
                </div>
                <div className="hidden md:block md:w-1/2">
                  <Image src="/img/flying-man.svg" alt="Rocket Man" width={500} height={500} layout="responsive" />
                </div>
              </div>
            </div>
    )
}