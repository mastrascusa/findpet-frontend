import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { MainHeader } from "."

describe('MainHeader Component', () => {
    test('render main header', () => {
        const { getByAltText, getByRole } = render(<BrowserRouter><MainHeader /></BrowserRouter>)

        expect(getByAltText('findpet! logo')).toBeInTheDocument()
        expect(getByRole('button')).toBeInTheDocument()
        expect(getByRole('button').childElementCount).toBe(3)
    })
})