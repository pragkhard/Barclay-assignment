import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch for actions
import { addTodo } from '../actions'; // Import addTodo action
import { Flex, Box, TextField, Button, Container, DecorativeBox } from '@radix-ui/themes';

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value.trim();
    if (text) {
      dispatch(addTodo(text));
      event.target.elements.text.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <Box style={{ background: 'var(--gray-3)', borderRadius: 'var(--radius-3)' }}>
        <Container size="1" minHeight="100px">
          <Box>
            <Flex mt="6" justify="center">
              <Box maxWidth="350px">
                <TextField.Root size="2" placeholder="Add Todo..." name="text" />
              </Box>
              <Box maxWidth="250px" gap="3" ml="3">
                <Button size="2" variant="soft" type="submit">
                  Add
                </Button>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </form>

  );
};

export default AddTodo;
