import {applyMiddleware, createStore} from "redux";
import reducer from "./redusers/index";
import thunk from "redux-thunk";


// const persistConfig = {
//     key: 'root',
//     storage,
//     stateReconciler: hardSet,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))
// export const store = createStore(reducer,applyMiddleware(thunk))


// export const persistor = persistStore(store)

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());