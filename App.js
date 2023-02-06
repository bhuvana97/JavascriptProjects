import { blue } from '@mui/material/colors';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const App= () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    const nextId = todos.length + 1;
    setTodos(todos.concat({ id: nextId, text: newTodo }));
    setNewTodo('');
  };
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)', 
};
  return (
    <div>
      
       <Card style={{ width: '18rem',backgroundColor:'beige',marginLeft:'auto',marginRight:'auto' }}>
       <h2>Todo App</h2>
       <div>
      <input type="text" value={newTodo} onChange={handleNewTodoChange} /><br/>
      <div class="textalign">
      <button   onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      </div>
      </Card>
    </div>
  );
};

export default App;

