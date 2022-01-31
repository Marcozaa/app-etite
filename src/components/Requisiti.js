import React from 'react';
import './requisiti.css'
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
export default function Requisiti() {
  return <div className='requisiti'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffc244" fill-opacity="1" d="M0,320L1440,192L1440,320L0,320Z"></path>
</svg>
        <div className="content">
            <motion.div className='left'
                animate={{  x: [-400,0] }}
                transition={{ duration: 1 }}
                >
                <h2>Scegli tu dove e quando guadagnare in scooter, bici o auto.</h2>
                <div className="option">
                    <img src={'https://images.prismic.io/dbhq-deliveroo-riders-website/a973940f-4c45-439d-8972-a9b5a79a43d1_thumbs-up-watch.svg?auto=compress,format&rect=0,0,64,64&w=128&h=128'}/>
                    <p>Scegli tu quando lavorare</p>
                </div>
                <div className="option">
                    <img src={'https://images.prismic.io/dbhq-deliveroo-riders-website/338d27cc-2dfa-42f0-bdc9-55ff2a7c8c0c_solve-problems.svg?auto=compress,format&rect=0,0,64,64&w=128&h=128'}/>
                    <p>Realizza i tuoi obiettivi di guadagno</p>
                </div>
                <div className="option">
                    <img src={'https://images.prismic.io/dbhq-deliveroo-riders-website/a9664701-da9e-48b3-a4cd-13dd6f8b29fc_support-2.svg?auto=compress,format&rect=0,0,64,64&w=128&h=128'}/>
                    <p>Ricevi supporto in qualsiasi momento</p>
                </div>
            </motion.div>
            <div className="right">
                <motion.div className='box'
                animate={{  x: [400,0] }}
                transition={{ duration: 1 }}
                >
                <h2>Cosa ti serve</h2>
                <div className="check" >
                    <img src='https://riders.deliveroo.it/_nuxt/img/check-circle-fill.4a71dbd.svg'/>
                    <p>Bicicletta, scooter o auto (con patente e assicurazione)</p>
                </div>
                <div className="check" >
                    <img src='https://riders.deliveroo.it/_nuxt/img/check-circle-fill.4a71dbd.svg'/>
                    <p>Smartphone con sistema operativo iOS 13.6, Android 6.0 o successivo</p>
                </div>
                <div className="check" >
                    <img src='https://riders.deliveroo.it/_nuxt/img/check-circle-fill.4a71dbd.svg'/>
                    <p>Essere maggiorenne</p>
                </div>
                </motion.div>
                </div>
            </div>
             
        </div>
 
}
