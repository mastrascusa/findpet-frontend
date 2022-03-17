import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProviderProps {
    children: ReactNode
}

export interface UserContextType {
    access: string
    refresh: string
    user?: {
        username: string
        first_name: string
        last_name: string
        email: string
        is_active: string
        id: string
    }
}

interface AuthContextType {
    user: UserContextType | undefined
    setUser: (value: UserContextType | undefined) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserContextType>()

    useEffect(() => {
        console.log(document.cookie)
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
