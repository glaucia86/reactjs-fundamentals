import React from 'react';

import QuizzContainer from './QuizzContainer';

export default class QuizzApp extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 className="text-center"><span className="glyphicon fa fa-futbol-o" aria-hidden="true"></span>Quizz Futebol!!</h1>
					<h2 className="text-center">Teste Aqui Todos os Seus Conhecimentos do Mundo do Futebol!</h2>
    			</div>
    			<div>
    				<QuizzContainer />
    			</div>
			</div>
		);
	}
};


