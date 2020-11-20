import React, { Fragment, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodosContext } from './context/todos.contex';

function TodoList() {
	const { todos } = useContext(TodosContext);
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, index) => (
						<Fragment>
							<Todo
								// id={todo.id}
								// task={todo.task}
								key={todo.id}
								// completed={todo.completed}
								{...todo}
							/>
							{index < todos.length - 1 && <Divider />}
						</Fragment>
					))}
				</List>
			</Paper>
		);
	return null;
}

export default TodoList;
