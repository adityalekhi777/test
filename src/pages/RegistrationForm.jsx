
import React from 'react'
import Input from "../components/Input"

import styles from './RegistrationForm.module.css'
import PrimaryCTAAlt from '../components/PrimaryCTAAlt'

export default function RegistrationForm () {
  return (
    <div className={styles.container}>
        <p>Registration Form</p>
        <h2>Start your success<br/>Journey here!</h2>
        <div className={styles.inputContainer}>
            <Input />
            <Input />
        </div>
        <PrimaryCTAAlt text="Submit"/>
    </div>
  )
}
