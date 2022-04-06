import { render } from "@testing-library/react"
import { LinkDivLine } from "."
import { BrowserRouter } from "react-router-dom"

describe('LinkDivLine Component', () => {
    test('render link div line', () => {
        const { getByText } = render(<BrowserRouter><LinkDivLine link="/login">Hello,</LinkDivLine></BrowserRouter>)

        expect(getByText('Hello,')).toBeInTheDocument()
        expect(getByText('Clique aqui')).toHaveAttribute('href', '/login')
    })
})
