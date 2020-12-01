import React from 'react';
import styles from './Buttons.module.css'



export const SubmitButton = (props) => {

   const classes = [styles.Submit]

   props.disabled &&  classes.push(styles.Disabled)

   return <button className={classes.join(' ')} onClick = {props.onClick} disabled={props.disabled}>Odeslat</button>
}