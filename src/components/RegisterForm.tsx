import { FormEvent, Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { DefaultButton } from "./DefaultButton"
import { DefaultInput } from "./DefaultInput"

import { signIn, User, UserError } from "../api/signIn"

import '../assets/scss/components/registerform.scss'

export interface RegisterFormType {
    username: string
    first_name: string
    last_name: string
    email: string
    password: string
    password_confirmation: string
}

const inputInfos: RegisterFormType = {
    username: 'Username',
    first_name: 'Nome',
    last_name: 'Sobrenome',
    email: 'Email',
    password: 'Senha',
    password_confirmation: 'Confirmar Senha'
}

const defaultRegisterForm: RegisterFormType = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
}

export function RegisterForm() {
    const navigate = useNavigate()
    const [registerForm, setRegisterForm] = useState(defaultRegisterForm as RegisterFormType)
    const [arePasswordsEqual, setArePasswordsEqual] = useState(true)
    const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(true)

    async function handleUserRegistration(event: FormEvent) {
        event.preventDefault()
        const [data, type] = await signIn(registerForm)

        if (type === 'SIGN_IN') {
            const user = data as User

            toast('Verifique seu email antes de continuar', {
                icon: '📩',
                style: {
                    backgroundColor: 'rgb(222, 219, 176)',
                }
            })
            navigate('/login')

            console.log(user)
        } else if (type === 'ERROR') {
            const error = data as UserError

            const wrongInputElements = document.querySelectorAll('.user-exists')
            wrongInputElements.forEach(wrongInputElement => {
                wrongInputElement.classList.remove('user-exists')
            })

            Object.keys(error).forEach(key => {
                const wrongInputElement = document.getElementById(key)
                wrongInputElement?.classList.add('user-exists')
            })
        }
    }

    useEffect(() => {
        function verifyRegisterFields() {
            var allInputsAreFilled = true
            Object.keys(registerForm).forEach(key => {
                if (registerForm[key as keyof RegisterFormType].trim() === '') {
                    allInputsAreFilled = false
                }
            })

            if (allInputsAreFilled) {
                if (registerForm.password === registerForm.password_confirmation) {
                    setArePasswordsEqual(true)
                    setIsSubmitButtonDisable(false)
                } else {
                    setArePasswordsEqual(false)
                    setIsSubmitButtonDisable(true)
                }
            } else {
                setArePasswordsEqual(true)
                setIsSubmitButtonDisable(true)
            }
        }
        verifyRegisterFields()

    }, [registerForm, setIsSubmitButtonDisable, setArePasswordsEqual])

    return (
        <Fragment>
            <form onSubmit={(event) => handleUserRegistration(event)}>
                {Object.keys(inputInfos).map(key => {
                    var inputType = 'text'
                    if (key === 'email') {
                        inputType = 'email'
                    } else if (['password', 'password_confirmation'].includes(key)) {
                        inputType = 'password'
                    }

                    return <div key={key} id={key}><DefaultInput name={key} data-testid={key} type={inputType} placeholder={inputInfos[key as keyof RegisterFormType]}
                        onChange={(event) => setRegisterForm({ ...registerForm, [event.target.name]: event.target.value })}
                        value={registerForm[key as keyof RegisterFormType]} /></div>
                })}
                <DefaultButton disabled={isSubmitButtonDisable} type='submit'>
                    {isSubmitButtonDisable ? arePasswordsEqual ? 'Complete todos os campos' : 'As senhas não coincidem' : 'Cadastrar'}
                </DefaultButton>
            </form>
        </Fragment>
    )
}
