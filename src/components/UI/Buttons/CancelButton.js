import React from 'react';
import styles from './Buttons.module.css'

export const CancelButton = (props) => {
   return <button type="button" onClick={props.onClick} className={styles.cancel}> Zrušit</button>
}


export const Button = (props) => {
   const classes = [styles.Submit]

   props.disabled &&  classes.push(styles.Disabled)

   return <button onClick={props.onClick} disabled={props.disabled} className={classes.join(' ')}>{props.children}</button>
}