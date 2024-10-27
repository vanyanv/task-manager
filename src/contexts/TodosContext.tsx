// TodosContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
}

interface TodosContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
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
        id: Date.now() * (Math.random() + 1),
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
      },
      ...prev,
    ]);
  };

  const value = {
    todos,
    addTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
