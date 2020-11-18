import React from 'react';
import styles from './Buttons.module.css'

export const CancelButton = (props) => {
   return <button type="button" onClick={props.onClick} className={styles.cancel}> Zrušit</button>
}


export const Button = (props) => {
   return <button onClick={props.onClick}>{props.children}</button>
}