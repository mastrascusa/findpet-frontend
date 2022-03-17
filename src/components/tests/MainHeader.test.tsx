import { render } from "@testing-library/react"
import { MainHeader } from "../MainHeader"

describe('MainHeader Component', () => {
    test('render main header', () => {
        const { getByAltText, getByRole } = render(<MainHeader />)

        expect(getByAltText('findpet! logo')).toBeInTheDocument()
        expect(getByRole('button')).toBeInTheDocument()
        expect(getByRole('button').childElementCount).toBe(3)
    })
})