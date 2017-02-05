import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
	render() {
		return (
			<h1>Fala Glaucia! Beleza?!</h1>
		);
	}
}
ReactDOM.render(<HelloWorld/>, document.getElementById('app'));