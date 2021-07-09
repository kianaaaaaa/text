import React, {Component} from 'react';
import List from '../List'
import PropTypes from "prop-types";

class Item extends Component {
    static propTypes = {
        delList: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
    }

    updateTodo = (id,checked)=>{
        this.props.updateTodo(id,checked)
    }
    delList = (id)=>{
        this.props.delList(id)
    }
    render() {
        let {todos} = this.props

        return (
            <ul className="todo-main">
                {
                    todos.map(item => {
                        return <List key={item.id} {...item} updateTodo={this.updateTodo}  delList={this.delList}/>
                    })
                }
            </ul>
        );
    }
}

export default Item;
