import React from 'react';

class ToDo extends React.Component{
    state = { 
        completed: this.props.task.completed
    }

    toggleCompletion = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.onToggleCompletion(this.props.task.id)
    }
    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed? 'bg-success': null)}>
                {this.props.task.name}
                  <button className={"btn btn-sm ml-auto btn-outline-success " + (this.state.completed? 'btn-success': 'btn-outline-success' )} onClick={() => this.toggleCompletion()}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo