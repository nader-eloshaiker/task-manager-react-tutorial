import { Button } from './Button'
import { useLocation } from 'react-router'

type Props = {
    title?: string
    showAddTask: boolean
    onAddTask: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Header = ({ title = 'Task Tracker', onAddTask, showAddTask }: Props) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAddTask ? 'red' : 'green'}
                    text={showAddTask ? 'Close' : 'Add'}
                    handleClick={onAddTask}
                />
            )}
        </header>
    )
}

// css in tsx
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
