import React, {Component} from 'react'
import Order from './Order'
import styles from './Orders.module.css'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as appActions from '../../store/actions/index'
import {Spinner} from '../../components/UI/Spinner/Spinner'
class Orders extends Component {

   
    componentDidMount(){
     
        this.props.fetchOrdersInit()
    } 
    render(){
        const orderMap = this.props.orders.reverse().map(item=>{
            return <Order key={item.id} icing={item.order.icing.typ} topping={item.order.topping.typ} napln={item.order.napln.typ} total={+item.total}/>})

        return(
        <div className={styles.Orders}>
        <h3>Tvoje objednávky</h3>
        {this.props.loading ? <Spinner/> : orderMap}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        orders: state.fetched.orders,
        loading: state.fetched.loading
      //total: state.customer.total}
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //startAction: ()=>{dispatch(appActions.fetchOrdersStart())},
        fetchOrdersInit: ()=>{dispatch(appActions.fetchOrdersInit())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler(Orders, axios))