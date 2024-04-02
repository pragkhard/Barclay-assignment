import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux'; // Import useSelector for state access
import { setFilter } from '../actions'; // Import setFilter action
import { useDispatch } from 'react-redux';
import { Flex, Box, Text, CheckboxCards, DropdownMenu, Button } from '@radix-ui/themes';


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTodos =
    filter === 'all' ? todos : filter === 'completed' ? todos.filter((todo) => todo.completed) : todos.filter((todo) => !todo.completed);

  const handleFilterChange = (value) => {
    dispatch(setFilter(value))
    console.log("dfghjkl")
  };
  // const handleFilterChange = (value) => {
  //   // dispatch(setFilter(e.target.value))
  //   console.log('Filter changed to:', value);
  //   setFilter(value); // Update the filter state with the selected value
  //   // Perform any other necessary actions based on the selected value
  // };

  return (
    <div>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
      {/* <Flex gap="3">
        <DropdownMenu.Root value={filter} onSelect={(value) => handleFilterChange(value)}>
          <DropdownMenu.Trigger >
            <Button variant="soft" size="2">
              Options
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content size="2">
            <DropdownMenu.Item value="all" onSelect={(value) => handleFilterChange(value)}>All</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="completed" onSelect={(value) => handleFilterChange(value)} >Completed</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="active" onSelect={(value) => handleFilterChange(value)} >Active</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex> */}
      {/* <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul> */}
      <Box maxWidth="600px">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Box>
    </div>
  );
};

export default TodoList;
