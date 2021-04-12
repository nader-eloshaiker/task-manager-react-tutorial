type Props = {
    color?: string
    text: string
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ color = 'steelblue', text, handleClick }: Props) => {
    return (
        <button onClick={handleClick} style={{ backgroundColor: color }} className="btn">
            {text}
        </button>
    )
}
