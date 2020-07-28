import React from 'react';
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Fetching from './fetching'

class App extends React.Component {

    // onDeleteCompletion = () => {
    //     this.setState(prevState => {
    //         let newState = prevState.tasks.filter(task => !task.completed)
    //         return {
    //             tasks: newState
    //         }
    //     })
    // }

    render() {
        return (
            <section id="todo">
                {/* {this.state.fetching ? <Fetching /> : null} */}

                <BrowserRouter>

                    <Switch>
                        <Route path="/add-task" component = {AddTask} />
                        <Route path="/:filter?" component = {ToDoList} />
                    </Switch>

                    <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}

export default App