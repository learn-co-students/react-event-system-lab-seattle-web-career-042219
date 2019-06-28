// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

	handleFocus = (ev) => {
		console.log("Good!");
	}
	
	handleBlur = (ev) => {
		console.log("Hey! Eyes on me!");
	}

	render () {
		return (
			<button onFocus={this.handleFocus} onBlur={this.handleBlur}>submit</button>
		)
	}
}

export default EyesOnMe;