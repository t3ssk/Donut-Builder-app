import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './Checkout.module.css'
import * as actions from '../../store/actions/customerActions'

 class Checkout extends React.Component{
    constructor(props){
        super(props)
        this.checkoutCancel = this.checkoutCancel.bind(this)
        this.checkoutContinue = this.checkoutContinue.bind(this)
    }
    checkoutCancel(){
        this.props.cancelOrder()
        this.props.history.push('/')
    }
    checkoutContinue(){
        this.props.history.replace('/checkout/contact-data')
    }
    render(){

     return(
        <div className={styles.Checkout}>
        <CheckoutSummary icing={this.props.finalOrder.icing.typ} topping={this.props.finalOrder.topping.typ} napln={this.props.finalOrder.napln.typ} checkoutCancel={this.checkoutCancel} checkoutContinue={this.checkoutContinue}/>
                <Route path={this.props.match.url + '/contact-data'} component={ContactData}/>
        </div>)
    }
}

const mapStateToProps = state =>{
    return {
        finalOrder: state.donut.finalOrder,
        total: state.donut.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancelOrder: ()=>{dispatch(actions.clearPurchase())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)