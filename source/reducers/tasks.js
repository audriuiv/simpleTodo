import {ADD_TASK, REMOVE_TASK} from '../constants'

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
            id: action.id,
            text: action.text
        }
      ]
    case REMOVE_TASK: 
        return state.filter((item) => item.id !== action.id)
           
    default:
      return state
  }
}

export default tasks