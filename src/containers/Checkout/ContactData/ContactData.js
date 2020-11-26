import React, {Component} from 'react'
import {SubmitButton} from '../../../components/UI/Buttons/SubmitButton'
import styles from './ContactData.module.css'
import Donutio from './donutio.png'
import axios from '../../../axios-orders'
import {Spinner} from '../../../components/UI/Spinner/Spinner' 
import Input from '../../../components/UI/Input/Input'
export default class ContactData extends Component {
    constructor(props){
        super(props)
        this.handlePurchase = this.handlePurchase.bind(this)
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
    state = {
        order: {topping: this.props.topping,
                 icing: this.props.icing,
                napln: this.props.napln, 
                total: this.props.total },
        orderForm: {
            name: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Vaše jméno',
                label: 'Jméno',
                name:'name',
                     },
                value: ""
                }, 
            street: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'Vaše adresa',
                label: 'Ulice',
                name:'street',
                     },
                value: ""
            },
            zip: {
                inputType: 'input',
                elementConfig: {type: 'number', 
                placeholder: 'Vaše psč',
                label: 'PSČ',
                name:'zip',
                     },
                value: ""
            }, 
            city: {
                inputType: 'input',
                elementConfig: {type: 'text', 
                placeholder: 'město bydliště',
                label: 'Město',
                name:'city',
                     },
                value: ""
            },
            email: {
                inputType: 'input',
                elementConfig: {type: 'email', 
                placeholder: 'Váš email',
                label: 'e-mail',
                name:'email',
                     },
                value: ""
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
                value: ""
            },
        },
     
    loading: false,}

     handlePurchase (e) {
        this.setState({loading: true}) 
        e.preventDefault()
        let customerData = {} 
        for (let key in this.state.orderForm){
            customerData[key]= this.state.orderForm[key].value}
        
        const data = {order: this.state.order,
        orderForm: customerData}
        axios.post('/orders.json', data).then(response=>{this.setState({loading: false}); this.props.history.push('/')}).catch((error)=>{this.setState({loading: false})})
            
     }

     inputChangeHandler (event, id) {
            const orderFormCP = {...this.state.orderForm}
            const updatedFormElement = { 
                ...orderFormCP[id]
            };
            updatedFormElement.value = event.target.value;
            orderFormCP[id] = updatedFormElement;
            this.setState({orderForm: orderFormCP})

     }

    render(){
        const inputArr = []
        for (let key in this.state.orderForm){

            inputArr.push({id: key, config: this.state.orderForm[key]})
        }

        const inputArrMap = inputArr.map(item => {return <Input key={item.id} inputType={item.config.inputType} 
        elementConfig={item.config.elementConfig} value={item.config.value} onChange={(event)=>this.inputChangeHandler(event, item.id)}/> })

        return(
            <div className={styles.Contact}>
                <h4>Komu máme donut poslat?</h4>
                <p>Všechna růžově vyznačená pole je potřeba vyplnit.</p>
               {this.state.loading ? <Spinner/> : <form>
                   {inputArrMap}
                    <SubmitButton onClick={this.handlePurchase}/>
                </form>}
                <div className={styles.Image}>
                <img src={Donutio} alt="" /></div>
            </div>
        )
    }
}