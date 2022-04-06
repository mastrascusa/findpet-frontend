import { LinkDivLine } from "../LinkDivLine";
import { RegisterForm } from "../RegisterForm";

import '../../assets/scss/pages/landingpage.scss'

export function RegisterContainer() {
    return (
        <section className="registration">
            <div className="register-container">
                <h2 id="register">Cadastre-se e encontre seu pet.</h2>
                <RegisterForm />
                <LinkDivLine link='/login'>Já possui uma conta?</LinkDivLine>
            </div>
        </section>
    )
}
