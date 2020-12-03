const initialState = {
        name: '',
        street: '',
        zip: "",
        city: "",
        email: "",
        deliveryMethod: "slow"
}

const customerReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CONTACT/ON_CHANGE':
            console.log(action.data)
            return {...state, ...action.data}
        case 'CONTACT/ON_SUBMIT':
            return state
        default:
            return state
    }
}

export default customerReducer