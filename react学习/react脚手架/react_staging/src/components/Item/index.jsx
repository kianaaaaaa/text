import React, {Component} from 'react';
import List from '../List'

class Item extends Component {

    render() {
        let {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(item => {
                        return <List key={item.id} {...item} />
                    })
                }
            </ul>
        );
    }
}

export default Item;
