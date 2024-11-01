import React from 'react';
import styles from './EditingForm.module.css';
import { useTodos } from '../../contexts/TodosContext';

type EditingFormProps = {
  title: string;
  id: string;
  setEditing: (input: boolean) => void;
};

export default function EditingForm({
  title,
  id,
  setEditing,
}: EditingFormProps) {
  //context
  const { editTodo } = useTodos();

  function submitEdit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newTodo = formData.get('edit') as string;
    if (newTodo === '') return;
    editTodo(newTodo, id);
    setEditing(false);
  }
  return (
    <>
      <form onSubmit={submitEdit} className={styles.editingForm}>
        <label className={styles.checkboxContainer}>
          <input type='text' name='edit' defaultValue={title} />
        </label>
        <button type='submit' className={styles.editButton}>
          Confirm
        </button>
        <button
          type='button'
          className={styles.deleteButton}
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </form>
    </>
  );
}
