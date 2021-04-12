import { FaTimes } from 'react-icons/fa'
import { TaskData } from '../models/TaskData'
import moment from 'moment'

type Props = {
    task: TaskData
    onDeleteTask: (id: string) => void
    onToggleRemindTask: (id: string) => void
}

export const Task = ({ task, onDeleteTask, onToggleRemindTask }: Props) => {
    return (
        <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => onToggleRemindTask(task.id)}>
            <h3>
                {task.text}{' '}
                <FaTimes onClick={() => onDeleteTask(task.id)} style={{ color: 'red', cursor: 'pointer' }} />
            </h3>
            <p>{moment(task.day).format('LLL')}</p>
        </div>
    )
}
