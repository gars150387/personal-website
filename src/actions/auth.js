import { type } from "../types/type"


export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(123456, 'Pedro')
        }, 1500)
    }
}


export const login = (uid, displayName) => {
    return {
        type: type.login,
        payload: {
            uid,
            displayName
        }
    }
}

