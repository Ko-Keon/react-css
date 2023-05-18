import React from 'react'
import styles from './counter.module.css'

export default function CounterComp() {
  return (
    <div className={`${styles.color}`}>
        <h3>{styles.color}</h3>
    </div>
  )
}
