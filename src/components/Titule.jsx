import React from 'react'
import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Titule = ({title, text, link}) => {
  return (
    <div  className="flex items-center justify-between flex-wrap gap-4">
        <div>
            <motion.h2 variants={variants.fadeInUp}>{title}</motion.h2>
            <motion.p variants={variants.fadeInUp} className="max-w-[640px] mt-4 mb-6" >{text}</motion.p>
        </div>

        <motion.a variants={variants.fadeInUp} href="https://wa.me/+593984611893" className="secundary-btn">{link}</motion.a>
    </div>
  )
}

export default Titule;