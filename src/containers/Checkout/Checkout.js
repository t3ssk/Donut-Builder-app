import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

 class Checkout extends React.Component{
    constructor(props){
        super(props)
        this.checkoutCancel = this.checkoutCancel.bind(this)
        this.checkoutContinue = this.checkoutContinue.bind(this)
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
            <CheckoutSummary icing={this.props.finalOrder.icing.typ} topping={this.props.finalOrder.topping.typ} napln={this.props.finalOrder.napln.typ} checkoutCancel={this.checkoutCancel.typ} checkoutContinue={this.checkoutContinue}/>
            <Route path={this.props.match.url + '/contact-data'} component={ContactData}/>
        </div>)
    }
}

const mapStateToProps = state =>{
    return {
        finalOrder: state.finalOrder,
        total: state.total
    }
}
export default connect(mapStateToProps)(Checkout)