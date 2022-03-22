export interface TokensType {
    access: string
    refresh: string
}

export interface RefreshTokenError {
    error: "You don't have a valid refresh token" | "Something wrong happened and the tokens were not updated"
}
