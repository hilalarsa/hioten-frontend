import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import SnackbarReducer from './snackbar/reducer';

const rootReducer = combineReducers({
    Snackbar: SnackbarReducer,
});

const promise = createPromise({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, promise)),
);
export default store;
