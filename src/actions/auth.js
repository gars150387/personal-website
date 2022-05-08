import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { type } from "../types/type"
import { googleAuthProvider } from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        }, 3500);
    }
}
export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
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

