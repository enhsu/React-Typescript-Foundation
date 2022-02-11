type EventInputType = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function EventInput({ value, handleChange }: EventInputType) {
    return (
        <div>
            <h2>Event props - change evnet</h2>
            <input value={value} onChange={handleChange} />
        </div>
    );
}

export default EventInput;