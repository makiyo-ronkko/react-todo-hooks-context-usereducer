import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
	{ id: 1, task: 'Study', completed: 'false' },
	{ id: 2, task: 'Eat well', completed: 'true' },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	// const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
	const [todos, dispatch] = useLocalStorageReducer(
		'todos',
		defaultTodos,
		todoReducer
	);

	return (
		// creating {todos: todos} and {dispatch: dispatch} objects is not necessary
		// <TodosContext.Provider value={{ todos }}>
		// 	<DispatchContext.Provider value={{ dispatch }}>
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
