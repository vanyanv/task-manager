export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
}

export interface TodosContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  completeTodo: (id: string) => void;
  editTodo: (title: string, id: string) => void;
  deleteTodo: (id: string) => void;
}
