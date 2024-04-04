import React from 'react'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>
      <h1>CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList />} />
          <Route path='/create-task' element={<TaskForm />}/>
          <Route path='/edit-task/:id' element={<TaskForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App