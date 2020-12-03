import axios from '../../axios-orders'

export const fetchOrdersSuccess = (ordersData) => {
    return {type: 'FETCH_ORDER/SUCCESS', order: ordersData}
}

export const fetchOrdersFailure = (error) => {
    return {type: 'FETCH_ORDER/FAIL'}
}
export const fetchOrdersStart = () => {
    return {type: 'FETCH_ORDER/START'}
}
export const fetchOrdersInit = () => {
        return dispatch => {
            axios.get('/orders.json').then((response)=>{
                const fetchedOrders = []
                console.log(response.data)
                for (let key in response.data){
                    fetchedOrders.push({...response.data[key], id: key})
                }
                    dispatch(fetchOrdersSuccess(fetchedOrders))

                
            }).catch((error)=>{dispatch(fetchOrdersFailure(error));})
        }
        }
