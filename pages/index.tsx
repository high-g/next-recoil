import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { todosState } from '@/store/todo'
import TodoCreater from '@/components/todo-creater'
import TodoItem from '@/components/todo-items'

const Home: FC = () => {
  const todos = useRecoilValue(todosState)

  return (
    <div>
      <h1>TODO App</h1>
      <TodoCreater />
      {todos.map((todoItem) => (
        <TodoItem id={todoItem.id} key={todoItem.id} todo={todoItem.text} />
      ))}
    </div>
  )
}
export default Home
