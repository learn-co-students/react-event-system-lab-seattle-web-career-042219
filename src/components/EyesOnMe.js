// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {

constructor(props){
  super(props)
  this.state = {

  }
}

good = () => {
    console.log("Good!")
  }

  bad = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return (
      <button onFocus={this.good} onBlur={this.bad}></button>
    )
  }
}
