import { useRef } from "react";

function UseRefHTMLElement() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        inputRef.current?.focus()
    }
    return (
        <div>
            <h2>useRef - HTML element</h2>
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Input focus</button>
        </div>
    );
}

export default UseRefHTMLElement;