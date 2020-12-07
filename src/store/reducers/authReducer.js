import { updateState } from "../utility"

const initialState = {
    email: null,
    idToken: null,
    refreshToken: null,
    authenticated: false,
    loading: false
}

const authStart = (state, action) => {
    return updateState(state, {loading:true, 
        error: null, 
        email: null, 
        localId: null,
        idToken: null, 
        authenticated: false})
}

const authSuccess = (state, action) => {
    return updateState(state, {loading:false, 
        error: null, 
        email: action.email, 
        localId: action.localId,
        idToken: action.idToken, 
        authenticated: true  })

}

const authFail = (state, action) => {
    return updateState(state, {error: action.error, loading: false, authenticated: false})
}
const logOut = (state, action) => {
    return updateState(state, {email: null,
        idToken: null,
        refreshToken: null,
        authenticated: false,
        loading: false}) 
    
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH/START': return authStart(state, action)
        case 'AUTH/SUCCESS': return authSuccess(state, action)
        case 'AUTH/FAIL': return authFail(state, action)
        case 'LOG_OUT': return logOut(state, action)
        default:
            return state;
    }
}
export default authReducer