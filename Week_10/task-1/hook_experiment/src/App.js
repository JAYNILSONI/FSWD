import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';

// Create a context to manage the to-do list
const TodoContext = React.createContext();

// Custom hook to access the TodoContext
function useTodoContext() {
  return useContext(TodoContext);
}

// TodoList component
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const todoInputRef = useRef();
  const [completedCount, setCompletedCount] = useState(0);

  // useEffect to update completedCount
  useEffect(() => {
    const completedTodos = todos.filter(todo => todo.completed);
    setCompletedCount(completedTodos.length);
  }, [todos]);

  // useEffect to save todos to local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // useEffect to update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handler to add a new todo
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
    setTodos(newTodos);
    setNewTodo('');
    todoInputRef.current.focus();
  };

  // Handler to toggle todo completion status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // useMemo to calculate the total number of todos
  const totalTodos = useMemo(() => todos.length, [todos]);

  const todoListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '5px',
    background: '#fff',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const inputContainerStyle = {
    display: 'flex',
    marginBottom: '10px',
  };

  const addButtonStyle = {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const listItemStyle = {
    listStyleType: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={todoListStyle}>
      <h1>Todo List</h1>
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          ref={todoInputRef}
          style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={addTodo} style={addButtonStyle}>
          Add
        </button>
      </div>
      <div>
        <p>Total Todos: {totalTodos}</p>
        <p>Completed Todos: {completedCount}</p>
      </div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', ...listItemStyle }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// App component using useContext
function App() {
  return (
    <TodoContext.Provider>
      <div className="App">
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
