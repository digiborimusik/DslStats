import { DATAREQUEST_SUCCED, DATAREQUEST_FAILED } from '../actionTypes';
import { times } from 'lodash';

const initialState = {

    snrd: [],
    snru: [],
    attnd: [],
    attnu: [],
    fecd: [],
    fecu: [],
    fecddif: [{x:0,y:0,prevY:0}],
    fecudif: [{x:0,y:0,prevY:0}],
    crcd: [],
    crcu: [],
    crcddif: [{x:0,y:0,prevY:0}],
    crcudif: [{x:0,y:0,prevY:0}],
}


const DataReducer = (state = initialState, action) => {
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
                fecddif: state.fecddif.concat({
                    key: Math.random(),
                    x: action.data.dateNumberic,
                    y: action.data.stats.fecd - state.fecddif[state.fecddif.length - 1].prevY,
                    prevY:action.data.stats.fecd
                }),
                fecudif: state.fecudif.concat({
                    key: Math.random(),
                    x: action.data.dateNumberic,
                    y: action.data.stats.fecu - state.fecudif[state.fecudif.length - 1].prevY,
                    prevY:action.data.stats.fecu
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
                }),
                crcddif: state.crcddif.concat({
                    key: Math.random(),
                    x: action.data.dateNumberic,
                    y: action.data.stats.crcd - state.crcddif[state.crcddif.length - 1].prevY,
                    prevY:action.data.stats.crcd
                }),
                crcudif: state.crcudif.concat({
                    key: Math.random(),
                    x: action.data.dateNumberic,
                    y: action.data.stats.crcu - state.crcudif[state.crcudif.length - 1].prevY,
                    prevY:action.data.stats.crcu
                })
            };


        default:
            return state;
    }
}


export default DataReducer;