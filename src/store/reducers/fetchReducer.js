const initialState = {
    orders: [],
    loading: false
}

export const fetchReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_ORDER/START': 
            return {...state, loading: true}
        case 'FETCH_ORDER/SUCCESS':
            return {...state,
            orders: [...state.orders, ...action.order], 
            loading: false }
        case 'FETCH_ORDER/FAIL': 
            return {...state, error: action.error, loading: false}
        default:
         return state;
    }
}