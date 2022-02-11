type ButtonPropsType = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function EventButton({ handleClick }: ButtonPropsType) {
    return (
        <div>
            <h2>Event props - click event</h2>
            <button onClick={(e) => handleClick(e, 1)}>Click</button>
        </div>
    );
}

export default EventButton;