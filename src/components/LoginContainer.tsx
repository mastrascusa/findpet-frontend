import { LinkDivLine } from "./LinkDivLine";
import { LoginForm } from "./LoginForm";

export function LoginContainer() {
    return (
        <section className="login">
            <div className="login-container">
                <h2 id="login">Faça seu login.</h2>
                <LoginForm />
                <LinkDivLine link='/'>Não possui uma conta?</LinkDivLine>
            </div>
        </section>
    )
}