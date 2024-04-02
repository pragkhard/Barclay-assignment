import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch for actions
import { toggleTodo, deleteTodo } from '../actions'; // Import actions
import { Flex, Box, Text, CheckboxCards, Button } from '@radix-ui/themes';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    dispatch(toggleTodo(todo.id))
    console.log("fcgvhjkl")
    if (e.checked) {
      todo.completed = true;
    }
  };
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  return (
    <>
      {/* <li>
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
        <button onClick={handleDelete}>Delete</button>
      </li> */}
      <Box maxWidth="600px">
        <CheckboxCards.Root>
          <CheckboxCards.Item value="1" type="checkbox" onClick={(e) => handleToggle(e)}>
            <Flex direction="column" width="100%">
              <Text weight="bold" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Text>
              {/* <input type="checkbox" checked={todo.completed} onChange={handleToggle} /> */}
            </Flex>
          </CheckboxCards.Item>

            <Button size="2" variant="soft" type="submit" onClick={handleDelete}>
              Delete
            </Button>
         
        </CheckboxCards.Root>
      </Box>
    </>
  );
};

export default TodoItem;
