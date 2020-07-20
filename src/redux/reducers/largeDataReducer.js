import { DATAREQUEST_SUCCED, DATAREQUEST_FAILED } from '../actionTypes';

const initialState = {
    snrd: [],
    snru: [],
    attnd: [],
    attnu: [],
    fecd: [],
    fecu: [],
    crcd: [],
    crcu: []
}


const largeDataReducer = (state = initialState, action) => {
    // console.log(state)

    switch (action.type) {

        case DATAREQUEST_SUCCED:
            return {
                ...state,
                snrd: state.snrd.concat({
                    key: Math.random(),
                    y: action.data.stats.snrd,
                    x: action.data.dateNumberic
                }),
                snru: state.snru.concat({
                    key: Math.random(),
                    y: action.data.stats.snru,
                    x: action.data.dateNumberic
                }),
                attnd: state.attnd.concat({
                    key: Math.random(),
                    y: action.data.stats.attnd,
                    x: action.data.dateNumberic
                }),
                attnu: state.attnu.concat({
                    key: Math.random(),
                    y: action.data.stats.attnu,
                    x: action.data.dateNumberic
                }),
                fecd: state.fecd.concat({
                    key: Math.random(),
                    y: action.data.stats.fecd,
                    x: action.data.dateNumberic
                }),
                fecu: state.fecu.concat({
                    key: Math.random(),
                    y: action.data.stats.fecu,
                    x: action.data.dateNumberic
                }),
                crcd: state.crcd.concat({
                    key: Math.random(),
                    y: action.data.stats.crcd,
                    x: action.data.dateNumberic
                }),
                crcu: state.crcu.concat({
                    key: Math.random(),
                    y: action.data.stats.crcu,
                    x: action.data.dateNumberic
                })
            };


        default:
            return state;
    }
}


export default largeDataReducer;