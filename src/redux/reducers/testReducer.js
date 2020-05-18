import { ADD_SOMETHING, MODIFY_SOMETHING , DELETE_SOMETHING , TELNET_REQUEST , TELNET_REQUEST_SUCCEED , TELNET_REQUEST_FAILED } from '../actionTypes';
import tlnt from '../../modules/tlnt';
const stats = tlnt;
  

const initialState = {
  someshitList: []
}

const testReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case ADD_SOMETHING:
        if(!stats.getPending()){
          stats.getStats()
          .then(a => {console.log(a)}).catch(err => console.log(err))
        } else {
          console.log('prending')
        }
        
      return {
        ...state,
        someshitList: state.someshitList.concat({
          key: Math.random(),
          name: action.data
        })
      };

      case TELNET_REQUEST_SUCCEED: 
      return {
        ...state,
        someshitList: state.someshitList.concat({
          key: Math.random(),
          name: action.data
        })
      };


    case DELETE_SOMETHING:
      return {
        ...state,
        someshitList: state.someshitList.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default testReducer;