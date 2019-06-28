import React, { Component } from 'react';

class EyesOnMe extends Component {

  onBlur = () => {
    console.log('Hey! Eyes on me!');
  }
  onFocus = () => {
    console.log('Good!');
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    )
  }

}

export default EyesOnMe
