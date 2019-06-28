// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
	handlekeyUp = (ev) => {
		console.log("Entering password...")
	}

	render () {
		return (
			<div>
				Password: <input onKeyUp={this.handlekeyUp} type="password" />
			</div>
		)
	}
}

export default Keypad;
