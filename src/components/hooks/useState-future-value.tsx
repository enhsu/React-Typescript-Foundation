import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

function UseStateFutureValue() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Redpanda',
            email: 'readpanda@email.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <h2>useState - future value</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name: { user?.name }</div>
            <div>user email: { user?.email }</div>
        </div>
    );
}

export default UseStateFutureValue;