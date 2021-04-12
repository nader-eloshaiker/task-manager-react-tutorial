import { Button } from './Button'

type Props = {
    title?: string
    showAddTask: boolean
    onAddTask: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Header = ({ title = 'Task Tracker', onAddTask, showAddTask }: Props) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color={showAddTask ? 'red' : 'green'}
                text={showAddTask ? 'Close' : 'Add'}
                handleClick={onAddTask}
            />
        </header>
    )
}

// css in tsx
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
