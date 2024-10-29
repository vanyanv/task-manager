import { useState } from 'react';
import { useTodos } from '../../contexts/TodosContext';
import styles from './Todo.module.css';
import EditingForm from '../EditingForm/EditingForm';

type TodoPropTypes = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoComponent({ id, title, completed }: TodoPropTypes) {
  const [editing, setEditing] = useState<boolean>(false);

  const { completeTodo, deleteTodo } = useTodos();

  return (
    <li
      key={id}
      className={`${styles.todo} ${completed ? styles.completed : ''}`}
    >
      {editing ? (
        <>
          <EditingForm id={id} title={title} setEditing={setEditing} />
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
          <button
            className={styles.deleteButton}
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
