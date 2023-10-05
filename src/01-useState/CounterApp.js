
import { useState } from 'react';

export const CounterApp = () => {

	const [counter, setCounter] = useState(10);
	const [counterGroup, setCounterGroup] = useState({
		counterUno: 1,
		counterDos: 2,
		counterTres: 3
	});

	return(
		<>

			<h3 className="mt-5">Counter <strong>{ counter }</strong> </h3>

			<div className="btn-group">
				<button 
					className="btn btn-primary"
					onClick={ () => setCounter(counter+1) }
				>
					Incrementar +1
				</button>
				<button className="btn btn-danger">Disminuir -1</button>
			</div>


			<h3 className="mt-5">Counter Uno: <strong>{ counterGroup.counterUno }</strong> </h3>
			<h3 className="mt-5">Counter Dos: <strong>{ counterGroup.counterDos }</strong> </h3>
			<h3 className="mt-5">Counter Tres: <strong>{ counterGroup.counterTres }</strong> </h3>

			<div className="btn-group">
				<button 
					className="btn btn-primary"
					onClick={ () => setCounterGroup({
						...counterGroup,
						counterUno: counterGroup.counterUno+1,
					}) }
				>
					Incrementar counterUno +1
				</button>
				<button className="btn btn-danger">Disminuir counterUno -1</button>
			</div>


		</>
	)
}