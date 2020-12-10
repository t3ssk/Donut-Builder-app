import React, {Component} from 'react'
import {SubmitButton} from '../../../components/UI/Buttons/SubmitButton'
import styles from './ContactData.module.css'
import Donutio from './donutio.png'
import axios from '../../../axios-orders'
import {Spinner} from '../../../components/UI/Spinner/Spinner' 
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'
import * as appActions from '../../../store/actions/customerActions'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import {Redirect} from 'react-router-dom'
import checkValidity from '../../../utility'
class ContactData extends Component {
    constructor(props){
        super(props)
        this.handlePurchase = this.handlePurchase.bind(this)
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
        this.props.updatePurchased()
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
                touched: false,
                rules: {
                    required: true
                },
                value: "",
                valid: false
                }, 
            street: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Adresa',
                label: 'Ulice',
                name:'street',
                     },
                touched: false,
                rules: {
                    required: true
                },
                value: "",
                valid: false
            },
            zip: {
                inputType: 'input',
                elementConfig: {type: 'number', 
                placeholder: 'PSČ',
                label: 'PSČ',
                name:'zip',
                     },
                touched: false,
                rules: {
                    required: true,
                    minLength: 5, 
                    maxLength: 6
                },
                value: "",
                valid: false
            }, 
            city: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Město',
                label: 'Město',
                name:'city',
                     },
                touched: false,
                rules: {
                    required: true
                },
                value: "",
                valid: false
            },
            email: {
                inputType: 'input',
                elementConfig: {type: 'email', 
                placeholder: 'Email',
                label: 'e-mail',
                name:'email',
                     },
                touched: false,
                rules: {
                    required: true,
                    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi
                },
                value: "",
                valid: false
            },
            deliveryMethod: {
                inputType: 'select',
                elementConfig: {
                label: 'Možnosti doručení',
                options: [
                {value: "", display: 'Vyber rychlost doručení'},
                {value: 'slow', display: 'Nespěchám (2-3 hodiny)'},
                {value: 'normal', display: 'Normální doručovací čas (1 hodina)'}, 
                {value: 'fast', display: 'Umírám hlady (30min)'}
                ],
                value: "",
                name:'delivery',
                     },
                rules: {
                    required: true,
                    minLength: 2,
                    maxLength: 30
                },
                valid: false
            },
            
        },
    isValid: false }

     handlePurchase (e) {

        e.preventDefault()
        let customerData = {} 
        for (let key in this.state.orderForm){
            customerData[key]= this.state.orderForm[key].value}
        
        const data = {order: this.props.finalOrder, total: this.props.total, userId: this.props.localId,
        orderForm: customerData}
        //axios.post('/orders.json', data).then(response=>{this.setState({loading: false}); this.props.history.push('/')}).catch((error)=>{this.setState({loading: false})})
        this.props.onSubmitInput(data, this.props.token)      
     }  
     

     inputChangeHandler (event, id) {
            const orderFormCP = {...this.state.orderForm}
            const updatedFormElement = { 
                ...orderFormCP[id]
            };
            
            updatedFormElement.value = event.target.value;
            if(updatedFormElement.rules)
            {updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.rules)}
            updatedFormElement.touched = true
            orderFormCP[id] = updatedFormElement;
            let formIsValid = true
            for(let key in orderFormCP){
                formIsValid = orderFormCP[key].valid && formIsValid
            }
            
            
            this.setState({orderForm: orderFormCP, isValid: formIsValid})

     }

    render(){
        const inputArr = []
        for (let key in this.state.orderForm){

            inputArr.push({id: key, config: this.state.orderForm[key]})
        }
        
        const inputArrMap = inputArr.map(item => {return <Input key={item.id} inputType={item.config.inputType} 
        elementConfig={item.config.elementConfig} value={item.config.value} touched={item.config.touched} onChange={(event)=>{this.inputChangeHandler(event, item.id); this.props.onChangeInput({[event.target.name]: event.target.value})}} valid={item.config.valid}/> })
        
        const redirect = <Redirect to='/'/>
        return(
            <div className={styles.Contact}>
                <h4>Komu máme donut poslat?</h4>
               {this.props.loading ? <Spinner/> : <form>
                   {inputArrMap}
                    <SubmitButton disabled={!this.state.isValid} onClick={this.handlePurchase}/>
                </form>}
                {this.props.ordered===true && redirect}
                <div className={styles.Image}>
                <img src={Donutio} alt="" /></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        finalOrder: state.donut.finalOrder,
        total: state.donut.total,
        name: state.customer.name,
        street: state.customer.street,
        city: state.customer.city,
        zip: state.customer.zip,
        email: state.customer.email,
        deliveryMethod: state.customer.deliveryMethod,
        loading: state.order.loading,
        ordered: state.order.ordered,
        token: state.auth.idToken,
        localId: state.auth.localId,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (data)=>{dispatch(appActions.contactOnChange(data))},
        onSubmitInput: (order, token)=>{dispatch(appActions.purchaseDonut(order, token))},
        updatePurchased: ()=>{dispatch(appActions.updatePurchased())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler(ContactData, axios))