import React, { Component } from 'react';

class Keypad extends Component {

  displayPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <React.Fragment>
        <input onKeyUp={this.displayPassword} type="password" />
      </React.Fragment>
    )
  }

}

export default Keypad
