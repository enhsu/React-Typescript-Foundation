import { useState } from "react";
import Private from "../components/component-as-prop/private";
import Profile from "../components/component-as-prop/profile";

function ComponentAsProps() {
    const [isLogin, setIsLogin] = useState(false)
    
    const handleLogin = () => {
        setIsLogin(prevState => !prevState);
    }
    return (
        <div>
            <h1>Component As Props</h1>
            <button onClick={handleLogin}>{ isLogin ? 'Logout' : 'Login'}</button>
            <Private isLogin={isLogin} component={Profile} />
        </div>
    );
}

export default ComponentAsProps;