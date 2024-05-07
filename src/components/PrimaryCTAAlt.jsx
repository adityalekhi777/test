import React from 'react'
import styles from './PrimaryCTA.module.css'

export default function PrimaryCTA({text}) {
  return (
    <button className={styles.button}>{text}</button>
  )
}
