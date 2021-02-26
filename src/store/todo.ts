import { atom, selector } from 'recoil'

interface Todo {
  text: string
  isCompleted: boorean
  id: number
}

const initialTodo: Todo[] = []

export const todoState = atom({
  key: 'todoState',
  default: initialTodo
})

export const todosCountState = selector({
  key: 'todoCount',
  get: ({ get }) => {
    const todos = get(todoState)
    return todos.length
  }
})

const deleteTodo: Todo[] = (prevTodos: Todo[], id: number) => {
  return prevTodos.filter((todo) => todo.id !== id)
}

export const actions = {
  deleteTodo
}
