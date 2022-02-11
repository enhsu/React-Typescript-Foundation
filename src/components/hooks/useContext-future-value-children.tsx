import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function UseContextFutureValueChildren() {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Redpanda',
                email: 'redpanda@email.com'
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <h2>useContext - future value</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name: { userContext?.user?.name }</p>
            <p>User email: { userContext?.user?.email }</p>
        </div>
    );
}

export default UseContextFutureValueChildren;