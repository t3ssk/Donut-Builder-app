const initialState = {
    orders: [],
    loading: false, 
    ordered: null

}

export const orderReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'UPDATE_PURCHASED': 
                return {...state, ordered: null}
            
            case 'PURCHASE_DONUT_START': 
            return {...state, 
                    loading: true, 
                    ordered: null}
            case 'PURCHASE_DONUT_SUCCESS':
                    return {
                        ...state,
                        loading: false,
                        ordered: true,
                        orders: [...state.orders, {
                            orderId: action.orderId,
                            order: action.orderData}]
                    }
            case 'PURCHASE_DONUT_FAILURE':
                return {
                    ...state,
                    loading: false,
                    ordered: null,
                    error: action.error
                }
            default:
                return state;
        }
}