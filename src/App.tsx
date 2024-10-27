import './App.css';
import { useTodos } from './contexts/TodosContext';

function App() {
  const { todos, addTodo } = useTodos();

  return (
    <>
      <div>
        <button onClick={() => addTodo('New Todo')}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
