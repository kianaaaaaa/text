import './App.css';

import React, {Component} from 'react'
import {nanoid} from "nanoid";
import Header from './components/Header'
import Item from './components/Item'
import Footer from './components/Footer'

class App extends Component {
    state = {
        todos: [
            {id: nanoid(), name: '吃饭', done: false},
            {id: nanoid(), name: '睡觉', done: false},
            {id: nanoid(), name: '打豆豆', done: false},
        ],
        mainChecked: false
    }
    // 选项
    updateTodo = (id, checked) => {
        let {todos} = this.state
        todos.forEach(item => {
            if (item.id === id) {
                item.done = checked
            }
        })
        this.setState({
            todos: todos,
            mainChecked: todos.every(item => item.done === true)
        })

    }
    // 删除
    delList = (id) => {
        let {todos} = this.state
        todos = todos.filter(item => {
            return item.id !== id
        })
        this.setState({
            todos: todos
        })
    }
    //新增
    returnVal = (todoObj) => {
        let {todos} = this.state
        let newTodo = [todoObj, ...todos]
        this.setState({
            todos: newTodo,
            mainChecked: false
        })
    }
    // 删除已完成
    returnBox = () => {
        let {todos} = this.state
        todos = todos.filter(item => {
            return item.done !== true
        })
        this.setState({
            todos: todos,
            mainChecked: false
        })
    }

    handleChange = (flag) => {
        let {todos} = this.state
        todos.forEach(item => {
            item.done = !!flag;
        })
        this.setState({
            todos: todos,
            mainChecked: flag
        })
    }

    render() {
        let {todos, mainChecked} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header returnVal={this.returnVal}/>
                    <Item todos={todos} updateTodo={this.updateTodo} delList={this.delList}/>
                    <Footer todos={todos} mainChecked={mainChecked} returnBox={this.returnBox}
                            handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default App;
