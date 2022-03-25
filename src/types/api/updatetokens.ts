export interface TokensType {
    access: string
    refresh: string
}

export interface RefreshTokenError {
    error: string
}

export type UpdateTokensResponseType = [data: TokensType | RefreshTokenError, type: 'UPDATED' | 'ERROR']