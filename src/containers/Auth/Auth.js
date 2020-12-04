import React, {Component} from 'react'
import styles from './Auth.module.css'
import Input from '../../components/UI/Input/Input'
import {Button} from '../../components/UI/Buttons/CancelButton'
import checkValidity from '../../utility'

export class Auth extends Component {
    constructor(props){
        super(props)
        this.toggleButtons = this.toggleButtons.bind(this)
    }
    state = {
        loggedIn: false, 
        buttonToggle: false,
        signInForm: {
            name: {
                useFor: ['signUp', 'login'],
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'např. Knedlik123',
                    label: 'Uživatelské jméno'
                },
                touched: false, 
                rules: {
                    required: true
                },
                value: '',
                valid: false
            },
            password: {
                useFor: ['signUp', 'login'],
                inputType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password',
                    label: 'Heslo'
                },
                touched: false,
                rules: {
                    required: true,
                    minLength: 8
                },
                value: '',
                valid: false
            },
            passwordCheck: {
                useFor: ['signUp'],
                inputType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password',
                    label: 'Heslo'
                },
                touched: false,
                rules: {
                    required: true,
                    minLength: 8
                },
                value: '',
                valid: false
            }
        }
    }
    toggleButtons(){
        this.setState({loggedIn: true})
    }
    render(){
        const InputMap = []
        for (let key in this.state.signInForm){
            InputMap.push({
                id: key, 
                config: this.state.signInForm[key]
            })
        } 

        const inputsSignup = InputMap.map(item=>{
            if (item.config.useFor.includes('signUp'))
            {return (<Input key={item.id} 
            inputType={item.config.inputType} 
            elementConfig={item.config.elementConfig} 
            value={item.config.value} 
            touched={item.config.value} 
            onChange={()=>{}}
            valid={item.config.valid}/>)}
        })

        const inputsLogin = InputMap.map(item=>{
            if (item.config.useFor.includes('login'))
            {return (<Input key={item.id} 
            inputType={item.config.inputType} 
            elementConfig={item.config.elementConfig} 
            value={item.config.value} 
            touched={item.config.value} 
            onChange={()=>{}}
            valid={item.config.valid}/>)}
        })

       
        return (
        <div class={styles.Register}>
            {this.state.registered ? inputsLogin : inputsSignup }
            <Button onClick={()=>{}}>Registrovat se</Button> 
            <Button onClick={()=>{}}>Příhlásit se</Button> 
            
        </div>)
    }
}