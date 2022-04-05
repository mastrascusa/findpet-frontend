import { Fragment, useEffect, useState } from "react"
import Select, { SingleValue } from 'react-select'
import MapPicker from 'react-google-map-picker'

import { DefaultSearchInput } from "../components/DefaultSearchInput"

import { MainFooter } from "../components/MainFooter"
import { MainHeader } from "../components/MainHeader"

import '../assets/scss/pages/homepage.scss'
import { DefaultButton } from "../components/DefaultButton"

interface SelectedType {
    value: string
    label: string
}

const classificationOptions: SelectedType[] = [
    { value: 'FH', label: 'Peixe' },
    { value: 'RP', label: 'Réptil' },
    { value: 'AP', label: 'Amfíbio' },
    { value: 'BD', label: 'Pássaro' },
    { value: 'MA', label: 'Mamífero' },
]

type LocationType = { lat: number, lng: number }
const defaultLocationBase: LocationType = { lat: -10, lng: -55 }

export function HomePage() {
    const [filterOpen, setFilterOpen] = useState(false)

    const [defaultLocation, setDefaultLocation] = useState(defaultLocationBase)
    const [searchLocation, setSearchLocation] = useState<LocationType>()
    const [mapZoom, setMapZoom] = useState(2)
    const [searchClassification, setSearchClassification] = useState<SelectedType>()

    const [isFirstRender, setIsFirstRender] = useState(true)

    function handleClassificationSelect(selectedClassification: SingleValue<SelectedType>) {
        const labelClassification = selectedClassification?.label
        const valueClassification = selectedClassification?.value

        setSearchClassification({
            label: labelClassification || '',
            value: valueClassification || ''
        })
    }

    async function handleShowResults() {
        console.log('Location:', searchLocation, 'Classification:', searchClassification)
        setFilterOpen(false)
    }

    useEffect(() => {
        function success(pos: any) {
            var coordinates = pos.coords;
            const latitude = coordinates.latitude
            const longitude = coordinates.longitude
            const coordinatesObject = { lat: latitude, lng: longitude }

            setSearchLocation(coordinatesObject)
            setDefaultLocation(coordinatesObject)
            setMapZoom(11)
            setIsFirstRender(false)
        }

        function error(err: any) {
            console.warn(`ERROR(${err.code}): ${err.message}`)
            setIsFirstRender(false)
        }

        if (isFirstRender) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }

            navigator.geolocation.getCurrentPosition(success, error, options)
        }
    })

    return (
        <Fragment>
            <MainHeader />
            <main id="home-page">
                <div className={`filter-options-container ${filterOpen ? 'open' : 'close'}`}>
                    <header>
                        <h1>Filtros de busca</h1>
                    </header>
                    <section className="selects-container">
                        <div className="select-classification">
                            <span>Classificação:</span>
                            <Select
                                placeholder='Classificação'
                                isClearable={true}
                                isSearchable={true}
                                options={classificationOptions}
                                value={searchClassification}
                                onChange={handleClassificationSelect}
                            />
                        </div>
                        <div className="select-localization">
                            <span>Localização:</span>
                            {!isFirstRender &&
                                <MapPicker defaultLocation={defaultLocation}
                                    zoom={mapZoom}
                                    style={{ height: '300px', width: '100%' }}
                                    onChangeLocation={(lat, lng) => setSearchLocation({ lat: lat, lng: lng })}
                                    onChangeZoom={(zoom) => setMapZoom(zoom)}
                                    apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''} />
                            }
                        </div>
                        <DefaultButton type="button" onClick={() => handleShowResults()}>
                            Mostrar resultados
                        </DefaultButton>
                    </section>
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
