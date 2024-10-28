// TodosContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Todo } from '../types/todos.types';

interface TodosContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  completeTodo: (id: string) => void;
}

interface TodosProviderProps {
  children: ReactNode;
}

// Context
const TodosContext = createContext<TodosContextType | null>(null);

// Hook
export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider');
  }
  return context;
};

// Provider
export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
