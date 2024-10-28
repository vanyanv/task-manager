import React from 'react';
import styles from './TodoForm.module.css';
import { useTodos } from '../../contexts/TodosContext';

export default function TodoForm() {
  const { addTodo } = useTodos();

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const todo: string = formData.get('todo') as string;
    console.log('inside OnSubmit', formData.get('todo'));
    addTodo(todo);
    event.currentTarget.reset();
  }

  return (
    <div className={`${styles.container}`}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor='todo' className={styles.label}>
            Enter A Todo
          </label>
          <div className={styles.inputWrapper}>
            <input
              id='todo'
              type='text'
              name='todo'
              placeholder='What needs to be done?'
              className={styles.input}
              required
            />
            <button type='submit' className={styles.button}>
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
