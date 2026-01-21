import React from 'react'
import Titule from './Titule'
import { planesSecimgs } from '../constant/data';

const Planes = () => {
  return <section>

    <div className="container py-21">

        <Titule title='Nuestros Planes de Salud' 
        text='Contamos con diferentes opciones de seguros médicos que brindan protección integral, desde consultas y estudios médicos hasta hospitalización y emergencias, garantizando el bienestar en cada etapa de tu vida.' 
        link='Asesorate' 
        />

        <div className="grid gap-9 lg:grid-cols-2 mt-8 lg:mt-16">
            {planesSecimgs.map(item=>(
                    
                <div className=" bg-green-200 p-7 lg:p-10 rounded-[10px]" key={item.id}>

                    <div className="">
                        <img src={item.img} alt={item.title} width={560} height={266} 
                        className="w-full h-full object-cover rounded-[10px]"/>
                    </div>

                    <div className="mt-6">

                        <div className="flex items-center flex-wrap gap-2.5">
                            {item.tags.map((tag,index)=>(
                                <span className="border border-orange-50 p-2 rounded-md bg-orange-70 mr-3" key={index}>
                                    {tag.tag}
                                    </span>
                            ))}

                            <p className="ml-auto font-light mt-3">{item.instructor}</p>
                        </div>

                        <div className="my-6 space-y-3">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>

                    <button className="bg-white w-full p-3.5 rounded-md hover:text-orange-50 border border-white-97 hover:border-orange-50 transition">Cotízalo Ahora</button>
                </div>
            ))}
        </div>
    </div>

  </section>
    
}

export default Planes;