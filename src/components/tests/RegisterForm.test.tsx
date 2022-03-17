import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom"
import { RegisterForm } from "../RegisterForm"

describe('RegisterForm Component', () => {
    test('render register form', () => {
        const { getAllByRole, getByTestId } = render(<BrowserRouter><RegisterForm /></BrowserRouter>)

        getAllByRole('textbox').map(input => {
            expect(input).toBeInTheDocument()
        })
        expect(getByTestId('password')).toBeInTheDocument()
        expect(getByTestId('password_confirmation')).toBeInTheDocument()
    })

    test('submit button be disable when some informations are missing', () => {
        const { getByTestId, getByRole } = render(<BrowserRouter><RegisterForm /></BrowserRouter>)

        userEvent.type(getByTestId('username'), 'username')
        userEvent.type(getByTestId('password'), 'password')
        userEvent.type(getByTestId('password_confirmation'), 'password')

        expect(getByRole('button')).toHaveAttribute('disabled')
    })

    test('submit button be enable when all informations are filled', () => {
        const { getByTestId, getAllByRole, queryByRole } = render(<BrowserRouter><RegisterForm /></BrowserRouter>)
        const inputFields = ['username', 'first_name', 'last_name', 'email@example.com']

        getAllByRole('textbox').map((input, index) => {
            userEvent.type(input, inputFields[index])
        })
        userEvent.type(getByTestId('password'), 'password')
        userEvent.type(getByTestId('password_confirmation'), 'password')

        expect(queryByRole('button')).not.toHaveAttribute('disabled')
    })
})
