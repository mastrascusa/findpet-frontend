import '../assets/scss/pages/landingpage.scss'

import { RegisterContainer } from '../components/RegisterContainer'
import { DefaultLandingPage } from './DefaultLandingPage'

export function LandingPage() {
    return (
        <DefaultLandingPage mainId="landing-page">
            <RegisterContainer />
        </DefaultLandingPage>
    )
}
