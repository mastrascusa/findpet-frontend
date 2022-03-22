import { useEffect } from 'react';
import Swiper, { Autoplay, Pagination } from 'swiper';

import animal01Img from '../assets/images/animal01.png'
import animal02Img from '../assets/images/animal02.png'
import animal03Img from '../assets/images/animal03.png'
import animal04Img from '../assets/images/animal04.png'
import animal05Img from '../assets/images/animal05.png'
import instagramLogo from '../assets/images/instagram-logo.svg'

import '../assets/scss/components/animalsslide.scss'
import 'swiper/swiper.scss'
import 'swiper/modules/autoplay/autoplay.scss'
import 'swiper/modules/pagination/pagination.scss'

export function AnimalsSlide() {
    const slideAnimalImages = [animal01Img, animal02Img, animal03Img, animal04Img, animal05Img]

    useEffect(() => {
        new Swiper('.swiper', {
            modules: [Autoplay, Pagination],
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            slidesPerView: 1,
            spaceBetween: 150,
            preloadImages: true,
            centerInsufficientSlides: true,
            loop: true
        })
    }, [])

    return (
        <section className="animal-slide" data-testid='animal-slide'>
            <div className="swiper" data-testid='swiper'>
                <div className="swiper-wrapper" data-testid='swiper-wrapper'>
                    {slideAnimalImages.map((image, index) => {
                        return <div key={index} className="swiper-slide" style={{ width: '90vw' }}><img src={image} alt="animal" /></div>
                    })}
                </div>
                <div className="swiper-pagination" data-testid='swiper-pagination'></div>
            </div>
            <span id='bianca-photos'>
                <div data-testid='bianca-container-reference'>
                    <a href="https://www.instagram.com/biancass.photos/" target="_blank" rel="noreferrer">
                        <img src={instagramLogo} alt="instagram logo" />
                    </a>
                    Fotos da Bianca Peixoto
                </div>
            </span>
        </section>
    )
}
