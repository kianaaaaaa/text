import React, {Component} from 'react';
import Item from "../Itmes";

class List extends Component {
    render() {
        return (
            <div className="row">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        );
    }
}

export default List;
