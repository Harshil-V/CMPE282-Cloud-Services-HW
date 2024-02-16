/* eslint-disable react/prop-types */
import { VStack, Text } from '@chakra-ui/react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <Text>Add a task/to do!!!</Text>;
  }

  return (
    <VStack>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </VStack>
  );
}

export default TodoList;
