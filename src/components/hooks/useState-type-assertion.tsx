import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}
function UseStateTypeAssertion() {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'RedPanda',
            email: 'redpanda@email.com'
        })
    }

    return (
        <div>
            <h2>useState - type assertion</h2>
            <button onClick={handleLogin}>Login</button>
            <div>user name: { user.name }</div>
            <div>user email: { user.email }</div>
        </div>
    );
}

export default UseStateTypeAssertion;