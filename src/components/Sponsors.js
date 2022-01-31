import React from 'react'
import './sponsors.css'
import { motion } from 'framer-motion'
import BubbleCategory from './BubbleCategory'

export default function Sponsors() {
    return (
               <motion.div className='sponsors'
  animate={{  opacity: [0,1] }}
  transition={{ duration: 1 }}
  >
      
        <BubbleCategory nome={'Messicano'} posizione={1} immagine={'https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80'}/>
        <BubbleCategory nome={'Italiano'}  posizione={2} immagine={'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>
        <BubbleCategory nome={'Dessert'}  posizione={3} immagine={'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'}/>
        <BubbleCategory nome={'Sushi'}  posizione={4} immagine={'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>
        <BubbleCategory nome={'Pizza'}  posizione={5} immagine={'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>
        <BubbleCategory nome={'Colazione'}  posizione={6} immagine={'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1247&q=80'}/>

        </motion.div>
    )
}
