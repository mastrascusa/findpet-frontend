import { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'

import { useAuth } from '../../hooks/useAuth'

import './styles.scss'

export function MainHeader() {
    const { user } = useAuth()
    const [optionsOpen, setOptionOpen] = useState(false)
    const location = useLocation()

    return (
        <header className='main-header'>
            <div className={`options-container ${optionsOpen ? 'open' : 'close'}`}>
                <div className="blur"></div>
                <div className="options">
                    <div className="links">
                        {user ?
                            <Fragment>
                                <Link to='/home'>Pets Perdidos</Link>
                                <Link to='/publish'>Publicar Pet</Link>
                                <Link to='/pets'>Meus Pets</Link>
                                <Link to='/chats'>Conversas</Link>
                            </Fragment>
                            :
                            <Fragment>
                                <a href={location.pathname === '/' ? '#register' : '#login'} onClick={() => setOptionOpen(!optionsOpen)}>{location.pathname === '/' ? 'Cadastro' : 'Login'}</a>
                                <a href="#about" onClick={() => setOptionOpen(!optionsOpen)}>Sobre</a>
                            </Fragment>
                        }
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
