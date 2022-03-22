import { User } from "../types/api/register"

export async function getUserInfo(accessToken: string) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/info/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    const userData = await response.json()

    if (response.status === 200) {
        return userData as User
    } else {
        return undefined
    }
}
