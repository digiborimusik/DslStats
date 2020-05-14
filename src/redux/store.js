import { createStore, combineReducers } from 'redux';
import testReducer from './reducers/testReducer';

const rootReducer = combineReducers({
    testReducer: testReducer
})

const combinedStore = () => createStore(rootReducer);

export default combinedStore;