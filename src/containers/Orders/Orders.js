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
     
        this.props.fetchOrdersInit(this.props.token, this.props.localId)
    } 
    render(){
        let orderMap
        if(this.props.orders){
         orderMap = this.props.orders.reverse().map(item=>{
            return <Order key={item.id} icing={item.order.icing.typ} topping={item.order.topping.typ} napln={item.order.napln.typ} total={+item.total}/>})}
        else {orderMap = <p className="Error">Tady zatím žádné objednávky nejsou. Nejprve se přihlaš.</p>}
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
        loading: state.fetched.loading,
        token: state.auth.idToken,
        localId: state.auth.localId  
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrdersInit: (token,localId)=>{dispatch(appActions.fetchOrdersInit(token, localId))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler(Orders, axios))