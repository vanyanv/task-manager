import React from 'react';
import styles from './Todo.module.css';

type TodoPropTypes = {
  id: number;
  title: string;
  completed?: boolean;
};

export default function TodoComponent({
  id,
  title,
  completed = false,
}: TodoPropTypes) {
  return (
    <li
      key={id}
      className={`${styles.todo} ${completed ? styles.completed : ''}`}
    >
      <label className={styles.checkboxContainer}>
        <input
          type='checkbox'
          checked={completed}
          className={styles.checkbox}
        />
        <span className={styles.text}>{title}</span>
      </label>
    </li>
  );
}
