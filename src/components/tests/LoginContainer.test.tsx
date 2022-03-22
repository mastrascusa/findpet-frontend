import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom"
import { LoginContainer } from "../LoginContainer"

describe('LoginContainer Component', () => {
    test('render login conatiner', () => {
        const { getByTestId, getByText, getByRole } = render(<BrowserRouter><LoginContainer /></BrowserRouter>)

        expect(getByText('Faça seu login.')).toBeInTheDocument()
        expect(getByTestId('username')).toBeInTheDocument()
        expect(getByTestId('password')).toBeInTheDocument()
        expect(getByText('Não possui uma conta?')).toBeInTheDocument()
        expect(getByRole('link')).toBeInTheDocument()
    })

    test('submit button be disable when some informations are missing', () => {
        const { getByTestId, getByRole } = render(<BrowserRouter><LoginContainer /></BrowserRouter>)

        userEvent.type(getByTestId('username'), 'username')

        expect(getByRole('button')).toHaveAttribute('disabled')
    })

    test('submit button be enable when all informations are filled', () => {
        const { getByTestId, queryByRole } = render(<BrowserRouter><LoginContainer /></BrowserRouter>)

        userEvent.type(getByTestId('username'), 'username')
        userEvent.type(getByTestId('password'), 'password')

        expect(queryByRole('button')).not.toHaveAttribute('disabled')
    })
})
