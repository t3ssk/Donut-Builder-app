const initialState = {
    total: 0,
    finalOrder: {icing: {cena: 0}, topping:{cena: 0}, napln: {cena: 0}},
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_ORDER':
            console.log(action.finalOrder)
            return {...state, finalOrder: action.finalOrder}
        case 'GET_TOTAL':
            return {...state, total: action.total}  
        default:
            return state;
    }
}

export default reducer