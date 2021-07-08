import React, {Component} from 'react'
import  Hello from './index.module.css'

export default class Index extends Component {
    render() {
        return (
            <h1 className={Hello.title}>你好react</h1>
        )
    }
}

