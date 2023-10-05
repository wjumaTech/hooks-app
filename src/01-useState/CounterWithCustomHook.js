import { useCounter } from "../hooks";

export const CounterWithCustomHook = () => {

	const { counter, increment, decrement, reset } = useCounter();

	return(
		<>
			<h3 
				className="text-primary display-5 fs-3">
				Counter With Custom Hook: <small className="text-secondary fs-2">{ counter }</small>
			</h3>
			<div className="btn-group">
				<button onClick={() => increment( 2 )} className="btn btn-primary">+1</button>
				<button onClick={reset} className="btn btn-secondary">Reset</button>
				<button onClick={() => decrement( 2 )} className="btn btn-danger">-1</button>
			</div>
		</>
	)
};