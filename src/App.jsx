import React from 'react'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksList />} />
            <Route path='/create-task' element={<TaskForm />}/>
            <Route path='/edit-task/:id' element={<TaskForm />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App