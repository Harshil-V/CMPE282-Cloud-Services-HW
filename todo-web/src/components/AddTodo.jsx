/* eslint-disable react/prop-types */
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            toast({
                title: 'No content',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        addTodo(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="8">
                <Input
                    variant="filled"
                    placeholder="Add a new to do..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Button colorScheme="blue" px="8" type="submit">Add</Button>
            </HStack>
        </form>
    );
}

export default AddTodo;
