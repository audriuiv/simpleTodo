import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'

let AddTask = ({dispatch}) => {
    let input 

    return (
        <div>
            <input ref={node => {
                input = node
            }} />
            <button type="button" 
            onClick={e => {
                if (!input.value.trim()){
                    return
                }

                dispatch(addTask(input.value))
                input.value = ''
            }}>Prideti užduotį
            </button>
        </div>
    )

}

 AddTask = connect()(AddTask)

 export default AddTask