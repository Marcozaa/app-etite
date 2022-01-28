import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,

} from '@chakra-ui/react'
import { Menu } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MenuList, MenuItem } from '@chakra-ui/react'
import { MenuDivider } from '@chakra-ui/react'
import { MenuButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaHamburger } from 'react-icons/fa'
import './navbar.css'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../appetite_logo.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <div className="navbar">
  
  <motion.div className='logo'
  animate={{ opacity: [0,1] }}
  transition={{ duration: 0.5 }}
  >
    <FaHamburger  className='menuButton'/>
      <h1>App<span>Etite</span></h1>
  </motion.div>
    
<motion.div className='centerBar'
  animate={{ x: [400,0], opacity: [0,1] }}
  transition={{ duration: 0.5 }}
  >
   <Menu><MenuButton as={Button} variant="ghost" className='item' >Collabora con noi</MenuButton><MenuList>
    <MenuItem>Ristoranti</MenuItem>
    <MenuItem>Lavora con noi</MenuItem>
    <MenuItem>Appetite for work</MenuItem>


  </MenuList></Menu>
  <Button  variant="ghost">Contatti</Button>
</motion.div>
            <div className="infos">
                          <ColorModeSwitcher justifySelf="flex-end" />


                <Button size={'lg'}>
                    Accedi
                </Button>

            </div>
    </div>
  )
}