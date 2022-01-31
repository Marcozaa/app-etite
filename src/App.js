import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './pages/About';
import MiddleContent from './components/MiddleContent';
import Others from './components/Others';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import RegistrazioneRider from './pages/RegistrazioneRider';
function App() {
  return (
    <ChakraProvider theme={theme}>

      <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="expenses" element={<MiddleContent />} />
      <Route path="registrazioneRider" element={<RegistrazioneRider />} />
    </Routes>
   
    </ChakraProvider>
  );
}

export default App;
