import { ADD_SOMETHING, MODIFY_SOMETHING , DELETE_SOMETHING } from './actionTypes';


export const add_something = (data) => (
    {
        type: ADD_SOMETHING,
        data: data
    }
)

export const modify_something = (key,data) => (
    {
        type: MODIFY_SOMETHING,
        key:key,
        data: data
    }
)

export const delete_something = (key) => (
    {
        type:DELETE_SOMETHING,
        key:key
    }
)