import axios from '../../axios-orders'
export const purchaseDonutSuccess = (id, orderData) => {
    return {type: 'PURCHASE_DONUT_SUCCESS',
                orderId: id, 
            orderData: orderData}
}
export const updatePurchased = () => {
    return {type: 'UPDATE_PURCHASED'}
}
export const purchaseDonutFailure = (error) => {
    return {type: 'PURCHASE_DONUT_FAILURE',
error: error}
}

export const purchaseDonutStart = () => {
    return {type: 'PURCHASE_DONUT_START'}
}

export const purchaseDonut = (orderData) => {
    return dispatch => {
        dispatch(purchaseDonutStart())
        axios.post('/orders.json', orderData)
        .then(response=>{
        dispatch(purchaseDonutSuccess(response.data.name, orderData))})
        .catch((error)=>{dispatch(purchaseDonutFailure(error))})
    }
}


export const contactOnChange = (data) => {
   return {type: 'CONTACT/ON_CHANGE', data: data }
}

export const contactOnSubmit = () => {
    return {type: 'CONTACT/ON_SUBMIT'}
}

