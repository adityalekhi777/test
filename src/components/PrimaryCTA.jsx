import React from 'react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import styles from './PrimaryCTA.module.css'

export default function PrimaryCTA({text}) {
  return (
    <button className={styles.button}>{text} <ArrowForwardIcon/></button>
  )
}
