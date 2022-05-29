import { createSlice } from "@reduxjs/toolkit";
import { type } from "../types/type";
 
 const initialState = {
     loading: false,
     msgError: null
 }
 
 
 export const uiReducerSlice = createSlice({
    name: 'uiReducer',
    initialState: initialState,
    reducer:{
        setValues: (state, action) =>{
                switch (type.type) {
                    case type.uiSetError:
                        return {
                            ...state,
                            msgError: action.payload
                        }
                        case type.uiRemoveError:
                        return {
                            ...state,
                            msgError: null
                        }
                
                    default:
                        break;
                }
            }
    } 

})

// export const uiReducer = (state = initialState, action) =>{
//     switch (type.type) {
//         case type.uiSetError:
//             return {
//                 ...state,
//                 msgError: action.payload
//             }
//             case type.uiRemoveError:
//             return {
//                 ...state,
//                 msgError: null
//             }
    
//         default:
//             break;
//     }
// }
