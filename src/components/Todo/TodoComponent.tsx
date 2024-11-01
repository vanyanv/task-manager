import { useState } from 'react';
import { useTodos } from '../../contexts/TodosContext';
import styles from './Todo.module.css';
import EditingForm from '../EditingForm/EditingForm';

type TodoPropTypes = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

export default function TodoComponent({
  id,
  title,
  completed,
  createdAt,
}: TodoPropTypes) {
  const [editing, setEditing] = useState<boolean>(false);

  const { completeTodo, deleteTodo } = useTodos();

  const formatDateTime = (date: number): string => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return formatter.format(date);
  };

  return (
    <li
      key={id}
      className={`${styles.todo} ${completed ? styles.completed : ''}`}
    >
      {editing ? (
        <EditingForm id={id} title={title} setEditing={setEditing} />
      ) : (
        <>
          <div className={styles.todoContent}>
            <label className={styles.checkboxContainer}>
              <input
                type='checkbox'
                checked={completed}
                onChange={() => completeTodo(id)}
                className={styles.checkbox}
              />
              <span className={styles.text}>{title}</span>
            </label>
            <p className={styles.createdAt}>{formatDateTime(createdAt)}</p>
          </div>
          <div className={styles.buttonContainer}>
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
          </div>
        </>
      )}
    </li>
  );
}
