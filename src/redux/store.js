import { createStore, combineReducers , applyMiddleware } from 'redux';
import testReducer from './reducers/testReducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'



const combinedReducer = combineReducers({
    testReducer: testReducer
})


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combinedReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)


export default store;