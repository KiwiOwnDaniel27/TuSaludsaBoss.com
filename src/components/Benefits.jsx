import React from 'react'
import Titule from './Titule';
import { benefitimgs } from '../constant/data';
import { RiArrowDownLine, RiArrowRightUpBoxLine } from '@remixicon/react';

const Benefits = () => {
  return <section className="section">

    <div className="contanier">
        <Titule 
        title="Beneficios" 
        text='Ofrecemos planes diseñados para tu tranquilidad.
        Atención médica oportuna, acceso a una amplia red de especialistas, hospitales de primer 
        nivel y coberturas flexibles que se adaptan a tus necesidades y presupuesto.' 
        link='Ver Todos'
        />

        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
            {benefitimgs.map(item => (


                <div className="bg-green-200 p-10 flex flex-col rounded-xl">

                    <div className=" flex items-center justify-center mx-auto rounded-xl mb-8">
                        <img src={item.icon} alt={item.title} width={350} height={94} />
                    </div>

                    <div className="mb-4 text-center space-y-3.5">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>

                    <button className="mt-auto ml-auto w-13 h-13 flex items-center justify-center rounded-md text-purple-600
                    transition-colors hover:bg-green-400">
                        <RiArrowRightUpBoxLine size={39}/>
                    </button>
                </div>
            ))}
        </div>
    </div>


  </section>
  
}

export default Benefits;