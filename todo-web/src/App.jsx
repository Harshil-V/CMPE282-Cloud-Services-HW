import { useState } from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (title) => {
		const newTodo = { id: Date.now(), title, completed: false };
		setTodos([...todos, newTodo]);
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<VStack p={10}>
			<Heading mb="8">To Do List ✅</Heading>
			<AddTodo addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</VStack>
	);
}

export default App;
