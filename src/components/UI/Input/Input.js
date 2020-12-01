import React from 'react'
import styles from './Input.module.css'


const Input = (props) => {
    const inputClasses = [styles.Input]

    if(props.valid === false && props.touched){ inputClasses.push(styles.Invalid) }
    let inputEl = null
    switch(props.inputType){
        case('input'):
            inputEl = <input className={inputClasses.join(' ')} {...props.elementConfig}  onChange={props.onChange} value={props.value}/>
        break;
        case('select'): 
            inputEl = (<select className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.onChange} value={props.value}> 
            {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.display}
                        </option>))} 
            </select>)
        break;
        default:
            inputEl = <input className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.onChange} value={props.value}/>
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
