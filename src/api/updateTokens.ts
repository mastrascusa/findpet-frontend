import { UpdateTokensResponseType } from "../types/api/updatetokens"

import { getCookie } from "./getCookie"

export async function updateTokens(): Promise<UpdateTokensResponseType> {
    const refreshJWTCookie = getCookie('refreshtoken')

    if (refreshJWTCookie) {
        var updateTokensResponse: UpdateTokensResponseType = [{error: "Something wrong happened and the tokens were not updated"}, 'ERROR'];

        await fetch(`${process.env.REACT_APP_API_URL}/users/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                'refresh': refreshJWTCookie
            })
        }).then(response => response.json()).then(tokenData => {
            updateTokensResponse = [tokenData, 'UPDATED']
        }).catch((error: Error) => {
            updateTokensResponse =  [{error: error.message}, 'ERROR'];
        })
       
        return updateTokensResponse
    } else {
        return [{error: "You don't have a valid refresh token"}, 'ERROR']
    }
}
