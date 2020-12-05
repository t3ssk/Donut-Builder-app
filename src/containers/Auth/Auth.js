import React, {Component} from 'react'
import styles from './Auth.module.css'
import Input from '../../components/UI/Input/Input'
import {Button} from '../../components/UI/Buttons/CancelButton'
import checkValidity from '../../utility'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import {Spinner} from '../../components/UI/Spinner/Spinner'

/*JE TU POTŘEBA VYŘEŠIT PROČ SE NEUKLÁDÁ STATE*/

class Auth extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.props.authStart();
    }
    state = {
        isSignedUp: true,
        signInForm: {
            email: {
  
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'např. milovnikDonutu@seznam.cz',
                    label: 'E-mail'
                },
                touched: false, 
                rules: {
                    required: true,
                    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/gi
                },
                value: '',
                valid: false
            },
            password: {
                inputType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: '*******',
                    label: 'Heslo'
                },
                touched: false,
                rules: {
                    required: true,
                    minLength: 8,
                    maxLength: 30
                },
                value: '',
                valid: false
            },
        },
        isValid: false,
    }

    handleChange(e, id){
        const stateCopy ={ ...this.state.signInForm }
        const updatedEl = {...stateCopy[id]}
       updatedEl.value = e.target.value
       updatedEl.valid = checkValidity(updatedEl.value, updatedEl.rules)
       updatedEl.touched = true
       stateCopy[id] = updatedEl
       let isFormValid = true 
       for (let key in stateCopy){
           isFormValid = isFormValid && stateCopy[key].valid 
       }
      
    this.setState({signInForm: stateCopy, isValid: isFormValid})
    }



    render(){
        const InputMap = []
        for (let key in this.state.signInForm){
            InputMap.push({
                id: key, 
                config: this.state.signInForm[key]
            })
        } 

        const inputsLogin = InputMap.map(item=>{
          
            return (<Input key={item.id} 
            id={item.id}
            inputType={item.config.inputType} 
            elementConfig={item.config.elementConfig} 
            value={item.config.value} 
            touched={item.config.touched} 
            onChange={(e)=>{this.handleChange(e, item.id)}}
            valid={item.config.valid}/>)
        })

        return (
        this.props.loading ? <Spinner/> : (<div className={styles.Register}>
            {inputsLogin }
             <Button onClick={()=>{this.props.onAuth(this.state.signInForm.email.value, this.state.signInForm.password.value, !this.state.isSignedUp)}}
                    disabled={!this.state.isValid}>{this.state.isSignedUp ? 'Zaregistrovat' : 'Přihlásit se'}</Button> 
            <br></br>
            <Button onClick={()=>{this.setState((prev)=> {return {isSignedUp: !prev.isSignedUp} })}} disabled={false}>{this.state.isSignedUp? 'Už mám účet' : 'Ještě nemám účet'}</Button> 
        </div>))
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        onAuth: (email,password,isSignUp) => {dispatch(actions.authenticate(email,password, isSignUp))},
        authStart: () => {dispatch(actions.authStart)}
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Auth)