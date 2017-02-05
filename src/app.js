import React from 'react';
import ReactDOM from 'react-dom';

import MeuComponente from './components/MeuComponente';

export default class HelloWorld extends React.Component {
	render() {
		return (
			<h1>Fala Glaucia! Beleza?!</h1>
		);
	}
}

ReactDOM.render(<MeuComponente/>, document.getElementById('app'));