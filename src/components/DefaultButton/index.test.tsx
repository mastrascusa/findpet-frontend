import { render } from "@testing-library/react"
import { DefaultButton } from "."

describe('DefaultButton Component', () => {
  test('render button', () => {
    const { getByRole } = render(<DefaultButton className="active" />)

    expect(getByRole('button')).toHaveAttribute('class', 'default-button active')
  })
})
