/* eslint-disable react/prop-types */
import { HStack, IconButton, Text, StackDivider, useColorModeValue, Badge } from '@chakra-ui/react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <HStack
      w="full"
      p={4}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      justifyContent="space-between"
      divider={<StackDivider />}
    >
      <Text as={todo.completed ? 's' : ''}>{todo.title}</Text>
      <Badge colorScheme={todo.completed ? "green" : "yellow"}>
        {todo.completed ? "Completed" : "Pending"}
      </Badge>
      <IconButton
        icon={<FaCheckCircle />}
        isRound="true"
        onClick={() => toggleTodo(todo.id)}
      />
      <IconButton
        icon={<FaTrash />}
        isRound="true"
        onClick={() => deleteTodo(todo.id)}
      />
    </HStack>
  );
}

export default TodoItem;
