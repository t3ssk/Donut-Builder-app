import {updateState} from '../utility'

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
            return updateState(state, action.data)
        case 'CONTACT/ON_SUBMIT':
            return state
        default:
            return state
    }
}

export default customerReducer