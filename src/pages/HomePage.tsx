import { Fragment, useState } from "react"

import { DefaultSearchInput } from "../components/DefaultSearchInput"
import { MainFooter } from "../components/MainFooter"
import { MainHeader } from "../components/MainHeader"

import '../assets/scss/pages/homepage.scss'
import { FilterPetsBox } from "../components/FilterPetsBox"

export function HomePage() {
    const [filterOpen, setFilterOpen] = useState(false)

    return (
        <Fragment>
            <MainHeader />
            <main id="home-page">
                <div className={`filter-options-container ${filterOpen ? 'open' : 'close'}`}>
                    <header>
                        <h1>Filtros de busca</h1>
                    </header>
                    <FilterPetsBox handleFilterOpen={setFilterOpen} />
                </div>
                <section className="search-container">
                    <DefaultSearchInput placeholder="Nome do pet" />
                    <button type="button" className={`filter-container ${filterOpen ? 'open' : 'close'}`} onClick={() => setFilterOpen(!filterOpen)}>
                        <div className="filter-line"></div>
                        <div className="filter-line"></div>
                        <div className="filter-line"></div>
                    </button>
                </section>
            </main>
            <MainFooter />
        </Fragment>
    )
}
