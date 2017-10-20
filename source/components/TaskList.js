import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'


const TaskList = ({tasks}) => (
    <ul>
        {tasks.map(task => 
            <Task 
                key={task.id} 
                {...task}
             />
        )}
    </ul>
)

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
    ).isRequired
}

export default TaskList