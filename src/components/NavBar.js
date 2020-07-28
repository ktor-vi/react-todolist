import React, { Component } from 'react'
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { taskDeletion } from '../actions';

class NavBar extends Component {
    render() {
        return (
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <NavLink to="/" className="btn btn-outline-dark bg-light" exact={true}><FaListAlt /></NavLink>
                    <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light" exact={true}><FaPlusSquare /></NavLink>
                </div>
                <button className="btn btn-outline-dark bg-light" onClick={this.props.taskDeletion}><FaTrash /></button>
            </footer>
        )

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        taskDeletion: (item) => {
            dispatch(taskDeletion(item))
        },
    }
}
export default connect(null, mapDispatchToProps)(NavBar);