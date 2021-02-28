import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { todosState, todosCountState } from '@/store/todo'
import TodoCreater from '@/components/todo-creater'

const Home: FC = () => {
  const todos = useRecoilValue(todosState)
  const todosCountState = useRecoilValue(todosState)

  return (
    <div>
      <h1>TODO App</h1>
      <TodoCreater />
    </div>
  )
}
export default Home
