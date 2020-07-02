import { ADD_SOMETHING, MODIFY_SOMETHING, DELETE_SOMETHING, TELNET_REQUEST, TELNET_REQUEST_SUCCEED, TELNET_REQUEST_FAILED, RUN, STOP, SET_CLIENT, SET_INTERVAL, SET_IP, SET_LOGIN, SET_PASSWORD, SHOW_RAW, SHOW_SNRCHARTS, SHOW_ATTCHARTS, SHOW_ERRORSCHARTS } from '../actionTypes';
import tlnt from '../../modules/tlnt';
const stats = tlnt;


const initialState = {
  someshitList: [],
  status: { isRun: false, date: null },
  options: { client: 'Dlink2640u', interval: 1, login: 'admin', password: 'admin', ip: '192.168.1.1' },
  viewParameters: { showRaw: false, showSnrCharts: true, showAttCharts: false, showErrorsCharts: false }

}

const testReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case RUN:
      return {
        ...state,
        status: { isRun: true, date: new Date() }
      }

    case STOP:
      return {
        ...state,
        status: { isRun: false }
      }

    case SET_CLIENT:
      return {
        ...state,
        options: { ...state.options, client: action.data }
      }
    case SET_INTERVAL:
      return {
        ...state,
        options: { ...state.options, interval: action.data }
      }
    case SET_LOGIN:
      return {
        ...state,
        options: { ...state.options, login: action.data }
      }
    case SET_PASSWORD:
      return {
        ...state,
        options: { ...state.options, password: action.data }
      }
    case SET_IP:
      return {
        ...state,
        options: { ...state.options, ip: action.data }
      }
    case SHOW_RAW:
      return {
        ...state,
        viewParameters: { ...state.viewParameters, showRaw: true, showSnrCharts: false, showAttCharts: false, showErrorsCharts: false }
      }
    case SHOW_SNRCHARTS:
      return {
        ...state,
        viewParameters: { ...state.viewParameters, showRaw: false, showSnrCharts: true, showAttCharts: false, showErrorsCharts: false }
      }
    case SHOW_ATTCHARTS:
      return {
        ...state,
        viewParameters: { ...state.viewParameters, showRaw: false, showSnrCharts: false, showAttCharts: true, showErrorsCharts: false }
      }
    case SHOW_ERRORSCHARTS:
      return {
        ...state,
        viewParameters: { ...state.viewParameters, showRaw: false, showSnrCharts: false, showAttCharts: false, showErrorsCharts: true }
      }
    case TELNET_REQUEST_SUCCEED:
      return {
        ...state,
        someshitList: state.someshitList.concat({
          key: Math.random(),
          data: action.data
        })
      };
    // case TELNET_REQUEST_SUCCEED:
    //   return {
    //     ...state,
    //     someshitList: [{
    //       key: Math.random(),
    //       data: action.data
    //     }].concat(state.someshitList)
    //   };

    case TELNET_REQUEST_FAILED:
      return {
        ...state,
        someshitList: state.someshitList.concat({
          key: Math.random(),
          data: action.data
        })
      };

    // case TELNET_REQUEST_FAILED:
    //   return {
    //     ...state,
    //     someshitList: [{
    //       key: Math.random(),
    //       data: action.data
    //     }].concat(state.someshitList)
    //   };


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