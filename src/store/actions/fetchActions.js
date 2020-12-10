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
export const fetchOrdersInit = (token, localId) => {
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${localId}"`
        return dispatch => {
            axios.get('/orders.json'+queryParams).then((response)=>{
                const fetchedOrders = []
                for (let key in response.data){
                   fetchedOrders.push({...response.data[key], id: key})
                }
                    dispatch(fetchOrdersSuccess(fetchedOrders))

                
            }).catch((error)=>{dispatch(fetchOrdersFailure(error));})
        }
        }
