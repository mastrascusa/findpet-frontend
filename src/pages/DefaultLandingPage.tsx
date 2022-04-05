import { Fragment } from "react"
import { AnimalsSlide } from "../components/AnimalsSlide"
import { MainFooter } from "../components/MainFooter"
import { MainHeader } from "../components/MainHeader"

import authorImg from '../assets/images/author-photo.jpg'

import { DefaultLandingPageProps } from "../types/pages/defaultladingpage"

export function DefaultLandingPage({ children, mainId }: DefaultLandingPageProps) {
    return (
        <Fragment>
            <MainHeader />
            <main id={mainId}>
                <h1 className="app-name">FindPet!</h1>
                <section className="general-container">
                    {children}
                    <AnimalsSlide />
                </section>
                <section className="about">
                    <h2 id="about">Sobre</h2>
                    <div>
                        <h3>Como o FindPet! funciona?</h3>
                        <p>Caso você tenha perdido seu pet poderá compartilhar as informações dele para que as outras pessoas possam te ajudar a encontra-lo. Se esse não for o seu caso, recomandemos que ajude os outros a encontrarem os pets para que todos na comunidade fiquem felizes.</p>
                    </div>
                    <div>
                        <h3>Quem é responsável pelo FindPet!?</h3>
                        <p>O aplicativo foi criado pelo desenvolvedor<br />Mateus Vieira.</p>
                        <img src={authorImg} alt="author profile" />
                    </div>
                </section>
            </main>
            <MainFooter />
        </Fragment>
    )
}