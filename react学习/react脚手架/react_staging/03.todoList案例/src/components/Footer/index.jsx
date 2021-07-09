import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        returnBox: PropTypes.func.isRequired,
        mainChecked: PropTypes.bool.isRequired,
    }

    completed = () => {
        const {todos} = this.props
        return todos.reduce((prev, item) => prev + (item.done ? 1 : 0), 0)
    }
    handleChange = (e) => {
        const {checked} = e.target
        const {handleChange} = this.props
        handleChange(checked)
    }

    render() {
        let {todos, returnBox, mainChecked} = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={mainChecked} onChange={this.handleChange}/>
                </label>
                <span><span>已完成{this.completed()}</span> / 全部{todos.length}</span>
                <button className="btn btn-danger" onClick={returnBox}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;
