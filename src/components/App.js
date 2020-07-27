import React from 'react';
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './addTask'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import initialData from '../initialData'
import uniqid from 'uniqid'
import Fetching from './fetching'

class App extends React.Component {

    state = {
        tasks: [],
        fetching: true
    }

    onToggleCompletion = (taskId) => {

        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ? taskToUpdate : task
            })
        ))
    }

    onAddTask = (newTaskName) => {
        console.log(uniqid('jser'))
        let newTask = {
            id: uniqid('jser'),
            name: newTaskName,
            completed: false
        }
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    onDeleteCompletion = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
    }
    shouldComponentUpdate = () => {
        console.log('Hello from shouldComponentUpdate')
        return true
    }

    componentDidMount = () => {
        let delay = Math.floor(Math.random() * 5000 )

        setTimeout(() => {
            this.setState({
                fetching: false,
                tasks: initialData
            })
        }, delay)
    }

    componentDidUpdate = () => {
        console.log('Bonjour de componentDidUpdate')
    }
    getSnapshotBeforeUpdate = () => {
        console.log('Bonjour de getSnapshotBeforeUpdate')
        return true
    }

    render() {
        console.log('Bonjour de render')
        return (
            <section id="todo">
                {this.state.fetching ? <Fetching /> : null}

                <BrowserRouter>

                    <Switch>
                        <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompletion={this.onToggleCompletion} />} />
                    </Switch>

                    <NavBar onDeleteCompletion={this.onDeleteCompletion} />
                </BrowserRouter>
            </section>
        )
    }
}

export default App