import React, {Component} from 'react';

class List extends Component {
    state = {
        mouse: false
    }
    updateTodo = (id) => {
        return (e) => {
            const {updateTodo} = this.props
            let {checked} = e.target
            updateTodo(id, checked)
        }
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }
    delList = () => {
        console.log('1')
    }

    render() {
        let {name, done, id} = this.props
        let {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.updateTodo(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}
                        onClick={this.delList}>删除
                </button>
            </li>
        );
    }

}

export default List;
