import {updateState} from '../utility'

const initialState = {
    total: 0,
    finalOrder: {icing: {cena: 0}, topping:{cena: 0}, napln: {cena: 0}},
}

const donutReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_ORDER':
            return updateState(state, {finalOrder: action.finalOrder})
        case 'GET_TOTAL':
            return updateState(state, {total: action.total})
        case 'CLEAR_PURCHASE': 
        return  updateState(state,{total: 0,
        finalOrder: {icing: {cena: 0}, topping:{cena: 0}, napln: {cena: 0}}})
        default:
            return state;
    }
}

export default donutReducer