import { RefreshTokenError, TokensType } from "../types/api/updatetokens"

import { getCookie } from "./getCookie"

export async function updateTokens(): Promise<[data: TokensType | RefreshTokenError, type: 'UPDATED' | 'ERROR']> {
    const refreshJWTCookie = getCookie('refreshtoken')

    if (refreshJWTCookie) {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                'refresh': refreshJWTCookie
            })
        })
        const tokenData = await response.json()

        if (response.status === 200) {
            return [tokenData, 'UPDATED']
        } else {
            return [{error: "Something wrong happened and the tokens were not updated"}, 'ERROR']
        }
    } else {
        return [{error: "You don't have a valid refresh token"}, 'ERROR']
    }
}
