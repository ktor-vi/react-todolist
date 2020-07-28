import React, {Component} from 'react';
import { connect } from 'react-redux';
import { taskCompletion } from '../actions';
class ToDo extends Component{

    state = {
        completed: this.props.task.completed
    }

    toggleCompletion = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.taskCompletion(this.props.task)
    }
    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed? 'bg-success': null)}>
                {this.props.task.name}
                  <button className={"btn btn-sm ml-auto btn-outline-success " + (this.state.completed? 'btn-success': 'btn-outline-success' )} onClick={() => this.toggleCompletion() }>&#x2713;</button>
            </li>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        taskCompletion: (item) => {
            dispatch(taskCompletion(item))
        },
    }
}

export default connect(null, mapDispatchToProps)(ToDo);