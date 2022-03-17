import githubLogo from '../assets/images/github-logo.svg'
import instagramLogo from '../assets/images/instagram-logo.svg'
import linkedinLogo from '../assets/images/linkedin-logo.svg'

import '../assets/scss/components/mainfooter.scss'

export function MainFooter() {
    return (
        <footer>
            <section className="social-container">
                <a target="_blank" rel="noreferrer" href="https://github.com/MateusVrs"><img src={githubLogo} alt="github logo" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mateusvrs/"><img src={instagramLogo} alt="instagram logo" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mateusvrs/"><img src={linkedinLogo} alt="linkedin logo" /></a>
            </section>
            <span>&copy; 2022-{new Date().getFullYear()} Mateus Vieira</span>
        </footer>
    )
}