import './App.css';
import AppName from './Components/AppName';
import AddTODO from './Components/AddTODO';
import TodoItems from './Components/TodoItems';
import { useState } from 'react'

function App() {

  const initialTodoItems = [{
    name: 'Buy Milk',
    dueDate: '20-01-2024',
  },
  {
    name: 'Go To College',
    dueDate: '20-01-2024',
  },
  ];


  return (
    <>
      <center className='todo-container'>
        <AppName />
        <div className='todo-items'>
          <AddTODO />
          <TodoItems todoItems={initialTodoItems} />
        </div>
      </center>
    </>
  );
}

export default App;
