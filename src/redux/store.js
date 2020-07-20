import { createStore, combineReducers} from 'redux';
import testReducer from './reducers/testReducer';
import largeDataReducer from './reducers/largeDataReducer';




const combinedReducer = combineReducers({
    testReducer,
    largeDataReducer
})


const store = createStore(
  combinedReducer
)


export default store;