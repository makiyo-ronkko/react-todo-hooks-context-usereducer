import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
	// key = "todo" string
	// if nothing in localStorage under key, store default value
	// make piece of state, based off of value in localStorage (or default)
	const [state, dispatch] = useReducer(reducer, defaultVal, () => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (err) {
			val = defaultVal;
		}
		// return defaultValue or value store in localStorage
		return val;
	});

	// use useEffect to update localStorage when state changes
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, dispatch];
}

export { useLocalStorageReducer };

// const [todos, setTodos] = UseLocalStorageState('todos', []);
// useStaet();
