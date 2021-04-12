import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { TaskData } from './models/TaskData'
import { Tasks } from './components/Tasks'
import moment from 'moment'
import { useState } from 'react'

function App() {
    const [showAddTask, setShowAddTask] = useState<boolean>(false)
    const [tasks, setTasks] = useState<Array<TaskData>>([
        {
            id: '1',
            text: 'Doctors Appointment',
            reminder: false,
            day: moment().add({ months: 3 }).toDate(),
        },
        {
            id: '2',
            text: 'Dentist Appointment',
            reminder: true,
            day: moment().add({ days: 3 }).toDate(),
        },
    ])

    // Delete Task
    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const handleToggleRemindTask = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
    }

    const handleAddTask = (newTask: TaskData) => {
        setTasks([...tasks, newTask] as Array<TaskData>)
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
