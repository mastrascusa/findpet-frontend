import { DefaultLandingPage } from "../DefaultLandingPage"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"

describe('DefaultLandingPage Component', () => {
    test('render default landing page', () => {
        const { getByText, getByAltText, getByTestId } = render(<BrowserRouter><DefaultLandingPage mainId='test-page'>Test text</DefaultLandingPage></BrowserRouter>)

        expect(getByText('FindPet!')).toBeInTheDocument()
        expect(getByText('Test text')).toBeInTheDocument()
        expect(getByTestId('animal-slide')).toBeInTheDocument()
        expect(getByText('Como o FindPet! funciona?')).toBeInTheDocument()
        expect(getByText('Quem é responsável pelo FindPet!?')).toBeInTheDocument()
        expect(getByAltText('author profile')).toBeInTheDocument()
    })
})
