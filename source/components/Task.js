import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {removeTask} from '../actions'
import {connect} from 'react-redux'

//const Task = ({onDelClick, text}) => (
class Task extends Component {
    

    onDelClick(e, id) {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(removeTask(id))
       
  }
    render()
    {
        const { text, id } = this.props
        return <li>
    {text}
     <a href="#"
        onClick={
            e => {
                this.onDelClick(e, id)
            }
        }
     >
        Šalinti
     </a>
    </li>
    }

    
//)
}

Task.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

//export default Task 
export default connect()(Task)