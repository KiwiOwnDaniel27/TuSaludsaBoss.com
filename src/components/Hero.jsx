import React from 'react'
import { heroLogos } from '../constant/data';
import { RiPlayFill } from '@remixicon/react';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return <section>
    <div className="container">
        <div className="mt-[50px] md:mt-16 text-center">
          
          <div className="relative">
            <span className=" top-0 left-0">
              <img className="transform translate-x-16 sm:translate-x-36 md:translate-x-60 lg:translate-x-89 xl:translate-x-106 2xl:translate-x-140"
              src="/assets/caduceo.webp" 
              alt="titule shop" 
              width={233} 
              height={43} />
            </span>
            
            <div className="bg-white-99 border border-white-95 py-6 rounded-lg p-3.5 justify-center gap-2.5
            flex-wrap text-center">
              <span className="">
                <img className="transform -translate-x-2 sm:translate-x-0 md:translate-x-13 lg:translate-x-40 xl:translate-x-60 2xl:translate-x-90"
                src="/assets/frase.webp" 
                alt="titule shop" 
                width={600} 
                height={600} />
              </span>
            </div>

            <br />

            <h1 className="py-3 text-2xl md:text-4xl">
                <span className="">Protege tu Salud y la de tu Familia</span>
            </h1>
          </div>
        </div>

        <p className="text-center py-3 text-2xl font-medium mt-4 md:text[28px]">con Seguros Médicos Confiables y Accesibles.</p>
        <p className="text-center py-3 font-light " >Recibe atención médica de calidad y tranquilidad en todo momento.</p>

        <div className=" flex items-center justify-center gap-6 mt-11 flex-wrap">
          <button className="primary-btn">Explorar Planes</button>
          <button className="secundary-btn">Ver Beneficios</button>
        </div>

        <div className="mt-8 lg:mt[100px] relative overflow-hidden">
            <Marquee pauseOnHover={true}>

                {heroLogos.map(logo => (
                  <div className="px-9 py-5" key={logo.id}>
                    <img src={logo.img} alt="logo" width={logo.width} height={28} />
                  </div>
                ))}
            </Marquee> 
        </div>

        <div className="absolute top-240 xl:top-230 lg:top-213 md:top-259 sm:top-235
        left-0 bg-gradient-to-r from-green-200 via-green-700-97/80 to-transparent
        w-21 xl:w-60 lg:w-50 md:w-60 sm:w-20 h-33 z-100 pointer-none:"/>

        <div className="absolute top-240 xl:top-230 lg:top-213 md:top-259 sm:top-235
        right-0 bg-gradient-to-l from-green-200 via-green-700-97/80 to-transparent
        w-21 xl:w-60 lg:w-50 md:w-60 sm:w-20 h-33 z-100 pointer-none:"/>

        <figure className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt[50px]">
          <img src="/assets/hero-banner.webp" 
          alt="hero-banner" 
          width={900}
          height={500}
          className="w-full h-full object-cover"
          />


          <div className=" absolute inset-0 bg-black/30 z-10" /> 


          <div className="absolute top-1/2 left-70 z-20 xl:translate-x-50 lg:translate-x-33 md:-translate-x-0
          sm:-translate-x-16 -translate-x-39 translate-y-0
           cursor-pointer">
                  <span className="flex bg-white w-26 h-26 items-center rounded-full play-btn">
                    <RiPlayFill size={200}/>
                  </span>
          </div>

        </figure>
    </div>
  </section>
  
}

export default Hero;    