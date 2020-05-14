import { ADD_SOMETHING, MODIFY_SOMETHING , DELETE_SOMETHING } from '../actionTypes';
import tlnt from '../../modules/tlnt';
const stats = tlnt;
  

const initialState = {
  someshitList: []
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SOMETHING:
        stats.getStats().then(a => console.log(a)).catch(err => console.log(err))
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