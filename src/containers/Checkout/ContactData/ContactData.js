import React, {Component} from 'react'
import {SubmitButton} from '../../../components/UI/Buttons/SubmitButton'
import styles from './ContactData.module.css'
import Donutio from './donutio.png'
import axios from '../../../axios-orders'
import {Spinner} from '../../../components/UI/Spinner/Spinner' 
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'
class ContactData extends Component {
    constructor(props){
        super(props)
        this.handlePurchase = this.handlePurchase.bind(this)
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
    state = {
        orderForm: {
            name: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Jméno',
                label: 'Jméno',
                name:'name',
                     },
                value: "",
                touched: false,
                rules: {
                    required: true
                },
                valid: false
                }, 
            street: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Adresa',
                label: 'Ulice',
                name:'street',
                     },
                value: "",
                touched: false,
                rules: {
                    required: true
                },
                valid: false
            },
            zip: {
                inputType: 'input',
                elementConfig: {type: 'number', 
                placeholder: 'PSČ',
                label: 'PSČ',
                name:'zip',
                     },
                value: "",
                touched: false,
                rules: {
                    required: true,
                    minLength: 5, 
                    maxLength: 5
                },
                valid: false
            }, 
            city: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Město',
                label: 'Město',
                name:'city',
                     },
                value: "",
                touched: false,
                rules: {
                    required: true
                },
                valid: false
            },
            email: {
                inputType: 'input',
                elementConfig: {type: 'email', 
                placeholder: 'Email',
                label: 'e-mail',
                name:'email',
                     },
                value: "",
                touched: false,
                rules: {
                    required: true,
                    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
                },
                valid: false
            },
            deliveryMethod: {
                inputType: 'select',
                elementConfig: {
                label: 'Možnosti doručení',
                options: [{value: '', display: 'Vyber možnost'},
                {value: 'slow', display: 'Nespěchám (2-3 hodiny)'},
                {value: 'normal', display: 'Normální doručovací čas (1 hodina)'}, 
                {value: 'fast', display: 'Umírám hlady (30min)'}
                ],
                name:'delivery',
                     },
                value: "",
                rules: {
                    required: true,
                    minLength: 2,
                    maxLength: 30
                },
                valid: false
            },
            
        },
     
    loading: false,
    isValid: false }

     handlePurchase (e) {
        this.setState({loading: true}) 
        e.preventDefault()
        let customerData = {} 
        for (let key in this.state.orderForm){
            customerData[key]= this.state.orderForm[key].value}
        
        const data = {order: this.props.finalOrder,
        orderForm: customerData}
        axios.post('/orders.json', data).then(response=>{this.setState({loading: false}); this.props.history.push('/')}).catch((error)=>{this.setState({loading: false})})
            
     }  
     checkValidity (value, rules){
    
         let isValid = true 
         if(rules.required){
             isValid = value.trim() !== "" && isValid
         }
         if(rules.minLength){
             isValid = value.length >= rules.minLength && value.length <= rules.maxLength && isValid
         }

         if(rules.regex){
            isValid = rules.regex.test(value)  && isValid
         }
         return isValid
     }

     inputChangeHandler (event, id) {
            const orderFormCP = {...this.state.orderForm}
            const updatedFormElement = { 
                ...orderFormCP[id]
            };
            updatedFormElement.value = event.target.value;
            if(updatedFormElement.rules)
            {updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.rules)}
            updatedFormElement.touched = true
            orderFormCP[id] = updatedFormElement;
            let formIsValid = true
            for(let key in orderFormCP){
                formIsValid = orderFormCP[key].valid && formIsValid 
                
            }
            console.log(formIsValid)
            
            this.setState({orderForm: orderFormCP, isValid: formIsValid})

     }

    render(){
        console.log(this.state)
        const inputArr = []
        for (let key in this.state.orderForm){

            inputArr.push({id: key, config: this.state.orderForm[key]})
        }
        
        const inputArrMap = inputArr.map(item => {return <Input key={item.id} inputType={item.config.inputType} 
        elementConfig={item.config.elementConfig} value={item.config.value} touched={item.config.touched} onChange={(event)=>this.inputChangeHandler(event, item.id)} valid={item.config.valid}/> })
        
       
        return(
            <div className={styles.Contact}>
                <h4>Komu máme donut poslat?</h4>
               {this.state.loading ? <Spinner/> : <form>
                   {inputArrMap}
                    <SubmitButton disabled={!this.state.isValid} onClick={this.handlePurchase}/>
                </form>}
                <div className={styles.Image}>
                <img src={Donutio} alt="" /></div>
            </div>
        )
    }
}

const mapUrlToProps = (state) => {
    return {
        finalOrder: state.finalOrder,
        total: state.total
    }
}

export default connect(mapUrlToProps)(ContactData)