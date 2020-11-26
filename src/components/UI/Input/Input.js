import React from 'react'
import styles from './Input.module.css'


const Input = (props) => {
    let inputEl = null
    switch(props.inputType){
        case('input'):
            inputEl = <input className={styles.Input} {...props.elementConfig}  onChange={props.onChange} value={props.value} required/>
        break;
        case('select'): 
            inputEl = (<select className={styles.Input} {...props.elementConfig} onChange={props.onChange} value={props.value} required> 
            {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.display}
                        </option>))} 
            </select>)
        break;
        default:
            inputEl = <input className={styles.Input} {...props.elementConfig} onChange={props.onChange} value={props.value} required/>
        break;
    }

 return(
     <div className={styles.InputWrapper}>
         <label htmlFor={props.id} className={styles.Label}>{props.elementConfig.label}</label>
         {inputEl}
     </div>
 )
}

export default Input
