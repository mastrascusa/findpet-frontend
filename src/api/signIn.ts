import { User, UserError } from "../types/api/register"
import { RegisterFormType } from "../types/components/registerform"

export async function signIn(userInfo: RegisterFormType): Promise<[data: User | UserError, type: 'SIGN_IN' | 'ERROR']> {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    const data = await response.json()

    if (response.status === 201) {
        const user = data as User
        await fetch(`${process.env.REACT_APP_API_URL}/users/email/token/${user.email}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return [user, 'SIGN_IN']
    } else {
        const error = data as UserError
        return [error, 'ERROR']
    }
}
