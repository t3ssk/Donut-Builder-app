import React from 'react';
import styles from './Buttons.module.css'

export const SubmitButton = (props) => {
   return <button className={styles.Submit} onClick = {props.onClick}>Odeslat</button>
}