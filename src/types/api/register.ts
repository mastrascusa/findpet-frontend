export interface User {
    id: number
    username: string
    first_name: string
    last_name: string
    email: string
    is_active: boolean
}

export interface UserError {
    username?: string
    email?: string
}
