import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'

export default class Checkout extends React.Component{
    constructor(props){
        super(props)
        this.checkoutCancel = this.checkoutCancel.bind(this)
        this.checkoutContinue = this.checkoutContinue.bind(this)
    }

   
    state={
        icing: 'šmoula',
        topping: 'oreo',
        napln: 'karamel',
        total: ''
    }

    componentDidMount() {
        let stateUpdate = {}
        console.log(stateUpdate)
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
           const klic = param[0]
            const val = param[1]
            stateUpdate[klic] = val
        }
        this.setState({...stateUpdate})        
    } 
    checkoutCancel(){
        this.props.history.goBack()
    }

    checkoutContinue(){
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
        <div>
            <CheckoutSummary icing={this.state.icing} topping={this.state.topping} napln={this.state.napln} checkoutCancel={this.checkoutCancel} checkoutContinue={this.checkoutContinue}/>
            <Route path={this.props.match.url + '/contact-data'} render={()=><ContactData icing={this.state.icing} topping={this.state.topping} napln={this.state.napln} total={this.state.total}/>}/>
        </div>)
    }
}