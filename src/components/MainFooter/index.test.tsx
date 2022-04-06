import { render } from "@testing-library/react"
import { MainFooter } from "."

describe('MainFooter Component', () => {
    test('render main footer', () => {
        const { getByAltText, getAllByRole, getByText } = render(<MainFooter />)
        const socialImagesAltTexts = ['github logo', 'instagram logo', 'linkedin logo']

        socialImagesAltTexts.forEach(alt => {
            expect(getByAltText(alt)).toBeInTheDocument()
        })

        expect(getAllByRole('link').length).toBe(3)
        expect(getByText(`© 2022-${new Date().getFullYear()} Mateus Vieira`)).toBeInTheDocument()
    })
})
