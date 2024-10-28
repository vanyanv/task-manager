import { useTodos } from '../../contexts/TodosContext';
import styles from './Todo.module.css';

type TodoPropTypes = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoComponent({ id, title, completed }: TodoPropTypes) {
  const { completeTodo } = useTodos();
  return (
    <li
      key={id}
      className={`${styles.todo} ${completed ? styles.completed : ''}`}
    >
      <label className={styles.checkboxContainer}>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => completeTodo(id)}
          className={styles.checkbox}
        />
        <span className={styles.text}>{title}</span>
      </label>
    </li>
  );
}
