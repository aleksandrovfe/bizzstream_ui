import { configureStore } from '@reduxjs/toolkit'
import documentReducer from './reducers/documentReducer'

export default configureStore({
    reducer: {document: documentReducer},
})