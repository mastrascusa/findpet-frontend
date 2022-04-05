import '../assets/scss/pages/loginpage.scss'

import { LoginContainer } from '../components/LoginContainer'
import { DefaultLandingPage } from './DefaultLandingPage'

export function LoginPage() {
    return (
        <DefaultLandingPage mainId="login-page">
            <LoginContainer />
        </DefaultLandingPage>
    )
}
