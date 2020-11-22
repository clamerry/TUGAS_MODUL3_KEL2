import {Component} from "react";
import React from "react";
import Child from "./Child";

class Parent extends Component{
    
    state = {
        reveal : true
    }

    hideOrShow = () => {
        this.setState((state) => {
            return {reveal : !this.state.reveal}
        })
    
    }
    render() {
        return (
            <div>
                {this.state.reveal ? <Child/> : ''}
                <br/>
                <button onClick={this.hideOrShow}>{this.state.reveal ? 
                'Hide Them All' : 'Show Again'}</button>
            </div>
        );
    }
}

export default Parent;