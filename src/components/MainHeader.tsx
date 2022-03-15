import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'

import '../assets/scss/components/mainheader.scss'

export function MainHeader() {
    const [optionsOpen, setOptionOpen] = useState(false)
    const location = useLocation()

    return (
        <header className='main-header'>
            <div className={`options-container ${optionsOpen ? 'open' : 'close'}`}>
                <div className="blur"></div>
                <div className="options">
                    <div className="links">
                        <a href={location.pathname === '/' ? '#register' : '#login'} onClick={() => setOptionOpen(!optionsOpen)}>{location.pathname === '/' ? 'Cadastro' : 'Login'}</a>
                        <a href="#about" onClick={() => setOptionOpen(!optionsOpen)}>Sobre</a>
                    </div>
                </div>
            </div>
            <img src={logoImg} alt="findpet! logo" />
            <button type="button" className={`menu-container ${optionsOpen ? 'open' : 'close'}`} onClick={() => setOptionOpen(!optionsOpen)}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </button>
        </header>
    )
}