import { createContext, useEffect, useState } from "react";

import { getUserInfo } from "../api/getUserInfo";
import { updateTokens } from "../api/updateTokens";
import { checkWasConnected, setWasConnected } from "../functions/wasConnected";

import { AuthContextProviderProps, AuthContextType, UserContextType } from "../types/contexts/authcontext";
import { TokensType } from "../types/api/updatetokens";

import { useLoading } from "../hooks/useLoading";

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserContextType>()
    const { setIsLoading } = useLoading()

    useEffect(() => {
        async function initializeUser() {
            const [data, type] = await updateTokens()

            if (type === "UPDATED") {
                const tokens = data as TokensType
                const user = await getUserInfo(tokens.access)
                
                if (user) {
                    const userContext = {
                        ...tokens,
                        user
                    } as UserContextType
                    setUser(userContext)
                    setWasConnected(true)
                    setIsLoading(false)
                } else {
                    setUser(undefined)
                    checkWasConnected()
                    setWasConnected(false)
                    setIsLoading(false)
                }
            } else {
                setUser(undefined)
                checkWasConnected()
                setWasConnected(false)
                setIsLoading(false)
            }
        }
        initializeUser()
    }, [setIsLoading])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
