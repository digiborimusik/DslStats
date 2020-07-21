import { createStore, combineReducers} from 'redux';
import testReducer from './reducers/testReducer';
import DataReducer from './reducers/DataReducer';




const combinedReducer = combineReducers({
    testReducer,
    DataReducer
})


const store = createStore(
  combinedReducer
)


export default store;