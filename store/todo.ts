import { atom, selector } from 'recoil'

interface Todo {
  text: string
  isCompleted: boorean
  id: number
}

const initialTodo: Todo[] = []

export const todosState = atom({
  key: 'todosState',
  default: initialTodo
})

export const todosCountState = selector({
  key: 'todosCount',
  get: ({ get }) => {
    const todos = get(todosState)
    return todos.length
  }
})

// const deleteTodo: Todo[] = (prevTodos: Todo[], id: number) => {
//   return prevTodos.filter((todo) => todo.id !== id)
// }

// export const actions = {
//   deleteTodo
// }
