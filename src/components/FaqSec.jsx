import React from 'react'
import Titule from './Titule';
import { faqimgs } from '../constant/data';

const FaqSec = () => {
  return <section className="section">
    <div className="container">
        <div>

        <Titule title='Preguntas Frecuentes' 
        text='¿Aún tienes dudas sobre nuestros seguros médicos? Contacta a nuestro equipo a través de nuestro Whatsapp.' 
        link='Ver Todas las PF'/>

        <div className="">
        {faqimgs.map(item => (

            <div className="">

                <div className="">
                    <h4 className="">
                        
                    </h4>
                </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  </section>

}

export default FaqSec;