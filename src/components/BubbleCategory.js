import React from 'react';
import './bubbleCategory.css'
import { motion } from 'framer-motion'

export default function BubbleCategory({nome, immagine, posizione}) {
  return (
    <motion.div className='bubble' style={{backgroundImage: `url(${immagine})`,backdropFilter: 'blur(1px)', backgroundPosition: 'center', backgroundSize: 'cover'}}
  animate={{  opacity: [0,1] }}
  transition={{ duration: posizione * 0.3 }}
  ><p>{nome}</p></motion.div>
  )
}
