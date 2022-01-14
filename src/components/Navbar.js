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

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <div className="navbar">
    {/*<img src={logo}/>*/}
    <div className="logo">
   <FaHamburger  className='menuButton'/>
    <h1>Logo</h1>
    </div>

<div className="centerBar">
   <Menu><MenuButton as={Button} className='item' >Collabora con noi</MenuButton><MenuList>
    <MenuItem>Ristoranti</MenuItem>
    <MenuItem>Lavora con noi</MenuItem>
    <MenuItem>Appetite for work</MenuItem>


  </MenuList></Menu>
  <Button>Contatti</Button>
</div>
            <div className="infos">
                          <ColorModeSwitcher justifySelf="flex-end" />


                <Button size={'lg'}>
                    Accedi
                </Button>

            </div>
    </div>
  )
}