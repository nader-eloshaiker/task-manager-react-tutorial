import { useEffect, useState } from 'react'

import { AddTask } from './components/AddTask'
import { Api } from './services/Api'
import { Header } from './components/Header'
import { TaskData } from './models/TaskData'
import { Tasks } from './components/Tasks'

function App() {
    const [showAddTask, setShowAddTask] = useState<boolean>(false)
    const [tasks, setTasks] = useState<Array<TaskData>>([])

    useEffect(() => {
        const resolvedTasks = async () => {
            const result = await Api.getTasks()
            setTasks(result)
        }

        resolvedTasks()
    }, [])

    // Delete Task
    const handleDeleteTask = async (id: string) => {
        await Api.deleteTask(id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const handleToggleRemindTask = async (id: string) => {
        const task = await Api.getTask(id)
        const updatedTask = await Api.putTask({ ...task, reminder: !task.reminder })
        setTasks(tasks.map((taskItem) => (taskItem.id === id ? updatedTask : taskItem)))
    }

    const handleAddTask = async (newTask: TaskData) => {
        const result = await Api.postTask(newTask)
        setTasks([...tasks, result] as Array<TaskData>)
    }

    return (
        <div className="container">
            <Header onAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
            {showAddTask && <AddTask onAddTask={handleAddTask} />}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onToggleRemindTask={handleToggleRemindTask} />
            ) : (
                <p>No tasks to show</p>
            )}
        </div>
    )
}

export default App
