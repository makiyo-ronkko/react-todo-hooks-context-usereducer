import { useState, useEffect } from 'react';

function UseLocalStorageState(key, defaultVal) {
	// key = "todo" string
	// if nothing in localStorage under key, store default value
	// make piece of state, based off of value in localStorage (or default)
	const [state, setState] = useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (err) {
			val = defaultVal;
		}
		return val;
	});

	// use useEffect to update localStorage when state changes
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState];
}

export default UseLocalStorageState;

// const [todos, setTodos] = UseLocalStorageState('todos', []);
// useStaet();
