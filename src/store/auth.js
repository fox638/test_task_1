import {USER_LOGOUT, USER_SIGN_IN} from '../constants'

const auth = localStorage.getItem('auth')

const defaultState = {
    auth
}

export default (state = defaultState, action) => {
    const {type} = action
    switch (type) {
        case USER_SIGN_IN:
            return {...state, auth:true}
        case USER_LOGOUT:
            return {...state, auth: false}
    }
    return state
}