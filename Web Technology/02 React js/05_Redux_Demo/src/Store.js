import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer';
const Store = configureStore({ reducer: rootReducer })

export default Store;