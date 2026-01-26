import React, {useState} from 'react'
import Titule from './Titule';
import { faqimgs } from '../constant/data';
import { RiAddLine } from '@remixicon/react';


const FaqSec = () => {

    const [openId, setOpenId] = useState(faqimgs[0].id ?? null);
    const handleClick = (id) => {
      setOpenId(openId === id ?  null : id );
    }

  return <section className="section pb-[90] lg:mb-[160]">
    <div className="container">
        <div className="grid gap-27 p-5 lg:grid-cols-[0.7fr_7fr]
        items-center bg-green-200 rounded-lg md:p-10">

        <Titule title='Preguntas Frecuentes' 
        text='¿Aún tienes dudas sobre nuestros seguros médicos? Contacta a nuestro equipo a través de nuestro Whatsapp.' 
        link='Contáctanos'/>

        <div className="grid rounded-lg items-center
        sm:mx-auto sm:w-full
        border-0 md:border md:border-purple-600
        md:p-9 lg:p-9 xl:p-6 sm:w-full">
        {faqimgs.map(item => (

            <div className="space-y-3.5" key={item.id}>

                <div className="flex items-center justify-between gap-12 border-b border-b-purple-600
                pb-3 md:px-5 w-full">
                    <h4 className="text-lg sm:text-xl">{item.title}</h4>
                    <button className=" flex w-8 h-8 bg-orange-50 items-center justify-center aspect-square
                    rounded-lg hover:bg-purple-600 transition-colors " 
                    onClick={() => handleClick(item.id)}>
                       <RiAddLine className= {`transition ${
                        openId === item.id ? "rotate-45" : ""
                        }`} size={30} color='white' />
                    </button>
                </div>

                <div className={`max-h-0 overflow-y-hidden transition-all ${openId === item.id ? "max-h-200" : "" }`}>
                  <p className="px-5 pb-9">{item.text}</p>
                </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  </section>

}

export default FaqSec;