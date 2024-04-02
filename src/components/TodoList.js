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

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value))
    console.log("dfghjkl")
  };

  return (
    <div>
      <Box m="6">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </Box>

      <Box maxWidth="600px">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Box>
    </div>
  );
};

export default TodoList;
