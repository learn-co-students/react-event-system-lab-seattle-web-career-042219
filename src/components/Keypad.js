import React, {Component} from 'react'


class Keypad extends Component{
    constructor(){
        super()
        this.state = {
            password: ''
        }
    }

    handlePassword = () =>{
        return console.log('Entering password...')
    }
    render(){
        return (
        <div>
            <input type="password" name='password' onKeyUp={this.handlePassword}/>
        </div>
        )}
}

export default Keypad;