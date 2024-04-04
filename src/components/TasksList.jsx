import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

const TasksList = () => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

  return (
    <>
        {
            tasks.map( task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={ () => handleDelete(task.id)}>Delete</button>
                </div>
            ))
        }
    </>
  )
}

export default TasksList