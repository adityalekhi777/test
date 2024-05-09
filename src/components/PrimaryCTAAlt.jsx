import React from 'react'
import styles from './PrimaryCTA.module.css'

export default function PrimaryCTA({text,disabled,onClick,width,height}) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled} style={{width,height}}>{text}</button>
  )
}
