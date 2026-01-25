import React from 'react'
import Titule from './Titule';
import { testimonialsimgs } from '../constant/data';
import { RiArrowLeftBoxFill, RiArrowLeftWideLine, RiArrowRightBoxFill, RiArrowRightBoxLine } from '@remixicon/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation, Autoplay } from 'swiper/modules';


const Testimonials = () => {
  return <section className="section">

    <div className="container">
    
        <Titule 
        title='Testimonios de Nuestros Clientes' 
        text='Miles de personas confían en nosotros para cuidar su salud. Conoce las experiencias de quienes han recibido atención médica de calidad y respaldo en los momentos más importantes.'
        link='Atencíon y Sevicio al cliente 10/10'/>    

        <Swiper 
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        breakpoints={{
            640:{
                slidesPerView:1
            },
            768: {
                slidesPerView:1.5
            },
            1280: {
                slidesPerView:2.5
            },
        }}

        loop={true}
        navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
        }}

        className="mt-14 lg:mt-16">
            {testimonialsimgs.map( item => (
                <SwiperSlide key={item.id} className="bg-green-200 border-green-800 p-8 lg:p10 rounded-[10px] space-y-3 mt-9" >
                    <p>{item.text}</p>
                    <div>
                        
                        <div className="font-bold">
                            {item.autor}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        
        <div className="flex items-center justify-center mt-16 gap-9">
            <button className="bg-white w-15 h-15 flex items-center justify-center rounded-xl
            hover:bg-green-200 transition-colors active:bg-green-100/40 prev-btn ">
                <RiArrowLeftBoxFill size={60} color='purple'/>
            </button>
            <button className="bg-white w-15 h-15 flex items-center justify-center rounded-xl
            hover:bg-green-200 transition-colors active:bg-green-100/40 next-btn">
                <RiArrowRightBoxFill color='purple' size={60}/>
            </button>
        </div>
    </div>    
  </section>
}

export default Testimonials;