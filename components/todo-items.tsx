import React, { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import { actions, todosState } from '@/store/todo'

interface Props {
  todo: string
}

const TodoItem: FC<Props> = ({ todo }) => {
  const setTodos = useSetRecoilState(todosState)
  const onClick = () => {
    setTodos((prevTods) => {
      return actions.deleteTodo(prevTods, id)
    })
  }
  return <p onClick={onClick}>・{todo}</p>
}
export default TodoItem
