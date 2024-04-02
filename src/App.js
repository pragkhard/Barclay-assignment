import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AppTodo';
import { Provider } from 'react-redux';
import store from './store'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <div className="App">
        <h1>Todo List</h1>
        <Provider store={store}> {/* Wrap App with Provider if using persistence */}
          <AddTodo />
          <TodoList />
        </Provider> {/* Close Provider if using persistence */}
      </div>
    </Theme>
  );
}

export default App;
