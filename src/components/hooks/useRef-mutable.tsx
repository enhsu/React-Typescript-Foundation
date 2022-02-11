import { useRef, useState } from "react";

function UseRefMutable() {
    const initialTime = 0
    const [timer, setTimer] = useState(initialTime)
    const intervalRef = useRef<number | null>(null)

    const handleStart = () => {
        intervalRef.current = window.setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
    }
    const handleStop = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
        }
    }
    const handleRest = () => {
        setTimer(initialTime)
    }

    return (
        <div>
            <h2>useRef - mutable ref</h2>
            <div>
                <h3>Timer - { timer }</h3>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleRest}>Reset</button>
            </div>
        </div>
    );
}

export default UseRefMutable;