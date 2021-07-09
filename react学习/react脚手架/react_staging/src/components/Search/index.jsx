import React, {Component} from 'react';
import axios from 'axios'

class Section extends Component {
    inputRef = React.createRef()

    search = () => {
        let {current: {value: data}} = this.inputRef
        axios.get(`search/user?q=${data}`).then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input type="text" placeholder="输入您搜索的名称" ref={this.inputRef}/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Section;
