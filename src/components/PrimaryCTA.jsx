import React from 'react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import styles from './PrimaryCTA.module.css'

export default function PrimaryCTA({text,width,height,onClick}) {
  return (
    <button className={styles.button} onClick={onClick} style={{width,height}}>{text} <ArrowForwardIcon/></button>
  )
}
