import React from 'react'
import styles from './SecondaryCTA.module.css'

export default function SecondaryCTA({text}) {
  return (
    <button className={styles.button}>{text} </button>
  )
}
