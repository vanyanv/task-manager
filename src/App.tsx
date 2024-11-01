// App.tsx
import './App.css';
import TodoComponent from './components/Todo/TodoComponent';
import TodoForm from './components/TodoForm/TodoForm';
import { useTodos } from './hooks/useTodos';
import { Todo } from './types/todos.types';

function App() {
  const { todos } = useTodos();

  return (
    <div className='app'>
      <div className='app-container'>
        <header className='app-header'>
          <h1>My Todo List</h1>
          <p className='app-subtitle'>Stay organized and productive</p>
        </header>
        <main className='app-main'>
          <TodoForm />
          {todos.length > 0 ? (
            <ul className='todo-list'>
              {todos.map((todo: Todo) => (
                <TodoComponent
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  createdAt={todo.createdAt}
                />
              ))}
            </ul>
          ) : (
            <div className='empty-state'>
              <p>No todos yet. Add one above!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
