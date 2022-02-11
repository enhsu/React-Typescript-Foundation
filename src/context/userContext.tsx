import { createContext, useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

type UserContextProviderType = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const UserContext = createContext<UserContextType | null>(null)

function UserContextProvider({ children }: UserContextProviderType) {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    );
}

export default UserContextProvider;