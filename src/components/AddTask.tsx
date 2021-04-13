import { FC, useState } from 'react'
import moment, { Moment } from 'moment'

import Datetime from 'react-datetime'
import { TaskData } from '../models/TaskData'

type Props = {
    onAddTask: (newTask: TaskData) => void
}

export const AddTask: FC<Props> = ({ onAddTask }: Props) => {
    const [text, setText] = useState<string>('')
    const [day, setDay] = useState<Date>(new Date())
    const [reminder, setRemider] = useState<boolean>(false)

    const now = moment()
    const valid = (current: Moment) => {
        return current!.isAfter(now)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text) {
            alert('Please add Task')
            return
        }

        onAddTask({ text, day, reminder } as TaskData)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Title" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day / Time</label>
                <Datetime value={day} isValidDate={valid} onChange={(e) => setDay((e as Moment).toDate())} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={reminder.toString()}
                    checked={reminder}
                    onChange={(e) => setRemider(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}
