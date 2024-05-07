import React from 'react'
import  logo  from "../assests/logo.svg"
import SecondaryCTA from './SecondaryCTA'
import PrimaryCTA from './PrimaryCTA'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <div><img src={logo} alt="logo" /></div>
        <SecondaryCTA text="Get Projects"/>
        <PrimaryCTA text="Onboard Talent"/>
    </nav>
  )
}
