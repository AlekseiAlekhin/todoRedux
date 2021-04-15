import {createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduser from "./redusers/index";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, reduser)

export const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export let persistor = persistStore(store)

