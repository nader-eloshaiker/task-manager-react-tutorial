import { Task } from './Task'
import { TaskData } from '../models/TaskData'

type Props = {
    tasks: Array<TaskData>
    onDeleteTask: (id: string) => void
    onToggleRemindTask: (id: string) => void
}

export const Tasks = ({ tasks, onDeleteTask, onToggleRemindTask }: Props) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleRemindTask={onToggleRemindTask} />
            ))}
        </>
    )
}
