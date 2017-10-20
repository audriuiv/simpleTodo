import { connect } from 'react-redux'
import TaskList from '../components/TaskList'



const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}



const VisibleTaskList = connect(
  mapStateToProps
)(TaskList)

export default VisibleTaskList