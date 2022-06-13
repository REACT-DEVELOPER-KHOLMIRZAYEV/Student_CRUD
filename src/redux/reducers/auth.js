import { USER_AUTHENTICATION, USER_FAILURE, USER_SIGNOUT } from "../actions/types"

const initialState = {
    token: '',
    loading: false,
    authorized: false,
    message: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            localStorage.setItem("user-token", action.payload.token);
            return {
                token: action.payload.token,
                loading: action.payload.loading,
                authorized: action.payload.authorized,
                message: action.payload.message
            }
        case USER_FAILURE:
            localStorage.removeItem("user-token");
            localStorage.removeItem("persist:root");
            return {
                token: '',
                loading: false,
                authorized: false,
                message: action.payload.message
            }
        case USER_SIGNOUT:
            localStorage.removeItem("user-token");
            localStorage.removeItem("persist:root");
            return {
                token: '',
                loading: false,
                authorized: false,
                message: ""
            }
        default:
            return state
    }
}

export default auth;