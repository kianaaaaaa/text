import React, {Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from "prop-types";

class Header extends Component {
    static propTypes = {
        returnVal: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }

    handleKeyUp = (e) => {
        let {returnVal} = this.props
        if (e.keyCode !== 13) return
        if (e.target.value.trim() === '') {
            alert('输入的值不能为空')
            return;
        }
        let {value} = e.target
        let TodoObj = {id: nanoid(), name: value, done: false}
        returnVal(TodoObj)
        e.target.value = ''
    }
}

export default Header;
