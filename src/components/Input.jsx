import React from 'react'

import styles from './Input.module.css'

export default function Input({holder,name,val,handleChange,onBlur}) {
  return (
    <div className={styles.input}>
        <input type="text" placeholder={holder} name={name} value={val} onInput={handleChange} onBlur={onBlur}/>
    </div>
  )
}
