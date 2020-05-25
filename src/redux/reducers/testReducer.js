import { ADD_SOMETHING, MODIFY_SOMETHING, DELETE_SOMETHING, TELNET_REQUEST, TELNET_REQUEST_SUCCEED, TELNET_REQUEST_FAILED, RUN, STOP, SET_CLIENT , SET_INTERVAL } from '../actionTypes';
import tlnt from '../../modules/tlnt';
const stats = tlnt;


const initialState = {
  someshitList: [],
  status: { isRun: false },
  options: { client: 'Dlink2640u', interval: 1 }

}

const testReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case RUN:
      return {
        ...state,
        status: { isRun: true }
      }

    case STOP:
      return {
        ...state,
        status: { isRun: false }
      }

    case SET_CLIENT:
      return {
        ...state,
        options: {...state.options, client: action.data }
      }
    case SET_INTERVAL:
      return {
        ...state,
        options: {...state.options, interval: action.data }
      }

    case TELNET_REQUEST_SUCCEED:
      return {
        ...state,
        someshitList: state.someshitList.concat({
          key: Math.random(),
          data: action.data
        })
      };

    case TELNET_REQUEST_FAILED:
      return {
        ...state,
        someshitList: state.someshitList.concat({
          key: Math.random(),
          data: action.data
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