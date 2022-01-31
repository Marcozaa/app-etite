import React from 'react';
import ContainerRegistrazioneRider from '../components/ContainerRegistrazioneRider';
import { Navbar } from '../components/Navbar';
import Cards from '../components/Cards';
import '../components/RegistrazioneRider.css'
import Requisiti from '../components/Requisiti';
import NormalContainer from '../components/NormalContainer';
import RequisitiRider from '../components/RequisitiRider';
import Footer from '../components/Footer';
export default function RegistrazioneRider() {
  return <div>
      <Navbar />
      <ContainerRegistrazioneRider />
      <div className="middle">
      <RequisitiRider/>
      </div>
      <Footer />
        
      
     
  </div>;
}
