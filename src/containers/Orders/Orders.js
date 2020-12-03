import React, {Component} from 'react'
import Order from './Order'
import styles from './Orders.module.css'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as appActions from '../../store/actions/index'
class Orders extends Component {
    
    state = {
        orders: [],
        loading: false
    }
   
    componentDidMount(){
        /* axios.get('/orders.json').then((response)=>{
            const stateOrdersCp = []
            for(let key in response.data){
                stateOrdersCp.push({...response.data[key], id: key})
            }
            this.setState({orders: stateOrdersCp, loading: false})
        }).catch((err)=>{console.log(err); this.setState({loading:false})})*/
        this.props.fetchOrdersInit()
    } 
    render(){
        console.log(this.props.orders)
        const orderMap = this.props.orders.map(item=>{
            return <Order key={item.id} icing={item.order.icing.typ} topping={item.order.topping.typ} napln={item.order.napln.typ} total={+item.total}/>})

        return(
        <div className={styles.Orders}>
        <h3>Tvoje objednávky</h3>
        {orderMap}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        orders: state.fetched.orders,
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