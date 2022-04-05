import { fireEvent, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import { HomePage } from "../HomePage"

Object.defineProperty(navigator, 'geolocation', {
    value: {
        getCurrentPosition: jest.fn(),
    }
})

describe('HomePage Component', () => {
    test('render default home page', () => {
        const { getAllByRole } = render(<BrowserRouter><HomePage /></BrowserRouter>)
        
        const buttonElements = getAllByRole('button')
        const openFilterButtonElement = buttonElements[2]

        buttonElements.forEach(button => {
            expect(button).toBeInTheDocument()
        })

        expect(openFilterButtonElement).toHaveAttribute('class', 'filter-container close')
        fireEvent.click(openFilterButtonElement)
        expect(openFilterButtonElement).toHaveAttribute('class', 'filter-container open')
    })
})
