import React from 'react'
import { useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

const App = () => {

  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)
  
  return (
    <div className='App'>
      <h1>CRUD</h1>
      <TaskForm />
      <TasksList />
    </div>
  )
}

export default App