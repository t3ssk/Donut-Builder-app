import {updateState} from '../utility'

const initialState = {
    orders: [],
    loading: false
}

const fetchSuccess = (state, action) => {
    return (state, {orders: [...action.order], loading: false})
}
const fetchFail = (state, action) => {
    return(state, {error: action.error, loading: false})
}
export const fetchReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_ORDER/START': 
            return updateState(state, {loading: true})
        case 'FETCH_ORDER/SUCCESS':
            return fetchSuccess(state, action)
        case 'FETCH_ORDER/FAIL': 
            return fetchFail(state, action)
        default:
         return state;
    }
}