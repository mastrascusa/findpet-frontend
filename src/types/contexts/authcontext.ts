import { ReactNode } from "react"
import { User } from "../api/register"

export interface AuthContextProviderProps {
    children: ReactNode
}

export interface UserContextType {
    access: string
    refresh: string
    user: User
}

export interface AuthContextType {
    user: UserContextType | undefined
    setUser: (value: UserContextType | undefined) => void
}
