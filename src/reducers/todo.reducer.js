import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, { id: uuidv4(), task: action.task, completed: false }];
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		case 'TOGGLE':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		case 'EDIT':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, task: action.newTask } : todo
			);
		default:
			return state;
	}
};

export default reducer;

// {type: "ADD", task: "Walk the dog"}
// {type: "REMOVE", id: 12313231}
// {type: "TOGGLE", id: 12313231}
// {tyle: "EDIT",id: 12313231, newTask: "Walk the cat" }
