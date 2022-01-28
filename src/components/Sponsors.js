import React from 'react'
import './sponsors.css'
import { motion } from 'framer-motion'

export default function Sponsors() {
    return (
               <motion.div className='sponsors'
  animate={{  opacity: [0,1] }}
  transition={{ duration: 1 }}
  >
      
          <img className='big' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png' />
          <img src='https://loghi-famosi.com/wp-content/uploads/2020/08/Burger-King-Logo-1994-1999.png' />
          <img src='https://loghi-famosi.com/wp-content/uploads/2020/04/KFC-Logo-2014-2018.png' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/InNOut.svg/1200px-InNOut.svg.png' />
          <img src='https://www.grom.it/images/grom-logo.png' />
          {/*<img className='big' src='https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Image.png' />*/}
          
        </motion.div>
    )
}
