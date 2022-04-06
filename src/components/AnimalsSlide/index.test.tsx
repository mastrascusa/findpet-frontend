import { render, within } from '@testing-library/react'
import { AnimalsSlide } from "."

describe('AnimalsSlide Component', () => {
    test('render animals slide', () => {
        const { getByTestId } = render(<AnimalsSlide />)
        const slidesNumber = 5
        const duplicateSlidesSwiperNumber = 2
        const totalSlidesNumber = slidesNumber + duplicateSlidesSwiperNumber

        expect(getByTestId('animal-slide')).toBeInTheDocument()
        expect(getByTestId('swiper')).toBeInTheDocument()
        expect(getByTestId('swiper-wrapper').children.length).toBe(totalSlidesNumber)
        expect(getByTestId('swiper-pagination')).toBeInTheDocument()

        const biancaContainerElement = getByTestId('bianca-container-reference')
        expect(biancaContainerElement).toBeInTheDocument()
        expect(within(biancaContainerElement).getByRole('link')).toBeInTheDocument()
        expect(biancaContainerElement).toHaveTextContent('Fotos da Bianca Peixoto')
    })
})
