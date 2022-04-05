import { FormEvent, Fragment, useEffect, useState } from "react"

import { DefaultButton } from "./DefaultButton"
import { DefaultInput } from "./DefaultInput"

import { logIn } from "../api/logIn"
import { setWasConnected } from "../functions/wasConnected"

import { defaultLoginForm, LoginFormType } from "../types/components/loginform"
import { UserContextType } from "../types/contexts/authcontext"

import '../assets/scss/components/userforms.scss'

import { useAuth } from "../hooks/useAuth"
import { useLoading } from "../hooks/useLoading"

export function LoginForm() {
    const [loginForm, setLoginForm] = useState(defaultLoginForm as LoginFormType)
    const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(true)
    const { setUser } = useAuth()
    const { setIsLoading } = useLoading()

    async function handleUserLogin(event: FormEvent) {
        event.preventDefault()
        const [data, type] = await logIn(loginForm)

        if (type === 'LOGIN') {
            const user = data as UserContextType
            const formElement = document.getElementById('login-form')
            formElement?.classList.remove('error')

            setUser(user)
            setWasConnected(true)
            setIsLoading(false)
        } else if (type === 'ERROR') {
            const formElement = document.getElementById('login-form')
            formElement?.classList.add('error')
        }
    }

    useEffect(() => {
        if (loginForm.username.trim() === '' || loginForm.password.trim() === '') {
            setIsSubmitButtonDisable(true)
        } else {
            setIsSubmitButtonDisable(false)
        }

    }, [loginForm, setIsSubmitButtonDisable])

    return (
        <Fragment>
            <form onSubmit={(event) => handleUserLogin(event)} id='login-form'>
                <div id='username'>
                    <DefaultInput name='username' data-testid='username' type='text' placeholder='Username'
                        onChange={(event) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })}
                        value={loginForm.username} />
                </div>
                <div id='password'>
                    <DefaultInput name='password' data-testid='password' type='password' placeholder='Senha'
                        onChange={(event) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })}
                        value={loginForm.password} />
                </div>
                <DefaultButton disabled={isSubmitButtonDisable} type='submit'>
                    {isSubmitButtonDisable ? 'Complete todos os campos' : 'Login'}
                </DefaultButton>
            </form>
        </Fragment>
    )
}
