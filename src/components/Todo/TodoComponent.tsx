import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import styles from './Todo.module.css';
import EditingForm from '../EditingForm/EditingForm';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import { useAISuggestions } from '../../hooks/useGetAiSuggestions';
type TodoPropTypes = {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  createdAt: number;
};

export default function TodoComponent({
  id,
  title,
  category,
  completed,
  createdAt,
}: TodoPropTypes) {
  const [editing, setEditing] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { completeTodo, deleteTodo } = useTodos();
  const { suggestions, loading, error, getAISuggestions } = useAISuggestions();

  const formatDateTime = (date: number): string => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return formatter.format(date);
  };

  return (
    <li
      className={`${styles.todo} ${completed ? styles.completed : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {editing ? (
        <EditingForm id={id} title={title} setEditing={setEditing} />
      ) : (
        <div className={styles.todoWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.checkboxWrapper}>
              <input
                type='checkbox'
                checked={completed}
                onChange={() => completeTodo(id)}
                className={styles.checkbox}
                id={`todo-${id}`}
              />
              <label htmlFor={`todo-${id}`} className={styles.checkmark} />
            </div>

            <div className={styles.todoInfo}>
              <span className={styles.title}>{title}</span>
              <div className={styles.metaInfo}>
                <CategoryBadge category={category} />
                <time className={styles.createdAt}>
                  {formatDateTime(createdAt)}
                </time>
              </div>
            </div>
          </div>

          <div
            className={`${styles.actions} ${isHovered ? styles.visible : ''}`}
          >
            <button
              className={styles.actionButton}
              onClick={() => setEditing(true)}
              aria-label='Edit todo'
            >
              Edit
            </button>
            <button
              className={`${styles.actionButton} ${styles.deleteButton}`}
              onClick={() => deleteTodo(id)}
              aria-label='Delete todo'
            >
              Delete
            </button>
            <button
              disabled={loading}
              className={`${styles.actionButton} ${styles.deleteButton}`}
              onClick={() => getAISuggestions(title)}
            >
              Ai ✨
            </button>
          </div>
        </div>
      )}
      {loading && <p>Loading suggestions...</p>}
      {suggestions?.map((text: string) => (
        <p key={text}>{text}</p>
      ))}
    </li>
  );
}
