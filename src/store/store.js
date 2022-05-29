import { configureStore, combineReducers, composeEnhancers } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer'
import { uiReducerSlice } from '../reducers/uiReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducerSlice
})

export const store = configureStore(rootReducer)