import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
    getStudentData = () => {
        axios.get('/api1/students').then(res => {
            console.log(res.data)
        })
    }
    getCarData = () => {
        axios.get('/api2/cars').then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点击我获取学生数据</button>
                <button onClick={this.getCarData}>点击我获取汽车数据</button>
            </div>
        );
    }
}

export default App;
