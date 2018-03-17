import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<p>Header Here</p>

				<div className="container">{this.props.children}</div>

				<p>Footer Here</p>
			</div>
		);
	}
}

export default App;
