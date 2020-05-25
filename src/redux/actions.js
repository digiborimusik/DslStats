import { ADD_SOMETHING, MODIFY_SOMETHING , DELETE_SOMETHING , TELNET_REQUEST , TELNET_REQUEST_SUCCEED , TELNET_REQUEST_FAILED , RUN , STOP , SET_CLIENT , SET_INTERVAL} from './actionTypes';


export const delete_something = (key) => (
    {
        type:DELETE_SOMETHING,
        key:key
    }
)


export const run = () => (
    {
        type: RUN
    }
)

export const stop = () => (
    {
        type: STOP
    }
)

export const set_client = (data) => (
    {
        type: SET_CLIENT,
        data: data
    }
)

export const set_interval = (data) => (
    {
        type: SET_INTERVAL,
        data: data
    }
)


export const telnet_request = (data) => (
    {
        type: TELNET_REQUEST,
        data: data
    }
)

export const telnet_request_succed = (data) => (
    {
        type: TELNET_REQUEST_SUCCEED,
        data: data
    }
)

export const telnet_request_failed = (data) => (
    {
        type: TELNET_REQUEST_FAILED,
        data: data
    }
)

