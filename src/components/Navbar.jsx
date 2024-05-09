import React from 'react'
import  logo  from "../assests/logo.svg"
import SecondaryCTA from './SecondaryCTA'
import PrimaryCTAAlt from './PrimaryCTAAlt'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
        <div><img src={logo} alt="logo" /></div>
        <SecondaryCTA width="189px" height="77px" text="Get Projects"/>
        <PrimaryCTAAlt text="Onboard Talent" width="223.3px" height="77px" onClick={()=>navigate("form")}/>
    </nav>
  )
}
