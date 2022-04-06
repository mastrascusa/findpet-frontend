import { render } from "@testing-library/react"
import React from "react"

import { FilterPetsBox } from "."

jest.spyOn(React, 'useEffect').mockImplementation((func) => func())

describe('FilterPetsBox Component', () => {
    test('render filter pets box', () => {
        const filterBoxComponent = render(<FilterPetsBox handleFilterOpen={function (value: boolean) { }} />)
        const { getByText, getByRole } = filterBoxComponent

        expect(getByText('Classificação:')).toBeInTheDocument()
        expect(getByText('Classificação')).toBeInTheDocument()
        expect(getByRole('combobox')).toBeInTheDocument()

        expect(getByText('Localização:')).toBeInTheDocument()

        expect(getByText('Mostrar resultados')).toBeInTheDocument()
    })
})
