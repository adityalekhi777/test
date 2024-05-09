import React from 'react'
import styles from './SecondaryCTA.module.css'

export default function SecondaryCTA({text,width,height}) {
  return (
    <button className={styles.button} style={{width,height}}>{text}</button>
  )
}
