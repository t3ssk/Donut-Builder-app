import {updateState} from '../utility'


const initialState = {
    orders: [],
    loading: false, 
    ordered: null

}
const purchaseDonutSuccess = (state, action) => {
    return updateState(state, {loading: false,
        ordered: true,
        orders: [...state.orders, {
            orderId: action.orderId,
            order: action.orderData}]})
}
const purchaseDonutFail = (state, action) => {
    return updateState(state, {loading: false,ordered: null, error: action.error})
}

export const orderReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'UPDATE_PURCHASED': 
                return updateState(state, {ordered: null})
            case 'PURCHASE_DONUT_START': 
                return updateState(state, { loading: true,ordered: null})
            case 'PURCHASE_DONUT_SUCCESS':
                return purchaseDonutSuccess(state, action)       
            case 'PURCHASE_DONUT_FAILURE':
                return purchaseDonutFail(state, action)
            default:
                return state;
        }
}