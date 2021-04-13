import { TaskData } from '../models/TaskData'

interface TaskApi {
    id: string
    text: string
    day: string
    reminder: boolean
}

export class Api {
    private static readonly _url = 'http://localhost:5000'

    public static async getTasks(): Promise<Array<TaskData>> {
        const url = `${Api._url}/tasks`
        const res = await fetch(url)
        const data = await res.json()
        const tasks = data.map((task: TaskApi) => ({ ...task, day: new Date(task.day) })) as Array<TaskData>

        return tasks
    }

    public static async getTask(id: string): Promise<TaskData> {
        const url = `${Api._url}/tasks/${id}`
        const res = await fetch(url)
        const data = await res.json()
        const tasks = { ...data, day: new Date(data.day) } as TaskData

        return tasks
    }

    public static async deleteTask(id: string): Promise<unknown> {
        const url = `${Api._url}/tasks/${id}`
        const res = await fetch(url, { method: 'DELETE' })
        const data = await res.json()

        return data
    }

    public static async postTask(newTask: TaskData): Promise<TaskData> {
        const url = `${Api._url}/tasks`
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newTask),
        })
        const data = await res.json()
        const task = { ...data, day: new Date(data.day) } as TaskData

        return task
    }

    public static async putTask(updTask: TaskData): Promise<TaskData> {
        const url = `${Api._url}/tasks/${updTask.id}`
        const res = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updTask),
        })
        const data = await res.json()
        const task = { ...data, day: new Date(data.day) } as TaskData

        return task
    }
}
