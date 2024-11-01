// providers/TodosProvider.tsx
import React, { useState, ReactNode, useEffect } from 'react';
import { TodosContext } from '../context/TodosContext';
import { Todo } from '../types/todos.types';

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(getInitialState());

  function getInitialState() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  }

  //make sure to update storage as our todo state changes, as the user added or edits
  useEffect(() => {
    try {
      // Only save if todos is not empty
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
      },
      ...prev,
    ]);
  };

  const editTodo = (title: string, id: string) => {
    setTodos((prev) => {
      const editedTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }
        return todo;
      });
      return editedTodos;
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const completeTodo = (id: string) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  const value = {
    todos,
    addTodo,
    completeTodo,
    editTodo,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
