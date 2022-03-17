import { LoginFormType } from "../components/LoginForm";
import { UserContextType } from "../contexts/AuthContext";

export interface JWTTokensError {
    error: string
}

export async function logIn(userInfo: LoginFormType): Promise<[data: UserContextType | JWTTokensError, type: 'LOGIN' | 'ERROR']> {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/token/obtain/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    const data = await response.json()

    if (response.status === 200) {
        const user = data as UserContextType
        return [user, 'LOGIN']
    } else {
        const error = data as JWTTokensError
        return [error, 'ERROR']
    }
}
