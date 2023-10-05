import { useState } from "react";

export const useCounter = ( limit = 10 ) => {

	const [ counter, setCounter ] = useState( limit );

	const increment = ( step ) => {
		setCounter(counter+step);
	}

	const decrement = ( step ) => {
		if(counter === 0) return;
		setCounter(counter-step);
	}

	const reset = () => {
		setCounter( limit );
	}


	return {
		counter,
		increment,
		decrement,
		reset
	}
}