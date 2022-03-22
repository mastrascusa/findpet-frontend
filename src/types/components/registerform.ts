export interface RegisterFormType {
    username: string
    first_name: string
    last_name: string
    email: string
    password: string
    password_confirmation: string
}

export const inputInfos: RegisterFormType = {
    username: 'Username',
    first_name: 'Nome',
    last_name: 'Sobrenome',
    email: 'Email',
    password: 'Senha',
    password_confirmation: 'Confirmar Senha'
}

export const defaultRegisterForm: RegisterFormType = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
}
