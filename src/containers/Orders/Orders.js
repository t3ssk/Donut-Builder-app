import React, {Component} from 'react'
import Order from './Order'
import styles from './Orders.module.css'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {

    state = {
        orders: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading:true})
        axios.get('/orders.json').then((response)=>{
            const stateOrdersCp = []
            for(let key in response.data){
                stateOrdersCp.push({...response.data[key], id: key})
            }
            this.setState({orders: stateOrdersCp, loading: false})
        }).catch((err)=>{console.log(err); this.setState({loading:false})})
    }
    render(){
        console.log(this.state)
        const orderMap = this.state.orders.map(item=>{
            return <Order key={item.id} icing={item.order.icing} topping={item.order.topping} napln={item.order.napln} total={+item.order.total}/>})

        return(
        <div className={styles.Orders}>
        <h3>Tvoje objednávky</h3>
        {orderMap}
        </div>
        )
    }
}

export default withErrorHandler(Orders, axios)