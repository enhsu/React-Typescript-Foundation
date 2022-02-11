import { ProfileProps } from './profile';
import Login from './login'

type PrivateProps = {
    isLogin: boolean;
    component: React.ComponentType<ProfileProps>;
}

function Private({ isLogin, component: Component}: PrivateProps) {
    if (isLogin) {
        return <Component name="RedPanda" />
    }
    return <Login />
}

export default Private;