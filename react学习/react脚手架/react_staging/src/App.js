import './App.css';

import React, {Component} from 'react'
import {nanoid} from "nanoid";
import Header from './components/Header'
import Item from './components/Item'
import Footer from './components/Footer'

class App extends Component {
    state = {
        todos: [
            {id: nanoid(), name: '吃饭', done: true},
            {id: nanoid(), name: '睡觉', done: false},
            {id: nanoid(), name: '打豆豆', done: false},
        ]
    }
    updateTodo = ()=>{
        console.log('1')
    }
    returnVal = (todoObj) => {
        let {todos} = this.state
        let newTodo = [todoObj, ...todos]
        this.setState({
            todos: newTodo
        })
    }
    returnBox = (done) => {
        console.log(done)
    }

    render() {
        let {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header returnVal={this.returnVal}/>
                    <Item todos={todos} returnBox={this.returnBox} updateTodo={this.updateTodo} />
                    <Footer todos={todos}/>
                </div>
            </div>
        )
    }
}

export default App;
