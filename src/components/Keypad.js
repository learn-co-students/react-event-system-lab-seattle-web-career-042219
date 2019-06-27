// Code Keypad Component Here
import React, { Component } from 'react';

class CLASSNAME extends Component {

    handleEnter = () => {
        console.log('Entering password...');
    }

    render() {
        return (
            <input type="password" onKeyUp={this.handleEnter}/>
        )
    }
}

export default CLASSNAME;