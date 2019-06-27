import React, {Component} from 'react'


class EyesOnMe extends Component{
    constructor(){
        super()
        this.state = {
            password: ''
        }
    }

    good = () =>{
        return console.log('Good!')
    }
    bad = () =>{
        return console.log('Hey! Eyes on me!')
    }
    render(){
        return (
        <div>
            <button onFocus={this.good} onBlur={this.bad}>Click Me!</button>
        </div>
        )}
}

export default EyesOnMe;