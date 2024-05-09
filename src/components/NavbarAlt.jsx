import React from 'react'
import  logo  from "../assests/logo.svg"
import { useNavigate } from 'react-router-dom'
import {CloseIcon} from '@chakra-ui/icons'

import styles from './NavbarAlt.module.css'

export default function NavbarAlt({showCross}) {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
        <div><img src={logo} alt="logo" /></div>
        {showCross && <div className={styles.cross} onClick={()=>navigate('/')} > <CloseIcon /> </div>}
    </nav>
  )
}
