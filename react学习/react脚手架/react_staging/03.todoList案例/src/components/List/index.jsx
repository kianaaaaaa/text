import React, {Component} from 'react';
import PropTypes from "prop-types";

class List extends Component {
    static propTypes = {
        delList: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired,
    }
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
    delList = (id) => {
        return () => {
            const {delList} = this.props
            delList(id)
        }
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
                        onClick={this.delList(id)}>删除
                </button>
            </li>
        );
    }

}

export default List;
