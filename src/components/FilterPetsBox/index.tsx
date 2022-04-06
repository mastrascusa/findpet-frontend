import { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select'
import MapPicker from 'react-google-map-picker'

import { DefaultButton } from '../DefaultButton'

import { classificationOptions, defaultLocationBase, LocationType, SelectedType } from '../../types/pages/homepage'
import { FilterPetsBoxProps } from '../../types/components/filterpetsbox'

import './styles.scss'

export function FilterPetsBox({ handleFilterOpen }: FilterPetsBoxProps) {
    const [defaultLocation, setDefaultLocation] = useState(defaultLocationBase)
    const [searchLocation, setSearchLocation] = useState<LocationType>()
    const [mapZoom, setMapZoom] = useState(2)
    const [searchClassification, setSearchClassification] = useState<SelectedType>()

    const [isFirstRender, setIsFirstRender] = useState(true)

    function handleClassificationSelect(selectedClassification: SingleValue<SelectedType>) {
        const labelClassification = selectedClassification?.label
        const valueClassification = selectedClassification?.value

        if (labelClassification && valueClassification) {
            setSearchClassification({
                label: labelClassification,
                value: valueClassification
            })
        } else {
            setSearchClassification(undefined)
        }
    }

    async function handleShowResults() {
        console.log('Location:', searchLocation, 'Classification:', searchClassification)
        handleFilterOpen(false)
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
                timeout: 500,
                maximumAge: 0
            }

            navigator.geolocation.getCurrentPosition(success, error, options)
        }
    })

    return (
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
                        apiKey={process.env.REACT_APP_GOOGLE_MAPS_TEST_API_KEY || ''} />
                }
            </div>
            <DefaultButton type="button" onClick={() => handleShowResults()}>
                Mostrar resultados
            </DefaultButton>
        </section>
    )
}
