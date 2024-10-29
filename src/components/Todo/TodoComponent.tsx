import { useState } from 'react';
import { useTodos } from '../../contexts/TodosContext';
import styles from './Todo.module.css';

type TodoPropTypes = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoComponent({ id, title, completed }: TodoPropTypes) {
  const [editing, setEditing] = useState<boolean>(false);

  const { completeTodo, editTodo } = useTodos();

  function submitEdit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newTodo = formData.get('edit') as string;
    editTodo(newTodo, id);
    setEditing(false);
  }
  return (
    <li
      key={id}
      className={`${styles.todo} ${completed ? styles.completed : ''}`}
    >
      {editing ? (
        <>
          <form onSubmit={submitEdit}>
            <label className={styles.checkboxContainer}>
              <input type='text' name='edit' placeholder={title} />
            </label>
            <button type='submit' className={styles.editButton}>
              Confirm
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </form>
        </>
      ) : (
        <>
          <label className={styles.checkboxContainer}>
            <input
              type='checkbox'
              checked={completed}
              onChange={() => completeTodo(id)}
              className={styles.checkbox}
            />
            <span className={styles.text}>{title}</span>
          </label>
          <button
            className={styles.editButton}
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button className={styles.deleteButton}>Delete</button>
        </>
      )}
    </li>
  );
}
