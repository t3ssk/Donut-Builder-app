import { updateState } from "../utility"

const initialState = {
    email: "",
    idToken: "",
    authenticated: false,
    loading: false
}

const authStart = (state, action) => {
    return updateState(state, {loading:true, error: null, email: '', idToken: '', authenticated: false})
}

const authSuccess = (state, action) => {
    return updateState(state, {loading:false, email: action.authData.email, idToken: action.authData.idToken, authenticated: true  })

}

const authFail = (state, action) => {
    return updateState(state, {error: action.error, loading: false, authenticated: false})
}
export const authReducer = (state = initialState, action) => {
    switch (action.types) {
        case 'AUTH/START': return authStart(state, action)
        case 'AUTH/SUCCESS': return authSuccess(state, action)
        case 'AUTH/FAIL': return authFail(state, action)
        default:
            return state;
    }
}