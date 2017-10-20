import {ADD_TASK, REMOVE_TASK} from '../constants'

let nextId = 0 
export const addTask = (text) => {
    return {
        type: ADD_TASK,
        id: nextId++,
        text
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
}