import { JWTTokensError } from "../types/api/login";
import { LoginFormType } from "../types/components/loginform";
import { UserContextType } from "../types/contexts/authcontext";

import { getUserInfo } from "./getUserInfo";

export async function logIn(userInfo: LoginFormType): Promise<[data: UserContextType | JWTTokensError | undefined, type: 'LOGIN' | 'ERROR']> {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/token/obtain/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userInfo)
    })
    const tokenData = await response.json()

    if (response.status === 200) {
        const user = await getUserInfo(tokenData.access)

        if (user) {
            const userResponse = {
                ...tokenData,
                user
            } as UserContextType
            return [userResponse, 'LOGIN']
        } else {
            return [user, 'ERROR']
        }
    } else {
        const error = tokenData as JWTTokensError
        return [error, 'ERROR']
    }
}
