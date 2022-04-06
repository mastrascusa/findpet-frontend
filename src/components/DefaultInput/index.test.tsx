import { render } from "@testing-library/react"
import { DefaultInput } from "."

describe('DefaultInput Component', () => {
    test('render default input', () => {
        const { getByRole } = render(<DefaultInput type='text' name='name' />)

        expect(getByRole('textbox')).toHaveAttribute('class', 'default-input')
        expect(getByRole('textbox')).toHaveAttribute('type', 'text')
        expect(getByRole('textbox')).toHaveAttribute('name', 'name')
    })
})
