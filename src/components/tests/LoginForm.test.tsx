import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom"
import { LoginForm } from "../LoginForm"

describe('LoginForm Component', () => {
    test('render login form', () => {
        const { getByTestId } = render(<BrowserRouter><LoginForm /></BrowserRouter>)

        expect(getByTestId('username')).toBeInTheDocument()
        expect(getByTestId('password')).toBeInTheDocument()
    })

    test('submit button be disable when some informations are missing', () => {
        const { getByTestId, getByRole } = render(<BrowserRouter><LoginForm /></BrowserRouter>)

        userEvent.type(getByTestId('username'), 'username')

        expect(getByRole('button')).toHaveAttribute('disabled')
    })

    test('submit button be enable when all informations are filled', () => {
        const { getByTestId, queryByRole } = render(<BrowserRouter><LoginForm /></BrowserRouter>)

        userEvent.type(getByTestId('username'), 'username')
        userEvent.type(getByTestId('password'), 'password')

        expect(queryByRole('button')).not.toHaveAttribute('disabled')
    })
})
