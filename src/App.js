import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import EinstienQuoteComponent from './EinsteinQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponant />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
